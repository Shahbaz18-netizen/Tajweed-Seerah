import React, { useState, useRef } from 'react';
import { 
  Volume2, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Info,
  RotateCcw,
  Sparkles,
  Upload,
  Image as ImageIcon,
  X
} from 'lucide-react';
import type { LessonData, AppMode } from '../types';
import { playArabicAudio } from '../utils/audioHelper';
import { getLetterJoiningData } from '../utils/letterJoiningData';
import { SAMPLE_IMAGES } from '../data/initialData';
import confetti from 'canvas-confetti';

import { type LanguageOption } from '../utils/translations';
import { getTrilingualMakhrajText, UI_LESSON_LABELS } from '../utils/makhrajTranslations';

interface InteractiveLessonViewProps {
  lesson: LessonData;
  mode: AppMode;
  language?: LanguageOption;
  onChangeLanguage?: (lang: LanguageOption) => void;
  onSelectLesson: (lessonNumber: number) => void;
  onToggleComplete: (lessonId: string) => void;
  onUpdateLessonMakhrajImage?: (lessonId: string, newImageUrl: string) => void;
  totalLessons: number;
  allLessons?: LessonData[];
}

// Helper function to render Arabic word with ONLY the target letter colored (preserving continuous Arabic RTL cursive flow)
const renderColoredWord = (word: string, highlight?: string) => {
  if (!highlight || !word) {
    return <span dir="rtl">{word}</span>;
  }

  // Escape special regex characters
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match the highlight char plus any trailing combining Arabic diacritics (\u064B-\u065F, \u0670)
  const regex = new RegExp(`(${escaped}[\\u064B-\\u065F\\u0670]*)`, 'g');
  const parts = word.split(regex);

  return (
    <span dir="rtl" className="font-arabic inline" lang="ar">
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith(highlight)) {
          return (
            <span key={i} className="text-amber-500 font-black">
              {part}
            </span>
          );
        }
        return (
          <span key={i} className="text-slate-900">
            {part}
          </span>
        );
      })}
    </span>
  );
};

export const InteractiveLessonView: React.FC<InteractiveLessonViewProps> = ({
  lesson,
  mode,
  language = 'hinglish',
  onChangeLanguage,
  onSelectLesson,
  onToggleComplete,
  onUpdateLessonMakhrajImage,
  totalLessons,
  allLessons,
}) => {
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(language || 'hinglish');

  // Synchronize internal selected language state whenever the parent language prop changes
  React.useEffect(() => {
    if (language) {
      setSelectedLang(language);
    }
  }, [language]);

  const handleLangSwitch = (lang: LanguageOption) => {
    setSelectedLang(lang);
    if (onChangeLanguage) {
      onChangeLanguage(lang);
    }
  };

  const trilingualMakhraj = getTrilingualMakhrajText(lesson.lessonNumber, selectedLang);
  const activeDescription =
    selectedLang === 'english'
      ? lesson.englishDescription
      : selectedLang === 'urdu'
      ? lesson.urduDescription
      : lesson.hinglishDescription;

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'infographic' | 'game' | 'practice'>('infographic');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const prevLesson = allLessons?.find(l => l.lessonNumber === lesson.lessonNumber - 1);
  const nextLesson = allLessons?.find(l => l.lessonNumber === lesson.lessonNumber + 1);

  // Makhraj Image Upload Handlers
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl && onUpdateLessonMakhrajImage) {
          onUpdateLessonMakhrajImage(lesson.id, dataUrl);
          setIsImageModalOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrlInput.trim() && onUpdateLessonMakhrajImage) {
      onUpdateLessonMakhrajImage(lesson.id, imageUrlInput.trim());
      setIsImageModalOpen(false);
      setImageUrlInput('');
    }
  };

  const isCompleted = !!lesson.isCompleted;

  const handlePlayLetter = () => {
    playArabicAudio(lesson.arabicLetter);
  };

  const handlePlayWord = (word: string) => {
    playArabicAudio(word);
  };

  const handleMarkCompleteAndNext = () => {
    if (!isCompleted) {
      onToggleComplete(lesson.id);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
    if (lesson.lessonNumber < totalLessons) {
      onSelectLesson(lesson.lessonNumber + 1);
    }
  };

  return (
    <div className="space-y-6 pb-32 max-w-6xl mx-auto relative">
      {/* Top Bar with Navigation & Complete Button */}
      <div className="flex items-center justify-between bg-white p-4 sm:p-5 rounded-2xl border border-amber-900/10 shadow-xs">
        <button
          onClick={() => onSelectLesson(Math.max(1, lesson.lessonNumber - 1))}
          disabled={lesson.lessonNumber <= 1}
          className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          title={prevLesson ? `Previous: Letter ${prevLesson.name} (${prevLesson.arabicLetter})` : 'Previous Letter'}
        >
          <ChevronLeft className="w-4 h-4 text-amber-700" />
          <span className="hidden sm:inline">Prev Letter</span>
          {prevLesson && (
            <span className="text-amber-800 font-arabic font-extrabold text-sm ml-0.5">
              ({prevLesson.arabicLetter})
            </span>
          )}
        </button>

        <div className="text-center">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">
            Letter {String(lesson.lessonNumber).padStart(2, '0')} of {totalLessons}
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
            <span>{lesson.name}</span>
            <span className="font-arabic text-amber-700 font-black">({lesson.arabicLetter})</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleComplete(lesson.id)}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span className="hidden sm:inline">{isCompleted ? 'Completed' : 'Mark Complete'}</span>
          </button>

          <button
            onClick={() => onSelectLesson(Math.min(totalLessons, lesson.lessonNumber + 1))}
            disabled={lesson.lessonNumber >= totalLessons}
            className="px-3 py-2 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            title={nextLesson ? `Next: Letter ${nextLesson.name} (${nextLesson.arabicLetter})` : 'Next Letter'}
          >
            {nextLesson && (
              <span className="text-amber-300 font-arabic font-extrabold text-sm mr-0.5">
                ({nextLesson.arabicLetter})
              </span>
            )}
            <span className="hidden sm:inline">Next Letter</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>

      {/* VIEW SELECTOR TABS */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-amber-900/10 shadow-xs">
        <button
          onClick={() => setActiveTab('infographic')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'infographic'
              ? 'bg-burgundy-900 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-400" /> Lesson Infographic Layout
        </button>

        <button
          onClick={() => setActiveTab('game')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'game'
              ? 'bg-burgundy-900 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" /> ⚡ 3D Makhraj Flashcard Trainer
        </button>
      </div>

      {/* TAB 1: 1:1 INFOGRAPHIC LAYOUT (MATCHING SCREENSHOT EXACTLY) */}
      {activeTab === 'infographic' && (
        <div className="space-y-6">
          {/* SECTION 1: TOP 3-COLUMN HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* COLUMN 1: LETTER BANNER CARD (Red Header) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-rose-200 overflow-hidden shadow-xs flex flex-col justify-between">
              {/* Header Badge */}
              <div className="bg-[#6A1B29] text-white p-3 px-4 flex items-center justify-between">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-white/20">
                  Letter {lesson.lessonNumber}
                </span>
                <span className="text-2xl font-extrabold tracking-tight">
                  {lesson.name} <span className="font-arabic font-extrabold text-2xl text-amber-300">({lesson.arabicLetter})</span>
                </span>
              </div>

              {/* Big Arabic Letter Box */}
              <div className="p-6 text-center bg-slate-50 flex-1 flex flex-col items-center justify-center">
                <div 
                  onClick={handlePlayLetter}
                  className="font-arabic font-extrabold text-8xl text-slate-900 cursor-pointer hover:scale-105 transition-transform"
                >
                  {lesson.arabicLetter}
                </div>
              </div>

              {/* Pronunciation & Language Rows */}
              <div className="p-4 space-y-2.5 bg-white border-t border-slate-100 text-xs">
                <button
                  onClick={handlePlayLetter}
                  className="w-full py-2 px-3 rounded-xl bg-rose-100 text-rose-950 font-bold flex items-center justify-between hover:bg-rose-200 transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Pronunciation: <strong>{lesson.pronunciation}</strong></span>
                  </div>
                  <span className="text-[10px] bg-rose-200 text-rose-900 px-2 py-0.5 rounded font-black uppercase">Listen</span>
                </button>

                {/* Active Description Box */}
                <div className="p-3 bg-amber-50 rounded-2xl border-2 border-amber-300/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-black">
                    <span className="text-amber-900 uppercase tracking-wider flex items-center gap-1">
                      {selectedLang === 'english' && '🇬🇧 Active Language: English'}
                      {selectedLang === 'hinglish' && '💬 Active Language: Hinglish (Roman)'}
                      {selectedLang === 'urdu' && '🇵🇰 Active Language: Urdu'}
                    </span>
                  </div>
                  <p className={selectedLang === 'urdu' ? 'font-arabic font-extrabold text-emerald-950 text-base leading-relaxed text-right' : 'font-bold text-slate-900 text-xs leading-relaxed'}>
                    {selectedLang === 'english' && lesson.englishDescription}
                    {selectedLang === 'hinglish' && lesson.hinglishDescription}
                    {selectedLang === 'urdu' && lesson.urduDescription}
                  </p>
                </div>

                {/* Clickable Language Selector Cards */}
                <div className="grid grid-cols-1 gap-1.5 font-medium">
                  <button
                    onClick={() => handleLangSwitch('english')}
                    className={`flex items-center justify-between p-2 rounded-xl border transition-all text-left cursor-pointer ${
                      selectedLang === 'english'
                        ? 'bg-amber-100/80 border-amber-400 ring-2 ring-amber-400/40 text-slate-950 shadow-2xs font-extrabold'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5 shrink-0">
                      🇬🇧 English:
                    </span>
                    <span className="text-xs truncate ml-2">{lesson.englishDescription}</span>
                  </button>

                  <button
                    onClick={() => handleLangSwitch('hinglish')}
                    className={`flex items-center justify-between p-2 rounded-xl border transition-all text-left cursor-pointer ${
                      selectedLang === 'hinglish'
                        ? 'bg-sky-100/80 border-sky-400 ring-2 ring-sky-400/40 text-sky-950 shadow-2xs font-extrabold'
                        : 'bg-sky-50/50 border-sky-100 hover:bg-sky-100 text-sky-900'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5 shrink-0">
                      💬 Hinglish:
                    </span>
                    <span className="text-xs truncate ml-2">{lesson.hinglishDescription}</span>
                  </button>

                  <button
                    onClick={() => handleLangSwitch('urdu')}
                    className={`flex items-center justify-between p-2 rounded-xl border transition-all text-left cursor-pointer ${
                      selectedLang === 'urdu'
                        ? 'bg-emerald-100/80 border-emerald-400 ring-2 ring-emerald-400/40 text-emerald-950 shadow-2xs font-extrabold'
                        : 'bg-emerald-50/50 border-emerald-100 hover:bg-emerald-100 text-emerald-900'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5 shrink-0">
                      🇵🇰 Urdu:
                    </span>
                    <span className="font-arabic font-bold text-xs truncate ml-2" dir="rtl">{lesson.urduDescription}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* COLUMN 2: HOW TO SAY THE LETTER? A SIMPLE 2-STEP GUIDE */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-sky-200 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="bg-sky-900 text-white p-3 px-4">
                <h3 className={`text-sm font-extrabold tracking-tight ${selectedLang === 'urdu' ? 'font-arabic text-right text-base' : ''}`}>
                  {UI_LESSON_LABELS.howToSayTitle[selectedLang](lesson.pronunciation, lesson.arabicLetter)}
                </h3>
                <p className={`text-[11px] text-sky-200 font-medium ${selectedLang === 'urdu' ? 'font-arabic text-right' : ''}`}>
                  {UI_LESSON_LABELS.guideSubtitle[selectedLang]}
                </p>
              </div>

              <div className="p-4 grid grid-cols-2 gap-3 flex-1">
                {/* Step 1 Card */}
                <div className="space-y-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-start gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <p className={`text-[11px] text-slate-800 leading-tight font-bold ${selectedLang === 'urdu' ? 'font-arabic text-right text-xs' : ''}`}>
                      {trilingualMakhraj.step1}
                    </p>
                  </div>
                  <div className="w-full aspect-4/3 bg-white rounded-xl overflow-hidden border border-slate-200 p-1 flex items-center justify-center">
                    <img 
                      src={lesson.makhraj.step1IllustrationUrl || SAMPLE_IMAGES.step1Mouth} 
                      alt="Step 1 Mouth" 
                      className="max-h-full object-contain" 
                    />
                  </div>
                  <span className={`text-[10px] font-bold text-slate-700 text-center block leading-tight ${selectedLang === 'urdu' ? 'font-arabic' : ''}`}>
                    {trilingualMakhraj.step1Label}
                  </span>
                </div>

                {/* Step 2 Card */}
                <div className="space-y-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-start gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <p className={`text-[11px] text-slate-800 leading-tight font-bold ${selectedLang === 'urdu' ? 'font-arabic text-right text-xs' : ''}`}>
                      {trilingualMakhraj.step2}
                    </p>
                  </div>
                  <div className="w-full aspect-4/3 bg-white rounded-xl overflow-hidden border border-slate-200 p-1 flex items-center justify-center">
                    <img 
                      src={lesson.makhraj.step2IllustrationUrl || SAMPLE_IMAGES.step2Mouth} 
                      alt="Step 2 Mouth" 
                      className="max-h-full object-contain" 
                    />
                  </div>
                  <span className={`text-[10px] font-bold text-slate-700 text-center block leading-tight ${selectedLang === 'urdu' ? 'font-arabic' : ''}`}>
                    {trilingualMakhraj.step2Label}
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 3: MAKHRAJ CARD (Purple Header + Upload Button) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-purple-200 overflow-hidden shadow-xs flex flex-col justify-between">
              <div className="bg-purple-900 text-white p-3 px-4 flex items-center justify-between">
                <div>
                  <h3 className={`text-sm font-extrabold tracking-tight ${selectedLang === 'urdu' ? 'font-arabic' : ''}`}>
                    {UI_LESSON_LABELS.makhrajTitle[selectedLang]}
                  </h3>
                  <p className={`text-[11px] text-purple-200 font-medium ${selectedLang === 'urdu' ? 'font-arabic' : ''}`}>
                    {UI_LESSON_LABELS.makhrajSubtitle[selectedLang]}
                  </p>
                </div>
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="px-2.5 py-1 rounded-lg bg-amber-400 text-burgundy-950 font-bold text-[11px] flex items-center gap-1 hover:bg-amber-300 transition-colors shadow-xs"
                >
                  <Upload className="w-3 h-3" /> Upload Image
                </button>
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-purple-950 mb-1">
                    📍 {lesson.makhraj.name}
                  </div>
                  <p className={`text-xs text-slate-800 leading-relaxed font-bold ${selectedLang === 'urdu' ? 'font-arabic text-right text-sm' : ''}`}>
                    {trilingualMakhraj.simpleExplanation}
                  </p>
                </div>

                <div className="w-full aspect-16/9 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-2 relative">
                  <img 
                    src={lesson.makhraj.illustrationUrl} 
                    alt="Makhraj Side Diagram" 
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-bold">
                    {lesson.makhraj.zone}
                  </div>
                </div>

                <div className={`text-xs text-slate-800 bg-purple-50/90 p-2.5 rounded-xl border border-purple-200 leading-relaxed font-bold ${selectedLang === 'urdu' ? 'font-arabic text-right' : ''}`}>
                  💡 <strong>{UI_LESSON_LABELS.keyRuleTitle[selectedLang]}</strong> {trilingualMakhraj.keyRule}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: DIFFERENT FORMS OF LETTER (4 COLOR-CODED CARDS - RTL ORDER) */}
          <div className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-xs space-y-4">
            <div className="bg-gradient-to-r from-rose-950 via-burgundy-950 to-[#4A121D] text-white p-4 px-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
              <h3 className="text-base font-extrabold tracking-wide text-amber-50">
                Different Forms of {lesson.name} ({lesson.arabicLetter})
              </h3>
              <p className="text-xs sm:text-sm text-amber-200 font-semibold drop-shadow-xs">
                The shape of <span className="font-arabic font-extrabold text-sm text-amber-300">{lesson.arabicLetter}</span> changes depending on position, but the sound is always "{lesson.pronunciation}".
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center" dir="rtl">
              {/* 1. Beginning (Rightmost in Arabic) */}
              <button
                onClick={() => playArabicAudio(lesson.forms.beginning)}
                className="bg-rose-50/90 hover:bg-rose-100 p-5 rounded-2xl border-2 border-rose-300 transition-all space-y-3 group text-center shadow-xs hover:shadow-md"
              >
                <div className="bg-rose-200 text-rose-950 text-xs font-black py-1.5 px-3.5 rounded-xl border border-rose-300/80 text-center shadow-2xs">
                  Beginning (at start) • أول الكلمة
                </div>
                <div className="font-arabic font-black text-7xl text-slate-950 text-center py-3 leading-normal group-hover:scale-110 transition-transform select-none drop-shadow-xs">
                  {lesson.forms.beginning}
                </div>
                <div className="text-xs text-slate-700 text-center font-bold">
                  ({lesson.pronunciation}) • Connects to the next letter
                </div>
              </button>

              {/* 2. Middle */}
              <button
                onClick={() => playArabicAudio(lesson.forms.middle)}
                className="bg-sky-50/90 hover:bg-sky-100 p-5 rounded-2xl border-2 border-sky-300 transition-all space-y-3 group text-center shadow-xs hover:shadow-md"
              >
                <div className="bg-sky-200 text-sky-950 text-xs font-black py-1.5 px-3.5 rounded-xl border border-sky-300/80 text-center shadow-2xs">
                  Middle (in between) • وسط الكلمة
                </div>
                <div className="font-arabic font-black text-7xl text-slate-950 text-center py-3 leading-normal group-hover:scale-110 transition-transform select-none drop-shadow-xs">
                  {lesson.forms.middle}
                </div>
                <div className="text-xs text-slate-700 text-center font-bold">
                  ({lesson.pronunciation}) • Connects both sides
                </div>
              </button>

              {/* 3. End */}
              <button
                onClick={() => playArabicAudio(lesson.forms.ending)}
                className="bg-emerald-50/90 hover:bg-emerald-100 p-5 rounded-2xl border-2 border-emerald-300 transition-all space-y-3 group text-center shadow-xs hover:shadow-md"
              >
                <div className="bg-emerald-200 text-emerald-950 text-xs font-black py-1.5 px-3.5 rounded-xl border border-emerald-300/80 text-center shadow-2xs">
                  End (at the end) • آخر الكلمة
                </div>
                <div className="font-arabic font-black text-7xl text-slate-950 text-center py-3 leading-normal group-hover:scale-110 transition-transform select-none drop-shadow-xs">
                  {lesson.forms.ending}
                </div>
                <div className="text-xs text-slate-700 text-center font-bold">
                  ({lesson.pronunciation}) • Connects to previous letter
                </div>
              </button>

              {/* 4. Alone */}
              <button
                onClick={() => playArabicAudio(lesson.forms.isolated)}
                className="bg-amber-50/90 hover:bg-amber-100 p-5 rounded-2xl border-2 border-amber-300 transition-all space-y-3 group text-center shadow-xs hover:shadow-md"
              >
                <div className="bg-amber-200 text-amber-950 text-xs font-black py-1.5 px-3.5 rounded-xl border border-amber-300/80 text-center shadow-2xs">
                  Alone (isolated) • منفصل
                </div>
                <div className="font-arabic font-black text-7xl text-slate-950 text-center py-3 leading-normal group-hover:scale-110 transition-transform select-none drop-shadow-xs">
                  {lesson.forms.isolated}
                </div>
                <div className="text-xs text-slate-700 text-center font-bold">
                  ({lesson.pronunciation}) • Standing by itself
                </div>
              </button>
            </div>
          </div>

          {/* SECTION 3: EXAMPLES IN REAL WORDS — RTL ARABIC ORDER */}
          <div className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-xs space-y-4">
            <div className="bg-gradient-to-r from-rose-950 via-burgundy-950 to-[#4A121D] text-white p-4 px-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <h3 className="text-base font-extrabold tracking-wide flex items-center gap-2 text-amber-50">
                  <span>Examples of {lesson.name} ({lesson.arabicLetter}) in Real Words</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Beginner Friendly
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-amber-100 font-medium mt-1">
                  Target letter is <span className="text-amber-300 font-extrabold bg-black/40 border border-amber-400/40 px-2 py-0.5 rounded-md shadow-xs">colored in gold</span> within each word
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-200 bg-black/30 border border-amber-400/30 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                <Volume2 className="w-3.5 h-3.5 text-amber-300" /> Tap word to listen
              </div>
            </div>

            {/* Grid with dir="rtl" so cards follow Right-to-Left Arabic order */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5" dir="rtl">
              {lesson.vocabulary.map((vocab) => {
                const positionLabels = ['Beginning', 'Middle', 'End', 'Alone'];
                const positionColors = [
                  { bg: 'bg-rose-50 border-rose-200 hover:border-rose-400', badgeBg: 'bg-rose-100 text-rose-950 font-black', dot: 'bg-rose-500' },
                  { bg: 'bg-sky-50 border-sky-200 hover:border-sky-400', badgeBg: 'bg-sky-100 text-sky-950 font-black', dot: 'bg-sky-500' },
                  { bg: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400', badgeBg: 'bg-emerald-100 text-emerald-950 font-black', dot: 'bg-emerald-500' },
                  { bg: 'bg-amber-50 border-amber-200 hover:border-amber-400', badgeBg: 'bg-amber-100 text-amber-950 font-black', dot: 'bg-amber-500' },
                ];
                const posIdx = (vocab.position - 1) % 4;
                const col = positionColors[posIdx];
                const posLabel = positionLabels[posIdx];
                const formChar = posIdx === 0 ? lesson.forms.beginning : posIdx === 1 ? lesson.forms.middle : posIdx === 2 ? lesson.forms.ending : lesson.forms.isolated;

                return (
                  <button
                    key={vocab.id}
                    onClick={() => handlePlayWord(vocab.arabicWord)}
                    className={`bg-white hover:bg-amber-50/40 border-2 ${col.bg} rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-3 transition-all group shadow-xs hover:shadow-md active:scale-95 text-center`}
                  >
                    {/* Position Form Badge */}
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs ${col.badgeBg}`}>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${col.dot}`} />
                      <span>{posLabel} Form:</span>
                      <span className="font-arabic font-black text-base">{formChar}</span>
                    </div>

                    {/* Continuous Arabic Word with colored target letter */}
                    <div dir="rtl" className="font-arabic font-black text-6xl sm:text-7xl text-slate-950 py-3 group-hover:scale-105 transition-transform leading-relaxed select-none">
                      {renderColoredWord(vocab.arabicWord, vocab.highlightChar || lesson.arabicLetter)}
                    </div>

                    {/* Transliteration & Meaning */}
                    <div className="space-y-0.5">
                      <div className="text-base font-black text-slate-900">{vocab.transliteration}</div>
                      <div className="text-xs font-bold text-slate-600">{vocab.meaning}</div>
                    </div>

                    {/* Listen Audio Hint */}
                    <div className="flex items-center gap-1 text-xs text-amber-900 font-extrabold bg-amber-100 border border-amber-300 hover:bg-amber-200 px-3 py-1 rounded-lg mt-auto transition-colors shadow-2xs">
                      <Volume2 className="w-3.5 h-3.5 text-amber-700" /> Listen
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: LETTER JOINING & COMBINATIONS (BEGINNING, MIDDLE, END) */}
          {(() => {
            const joiningSections = getLetterJoiningData(
              lesson.lessonNumber,
              lesson.arabicLetter,
              lesson.name,
              lesson.pronunciation
            );

            return (
              <div className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-xs space-y-6">
                {/* Header with Title & Explanation */}
                <div className="bg-gradient-to-r from-amber-950 to-[#581c87] text-white p-4 px-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div>
                    <h3 className="text-base font-extrabold tracking-wide flex items-center gap-2">
                      <span>{lesson.name} ({lesson.arabicLetter}) Joining & Word Building</span>
                      <span className="text-[10px] bg-amber-400/20 text-amber-200 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Phonics Guide
                      </span>
                    </h3>
                    <p className="text-xs text-amber-100/80 font-medium mt-0.5">
                      Learn how <span className="text-amber-300 font-bold">{lesson.name} ({lesson.arabicLetter})</span> combines with other letters in Beginning, Middle, and End positions.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-200 bg-white/10 px-3 py-1.5 rounded-xl self-start sm:self-auto font-medium">
                    <Volume2 className="w-3.5 h-3.5 text-amber-300" /> Tap any item to listen
                  </div>
                </div>

                {/* Position Sections */}
                <div className="space-y-6">
                  {joiningSections.map((sec) => {
                    const badgeStyles =
                      sec.position === 'beginning'
                        ? { badge: 'bg-rose-100 text-rose-900 border-rose-200', dot: 'bg-rose-500' }
                        : sec.position === 'middle'
                        ? { badge: 'bg-sky-100 text-sky-900 border-sky-200', dot: 'bg-sky-500' }
                        : { badge: 'bg-emerald-100 text-emerald-900 border-emerald-200', dot: 'bg-emerald-500' };

                    return (
                      <div key={sec.position} className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-4">
                        {/* Section Sub-header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-black border flex items-center gap-1.5 ${badgeStyles.badge}`}>
                              <span className={`w-2 h-2 rounded-full ${badgeStyles.dot}`} />
                              {sec.title} • {sec.arabicTitle}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 font-medium italic">
                            💡 {sec.ruleExplanation}
                          </p>
                        </div>

                        {/* Standard Joining Items Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {sec.items.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => playArabicAudio(item.joined)}
                              className="bg-white hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 rounded-xl p-3 flex items-center justify-between gap-3 transition-all group shadow-2xs hover:shadow-xs active:scale-98 text-left"
                            >
                              {/* Left: Formula */}
                              <div className="flex items-center gap-2" dir="rtl">
                                <span className="font-arabic font-bold text-lg text-slate-500 group-hover:text-slate-700">
                                  {item.formula}
                                </span>
                                <span className="text-amber-500 font-bold text-base">=</span>
                                {/* Joined Word with colored letter */}
                                <span className="font-arabic font-black text-2xl text-slate-900 leading-none group-hover:scale-105 transition-transform">
                                  {renderColoredWord(item.joined, lesson.arabicLetter)}
                                </span>
                              </div>

                              {/* Right: Sound & Audio Icon */}
                              <div className="text-right shrink-0">
                                <div className="text-xs font-bold text-slate-700">{item.sound}</div>
                                <div className="flex items-center justify-end gap-1 text-[10px] text-amber-600 font-medium mt-0.5">
                                  <Volume2 className="w-3 h-3" /> Listen
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Non-connecting letters sub-section (e.g. د ذ ر ز و for Alif) */}
                        {sec.nonConnectingItems && sec.nonConnectingItems.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-dashed border-amber-200 space-y-3 bg-amber-50/50 p-4 rounded-xl">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-md">
                                Non-Connecting Letters (د ذ ر ز و)
                              </span>
                              <span className="text-xs text-amber-800 font-medium">
                                These letters do not join forward to {lesson.name}:
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {sec.nonConnectingItems.map((item, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => playArabicAudio(item.joined)}
                                  className="bg-white hover:bg-amber-100/60 border border-amber-200 hover:border-amber-400 rounded-xl p-3 flex items-center justify-between gap-3 transition-all group shadow-2xs hover:shadow-xs active:scale-98 text-left"
                                >
                                  {/* Formula */}
                                  <div className="flex items-center gap-2" dir="rtl">
                                    <span className="font-arabic font-bold text-lg text-amber-950">
                                      {item.formula}
                                    </span>
                                    <span className="text-amber-600 font-bold text-base">=</span>
                                    <span className="font-arabic font-black text-2xl text-slate-900 leading-none group-hover:scale-105 transition-transform">
                                      {renderColoredWord(item.joined, lesson.arabicLetter)}
                                    </span>
                                  </div>

                                  {/* Sound */}
                                  <div className="text-right shrink-0">
                                    <div className="text-xs font-bold text-slate-700">{item.sound}</div>
                                    <div className="flex items-center justify-end gap-1 text-[10px] text-amber-700 font-medium mt-0.5">
                                      <Volume2 className="w-3 h-3" /> Listen
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 2: 3D MAKHRAJ FLASHCARD TRAINER */}
      {activeTab === 'game' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold mb-1 border border-amber-300">
                <Sparkles className="w-4 h-4 text-amber-600" /> ⚡ 3D Makhraj Flashcard Trainer
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Letter {lesson.name} ({lesson.arabicLetter}) Flashcard
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Click or tap the card to flip between <strong className="text-amber-900">Letter Articulation</strong> and <strong className="text-emerald-900">Makhraj Anatomy Rules</strong>!
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectLesson(Math.max(1, lesson.lessonNumber - 1))}
                disabled={lesson.lessonNumber <= 1}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs transition-all flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <button
                onClick={() => onSelectLesson(Math.min(totalLessons, lesson.lessonNumber + 1))}
                disabled={lesson.lessonNumber >= totalLessons}
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs transition-all flex items-center gap-1 cursor-pointer shadow-xs"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3D FLIP CONTAINER */}
          <div className="perspective-1000 w-full max-w-xl mx-auto min-h-[440px] cursor-pointer" onClick={() => setIsCardFlipped(!isCardFlipped)}>
            <div className={`relative w-full min-h-[440px] transform-style-3d transition-transform duration-700 rounded-3xl ${isCardFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* CARD FRONT FACE */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-rose-950 via-burgundy-950 to-[#4A121D] text-white rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl border-4 border-amber-400/40 select-none">
                <div className="w-full flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-amber-400/30">
                    Letter {lesson.lessonNumber} of {totalLessons}
                  </span>
                  <span className="text-xs font-bold text-amber-200/90 flex items-center gap-1 bg-amber-400/20 px-2.5 py-1 rounded-lg">
                    📍 {lesson.makhraj.zone}
                  </span>
                </div>

                {/* Big Arabic Letter */}
                <div className="my-auto text-center py-4 space-y-2">
                  <div className="font-arabic font-black text-9xl text-amber-300 text-center drop-shadow-md hover:scale-105 transition-transform">
                    {lesson.arabicLetter}
                  </div>
                  <h4 className="text-2xl font-black text-white tracking-wide">
                    {lesson.name} <span className="text-amber-200 text-base font-bold">({lesson.pronunciation})</span>
                  </h4>
                </div>

                <div className="w-full space-y-3">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                    <p className={selectedLang === 'urdu' ? 'font-arabic font-bold text-amber-200 text-base' : 'font-bold text-amber-100 text-xs'}>
                      {activeDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs font-black text-amber-300 animate-pulse">
                    <RotateCcw className="w-4 h-4" /> Tap card to flip for Makhraj Anatomy & Rules 🔄
                  </div>
                </div>
              </div>

              {/* CARD BACK FACE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-950 via-slate-950 to-purple-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-4 border-emerald-400/40 select-none overflow-y-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h4 className="text-sm font-black text-emerald-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" /> Makhraj Anatomy & Rules ({lesson.arabicLetter})
                  </h4>
                  <span className="text-xs font-bold text-emerald-200 bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    📍 {lesson.makhraj.name}
                  </span>
                </div>

                <div className="space-y-3 my-auto py-2">
                  {/* Explanation */}
                  <p className={`text-xs text-emerald-100 leading-relaxed font-bold bg-white/10 p-3 rounded-xl border border-white/10 ${selectedLang === 'urdu' ? 'font-arabic text-right text-sm' : ''}`}>
                    {trilingualMakhraj.simpleExplanation}
                  </p>

                  {/* 2 Steps */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="bg-rose-950/60 border border-rose-400/30 p-2.5 rounded-xl space-y-1">
                      <span className="text-[10px] font-black uppercase text-rose-300 block">Step 1</span>
                      <p className={`font-bold text-rose-100 leading-tight ${selectedLang === 'urdu' ? 'font-arabic text-right' : ''}`}>
                        {trilingualMakhraj.step1}
                      </p>
                    </div>

                    <div className="bg-sky-950/60 border border-sky-400/30 p-2.5 rounded-xl space-y-1">
                      <span className="text-[10px] font-black uppercase text-sky-300 block">Step 2</span>
                      <p className={`font-bold text-sky-100 leading-tight ${selectedLang === 'urdu' ? 'font-arabic text-right' : ''}`}>
                        {trilingualMakhraj.step2}
                      </p>
                    </div>
                  </div>

                  {/* Key Rule */}
                  <div className={`p-2.5 bg-amber-400/20 border border-amber-400/30 rounded-xl text-xs text-amber-200 font-bold ${selectedLang === 'urdu' ? 'font-arabic text-right' : ''}`}>
                    💡 <strong>{UI_LESSON_LABELS.keyRuleTitle[selectedLang]}</strong> {trilingualMakhraj.keyRule}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playArabicAudio(lesson.forms.isolated);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-black flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Volume2 className="w-4 h-4" /> Listen Audio
                  </button>

                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-300 animate-pulse">
                    <RotateCcw className="w-4 h-4" /> Tap to flip back 🔄
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SELF ASSESSMENT PRACTICE CONTROLS */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-xs font-black text-slate-800">Flashcard Mastery Rating</p>
              <p className="text-[11px] text-slate-500">Rate your recitation confidence for Letter {lesson.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCardFlipped(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
              >
                🔄 Needs Practice
              </button>
              <button
                onClick={() => {
                  onToggleComplete(lesson.id);
                  confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" /> Mastered (Got It! 🌟)
              </button>
            </div>
          </div>

        </div>
      )}

      {/* TEACHER INSIGHTS PANEL (Appears when mode === 'teacher') */}
      {mode === 'teacher' && (
        <div className="bg-gradient-to-r from-amber-900 via-burgundy-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-4 border-2 border-amber-400">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-400 text-burgundy-950">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-amber-100">Teacher Insights & Pedagogy Tips</h3>
                <p className="text-xs text-amber-200/70">Instructor Reference Overlay for Letter {lesson.name}</p>
              </div>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
              👨‍🏫 Teacher Mode Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="font-bold text-rose-300 block text-xs">⚠️ Common Student Mistakes:</span>
              <ul className="space-y-1.5 text-amber-100/90 list-disc list-inside leading-relaxed">
                {lesson.teacherNotes.commonMistakes.map((mistake, idx) => (
                  <li key={idx}>{mistake}</li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="font-bold text-amber-300 block text-xs">📜 Tajweed Attributes (Sifaat):</span>
              <ul className="space-y-1.5 text-amber-100/90 list-disc list-inside leading-relaxed">
                {lesson.teacherNotes.tajweedAttributes.map((attr, idx) => (
                  <li key={idx}>{attr}</li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="font-bold text-emerald-300 block text-xs">💡 Teaching Tip:</span>
              <p className="text-amber-100/90 leading-relaxed">
                {lesson.teacherNotes.pedagogyTip}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MAKHRAJ IMAGE UPLOAD / SELECTOR MODAL */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-5 border border-amber-900/10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-purple-700" />
                Upload Makhraj & Articulation Image
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Upload a custom diagram for Letter {lesson.name} ({lesson.arabicLetter}) or paste an image URL.
              </p>
            </div>

            {/* Method 1: File Upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Option 1: Upload File from Computer</label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 border-2 border-dashed border-purple-300 hover:border-purple-500 bg-purple-50/50 hover:bg-purple-100/50 rounded-2xl text-purple-900 font-bold text-xs flex flex-col items-center justify-center gap-1 transition-all"
              >
                <Upload className="w-6 h-6 text-purple-700" />
                <span>Choose Image File (PNG, JPG, SVG)</span>
              </button>
            </div>

            {/* Method 2: Image URL Input */}
            <form onSubmit={handleUrlSubmit} className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700 block">Option 2: Paste Image Web URL</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/makhraj-diagram.jpg"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  disabled={!imageUrlInput.trim()}
                  className="px-4 py-2 rounded-xl bg-purple-900 hover:bg-purple-950 disabled:opacity-40 text-white font-bold text-xs transition-colors"
                >
                  Save URL
                </button>
              </div>
            </form>

            {/* Method 3: Pick Preset Diagram */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700 block">Option 3: Select Built-in Preset</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => {
                    if (onUpdateLessonMakhrajImage) {
                      onUpdateLessonMakhrajImage(lesson.id, SAMPLE_IMAGES.makhrajTaaSide);
                      setIsImageModalOpen(false);
                    }
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 hover:border-purple-400 bg-slate-50 text-left font-semibold text-slate-800 transition-all flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-amber-500" /> Tongue Tip Side View
                </button>
                <button
                  onClick={() => {
                    if (onUpdateLessonMakhrajImage) {
                      onUpdateLessonMakhrajImage(lesson.id, SAMPLE_IMAGES.makhrajDefault);
                      setIsImageModalOpen(false);
                    }
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 hover:border-purple-400 bg-slate-50 text-left font-semibold text-slate-800 transition-all flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full bg-purple-500" /> General Throat & Mouth
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STICKY BOTTOM LETTER NAVIGATION FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-900/15 shadow-2xl p-3 sm:p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Previous Letter Button */}
          <button
            onClick={() => onSelectLesson(Math.max(1, lesson.lessonNumber - 1))}
            disabled={lesson.lessonNumber <= 1}
            className="flex-1 max-w-[200px] p-2 sm:p-2.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-slate-800 font-bold text-xs flex items-center justify-start gap-2 transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-200 group-hover:bg-amber-500 group-hover:text-burgundy-950 flex items-center justify-center shrink-0 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div className="text-left hidden sm:block truncate">
              <span className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider block">
                {prevLesson ? `Letter ${prevLesson.lessonNumber}` : 'Start'}
              </span>
              <span className="font-bold text-slate-900 text-xs truncate block">
                {prevLesson ? `${prevLesson.name} (${prevLesson.arabicLetter})` : 'First Letter'}
              </span>
            </div>
          </button>

          {/* Central Main Action: Mark Complete & Next Letter */}
          <button
            onClick={handleMarkCompleteAndNext}
            className="flex-1 max-w-sm py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse hidden sm:inline" />
            <span>
              {lesson.lessonNumber >= totalLessons
                ? isCompleted
                  ? 'Completed All 28 Letters 🎉'
                  : 'Mark Final Letter Complete 🎉'
                : isCompleted
                ? 'Next Letter ➔'
                : 'Mark Complete & Next Letter ➔'}
            </span>
          </button>

          {/* Next Letter Button */}
          <button
            onClick={() => onSelectLesson(Math.min(totalLessons, lesson.lessonNumber + 1))}
            disabled={lesson.lessonNumber >= totalLessons}
            className="flex-1 max-w-[200px] p-2 sm:p-2.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-slate-800 font-bold text-xs flex items-center justify-end gap-2 transition-all cursor-pointer group"
          >
            <div className="text-right hidden sm:block truncate">
              <span className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider block">
                {nextLesson ? `Letter ${nextLesson.lessonNumber}` : 'End'}
              </span>
              <span className="font-bold text-slate-900 text-xs truncate block">
                {nextLesson ? `${nextLesson.name} (${nextLesson.arabicLetter})` : 'Completed'}
              </span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-burgundy-900 text-amber-400 group-hover:bg-burgundy-950 flex items-center justify-center shrink-0 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
