import React, { useState } from 'react';
import type { LessonData, BookSettings, TemplatePreset } from '../types';
import { ShieldCheck, Volume2, Sparkles, Award, RotateCcw, CheckCircle2 } from 'lucide-react';
import { playArabicAudio } from '../utils/audioHelper';
import confetti from 'canvas-confetti';

interface MasterTemplatePageProps {
  lesson: LessonData;
  bookSettings: BookSettings;
  pageNumber?: 1 | 2;
  overridePreset?: TemplatePreset;
}

export const MasterTemplatePage: React.FC<MasterTemplatePageProps> = ({
  lesson,
  bookSettings,
  pageNumber = 1,
  overridePreset,
}) => {
  const currentPreset: TemplatePreset = overridePreset || bookSettings.templatePreset || 'kids';

  // Gamified "Find The Letter" Game State
  const targetChar = lesson.arabicLetter; // e.g. 'ت'
  
  // Generate letter grid items for the game
  const initialGameGrid = [
    { id: 1, char: targetChar, isTarget: true, tapped: false },
    { id: 2, char: 'ب', isTarget: false, tapped: false },
    { id: 3, char: targetChar, isTarget: true, tapped: false },
    { id: 4, char: 'ث', isTarget: false, tapped: false },
    { id: 5, char: 'ن', isTarget: false, tapped: false },
    { id: 6, char: targetChar, isTarget: true, tapped: false },
    { id: 7, char: 'ي', isTarget: false, tapped: false },
    { id: 8, char: targetChar, isTarget: true, tapped: false },
  ];

  const [gameGrid, setGameGrid] = useState(initialGameGrid);
  const [score, setScore] = useState(0);
  const totalTargets = initialGameGrid.filter(item => item.isTarget).length;

  const handleTapGridLetter = (index: number) => {
    const item = gameGrid[index];
    if (item.tapped) return;

    const newGrid = [...gameGrid];
    newGrid[index] = { ...item, tapped: true };
    setGameGrid(newGrid);

    if (item.isTarget) {
      const newScore = score + 1;
      setScore(newScore);
      playArabicAudio(item.char);

      if (newScore === totalTargets) {
        // Trigger celebratory confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 }
          });
        } catch {
          console.log('Confetti triggered');
        }
      }
    }
  };

  const handleResetGame = () => {
    setGameGrid(initialGameGrid);
    setScore(0);
  };

  /* =================================================================== */
  /* PRESET 3: FLASHCARD PRINTABLE EDITION (4 Cards per A4 Page)        */
  /* =================================================================== */
  if (currentPreset === 'flashcard') {
    return (
      <div className="a4-page rounded-xl bg-white p-6 text-slate-800 shadow-2xl relative font-sans space-y-6">
        <div className="border-b border-amber-900/20 pb-3 flex items-center justify-between no-print">
          <div className="text-xs font-extrabold text-amber-900 uppercase tracking-widest">
            Flashcard Edition • 4 Index Cards per Sheet
          </div>
          <span className="text-xs font-bold text-slate-500">Lesson {lesson.lessonNumber}: {lesson.name}</span>
        </div>

        {/* 4 Index Cards Grid */}
        <div className="grid grid-cols-2 gap-5 h-full">
          {/* Card 1: Master Letter & Audio */}
          <div className="border-2 border-dashed border-amber-300 rounded-2xl p-5 bg-amber-50/40 flex flex-col justify-between items-center text-center relative group">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
              Card 1: Master Letter
            </span>
            <div 
              dir="rtl" 
              className="font-arabic font-bold text-7xl text-burgundy-950 my-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => playArabicAudio(lesson.arabicLetter)}
            >
              {lesson.arabicLetter}
            </div>
            <div>
              <div className="text-base font-extrabold text-slate-900">{lesson.name}</div>
              <div className="text-xs text-amber-900 font-medium italic">/ {lesson.pronunciation} /</div>
            </div>
          </div>

          {/* Card 2: 4 Connecting Forms */}
          <div className="border-2 border-dashed border-amber-300 rounded-2xl p-5 bg-white flex flex-col justify-between text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded self-center">
              Card 2: Letter Forms
            </span>
            <div className="grid grid-cols-2 gap-2 my-2 text-center">
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[9px] text-slate-400 block font-bold">ALONE</span>
                <span dir="rtl" className="font-arabic font-bold text-2xl text-burgundy-900">{lesson.forms.isolated}</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[9px] text-slate-400 block font-bold">BEGINNING</span>
                <span dir="rtl" className="font-arabic font-bold text-2xl text-burgundy-900">{lesson.forms.beginning}</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[9px] text-slate-400 block font-bold">MIDDLE</span>
                <span dir="rtl" className="font-arabic font-bold text-2xl text-burgundy-900">{lesson.forms.middle}</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[9px] text-slate-400 block font-bold">END</span>
                <span dir="rtl" className="font-arabic font-bold text-2xl text-burgundy-900">{lesson.forms.ending}</span>
              </div>
            </div>
            <span className="text-[10px] text-slate-400">Cut along dashed line</span>
          </div>

          {/* Card 3: Makhraj Articulation */}
          <div className="border-2 border-dashed border-amber-300 rounded-2xl p-5 bg-white flex flex-col justify-between text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded self-center">
              Card 3: Makhraj Point
            </span>
            <div className="my-2 space-y-1">
              <div className="text-xs font-bold text-amber-950">{lesson.makhraj.name}</div>
              <p className="text-[11px] text-slate-600 leading-tight">{lesson.makhraj.simpleExplanation}</p>
            </div>
            <div className="w-full h-20 bg-slate-50 rounded-lg p-1 flex items-center justify-center">
              <img src={lesson.makhraj.illustrationUrl} alt="Makhraj" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          {/* Card 4: Primary Vocabulary */}
          <div className="border-2 border-dashed border-amber-300 rounded-2xl p-5 bg-amber-50/40 flex flex-col justify-between items-center text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
              Card 4: Key Vocabulary
            </span>
            {lesson.vocabulary[0] && (
              <div className="my-2 space-y-1 cursor-pointer" onClick={() => playArabicAudio(lesson.vocabulary[0].arabicWord)}>
                <div dir="rtl" className="font-arabic font-bold text-4xl text-burgundy-900">
                  {lesson.vocabulary[0].arabicWord}
                </div>
                <div className="text-xs font-bold text-amber-950">{lesson.vocabulary[0].transliteration} ({lesson.vocabulary[0].meaning})</div>
              </div>
            )}
            <span className="text-[10px] text-slate-400">Qur'an Literacy Publications</span>
          </div>
        </div>
      </div>
    );
  }

  /* =================================================================== */
  /* STANDARD OR ADULT TAJWEED MASTERY TEMPLATES                        */
  /* =================================================================== */
  const isAdultPreset = currentPreset === 'adult';

  return (
    <div className="space-y-6">
      {/* Page Selector Tabs for Preview */}
      <div className="flex items-center justify-center gap-2 no-print">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">Workbook Page:</span>
        <div className="inline-flex rounded-xl bg-slate-200/80 p-1">
          <div className="px-3 py-1 rounded-lg text-xs font-bold text-burgundy-900 bg-white shadow-xs">
            Page {pageNumber}: {pageNumber === 1 ? 'Pronunciation & Makhraj' : 'Forms & Real Words'}
          </div>
        </div>
      </div>

      {/* A4 Page Container */}
      <div className={`a4-page rounded-xl shadow-2xl relative font-sans ${isAdultPreset ? 'bg-[#FCFBF8] text-slate-900 border-2 border-amber-900/20' : 'bg-white text-slate-800'}`}>
        
        {/* Header Ribbon */}
        <div className="border-b-2 border-amber-950/20 pb-4 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-md border ${isAdultPreset ? 'bg-[#4A121D] text-amber-300 border-amber-500/40' : 'bg-[#6A1B29] text-amber-300 border-amber-400/30'}`}>
              {String(lesson.lessonNumber).padStart(2, '0')}
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-900 flex items-center gap-2">
                <span>{bookSettings.title}</span>
                {isAdultPreset && (
                  <span className="text-[10px] px-2 py-0.2 rounded bg-burgundy-900 text-amber-200 font-bold">
                    Adult Tajweed Edition
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Lesson {lesson.lessonNumber}: Letter <span className="font-arabic font-extrabold text-burgundy-900 text-2xl">{lesson.arabicLetter}</span> ({lesson.name})
              </h2>
            </div>
          </div>

          <div className="text-right">
            <div className="font-arabic font-bold text-3xl text-burgundy-900 leading-none">
              حَرْفُ {lesson.arabicLetter}
            </div>
            <div className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">
              Page {pageNumber} of 2
            </div>
          </div>
        </div>

        {pageNumber === 1 ? (
          /* ================= PAGE 1 CONTENT ================= */
          <div className="space-y-5">
            {/* Top Grid: Large Letter & Pronunciation explanations */}
            <div className="grid grid-cols-12 gap-5">
              {/* Large Letter Spotlight Card */}
              <div className={`col-span-4 rounded-2xl p-4 border flex flex-col items-center justify-center text-center shadow-xs relative group ${isAdultPreset ? 'bg-amber-950/5 border-amber-900/30' : 'bg-gradient-to-b from-amber-50 to-orange-50/40 border-amber-200'}`}>
                <button
                  onClick={() => playArabicAudio(lesson.arabicLetter)}
                  className="no-print absolute top-2 right-2 p-1.5 rounded-lg bg-amber-200/80 hover:bg-amber-300 text-burgundy-950 transition-colors shadow-2xs"
                  title="Listen to Arabic Pronunciation"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] uppercase font-bold text-amber-900 tracking-wider mb-1">
                  Master Character
                </span>
                <div 
                  dir="rtl" 
                  className="font-arabic font-bold text-7xl text-burgundy-950 my-2 select-all tracking-normal cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => playArabicAudio(lesson.arabicLetter)}
                >
                  {lesson.arabicLetter}
                </div>
                <div className="text-sm font-extrabold text-slate-800">
                  {lesson.name}
                </div>
                <div className="text-xs text-amber-900 font-medium italic mt-0.5">
                  / {lesson.pronunciation} /
                </div>
              </div>

              {/* Multilingual Explanations */}
              <div className="col-span-8 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-burgundy-900 flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Pronunciation Explanation
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-900">English: </span>
                    <span className="text-slate-700">{lesson.englishDescription || 'Teacher content required'}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Hinglish: </span>
                    <span className="text-slate-700">{lesson.hinglishDescription || 'Teacher content required'}</span>
                  </div>
                  <div dir="rtl" className="font-arabic text-sm pt-1 text-slate-900 border-t border-slate-200/60 leading-relaxed">
                    <span className="font-sans font-bold text-xs text-slate-900" dir="ltr">Urdu: </span>
                    {lesson.urduDescription || 'مضمون درکار ہے'}
                  </div>
                </div>
              </div>
            </div>

            {/* How to say it step-by-step */}
            <div className="bg-sky-50/60 rounded-2xl p-4 border border-sky-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-900">
                How To Say It — Step-by-Step
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-sky-100 flex items-start gap-2.5 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <div>
                    <div className="font-bold text-sky-950 mb-0.5">Step 1: Placement</div>
                    <div className="text-slate-600 leading-snug">{lesson.makhraj.step1 || 'Position your articulation organ correctly.'}</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sky-100 flex items-start gap-2.5 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <div>
                    <div className="font-bold text-sky-950 mb-0.5">Step 2: Airflow & Release</div>
                    <div className="text-slate-600 leading-snug">{lesson.makhraj.step2 || 'Release sound with proper breath and tone.'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Makhraj Anatomy & Classical Tajweed Section */}
            <div className="bg-white rounded-2xl p-4 border border-amber-900/15 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-burgundy-900 flex items-center gap-2">
                  <span>Articulation Point (Makhraj)</span>
                  <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold">
                    {lesson.makhraj.name}
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 bg-slate-50 rounded-xl p-2 border border-slate-200 flex items-center justify-center h-44 overflow-hidden">
                  <img 
                    src={lesson.makhraj.illustrationUrl} 
                    alt="Makhraj Diagram" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="col-span-6 space-y-2 text-xs">
                  <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
                    <span className="font-bold text-amber-950">Simple Explanation: </span>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      {lesson.makhraj.simpleExplanation || 'Teacher content required.'}
                    </p>
                  </div>

                  {isAdultPreset ? (
                    /* Classical Sifat & Tajweed Poetry Box for Adult Preset */
                    <div className="bg-[#551421] text-amber-100 p-3 rounded-xl space-y-1.5 border border-amber-500/30">
                      <div className="flex items-center justify-between text-[10px] font-bold text-amber-300 border-b border-amber-500/20 pb-1">
                        <span>Classical Sifat (Qualities)</span>
                        <span>Al-Jazariyyah Reference</span>
                      </div>
                      <div dir="rtl" className="font-arabic text-xs font-bold text-amber-200 text-center py-0.5">
                        وَالأَخْذُ بِالتَّجْوِيدِ حَتْمٌ لاَزِمُ • مَنْ لَمْ يُجَوِّدِ الْقُرْآنَ آثِمُ
                      </div>
                      <div className="text-[10px] text-amber-200/80 leading-tight">
                        • Sifat: Hams (Whisper of Breath), Istifal (Lowering of Tongue), Infitah.
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900">Tajweed Details: </span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed text-[11px]">
                        {lesson.makhraj.teacherExplanation || 'Detailed Tajweed notes.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* ================= PAGE 2 CONTENT ================= */
          <div className="space-y-5">
            {/* Different Forms Visual Component */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-burgundy-900 flex items-center gap-2">
                <span>Different Forms of Letter {lesson.arabicLetter}</span>
                <span className="text-[10px] font-normal text-slate-500">(Isolated, Beginning, Middle, End)</span>
              </h3>

              <div className="grid grid-cols-4 gap-3">
                <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200 text-center">
                  <span className="text-[10px] font-extrabold text-amber-900 uppercase">Isolated</span>
                  <div dir="rtl" className="font-arabic font-bold text-4xl text-slate-900 my-1">
                    {lesson.forms.isolated}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">Alone</span>
                </div>

                <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200 text-center">
                  <span className="text-[10px] font-extrabold text-amber-900 uppercase">Beginning</span>
                  <div dir="rtl" className="font-arabic font-bold text-4xl text-slate-900 my-1">
                    {lesson.forms.beginning}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">تـ...</span>
                </div>

                <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200 text-center">
                  <span className="text-[10px] font-extrabold text-amber-900 uppercase">Middle</span>
                  <div dir="rtl" className="font-arabic font-bold text-4xl text-slate-900 my-1">
                    {lesson.forms.middle}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">...ـتـ...</span>
                </div>

                <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200 text-center">
                  <span className="text-[10px] font-extrabold text-amber-900 uppercase">End</span>
                  <div dir="rtl" className="font-arabic font-bold text-4xl text-slate-900 my-1">
                    {lesson.forms.ending}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">...ـت</span>
                </div>
              </div>
            </div>

            {/* Real Words Vocabulary Grid (4 Words) */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-burgundy-900">
                Vocabulary Words with Letter {lesson.arabicLetter}
              </h3>

              <div className="grid grid-cols-4 gap-3">
                {lesson.vocabulary.map((vocab, idx) => (
                  <div 
                    key={vocab.id || idx} 
                    onClick={() => vocab.arabicWord && playArabicAudio(vocab.arabicWord)}
                    className="bg-white rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between items-center text-center shadow-2xs group cursor-pointer hover:border-amber-400 hover:shadow-xs transition-all relative"
                    title="Click to listen to pronunciation"
                  >
                    <div className="w-full aspect-square bg-slate-50 rounded-lg border border-slate-100 p-1 flex items-center justify-center overflow-hidden mb-2">
                      {vocab.imageUrl ? (
                        <img src={vocab.imageUrl} alt={vocab.meaning} className="max-h-full max-w-full object-contain" />
                      ) : (
                        <span className="text-2xl">🖼️</span>
                      )}
                    </div>
                    <div dir="rtl" className="font-arabic font-bold text-2xl text-slate-900 leading-tight group-hover:text-burgundy-900 transition-colors">
                      {vocab.arabicWord || '___'}
                    </div>
                    <div className="text-xs font-extrabold text-amber-900 mt-0.5 flex items-center gap-1">
                      <span>{vocab.transliteration || 'Word'}</span>
                      <Volume2 className="w-3 h-3 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity no-print" />
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">
                      {vocab.meaning || 'Meaning'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Exercises Section */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-burgundy-900 border-b border-slate-200 pb-1.5">
                Let's Practice — Interactive Workbook Exercises
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-amber-900 uppercase text-[10px]">1. Say & Pronounce</div>
                  <p className="text-slate-700">{lesson.practice.sayText}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-amber-900 uppercase text-[10px]">2. Write & Trace</div>
                  <p className="text-slate-700">{lesson.practice.writeText}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-amber-900 uppercase text-[10px]">3. Join Letters</div>
                  <p className="text-slate-700">{lesson.practice.joinText}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-amber-900 uppercase text-[10px]">4. Read Out Loud</div>
                  <p className="text-slate-700">{lesson.practice.readText}</p>
                </div>
              </div>

              {/* GAMIFIED INTERACTIVE "FIND THE LETTER" MINI-GAME */}
              <div className="bg-gradient-to-r from-amber-100/90 via-orange-50 to-amber-100 p-4 rounded-xl border border-amber-300 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span className="font-extrabold text-xs text-amber-950 uppercase tracking-wider">
                      Interactive Classroom Mini-Game: Find Letter ({targetChar})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-burgundy-900 bg-white px-2.5 py-1 rounded-lg border border-amber-300 flex items-center gap-1 shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-amber-500" /> Score: {score} / {totalTargets}
                    </span>
                    <button
                      onClick={handleResetGame}
                      className="no-print p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white/60 transition-colors"
                      title="Reset Game"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Interactive Tappable Grid */}
                <div className="flex items-center justify-center gap-2.5 flex-wrap pt-1">
                  {gameGrid.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleTapGridLetter(idx)}
                      className={`
                        w-11 h-11 rounded-xl font-arabic font-bold text-2xl transition-all duration-200 flex items-center justify-center shadow-xs border
                        ${item.tapped && item.isTarget 
                          ? 'bg-emerald-500 text-white border-emerald-600 scale-105 ring-2 ring-emerald-300' 
                          : item.tapped && !item.isTarget
                          ? 'bg-rose-100 text-rose-500 border-rose-200 opacity-50'
                          : 'bg-white text-slate-900 border-amber-200 hover:bg-amber-50 hover:border-amber-400 active:scale-95'}
                      `}
                    >
                      {item.char}
                    </button>
                  ))}
                </div>

                {score === totalTargets && (
                  <div className="bg-emerald-500 text-white text-xs font-extrabold p-2 rounded-lg text-center flex items-center justify-center gap-1.5 animate-bounce">
                    <CheckCircle2 className="w-4 h-4 text-amber-200" />
                    <span>MashaAllah! You found all {totalTargets} '{targetChar}' letters! 🎉</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Page Footer */}
        <div className="absolute bottom-4 left-16 right-16 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
          <div>© {bookSettings.publisher} • {bookSettings.edition}</div>
          <div className="flex items-center gap-1 font-semibold text-emerald-800">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Verified Educational Content ({currentPreset.toUpperCase()} Preset)
          </div>
          <div>Page {pageNumber}</div>
        </div>

      </div>
    </div>
  );
};
