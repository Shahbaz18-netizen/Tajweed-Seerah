import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Trophy,
  BookOpen,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  Zap,
  Layers,
  Mic,
  Volume2,
  Sparkles,
} from 'lucide-react';
import type { AppMode } from '../types';
import type { ChapterData } from '../data/chaptersData';
import { playArabicAudio } from '../utils/audioHelper';
import { APP_TRANSLATIONS, type LanguageOption } from '../utils/translations';

interface ChapterLessonViewProps {
  chapter: ChapterData;
  mode: AppMode;
  language?: LanguageOption;
  onBack: () => void;
  onMarkComplete: () => void;
  isCompleted: boolean;
}

// ─── Opening Supplication (Al-Hira Neo-Noorani Qaida Opening) ────────────────
const NooraniSupplicationBanner: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => (
  <div className="bg-gradient-to-r from-amber-950 via-[#6B1B2A] to-amber-950 text-white p-5 rounded-3xl space-y-2.5 border border-amber-400/30 shadow-lg text-center">
    <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
      <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-300" /> {APP_TRANSLATIONS.duaTitle[language]}</span>
      <span className="font-arabic" dir="rtl">دُعَاءُ التَّيْسِيرِ</span>
    </div>
    <div
      className="font-arabic text-xl sm:text-2xl font-black text-amber-200 leading-loose text-center"
      dir="rtl"
    >
      رَبِّ يَسِّرْ وَلَا تُعَسِّرْ وَتَمِّمْ بِالْخَيْرِ وَبِكَ نَسْتَعِينُ، يَا فَتَّاحُ، رَبِّ زِدْنِي عِلْمًَا
    </div>
    <div className="flex items-center justify-center pt-1 border-t border-white/10 text-[11px] text-amber-100/90 font-medium text-center">
      <span className={language === 'urdu' ? 'font-arabic text-right' : ''}>{APP_TRANSLATIONS.duaTranslation[language]}</span>
    </div>
  </div>
);

// ─── Madani & Noorani Pearl Box Helper ──────────────────────────────────────────
const MadaniPearlBox: React.FC<{ title: string; points: string[]; language?: LanguageOption }> = ({ title, points, language = 'english' }) => (
  <div className="bg-gradient-to-r from-emerald-900 via-burgundy-950 to-emerald-950 text-white p-5 rounded-3xl space-y-3 border border-emerald-400/30 shadow-md">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-amber-300" />
        <h4 className="font-black text-amber-200 text-sm">{title}</h4>
      </div>
      <span className="text-xs font-arabic text-emerald-200" dir="rtl">{APP_TRANSLATIONS.pearlBoxSubHeader[language]}</span>
    </div>
    <ul className="space-y-1.5 text-xs text-slate-100 font-medium">
      {points.map((p, idx) => (
        <li key={idx} className={`flex items-start gap-2 ${language === 'urdu' ? 'font-arabic text-right' : ''}`}>
          <span className="text-amber-400 shrink-0 font-bold">🌸</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ─── Tajweed Color-Coding Legend Component (Disabled / Removed per user request) ───
const TajweedColorLegend: React.FC<{ language?: LanguageOption }> = () => null;

// ─── Noorani Tahjiya (Letter-by-Letter Spelling Method) Helper ────────────────
const NooraniTahjiyaWidget: React.FC<{
  word: string;
  spellingSteps: Array<{ letter: string; name: string; vowelName: string; sound: string }>;
  finalWord: string;
  finalSound: string;
}> = ({ word, spellingSteps, finalWord, finalSound }) => (
  <div className="bg-amber-50/90 border-2 border-amber-300 rounded-3xl p-5 space-y-3 shadow-xs">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-700" />
        <h4 className="font-black text-amber-950 text-xs sm:text-sm">
          Noorani Qaida Spelling Method (طريقة الهجاء النورانية)
        </h4>
      </div>
      <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full">
        Traditional Tahjiya
      </span>
    </div>

    <div className="bg-white rounded-2xl p-4 border border-amber-200 text-center space-y-3">
      <div className="font-arabic text-4xl font-black text-slate-900" dir="rtl">{word}</div>

      {/* Step-by-step breakdown */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-100">
        {spellingSteps.map((s, idx) => (
          <React.Fragment key={idx}>
            <button
              onClick={() => playArabicAudio(s.letter || finalWord)}
              className="bg-amber-100/80 hover:bg-amber-200 border border-amber-300 rounded-xl px-3 py-1.5 text-center cursor-pointer transition-all hover:scale-105"
            >
              <span className="font-arabic text-xl font-bold text-amber-950" dir="rtl">{s.letter}</span>
              <div className="text-[10px] text-amber-900 font-semibold mt-0.5">
                {s.name} + {s.vowelName} ➔ <strong className="text-burgundy-950">{s.sound}</strong>
              </div>
            </button>
            {idx < spellingSteps.length - 1 && <span className="text-amber-500 font-bold">➔</span>}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => playArabicAudio(finalWord)}
        className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 text-burgundy-950 font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 cursor-pointer mt-2"
      >
        <Volume2 className="w-4 h-4" /> Listen Full Blend: {finalSound} ({finalWord})
      </button>
    </div>
  </div>
);

// ─── Exhaustive Noorani Qaida Master Practice Grid (المَشْقُ الْكَبِيرُ) ────────
export interface ExerciseWord {
  arabic: string;
  transliteration: string;
  meaning?: string;
  tag?: string;
  note?: string;
  tahjiya?: Array<{ letter: string; name: string; vowelName: string; sound: string }>;
}

const ExhaustiveNooraniExerciseGrid: React.FC<{
  title: string;
  subtitle: string;
  words: ExerciseWord[];
}> = ({ title, subtitle, words }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTahjiyaWord, setActiveTahjiyaWord] = useState<string | null>(null);

  const displayedWords = isExpanded ? words : words.slice(0, 8);

  return (
    <div className="bg-slate-900 border-2 border-amber-500/30 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="font-black text-white text-base sm:text-lg">{title}</h3>
          </div>
          <p className="text-xs text-amber-200/80 font-medium mt-0.5">{subtitle}</p>
        </div>
        <span className="text-xs font-arabic font-black text-amber-300 bg-amber-400/20 border border-amber-400/30 px-3 py-1 rounded-full" dir="rtl">
          الْمَشْقُ الْكَبِيرُ ({words.length} كَلِمَةً)
        </span>
      </div>

      <p className="text-xs text-slate-300 font-medium">
        Tap any word to listen to its traditional audio recitation and view spelling notes:
      </p>

      {/* Grid Display */}
      <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {displayedWords.map((w, idx) => (
          <div
            key={idx}
            onClick={() => playArabicAudio(w.arabic)}
            className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-amber-400/50 rounded-2xl p-4 text-center cursor-pointer transition-all hover:scale-102 group space-y-1.5 relative overflow-hidden"
          >
            <div className="font-arabic font-black text-3xl sm:text-4xl text-amber-300 group-hover:scale-110 transition-transform leading-relaxed">
              {w.arabic}
            </div>

            <div dir="ltr" className="space-y-0.5">
              <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{w.transliteration}</span>
              </div>
              {w.meaning && <div className="text-[10px] text-slate-400 line-clamp-1">{w.meaning}</div>}
              {w.tag && (
                <span className="inline-block text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 mt-1">
                  {w.tag}
                </span>
              )}
            </div>

            {w.tahjiya && (
              <button
                dir="ltr"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTahjiyaWord(activeTahjiyaWord === w.arabic ? null : w.arabic);
                }}
                className="w-full mt-2 py-1 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-bold text-[10px] flex items-center justify-center gap-1 cursor-pointer transition-colors"
              >
                <span>{activeTahjiyaWord === w.arabic ? 'Hide Tahjiya' : 'Spelling Breakdown'}</span>
              </button>
            )}

            {w.tahjiya && activeTahjiyaWord === w.arabic && (
              <div dir="ltr" className="mt-2 p-2 bg-amber-950/80 rounded-xl border border-amber-400/30 text-[10px] text-amber-200 text-left space-y-1">
                <strong className="block text-amber-300">Tahjiya Spelling:</strong>
                {w.tahjiya.map((s, sIdx) => (
                  <div key={sIdx}>
                    {s.letter} ({s.name} + {s.vowelName}) ➔ <strong>{s.sound}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Expand / Collapse Button */}
      {words.length > 8 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-burgundy-950 font-black text-xs rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 fill-burgundy-950" />
          <span>
            {isExpanded
              ? `Show Less (${words.length} Words)`
              : `View All ${words.length} Noorani Qaida Master Practice Words ✨`}
          </span>
        </button>
      )}
    </div>
  );
};

const ALL_28_LETTERS_LIST = [
  { num: 1, char: 'ا', name: 'Alif', zone: 'Oral Cavity (Jawf)', type: 'light' },
  { num: 2, char: 'ب', name: 'Baa', zone: 'Lips (Shafatan)', type: 'light' },
  { num: 3, char: 'ت', name: 'Taa', zone: 'Tongue Tip (Lisan)', type: 'light' },
  { num: 4, char: 'ث', name: 'Thaa', zone: 'Tongue Tip (Lisan)', type: 'light' },
  { num: 5, char: 'ج', name: 'Jeem', zone: 'Middle Tongue', type: 'light' },
  { num: 6, char: 'ح', name: 'Haa', zone: 'Middle Throat', type: 'light' },
  { num: 7, char: 'خ', name: 'Khaa', zone: 'Top Throat', type: 'heavy' },
  { num: 8, char: 'د', name: 'Daal', zone: 'Tongue Tip', type: 'light' },
  { num: 9, char: 'ذ', name: 'Zhaal', zone: 'Tongue Tip', type: 'light' },
  { num: 10, char: 'ر', name: 'Raa', zone: 'Tongue Tip', type: 'light' },
  { num: 11, char: 'ز', name: 'Zay', zone: 'Tongue Tip', type: 'light' },
  { num: 12, char: 'س', name: 'Seen', zone: 'Tongue Tip', type: 'light' },
  { num: 13, char: 'ش', name: 'Sheen', zone: 'Middle Tongue', type: 'light' },
  { num: 14, char: 'ص', name: 'Saad', zone: 'Tongue Tip', type: 'heavy' },
  { num: 15, char: 'ض', name: 'Dhaad', zone: 'Side Tongue', type: 'heavy' },
  { num: 16, char: 'ط', name: 'Taa (Heavy)', zone: 'Tongue Tip', type: 'heavy' },
  { num: 17, char: 'ظ', name: 'Zhaa', zone: 'Tongue Tip', type: 'heavy' },
  { num: 18, char: 'ع', name: 'Ain', zone: 'Middle Throat', type: 'light' },
  { num: 19, char: 'غ', name: 'Ghain', zone: 'Top Throat', type: 'heavy' },
  { num: 20, char: 'ف', name: 'Faa', zone: 'Lips & Teeth', type: 'light' },
  { num: 21, char: 'ق', name: 'Qaaf', zone: 'Deep Back Tongue', type: 'heavy' },
  { num: 22, char: 'ك', name: 'Kaaf', zone: 'Back Tongue', type: 'light' },
  { num: 23, char: 'ل', name: 'Laam', zone: 'Tongue Side', type: 'light' },
  { num: 24, char: 'م', name: 'Meem', zone: 'Lips', type: 'light' },
  { num: 25, char: 'ن', name: 'Noon', zone: 'Tongue Tip & Nasal', type: 'light' },
  { num: 26, char: 'هـ', name: 'Haa (Light)', zone: 'Bottom Throat', type: 'light' },
  { num: 27, char: 'و', name: 'Waw', zone: 'Rounded Lips', type: 'light' },
  { num: 28, char: 'ي', name: 'Yaa', zone: 'Middle Tongue', type: 'light' },
];

const AlphabetMakhrajLesson: React.FC<{
  language?: LanguageOption;
}> = ({ language = 'english' }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'heavy' | 'light' | 'zones' | 'compare' | 'muqattaat'>('all');

  const heavyLetters = [
    { char: 'خ', name: 'Khaa', pron: 'Kh', tip: 'Top throat gargle sound (like clearing throat gently)' },
    { char: 'ص', name: 'Saad', pron: 'S (Heavy)', tip: 'Bold deep S sound with tongue raised' },
    { char: 'ض', name: 'Dhaad', pron: 'Dh', tip: 'Side edge of tongue touching upper back molars' },
    { char: 'ط', name: 'Taa (Heavy)', pron: 'T (Heavy)', tip: 'Bold deep T sound with full mouth air' },
    { char: 'ظ', name: 'Zhaa', pron: 'Zh (Heavy)', tip: 'Heavy TH sound with tongue tip on teeth' },
    { char: 'غ', name: 'Ghain', pron: 'Gh', tip: 'Top throat gargling sound' },
    { char: 'ق', name: 'Qaaf', pron: 'Q', tip: 'Deep back tongue touching soft palate' },
  ];

  const lightLetters = [
    { char: 'ء', name: 'Hamzah', pron: 'A / Glottal Stop', tip: 'Bottom of throat sharp clean stop' },
    { char: 'ب', name: 'Baa', pron: 'B (Soft)', tip: 'Soft gentle lip closure' },
    { char: 'ت', name: 'Taa', pron: 'T (Light)', tip: 'Tongue tip to upper tooth root softly' },
    { char: 'ث', name: 'Thaa', pron: 'Th (Soft)', tip: 'Tongue tip slightly between front teeth' },
    { char: 'ج', name: 'Jeem', pron: 'J', tip: 'Middle tongue touching hard palate' },
    { char: 'ح', name: 'Haa', pron: 'H (Throat)', tip: 'Clear gentle friction from middle of throat' },
    { char: 'د', name: 'Daal', pron: 'D (Light)', tip: 'Tongue tip touching upper teeth roots softly' },
    { char: 'ذ', name: 'Zhaal', pron: 'Zh (Light)', tip: 'Tongue tip to upper teeth edge softly' },
    { char: 'ر', name: 'Raa (Light)', pron: 'R (Light)', tip: 'Light R sound when taking Kasra (Zer)' },
    { char: 'ز', name: 'Zay', pron: 'Z', tip: 'Light whistling buzz from tongue tip' },
    { char: 'س', name: 'Seen', pron: 'S (Light)', tip: 'Smiling whistle sound with flat mouth' },
    { char: 'ش', name: 'Sheen', pron: 'Sh', tip: 'Soft air spreading across middle of mouth' },
    { char: 'ع', name: 'Ain', pron: 'ʻA', tip: 'Deep middle of throat contraction' },
    { char: 'ف', name: 'Faa', pron: 'F', tip: 'Upper teeth touching inside lower lip' },
    { char: 'ك', name: 'Kaaf', pron: 'K (Light)', tip: 'Front palate light K sound' },
    { char: 'ل', name: 'Laam', pron: 'L (Light)', tip: 'Side tongue to palate light L sound' },
    { char: 'م', name: 'Meem', pron: 'M', tip: 'Closing both lips softly with nasal sound' },
    { char: 'ن', name: 'Noon', pron: 'N', tip: 'Tongue tip to upper gums with Ghunnah' },
    { char: 'هـ', name: 'Haa (Light)', pron: 'H (Light)', tip: 'Bottom of throat light breath' },
    { char: 'و', name: 'Waw', pron: 'W', tip: 'Rounding both lips cleanly' },
    { char: 'ي', name: 'Yaa', pron: 'Y', tip: 'Middle tongue raised toward palate' },
  ];

  const makhrajZones = [
    {
      name: 'Throat (Al-Halq - 3 Points)',
      arabic: 'الحَلْق',
      icon: '🗣️',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
      desc: '6 throat letters from 3 regions: Bottom (ء هـ), Middle (ع ح), Top (غ خ).',
    },
    {
      name: 'Tongue (Al-Lisan - 10 Points)',
      arabic: 'اللِّسَان',
      icon: '👅',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      letters: ['ق', 'ك', 'ج', 'ش', 'ي', 'ض', 'ل', 'ن', 'ر', 'ط', 'د', 'ت', 'ص', 'ز', 'س', 'ظ', 'ذ', 'ث'],
      desc: '18 letters produced across 10 specific tongue points (Back, Middle, Edges, Tip).',
    },
    {
      name: 'Lips (Ash-Shafatan - 2 Points)',
      arabic: 'الشَّفَتَان',
      icon: '👄',
      color: 'bg-rose-50 border-rose-200 text-rose-900',
      letters: ['ف', 'ب', 'م', 'و'],
      desc: '4 letters: Faa (upper teeth to lower lip inner), Baa/Meem (pressing lips), Waw (rounding lips).',
    },
    {
      name: 'Nasal Cavity (Al-Khaishum)',
      arabic: 'خَيْشُوم',
      icon: '👃',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      letters: ['ن', 'م'],
      desc: 'Resonant nasal humming (Ghunnah) produced inside the nose.',
    },
    {
      name: 'Oral Cavity (Al-Jawf)',
      arabic: 'الجَوْف',
      icon: '🌬️',
      color: 'bg-sky-50 border-sky-200 text-sky-900',
      letters: ['ا', 'و', 'ي'],
      desc: 'Open air space inside mouth and throat for stretching Madd vowels.',
    },
  ];

  const comparisons = [
    {
      heavyChar: 'ط',
      heavyName: 'Taa (Heavy)',
      lightChar: 'ت',
      lightName: 'Taa (Light)',
      explanation: 'ط is bold and deep (like a big drum 🥁), while ت is soft and flat (like a quiet tap 🤫).',
    },
    {
      heavyChar: 'ص',
      heavyName: 'Saad (Heavy)',
      lightChar: 'س',
      lightName: 'Seen (Light)',
      explanation: 'ص fills your whole mouth with air 🎈, while س sounds like a smiling whistle 😊.',
    },
    {
      heavyChar: 'ق',
      heavyName: 'Qaaf (Heavy)',
      lightChar: 'ك',
      lightName: 'Kaaf (Light)',
      explanation: 'ق comes from deep back in your mouth (Heavy), while ك comes from further forward (Light).',
    },
    {
      heavyChar: 'ض',
      heavyName: 'Dhaad (Heavy)',
      lightChar: 'د',
      lightName: 'Daal (Light)',
      explanation: 'ض uses the side edge of your tongue against back molars (Heavy), while د uses just the tip.',
    },
  ];

  const muqattaat = [
    { text: 'الم', name: 'Alif Laam Meem', detail: 'Surah Al-Baqarah • Read each letter by full name!' },
    { text: 'الر', name: 'Alif Laam Raa', detail: 'Surah Yunus' },
    { text: 'طه', name: 'Taa Haa', detail: 'Surah Taha' },
    { text: 'يس', name: 'Yaa Seen', detail: 'Surah Yaseen' },
    { text: 'حم', name: 'Haa Meem', detail: 'Surah Ghaafir' },
    { text: 'كهيعص', name: 'Kaaf Haa Yaa ʻAin Saad', detail: 'Surah Maryam • 5 Disjoined Letters' },
    { text: 'ق', name: 'Qaaf', detail: 'Surah Qaf' },
    { text: 'ن', name: 'Noon', detail: 'Surah Al-Qalam' },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch1Title[language]}
        points={APP_TRANSLATIONS.ch1Points[language]}
        language={language}
      />

      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap bg-slate-100 p-1 rounded-2xl gap-1">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
            activeTab === 'all' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>🔤 All 28 Letters (1-by-1)</span>
        </button>
        <button
          onClick={() => setActiveTab('heavy')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
            activeTab === 'heavy' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>🐘 7 Heavy Letters</span>
        </button>
        <button
          onClick={() => setActiveTab('light')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
            activeTab === 'light' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>🕊️ 21 Light Letters</span>
        </button>
        <button
          onClick={() => setActiveTab('zones')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
            activeTab === 'zones' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>🗣️ 17 Makhraj Points</span>
        </button>
        <button
          onClick={() => setActiveTab('compare')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
            activeTab === 'compare' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>⚖️ Heavy vs Light</span>
        </button>
        <button
          onClick={() => setActiveTab('muqattaat')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
            activeTab === 'muqattaat' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>📖 Huroof Muqatta'at</span>
        </button>
      </div>

      {/* TAB 0: ALL 28 LETTERS SEQUENTIAL PRACTICE GRID */}
      {activeTab === 'all' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-amber-950 via-[#6B1B2A] to-amber-950 text-white p-5 rounded-3xl space-y-2 border border-amber-400/30">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                Al-Mufradaat (الحُرُوفُ الْمُفْرَدَةُ)
              </span>
              <span className="text-xs font-arabic text-amber-200" dir="rtl">٢٨ حَرْفًا</span>
            </div>
            <h3 className="text-lg font-black text-white">
              {language === 'urdu'
                ? 'تمام ۲۸ حروفِ تہجی کی مشق (الف سے یا تک)'
                : language === 'hinglish'
                ? 'Tamam 28 Huroof ki Tarteeb-waar Mashq (Alif Se Yaa Tak)'
                : 'Practice All 28 Arabic Letters One-by-One (Alif to Yaa)'}
            </h3>
            <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
              {language === 'urdu'
                ? 'کسی بھی حرف پر کلک کریں اس کا تفصیلی مخرج، ۴ تحریری اشکال اور تلفظ کی مشق کھولنے کے لیے!'
                : language === 'hinglish'
                ? 'Kisi bhi harf par click karein uski tafseeli makhraj diagram, 4 likhne ki shaqlein aur awaz ki mashq kholne ke liye!'
                : 'Click on any letter card to open its detailed mouth position diagram, 4 writing shapes, and 2-step pronunciation drill!'}
            </p>
          </div>

          <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_28_LETTERS_LIST.map((l) => (
              <div
                key={l.num}
                onClick={() => playArabicAudio(l.char)}
                className="bg-white hover:bg-amber-50/80 border-2 border-slate-200 hover:border-amber-400 rounded-2xl p-4 text-center cursor-pointer transition-all hover:scale-102 shadow-2xs group relative space-y-2"
              >
                <div className="flex items-center justify-between" dir="ltr">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black flex items-center justify-center">
                    #{l.num}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    l.type === 'heavy' ? 'bg-amber-200 text-amber-950' : 'bg-emerald-100 text-emerald-900'
                  }`}>
                    {l.type === 'heavy' ? '🐘 Heavy' : '🕊️ Light'}
                  </span>
                </div>

                <div className="font-arabic font-black text-5xl text-burgundy-950 group-hover:scale-110 transition-transform">
                  {l.char}
                </div>

                <div dir="ltr" className="space-y-0.5">
                  <div className="text-sm font-extrabold text-slate-900">{l.name}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{l.zone}</div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 1: HEAVY LETTERS */}
      {activeTab === 'heavy' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-amber-900 via-burgundy-950 to-amber-950 text-white p-5 rounded-3xl space-y-2 border border-amber-500/30">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                Musta'aliyah (مستعلية)
              </span>
              <span className="text-xs font-arabic text-amber-200" dir="rtl">خُصَّ ضَغْطٍ قِظْ</span>
            </div>
            <h3 className="text-lg font-black text-white">The 7 Heavy Letters (Full-Mouth Sound)</h3>
            <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
              Lift the back of your tongue toward the roof of your mouth. Pretend your mouth is full of air 🎈!
            </p>
          </div>

          <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {heavyLetters.map((l) => (
              <div
                key={l.char}
                onClick={() => playArabicAudio(l.char)}
                className="bg-amber-50/80 hover:bg-amber-100 border-2 border-amber-300 rounded-2xl p-4 text-center cursor-pointer transition-all hover:scale-102 shadow-xs group"
              >
                <div className="font-arabic font-black text-5xl text-amber-600 group-hover:scale-110 transition-transform">
                  {l.char}
                </div>
                <div dir="ltr" className="mt-2 space-y-0.5">
                  <div className="text-sm font-extrabold text-amber-900">{l.name}</div>
                  <div className="text-[11px] font-bold text-amber-700">{l.pron}</div>
                  <p className="text-[10px] text-slate-500 leading-tight pt-1 border-t border-amber-200/60 mt-1">
                    {l.tip}
                  </p>
                </div>
                <button
                  dir="ltr"
                  onClick={(e) => {
                    e.stopPropagation();
                    playArabicAudio(l.char);
                  }}
                  className="mt-3 w-full py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3 h-3" /> Listen
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: LIGHT LETTERS (Huroof Tarqeeq - حروف الترقيق) */}
      {activeTab === 'light' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-emerald-900 text-white p-5 rounded-3xl space-y-2 border border-emerald-400/30">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30">
                Mustafilah (مستفلة) • Tarqeeq
              </span>
              <span className="text-xs font-arabic text-emerald-200" dir="rtl">حُرُوفُ التَّرْقِيقِ</span>
            </div>
            <h3 className="text-lg font-black text-white">
              {language === 'urdu'
                ? '۲۱ حروفِ ترقیق (باریک حروف)'
                : language === 'hinglish'
                ? '21 Light Letters (Huroof-e-Tarqeeq / Halke Huroof)'
                : 'The 21 Light Letters (Soft & Flat Sound)'}
            </h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
              {language === 'urdu'
                ? 'ان ۲۱ حروف کو پڑھتے وقت زبان کا پچھلا حصہ نیچے رکھیں اور ہلکی سی مسکراہٹ 😊 کے ساتھ آواز باریک (Tarqeeq) نکالیں۔'
                : language === 'hinglish'
                ? 'Yeh 21 huroof hamesha halke (light) aur muskuraate hue padhe jaate hain. Zabaan ko neeche rakhein aur halke se muskuraayein 😊.'
                : 'Keep the back of your tongue flat and low in your mouth. Smile slightly 😊 when pronouncing these letters so they sound soft, flat, and light.'}
            </p>
          </div>

          <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {lightLetters.map((l) => (
              <div
                key={l.char}
                onClick={() => playArabicAudio(l.char)}
                className="bg-emerald-50/80 hover:bg-emerald-100 border-2 border-emerald-300 rounded-2xl p-4 text-center cursor-pointer transition-all hover:scale-102 shadow-xs group"
              >
                <div className="font-arabic font-black text-5xl text-emerald-700 group-hover:scale-110 transition-transform">
                  {l.char}
                </div>
                <div dir="ltr" className="mt-2 space-y-0.5">
                  <div className="text-sm font-extrabold text-emerald-950">{l.name}</div>
                  <div className="text-[11px] font-bold text-emerald-700">{l.pron}</div>
                  <p className="text-[10px] text-slate-600 leading-tight pt-1 border-t border-emerald-200/60 mt-1">
                    {l.tip}
                  </p>
                </div>
                <button
                  dir="ltr"
                  onClick={(e) => {
                    e.stopPropagation();
                    playArabicAudio(l.char);
                  }}
                  className="mt-3 w-full py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3 h-3" /> Listen
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: 17 MAKHRAJ ZONES */}
      {activeTab === 'zones' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600 font-medium">
            Al-Hira Neo-Noorani Qaidah divides articulation into 17 specific anatomical points across 5 major zones:
          </p>

          <div className="space-y-4">
            {makhrajZones.map((z) => (
              <div key={z.name} className={`${z.color} border-2 rounded-3xl p-5 space-y-3`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{z.icon}</span>
                    <div>
                      <h4 className="font-black text-base leading-snug">{z.name}</h4>
                      <p className="text-xs text-slate-600 font-medium">{z.desc}</p>
                    </div>
                  </div>
                  <span className="font-arabic font-black text-xl" dir="rtl">{z.arabic}</span>
                </div>

                <div dir="rtl" className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/60">
                  {z.letters.map((char) => (
                    <button
                      key={char}
                      onClick={() => playArabicAudio(char)}
                      className="w-10 h-10 rounded-xl bg-white hover:bg-amber-100 border border-slate-200 shadow-xs flex items-center justify-center font-arabic text-xl font-bold text-slate-900 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      title={`Listen ${char}`}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: HEAVY VS LIGHT COMPARISON */}
      {activeTab === 'compare' && (
        <div className="space-y-4">
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-xs text-sky-950 font-medium">
            <strong>🎧 Audio Showdown:</strong> Tap the heavy vs light buttons side-by-side to hear the difference!
          </div>

          <div className="space-y-4">
            {comparisons.map((c, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-200 rounded-3xl p-5 space-y-3 shadow-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-center space-y-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-amber-200 text-amber-900 rounded-md">
                      🐘 Heavy 🧡
                    </span>
                    <div className="font-arabic font-black text-4xl text-amber-600">{c.heavyChar}</div>
                    <div className="text-xs font-bold text-amber-900">{c.heavyName}</div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-center space-y-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded-md">
                      🦋 Light
                    </span>
                    <div className="font-arabic font-black text-4xl text-emerald-950">{c.lightChar}</div>
                    <div className="text-xs font-bold text-emerald-900">{c.lightName}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium text-center bg-slate-50 p-2.5 rounded-xl border border-slate-200 leading-relaxed">
                  💡 {c.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: HUROOF-E-MUQATTA'AT */}
      {activeTab === 'muqattaat' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#6B1B2A] to-amber-950 text-white p-5 rounded-3xl space-y-2">
            <h3 className="text-base font-black text-amber-200 flex items-center gap-2">
              <span>📖 Huroof-e-Muqatta'at (الحروف المقطعة)</span>
            </h3>
            <p className="text-xs text-amber-100/90 leading-relaxed">
              Disjoined letters appearing at the start of 29 Surahs in the Holy Quran. In Al-Hira Neo-Noorani Qaidah, they are recited by pronouncing their full individual letter names!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {muqattaat.map((m) => (
              <button
                key={m.text}
                onClick={() => playArabicAudio(m.text)}
                className="bg-white hover:bg-amber-50 border-2 border-slate-200 rounded-2xl p-4 text-center cursor-pointer transition-all hover:border-amber-400 shadow-2xs space-y-1 group"
              >
                <div className="font-arabic text-3xl font-black text-amber-950 group-hover:scale-105 transition-transform" dir="rtl">
                  {m.text}
                </div>
                <div className="text-xs font-extrabold text-slate-800 flex items-center justify-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-amber-600" /> {m.name}
                </div>
                <div className="text-[10px] text-slate-500">{m.detail}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Chapter 2: The Harakat (Short Vowels ONLY - ZERO Tanween / Sukun) ──────
const HarakatLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const vowels = [
    {
      name: 'Fatha (Zabar ـَ)',
      sound: 'Short "A" (as in "cat" 🐱)',
      color: 'from-rose-400 to-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      textColor: 'text-rose-700',
      rule: 'A short diagonal stroke ABOVE the letter with ascending sound. Read with shortest spell!',
      examples: [
        { letter: 'بَ', sound: 'Ba' },
        { letter: 'تَ', sound: 'Ta' },
        { letter: 'كَ', sound: 'Ka' },
        { letter: 'دَ', sound: 'Da' },
      ],
    },
    {
      name: 'Kasrah (Zer ـِ)',
      sound: 'Short "I" (as in "sit" 🪑)',
      color: 'from-sky-400 to-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      textColor: 'text-sky-700',
      rule: 'A short diagonal stroke BELOW the letter with descending sound. Drop lower jaw gently 😊!',
      examples: [
        { letter: 'بِ', sound: 'Bi' },
        { letter: 'تِ', sound: 'Ti' },
        { letter: 'كِ', sound: 'Ki' },
        { letter: 'دِ', sound: 'Di' },
      ],
    },
    {
      name: 'Dhamma (Pesh ـُ)',
      sound: 'Short "U" (as in "put" 🎁)',
      color: 'from-emerald-400 to-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      textColor: 'text-emerald-700',
      rule: 'A tiny loop like a mini Waw ABOVE the letter in forward pattern with rounded lips 👄!',
      examples: [
        { letter: 'بُ', sound: 'Bu' },
        { letter: 'تُ', sound: 'Tu' },
        { letter: 'كُ', sound: 'Ku' },
        { letter: 'دُ', sound: 'Du' },
      ],
    },
  ];

  const harakatExWords: ExerciseWord[] = [
    { arabic: 'دَرَسَ', transliteration: 'Da - ra - sa', meaning: 'He studied (Al-Hira Example)', tahjiya: [{ letter: 'دَ', name: 'Dal', vowelName: 'Fatha', sound: 'Da' }, { letter: 'رَ', name: 'Raa', vowelName: 'Fatha', sound: 'Ra' }, { letter: 'سَ', name: 'Seen', vowelName: 'Fatha', sound: 'Sa' }] },
    { arabic: 'كَتَبَ', transliteration: 'Ka - ta - ba', meaning: 'He wrote', tahjiya: [{ letter: 'كَ', name: 'Kaaf', vowelName: 'Fatha', sound: 'Ka' }, { letter: 'تَ', name: 'Taa', vowelName: 'Fatha', sound: 'Ta' }, { letter: 'بَ', name: 'Baa', vowelName: 'Fatha', sound: 'Ba' }] },
    { arabic: 'نَزَلَ', transliteration: 'Na - za - la', meaning: 'He descended' },
    { arabic: 'طَبَعَ', transliteration: 'Twa - ba - ʻa', meaning: 'He printed' },
    { arabic: 'رَدِفَ', transliteration: 'Ra - di - fa', meaning: 'He followed' },
    { arabic: 'حَمِدَ', transliteration: 'Ha - mi - da', meaning: 'He praised' },
    { arabic: 'رُسُلُ', transliteration: 'Ru - su - lu', meaning: 'Messengers' },
    { arabic: 'سُدُسُ', transliteration: 'Su - du - su', meaning: 'One-sixth' },
    { arabic: 'فُقِدَ', transliteration: 'Fu - qi - da', meaning: 'It was lost' },
    { arabic: 'خَلَقَ', transliteration: 'Kha - la - qa', meaning: 'He created' },
    { arabic: 'وَعَدَ', transliteration: 'Wa - ʻa - da', meaning: 'He promised' },
    { arabic: 'بَلَغَ', transliteration: 'Ba - la - gha', meaning: 'He reached' },
    { arabic: 'جَعَلَ', transliteration: 'Ja - ʻa - la', meaning: 'He made' },
    { arabic: 'وَجَدَ', transliteration: 'Wa - ja - da', meaning: 'He found' },
    { arabic: 'ذَهَبَ', transliteration: 'Zha - ha - ba', meaning: 'He went' },
    { arabic: 'قَرَاَ', transliteration: 'Qa - ra - a', meaning: 'He recited' },
    { arabic: 'مَنَعَ', transliteration: 'Ma - na - ʻa', meaning: 'He prevented' },
    { arabic: 'سَاَلَ', transliteration: 'Sa - a - la', meaning: 'He asked' },
    { arabic: 'وَقَعَ', transliteration: 'Wa - qa - ʻa', meaning: 'It fell' },
    { arabic: 'عَبَدَ', transliteration: 'ʻA - ba - da', meaning: 'He worshipped' },
    { arabic: 'حَسُنَ', transliteration: 'Ha - su - na', meaning: 'It was good' },
    { arabic: 'عَظُمَ', transliteration: 'ʻA - zhu - ma', meaning: 'It was grand' },
    { arabic: 'عَمِلَ', transliteration: 'ʻA - mi - la', meaning: 'He worked' },
    { arabic: 'كَبُرَ', transliteration: 'Ka - bu - ra', meaning: 'It was huge' },
  ];

  const tahjiyaDarasa = [
    { letter: 'دَ', name: 'Dal', vowelName: 'Fatha', sound: 'Da' },
    { letter: 'رَ', name: 'Raa', vowelName: 'Fatha', sound: 'Ra' },
    { letter: 'سَ', name: 'Seen', vowelName: 'Fatha', sound: 'Sa' },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch2Title[language]}
        points={APP_TRANSLATIONS.ch2Points[language]}
        language={language}
      />

      <NooraniTahjiyaWidget
        word="دَرَسَ"
        spellingSteps={tahjiyaDarasa}
        finalWord="دَرَسَ"
        finalSound="Darasa"
      />

      {/* Vowel Cards */}
      {vowels.map((v) => (
        <div key={v.name} className={`${v.bg} ${v.border} border-2 rounded-3xl p-5 space-y-4 shadow-xs`}>
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-sm`}>
              <span className="font-arabic text-3xl text-white font-black">{v.name.split(' ')[1]}</span>
            </div>
            <div>
              <h3 className={`text-lg font-black ${v.textColor}`}>{v.name}</h3>
              <p className="text-xs font-bold text-slate-700">{v.sound}</p>
              <p className="text-[11px] text-slate-600 mt-1">{v.rule}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {v.examples.map((ex) => (
              <button
                key={ex.letter}
                onClick={() => playArabicAudio(ex.letter)}
                className="bg-white hover:bg-amber-50 rounded-2xl p-3 text-center border border-slate-200 shadow-2xs transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="font-arabic text-3xl font-black text-slate-900 group-hover:text-amber-700">{ex.letter}</div>
                <div className={`text-xs font-extrabold ${v.textColor} mt-1 flex items-center justify-center gap-1`}>
                  <Volume2 className="w-3 h-3" /> {ex.sound}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Exhaustive 24-Word Master Practice Grid */}
      <ExhaustiveNooraniExerciseGrid
        title="Al-Hira Noorani Qaida Short-Vowels Master Exercises (الْمَشْقُ الْكَبِيرُ)"
        subtitle="24 Authentic 3-Letter Practice Words with ZERO Tanween or Sukun"
        words={harakatExWords}
      />
    </div>
  );
};

// ─── Chapter 3: Letter Joining & Word Building (Murakkabaat) ──────────────────
const LetterJoiningLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const nonJoiners = [
    { char: 'ا', name: 'Alif' },
    { char: 'د', name: 'Dal' },
    { char: 'ذ', name: 'Thal' },
    { char: 'ر', name: 'Raa' },
    { char: 'ز', name: 'Zay' },
    { char: 'و', name: 'Waw' },
  ];

  const joiningExamples = [
    { parts: 'ك + ت + ب', joined: 'كَتَبَ', sound: 'Ka - ta - ba', note: 'All 3 letters join continuously' },
    { parts: 'د + خ + ل', joined: 'دَخَلَ', sound: 'Da - kha - la', note: 'Dal (د) is a non-joiner!' },
    { parts: 'س + ج + د', joined: 'سَجَدَ', sound: 'Sa - ja - da', note: 'All 3 letters join continuously' },
    { parts: 'ع + ل + م', joined: 'عَلِمَ', sound: 'ʻA - li - ma', note: 'Meem at the end takes full tail' },
    { parts: 'د + ا + ر', joined: 'دَارَ', sound: 'Da - ra', note: 'Dal, Alif & Raa are all non-joiners!' },
  ];

  const positionForms = [
    { pos: 'Alaahida (Isolated)', arabic: 'ب', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
    { pos: 'Ibtidayi (Beginning)', arabic: 'بـ', bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800' },
    { pos: 'Darmiyani (Middle)', arabic: 'ـبـ', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
    { pos: 'Aakhri (End)', arabic: 'ـب', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800' },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch3Title[language]}
        points={APP_TRANSLATIONS.ch3Points[language]}
        language={language}
      />

      <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 space-y-3 shadow-xs">
        <h3 className="font-black text-slate-900 text-sm">4 Positional Forms — Example: Baa (ب)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {positionForms.map((f) => (
            <div key={f.pos} className={`${f.bg} ${f.border} border rounded-2xl p-3 text-center space-y-1`}>
              <div className="font-arabic text-4xl font-black text-slate-900" dir="rtl">{f.arabic}</div>
              <div className={`text-xs font-extrabold ${f.text}`}>{f.pos}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-rose-900 text-sm flex items-center gap-2">
            <span>🚫 The 6 Non-Joining Letters</span>
          </h3>
          <span className="text-[10px] bg-rose-200 text-rose-900 font-bold px-2 py-0.5 rounded-full">
            Never join to the LEFT
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          These 6 letters only join to the letter <em>before</em> them. They NEVER connect to the letter after them!
        </p>
        <div dir="rtl" className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {nonJoiners.map((l) => (
            <button
              key={l.char}
              onClick={() => playArabicAudio(l.char)}
              className="bg-white hover:bg-rose-100 border border-rose-200 rounded-2xl p-3 text-center cursor-pointer transition-all hover:scale-105 shadow-2xs"
            >
              <div className="font-arabic text-3xl font-black text-rose-900">{l.char}</div>
              <div dir="ltr" className="text-[10px] font-bold text-slate-500 mt-0.5">{l.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 space-y-4 shadow-lg">
        <h3 className="text-white font-black text-sm flex items-center gap-2">
          <Layers className="w-4.5 h-4.5 text-amber-400" />
          <span>Word Building in Action (Tap to Listen)</span>
        </h3>
        <div className="space-y-3">
          {joiningExamples.map((ex) => (
            <div
              key={ex.joined}
              onClick={() => playArabicAudio(ex.joined)}
              className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 cursor-pointer transition-all"
            >
              <div className="text-slate-300 font-mono text-xs font-bold text-center sm:text-left">{ex.parts}</div>
              <div className="font-arabic text-3xl font-black text-amber-300 text-center" dir="rtl">{ex.joined}</div>
              <div className="text-center sm:text-right">
                <div className="text-white font-bold text-sm flex items-center justify-center sm:justify-end gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{ex.sound}</span>
                </div>
                <div className="text-slate-400 text-[11px]">{ex.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exhaustive Master Practice Grid for Murakkabaat */}
      <ExhaustiveNooraniExerciseGrid
        title="Al-Hira Noorani Qaida Murakkabaat Master Exercises (الْمَشْقُ الْكَبِيرُ)"
        subtitle="20 Authentic Quranic Compound Words & Joined Letter Ligatures"
        words={[
          { arabic: 'كَتَبَ', transliteration: 'Ka - ta - ba', meaning: 'He wrote' },
          { arabic: 'دَخَلَ', transliteration: 'Da - kha - la', meaning: 'He entered' },
          { arabic: 'سَجَدَ', transliteration: 'Sa - ja - da', meaning: 'He prostrated' },
          { arabic: 'عَلِمَ', transliteration: 'ʻA - li - ma', meaning: 'He knew' },
          { arabic: 'دَارَ', transliteration: 'Da - ra', meaning: 'House / Abode' },
          { arabic: 'لا', transliteration: 'Laa', meaning: 'No / Not' },
          { arabic: 'لَهُم', transliteration: 'La - hum', meaning: 'For them' },
          { arabic: 'نَحْمَدُ', transliteration: 'Nah - ma - du', meaning: 'We praise' },
          { arabic: 'يَسْتَبْشِرُونَ', transliteration: 'Yas - tab - shi - roon', meaning: 'They rejoice' },
          { arabic: 'فَجَعَلَهُم', transliteration: 'Fa - ja - ʻa - la - hum', meaning: 'So He made them' },
          { arabic: 'بِأَيَّامِ', transliteration: 'Bi - ay - yaa - mi', meaning: 'In the days of' },
          { arabic: 'فِي أَعْنَاقِهِم', transliteration: 'Fee aʻ - naa - qi - him', meaning: 'Upon their necks' },
          { arabic: 'وَإِذَا قِيلَ', transliteration: 'Wa - i - zha qee - la', meaning: 'And when it is said' },
          { arabic: 'سَبِّحِ اسْمَ', transliteration: 'Sab - bi - his - ma', meaning: 'Exalt the name' },
          { arabic: 'وَالْفَجْرِ', transliteration: 'Wal - fajr', meaning: 'By the dawn' },
          { arabic: 'وَالَّيْلِ', transliteration: 'Wal - layl', meaning: 'By the night' },
          { arabic: 'إِذَا يَسْرِ', transliteration: 'I - zha yasr', meaning: 'When it passes' },
          { arabic: 'وَيَمْنَعُونَ', transliteration: 'Wa - yam - na - ʻoon', meaning: 'And they withhold' },
          { arabic: 'الْمَاعُونَ', transliteration: 'Al - maa - ʻoon', meaning: 'Small kindnesses' },
          { arabic: 'يَعْمَلُونَ', transliteration: 'Yaʻ - ma - loon', meaning: 'They work / do' },
        ]}
      />
    </div>
  );
};

// ─── Chapter 4: Tanween (Double Vowels - Noun Endings) ────────────────────────
const TanweenLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const tanweenTypes = [
    {
      name: 'Fathatain (Double Zabar ـً) — "-an"',
      arabic: 'ـً',
      sound: '-an (e.g. Ba + an = Ban)',
      color: 'from-amber-500 to-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      textColor: 'text-amber-900',
      rule: 'Two Fatha lines on top. Requires an extra standing Alif at the end of most words.',
      examples: [
        { arabic: 'أَبَدًا', sound: 'A-ba-dan', meaning: 'Forever' },
        { arabic: 'عَمَلًا', sound: 'ʻA-ma-lan', meaning: 'Action' },
        { arabic: 'شُكْرًا', sound: 'Shuk-ran', meaning: 'Thanks' },
      ],
    },
    {
      name: 'Kasratain (Double Zer ـٍ) — "-in"',
      arabic: 'ـٍ',
      sound: '-in (e.g. Ba + in = Bin)',
      color: 'from-sky-500 to-sky-700',
      bg: 'bg-sky-50',
      border: 'border-sky-300',
      textColor: 'text-sky-900',
      rule: 'Two Kasrah lines below the letter. Adds a clean "-in" sound under the letter.',
      examples: [
        { arabic: 'كُتُبٍ', sound: 'Ku-tu-bin', meaning: 'Books' },
        { arabic: 'قَمَرٍ', sound: 'Qa-ma-rin', meaning: 'Moon' },
        { arabic: 'لَهَبٍ', sound: 'La-ha-bin', meaning: 'Flame' },
      ],
    },
    {
      name: 'Dhammatain (Double Pesh ـٌ) — "-un"',
      arabic: 'ـٌ',
      sound: '-un (e.g. Ba + un = Bun)',
      color: 'from-emerald-500 to-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-300',
      textColor: 'text-emerald-900',
      rule: 'Two Dhamma loops on top. Creates the default "-un" noun ending sound.',
      examples: [
        { arabic: 'رَجُلٌ', sound: 'Ra-ju-lun', meaning: 'A man' },
        { arabic: 'قَلَمٌ', sound: 'Qa-la-mun', meaning: 'A pen' },
        { arabic: 'مَلَكٌ', sound: 'Ma-la-kun', meaning: 'An angel' },
      ],
    },
  ];

  const tahjiyaAbadan = [
    { letter: 'أَ', name: 'Hamzah', vowelName: 'Fatha', sound: 'A' },
    { letter: 'بَ', name: 'Baa', vowelName: 'Fatha', sound: 'Ba' },
    { letter: 'دً', name: 'Dal', vowelName: 'Fathatain', sound: 'Dan' },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch4Title[language]}
        points={APP_TRANSLATIONS.ch4Points[language]}
        language={language}
      />

      <NooraniTahjiyaWidget
        word="أَبَدًا"
        spellingSteps={tahjiyaAbadan}
        finalWord="أَبَدًا"
        finalSound="Abadan"
      />

      {tanweenTypes.map((t) => (
        <div key={t.name} className={`${t.bg} ${t.border} border-2 rounded-3xl p-5 space-y-4 shadow-xs`}>
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-sm`}>
              <span className="font-arabic text-3xl text-white font-black">{t.arabic}</span>
            </div>
            <div>
              <h3 className={`text-base font-black ${t.textColor}`}>{t.name}</h3>
              <p className="text-xs font-bold text-slate-700">{t.sound}</p>
              <p className="text-[11px] text-slate-600 mt-1">{t.rule}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {t.examples.map((ex) => (
              <button
                key={ex.arabic}
                onClick={() => playArabicAudio(ex.arabic)}
                className="bg-white hover:bg-amber-50 rounded-2xl p-3 text-center border border-slate-200 shadow-2xs transition-all hover:scale-105 cursor-pointer group space-y-1"
              >
                <div className="font-arabic text-3xl font-black text-slate-900 group-hover:text-amber-700" dir="rtl">
                  {ex.arabic}
                </div>
                <div className={`text-xs font-bold ${t.textColor} flex items-center justify-center gap-1`}>
                  <Volume2 className="w-3 h-3" /> {ex.sound}
                </div>
                <div className="text-[10px] text-slate-500">{ex.meaning}</div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Exhaustive Master Practice Grid for Tanween */}
      <ExhaustiveNooraniExerciseGrid
        title="Al-Hira Noorani Qaida Tanween Master Exercises (الْمَشْقُ الْكَبِيرُ)"
        subtitle="24 Authentic Quranic Words with Fathatain, Kasratain & Dhammatain"
        words={[
          { arabic: 'أَبَدًا', transliteration: 'A - ba - dan', meaning: 'Forever', tahjiya: [{ letter: 'أَ', name: 'Hamzah', vowelName: 'Fatha', sound: 'A' }, { letter: 'بَ', name: 'Baa', vowelName: 'Fatha', sound: 'Ba' }, { letter: 'دً', name: 'Dal', vowelName: 'Fathatain', sound: 'Dan' }] },
          { arabic: 'أَحَدٌ', transliteration: 'A - ha - dun', meaning: 'One / Anyone' },
          { arabic: 'كُفُوًا', transliteration: 'Ku - fu - wan', meaning: 'Equal / Comparable' },
          { arabic: 'قَوْمٍ', transliteration: 'Qaw - min', meaning: 'People' },
          { arabic: 'عَدَلَك', transliteration: 'ʻA - da - la - ka', meaning: 'He proportioned you' },
          { arabic: 'سَفَرَةٍ', transliteration: 'Sa - fa - ra - tin', meaning: 'Scribes / Angels' },
          { arabic: 'قَتَرَةٌ', transliteration: 'Qa - ta - ra - tun', meaning: 'Darkness / Dust' },
          { arabic: 'رَقَبَةٍ', transliteration: 'Ra - qa - ba - tin', meaning: 'A neck / slave' },
          { arabic: 'حَاسِدٍ', transliteration: 'Haa - si - din', meaning: 'An envier' },
          { arabic: 'وَقَبٍ', transliteration: 'Wa - qa - bin', meaning: 'Overspreads' },
          { arabic: 'حِجَارَةً', transliteration: 'Hi - jaa - ra - tan', meaning: 'Stones' },
          { arabic: 'مَّرْفُوعَةٍ', transliteration: 'Mar - foo - ʻa - tin', meaning: 'Exalted' },
          { arabic: 'مُّطَهَّرَةٍ', transliteration: 'Mu - tah - ha - ra - tin', meaning: 'Purified' },
          { arabic: 'عَذَابٌ', transliteration: 'ʻA - zhaa - bun', meaning: 'A punishment' },
          { arabic: 'عَظِيمٌ', transliteration: 'ʻA - zhee - mun', meaning: 'Great / Severe' },
          { arabic: 'أَلِيمٌ', transliteration: 'A - lee - mun', meaning: 'Painful' },
          { arabic: 'خَيْرًا', transliteration: 'Khay - ran', meaning: 'Good' },
          { arabic: 'شَرًّا', transliteration: 'Shar - ran', meaning: 'Evil' },
          { arabic: 'طَيِّبًا', transliteration: 'Tay - yi - ban', meaning: 'Good / Pure' },
          { arabic: 'مُّبِينًا', transliteration: 'Mu - bee - nan', meaning: 'Clear' },
          { arabic: 'رَحِيمٌ', transliteration: 'Ra - hee - mun', meaning: 'Merciful' },
          { arabic: 'غَفُورٌ', transliteration: 'Gha - foo - run', meaning: 'Forgiving' },
          { arabic: 'سَمِيعًا', transliteration: 'Sa - mee - ʻan', meaning: 'All-Hearing' },
          { arabic: 'بَصِيرًا', transliteration: 'Ba - see - ran', meaning: 'All-Seeing' },
        ]}
      />
    </div>
  );
};

// ─── Chapter 5: Sukoon (Saakin) & Qalqalah Bouncing ───────────────────────────
const SukunQalqalahLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const sukunExamples = [
    { arabic: 'أَبْ', sound: 'Ab', note: 'Rest silently on Baa', tag: '🔵 Qalqalah' },
    { arabic: 'مَنْ', sound: 'Man', note: 'Rest silently on Noon', tag: 'Izhaar' },
    { arabic: 'هَلْ', sound: 'Hal', note: 'Rest silently on Laam', tag: 'Clear' },
    { arabic: 'قُلْ', sound: 'Qul', note: 'Rest silently on Laam', tag: 'Clear' },
  ];

  const hamzahSaakinahExamples = [
    { arabic: 'تَأْتِ', sound: 'Ta-ti (with Jerk)', note: 'Hamzah-Saakinah Twitch' },
    { arabic: 'يَأْكُلُ', sound: 'Ya-kulu (with Jerk)', note: 'Jhatka Effect' },
    { arabic: 'يُؤْمِنُونَ', sound: 'Yu-minoona (with Jerk)', note: 'Jhatka Effect' },
    { arabic: 'بِئْسَ', sound: 'Bi-sa (with Jerk)', note: 'Jhatka Effect' },
  ];

  const qalqalahLetters = [
    { char: 'ق', name: 'Qaf' },
    { char: 'ط', name: 'Taa' },
    { char: 'ب', name: 'Baa' },
    { char: 'ج', name: 'Jeem' },
    { char: 'د', name: 'Dal' },
  ];

  const qalqalahExamples = [
    { arabic: 'أَقْ', sound: 'Aq (Bounced Q)' },
    { arabic: 'أَطْ', sound: 'At (Bounced Heavy T)' },
    { arabic: 'أَبْ', sound: 'Ab (Bounced B)' },
    { arabic: 'أَجْ', sound: 'Aj (Bounced J)' },
    { arabic: 'أَدْ', sound: 'Ad (Bounced D)' },
  ];

  const verseStops = [
    { arabic: 'فَلَقْ', sound: 'Falaq (Bounced Qaf stop)' },
    { arabic: 'أَحَدْ', sound: 'Ahad (Bounced Dal stop)' },
    { arabic: 'كَسَبْ', sound: 'Kasab (Bounced Baa stop)' },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch5Title[language]}
        points={APP_TRANSLATIONS.ch5Points[language]}
        language={language}
      />

      <TajweedColorLegend language={language} />

      {/* Hamzah Saakinah Twitch Effect Box */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 space-y-3">
        <h3 className="font-black text-amber-950 text-sm flex items-center gap-2">
          <span>⚡ Hamzah-Saakinah Jerk / Twitch Effect (Jhatka)</span>
        </h3>
        <p className="text-xs text-amber-900">
          When Hamzah carries Sukoon (أْ إْ ؤْ ئْ), stop your breath sharply with a jerk:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {hamzahSaakinahExamples.map((ex) => (
            <button
              key={ex.arabic}
              onClick={() => playArabicAudio(ex.arabic)}
              className="bg-white hover:bg-amber-100 border border-amber-300 rounded-2xl p-3 text-center transition-all hover:scale-105 shadow-2xs cursor-pointer space-y-0.5"
            >
              <div className="font-arabic font-black text-2xl text-amber-950" dir="rtl">{ex.arabic}</div>
              <div className="text-[11px] font-bold text-amber-800">{ex.sound}</div>
              <div className="text-[10px] text-slate-500">{ex.note}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border-2 border-emerald-200 rounded-3xl p-5 space-y-4 shadow-xs">
        <h3 className="font-black text-emerald-950 text-base">Sukoon Silent Rest Examples (Tap to Listen)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sukunExamples.map((ex) => (
            <button
              key={ex.arabic}
              onClick={() => playArabicAudio(ex.arabic)}
              className="bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-300 rounded-2xl p-4 text-center cursor-pointer transition-all hover:scale-105 shadow-2xs group space-y-1"
            >
              <div className="font-arabic text-3xl font-black text-emerald-950 group-hover:scale-110 transition-transform" dir="rtl">
                {ex.arabic}
              </div>
              <div className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1">
                <Volume2 className="w-3 h-3 text-emerald-600" /> {ex.sound}
              </div>
              <div className="text-[10px] text-slate-500">{ex.note}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 space-y-5 shadow-lg">
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-black text-base flex items-center gap-2">
              <span>⚡ Qalqalah — The 5 Bouncing Echo Letters</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-bold border border-sky-400/30">
                🔵 Blue Tag
              </span>
            </h3>
            <p className="text-slate-300 text-xs mt-1 leading-relaxed">
              When any of these 5 letters carry Sukoon (ـْ), release them with a quick bouncing echo: <span className="text-sky-400 font-bold font-arabic text-sm">قُطْبُ جَدٍّ</span>
            </p>
          </div>
        </div>

        <div dir="rtl" className="flex justify-center gap-2 sm:gap-3">
          {qalqalahLetters.map((l) => (
            <button
              key={l.char}
              onClick={() => playArabicAudio(l.char)}
              className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 hover:bg-sky-400/30 text-sky-300 font-arabic text-2xl font-black flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
            >
              {l.char}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-white/10">
          {qalqalahExamples.map((ex) => (
            <button
              key={ex.arabic}
              onClick={() => playArabicAudio(ex.arabic)}
              className="bg-sky-900/40 hover:bg-sky-900/60 border border-sky-500/30 rounded-2xl p-3 text-center cursor-pointer transition-all"
            >
              <div className="font-arabic text-2xl font-black text-sky-300" dir="rtl">{ex.arabic}</div>
              <div className="text-[11px] font-bold text-white mt-1">{ex.sound}</div>
            </button>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
          <h4 className="text-xs font-bold text-sky-300">📖 Verse-Ending Qalqalah Echoes:</h4>
          <div className="grid grid-cols-3 gap-2">
            {verseStops.map((v) => (
              <button
                key={v.arabic}
                onClick={() => playArabicAudio(v.arabic)}
                className="bg-white/10 hover:bg-white/20 rounded-xl p-2.5 text-center cursor-pointer"
              >
                <div className="font-arabic text-xl font-black text-white" dir="rtl">{v.arabic}</div>
                <div className="text-[10px] text-slate-300">{v.sound}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exhaustive Master Practice Grid for Sukoon & Qalqalah */}
      <ExhaustiveNooraniExerciseGrid
        title="Al-Hira Noorani Qaida Sukoon & Qalqalah Master Exercises (الْمَشْقُ الْكَبِيرُ)"
        subtitle="24 Authentic Practice Words with Saakin Rest, Qalqalah Bounce & Hamzah-Jhatka"
        words={[
          { arabic: 'أَقْ', transliteration: 'Aq', tag: '🔵 Qalqalah', meaning: 'Bounced Qaf' },
          { arabic: 'أَطْ', transliteration: 'At', tag: '🔵 Qalqalah', meaning: 'Bounced Heavy Taa' },
          { arabic: 'أَبْ', transliteration: 'Ab', tag: '🔵 Qalqalah', meaning: 'Bounced Baa' },
          { arabic: 'أَجْ', transliteration: 'Aj', tag: '🔵 Qalqalah', meaning: 'Bounced Jeem' },
          { arabic: 'أَدْ', transliteration: 'Ad', tag: '🔵 Qalqalah', meaning: 'Bounced Dal' },
          { arabic: 'فَلَقْ', transliteration: 'Fa - laq', tag: '🔵 Qalqalah', meaning: 'Daybreak' },
          { arabic: 'أَحَدْ', transliteration: 'A - had', tag: '🔵 Qalqalah', meaning: 'One' },
          { arabic: 'كَسَبْ', transliteration: 'Ka - sab', tag: '🔵 Qalqalah', meaning: 'He earned' },
          { arabic: 'مَسَدْ', transliteration: 'Ma - sad', tag: '🔵 Qalqalah', meaning: 'Palm fiber' },
          { arabic: 'وَقَبْ', transliteration: 'Wa - qab', tag: '🔵 Qalqalah', meaning: 'Overspreads' },
          { arabic: 'تَأْتِ', transliteration: 'Ta - ti', tag: '⚡ Jhatka Twitch', meaning: 'She comes' },
          { arabic: 'يَأْكُلُ', transliteration: 'Ya - ku - lu', tag: '⚡ Jhatka Twitch', meaning: 'He eats' },
          { arabic: 'يُؤْمِنُونَ', transliteration: 'Yu - mi - noon', tag: '⚡ Jhatka Twitch', meaning: 'They believe' },
          { arabic: 'بِئْسَ', transliteration: 'Bi - sa', tag: '⚡ Jhatka Twitch', meaning: 'Wretched / Evil' },
          { arabic: 'أَنْعَمْتَ', transliteration: 'An - ʻam - ta', meaning: 'You favored' },
          { arabic: 'عَلَيْهِمْ', transliteration: 'ʻA - lay - him', meaning: 'Upon them' },
          { arabic: 'أَصْحَابَ', transliteration: 'As - haa - ba', meaning: 'Companions' },
          { arabic: 'الْفِيلِ', transliteration: 'Al - feel', meaning: 'The Elephant' },
          { arabic: 'تَرْمِيهِم', transliteration: 'Tar - mee - him', meaning: 'Striking them' },
          { arabic: 'بِحِجَارَةٍ', transliteration: 'Bi - hi - jaa - ra - tin', meaning: 'With stones' },
          { arabic: 'سِجِّيلٍ', transliteration: 'Sij - jeel', meaning: 'Hard clay' },
          { arabic: 'فَجَعَلَهُمْ', transliteration: 'Fa - ja - ʻa - la - hum', meaning: 'And made them' },
          { arabic: 'كَعَصْفٍ', transliteration: 'Ka - ʻasf', meaning: 'Like eaten straw' },
          { arabic: 'مَّأْكُولٍ', transliteration: 'Ma - kool', tag: '⚡ Jhatka Twitch', meaning: 'Eaten up' },
        ]}
      />
    </div>
  );
};

// ─── Chapter 6: Maddah Letters, Standing Vowels & Leen ────────────────────────
const MaddLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const maddLetters = [
    { letter: 'ا', name: 'Alif Maddah', after: 'Fatha (ـَ)', example: 'قَالَ', sound: 'Qaala (2 Counts)' },
    { letter: 'و', name: 'Waaw-Maddah', after: 'Dhamma (ـُ)', example: 'يَقُولُ', sound: 'Yaqoolu (2 Counts)' },
    { letter: 'ي', name: 'Yaa-Maddah', after: 'Kasrah (ـِ)', example: 'قِيلَ', sound: 'Qeela (2 Counts)' },
  ];

  const standingVowels = [
    { arabic: 'هٰذَا', name: 'Alif-Sageera (Khada-Zabar)', sound: 'Haa-dhaa (2 Counts)' },
    { arabic: 'إِيلٰفِهِمْ', name: 'Yaa-Sageera (Khadi-Zer)', sound: 'Ee-laa-fi-him (2 Counts)' },
    { arabic: 'لَهُۥ', name: 'Waaw-Sageera (Ulta-Pesh)', sound: 'La-hoo (2 Counts)' },
  ];

  const leenLetters = [
    { arabic: 'خَوْف', sound: 'Khawf', note: 'Waaw-Leen (Waaw saakin after Fatha)' },
    { arabic: 'صَيْف', sound: 'Sayf', note: 'Yaa-Leen (Yaa saakin after Fatha)' },
    { arabic: 'بَيْت', sound: 'Bayt', note: 'Yaa-Leen' },
    { arabic: 'قُرَيْش', sound: 'Quraysh', note: 'Yaa-Leen' },
  ];

  const maddTypes = [
    {
      name: 'Natural Maddah (Asli - 🔴 Red)',
      counts: '2 Counts',
      color: 'from-rose-500 to-rose-700',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      textColor: 'text-rose-800',
      rule: 'Standard 2-count stretch when Alif, Waaw, or Yaa follow their matching short vowel.',
      examples: [
        { arabic: 'قَالَ', sound: 'Qaa-la' },
        { arabic: 'يَقُولُ', sound: 'Ya-qoo-lu' },
        { arabic: 'قِيلَ', sound: 'Qee-la' },
      ],
    },
    {
      name: 'Connected Long Madd (Muttasil ~ ۤ - 🔴 Red)',
      counts: '4–5 Counts',
      color: 'from-indigo-500 to-indigo-700',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      textColor: 'text-indigo-900',
      rule: 'Madd letter followed by Hamzah (ء) in the SAME word. Look for the wave sign (~ ۤ)!',
      examples: [
        { arabic: 'جَآءَ', sound: 'Jaaaa-a' },
        { arabic: 'السَّمَآءِ', sound: 'As-samaaaa-i' },
        { arabic: 'جِيءَ', sound: 'Jeeee-a' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch6Title[language]}
        points={APP_TRANSLATIONS.ch6Points[language]}
        language={language}
      />

      <TajweedColorLegend language={language} />

      {/* 3 Stretchers */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 space-y-4 shadow-xs">
        <h3 className="font-black text-slate-900 text-sm">The 3 Foundation Madd Stretchers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {maddLetters.map((m) => (
            <button
              key={m.letter}
              onClick={() => playArabicAudio(m.example)}
              className="bg-slate-50 hover:bg-rose-50 rounded-2xl p-4 text-center border border-slate-200 shadow-2xs transition-all hover:scale-105 cursor-pointer space-y-1"
            >
              <div className="font-arabic text-4xl font-black text-rose-600">{m.letter}</div>
              <div className="text-xs font-bold text-slate-800">{m.name}</div>
              <div className="text-[10px] text-slate-500">After {m.after}</div>
              <div className="font-arabic text-2xl text-rose-700 font-black pt-2 border-t border-slate-200" dir="rtl">
                {m.example}
              </div>
              <div className="text-[11px] font-bold text-rose-800 flex items-center justify-center gap-1">
                <Volume2 className="w-3 h-3 text-rose-600" /> {m.sound}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Standing Vowels (Al-Hira Lesson 5-B) */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 space-y-3">
        <h3 className="font-black text-amber-950 text-sm flex items-center gap-2">
          <span>✨ Al-Hira Lesson 5-B: Identities of Maddah-Letters</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {standingVowels.map((s) => (
            <button
              key={s.arabic}
              onClick={() => playArabicAudio(s.arabic)}
              className="bg-white hover:bg-amber-100 rounded-2xl p-3.5 text-center border border-amber-200 shadow-2xs transition-all hover:scale-105 cursor-pointer space-y-1"
            >
              <div className="font-arabic text-3xl font-black text-rose-600" dir="rtl">{s.arabic}</div>
              <div className="text-xs font-extrabold text-amber-900">{s.name}</div>
              <div className="text-[10px] text-slate-500">{s.sound}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Leen Letters (Al-Hira Lesson 6) */}
      <div className="bg-sky-50 border-2 border-sky-300 rounded-3xl p-5 space-y-3">
        <h3 className="font-black text-sky-950 text-sm flex items-center gap-2">
          <span>🍃 Al-Hira Lesson 6: Leen-Letters (Waaw-Leen &amp; Yaa-Leen)</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {leenLetters.map((l) => (
            <button
              key={l.arabic}
              onClick={() => playArabicAudio(l.arabic)}
              className="bg-white hover:bg-sky-100 rounded-2xl p-3 text-center border border-sky-200 shadow-2xs transition-all hover:scale-105 cursor-pointer space-y-1"
            >
              <div className="font-arabic text-2xl font-black text-sky-950" dir="rtl">{l.arabic}</div>
              <div className="text-xs font-bold text-sky-800">{l.sound}</div>
              <div className="text-[10px] text-slate-500">{l.note}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Madd Types */}
      {maddTypes.map((t) => (
        <div key={t.name} className={`${t.bg} ${t.border} border-2 rounded-3xl p-5 space-y-3 shadow-xs`}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-base font-black ${t.textColor}`}>{t.name}</h3>
              <p className="text-xs text-slate-600 mt-1">{t.rule}</p>
            </div>
            <span className={`text-xs font-black ${t.textColor} bg-white px-2.5 py-1 rounded-xl border shrink-0 ml-2`}>
              {t.counts}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {t.examples.map((ex) => (
              <button
                key={ex.arabic}
                onClick={() => playArabicAudio(ex.arabic)}
                className="bg-white hover:bg-amber-50 rounded-2xl p-3 text-center border border-slate-200 shadow-2xs cursor-pointer transition-all"
              >
                <div className="font-arabic text-2xl font-black text-rose-600 mb-1" dir="rtl">{ex.arabic}</div>
                <div className={`text-xs font-bold ${t.textColor}`}>{ex.sound}</div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Exhaustive Master Practice Grid for Maddah & Leen */}
      <ExhaustiveNooraniExerciseGrid
        title="Al-Hira Noorani Qaida Maddah & Leen Master Exercises (الْمَشْقُ الْكَبِيرُ)"
        subtitle="24 Authentic Practice Words with Maddah Long Stretch & Leen Soft Glide"
        words={[
          { arabic: 'قَالَ', transliteration: 'Qaa - la', tag: 'Madd Asli', meaning: 'He said' },
          { arabic: 'قِيلَ', transliteration: 'Qee - la', tag: 'Madd Asli', meaning: 'It was said' },
          { arabic: 'يَقُولُ', transliteration: 'Ya - qoo - lu', tag: 'Madd Asli', meaning: 'He says' },
          { arabic: 'آدَمَ', transliteration: 'Aa - da - ma', tag: 'Standing Alif', meaning: 'Adam' },
          { arabic: 'إِيلٰفِهِمْ', transliteration: 'Ee - laa - fi - him', tag: 'Standing Vowels', meaning: 'Their accustomed security' },
          { arabic: 'لَهُۥ', transliteration: 'La - hoo', tag: 'Ulta Pesh', meaning: 'For him' },
          { arabic: 'خَوْفٌ', transliteration: 'Khaw - fun', tag: 'Waaw Leen', meaning: 'Fear' },
          { arabic: 'صَيْفٌ', transliteration: 'Say - fun', tag: 'Yaa Leen', meaning: 'Summer' },
          { arabic: 'رَيْبَ', transliteration: 'Ray - ba', tag: 'Yaa Leen', meaning: 'Doubt' },
          { arabic: 'قُرَيْشٍ', transliteration: 'Qu - ray - shin', tag: 'Yaa Leen', meaning: 'Quraysh' },
          { arabic: 'أَ رَاَيْتَ', transliteration: 'A - ra - ay - ta', meaning: 'Have you seen' },
          { arabic: 'الَّذِي', transliteration: 'Al - la - zhee', tag: 'Madd Asli', meaning: 'The one who' },
          { arabic: 'يُكَذِّبُ', transliteration: 'Yu - kazh - zhi - bu', meaning: 'Denies / Lies' },
          { arabic: 'بِالدِّينِ', transliteration: 'Bid - deen', tag: 'Madd Asli', meaning: 'The Recompense' },
          { arabic: 'فَذٰلِكَ', transliteration: 'Fa - zhaa - li - ka', tag: 'Standing Alif', meaning: 'For that is' },
          { arabic: 'يَدُعُّ', transliteration: 'Ya - duʻ - ʻu', meaning: 'Repels harshly' },
          { arabic: 'الْيَتِيمَ', transliteration: 'Al - ya - teem', tag: 'Madd Asli', meaning: 'The orphan' },
          { arabic: 'وَلاَ', transliteration: 'Wa - laa', tag: 'Madd Asli', meaning: 'And not' },
          { arabic: 'يَحُضُّ', transliteration: 'Ya - hud - du', meaning: 'Urges / Encourages' },
          { arabic: 'عَلَىٰ', transliteration: 'ʻA - laa', tag: 'Standing Alif', meaning: 'Upon / To' },
          { arabic: 'طَعَامِ', transliteration: 'Twa - ʻaa - mi', tag: 'Madd Asli', meaning: 'The food of' },
          { arabic: 'الْمِسْكِينِ', transliteration: 'Al - mis - keen', tag: 'Madd Asli', meaning: 'The needy' },
          { arabic: 'فَوَيْلٌ', transliteration: 'Fa - way - lun', tag: 'Yaa Leen', meaning: 'So woe' },
          { arabic: 'لِّلْمُصَلِّينَ', transliteration: 'Lil - mu - sal - leen', tag: 'Madd Asli', meaning: 'To those who pray' },
        ]}
      />
    </div>
  );
};

// ─── Chapter 7: Tashdeed, Ghunnah & Rule of "Allah" ──────────────────────────
const TashdeedLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const examples = [
    { arabic: 'رَبَّنَا', sound: 'Rab-ba-na', note: 'Doubled Baa (بّ)' },
    { arabic: 'إِنَّ', sound: 'In-na', note: 'Doubled Noon (نّ) + Ghunnah 🟢' },
    { arabic: 'عَمَّ', sound: 'ʻAm-ma', note: 'Doubled Meem (مّ) + Ghunnah 🟢' },
  ];

  const ghunnahEx = [
    { arabic: 'إِنَّ', sound: 'In-na (Nasal hum 1 Alif duration)' },
    { arabic: 'ثُمَّ', sound: 'Thum-ma (Nasal hum 1 Alif duration)' },
    { arabic: 'عَمَّ', sound: 'ʻAm-ma (Nasal hum 1 Alif duration)' },
  ];

  const laamJalalahHeavy = [
    { arabic: 'قَالَ اللَّهُ', sound: 'Qaalal-laah', note: 'Preceded by Fatha ➔ Heavy (Mota)' },
    { arabic: 'خَلَقَ اللَّهُ', sound: 'Khalaqal-laah', note: 'Preceded by Fatha ➔ Heavy (Mota)' },
    { arabic: 'إِنَّ اللَّهَ', sound: 'Innallaaha', note: 'Preceded by Fatha ➔ Heavy (Mota)' },
  ];

  const laamJalalahLight = [
    { arabic: 'بِسْمِ اللَّهِ', sound: 'Bismillaahi', note: 'Preceded by Kasrah ➔ Light (Bareek)' },
    { arabic: 'سَبِيلِ اللَّهِ', sound: 'Sabeelillaahi', note: 'Preceded by Kasrah ➔ Light (Bareek)' },
    { arabic: 'لِلَّهِ', sound: 'Lillaahi', note: 'Preceded by Kasrah ➔ Light (Bareek)' },
  ];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch7Title[language]}
        points={APP_TRANSLATIONS.ch7Points[language]}
        language={language}
      />

      <TajweedColorLegend language={language} />

      {/* Laam-e-Jalalah Rule Box */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-3xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-purple-950 text-sm flex items-center gap-2">
            <span>👑 Laam-e-Jalalah Rule (Pronouncing the Word "Allah")</span>
          </h3>
          <span className="text-[10px] bg-purple-200 text-purple-900 font-bold px-2 py-0.5 rounded-full">
            Heavy vs Light
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Heavy side */}
          <div className="bg-white rounded-2xl p-4 border border-purple-200 space-y-2">
            <span className="text-[10px] font-bold uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
              🐘 Heavy (Mota) after Fatha / Dhamma
            </span>
            <div className="space-y-1.5">
              {laamJalalahHeavy.map((item) => (
                <button
                  key={item.arabic}
                  onClick={() => playArabicAudio(item.arabic)}
                  className="w-full p-2.5 rounded-xl bg-amber-50/70 hover:bg-amber-100 border border-amber-200 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span className="font-arabic text-xl font-black text-slate-900" dir="rtl">{item.arabic}</span>
                  <span className="text-xs font-bold text-amber-900">{item.sound}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Light side */}
          <div className="bg-white rounded-2xl p-4 border border-purple-200 space-y-2">
            <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
              🦋 Light (Bareek) after Kasrah
            </span>
            <div className="space-y-1.5">
              {laamJalalahLight.map((item) => (
                <button
                  key={item.arabic}
                  onClick={() => playArabicAudio(item.arabic)}
                  className="w-full p-2.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span className="font-arabic text-xl font-black text-slate-900" dir="rtl">{item.arabic}</span>
                  <span className="text-xs font-bold text-emerald-900">{item.sound}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-5 space-y-4">
        <h3 className="font-black text-orange-950 text-base">Shaddah Structural Breakdown</h3>
        <div className="bg-white rounded-2xl p-5 text-center border border-orange-200 shadow-2xs space-y-2">
          <div className="font-arabic text-5xl font-black text-slate-900" dir="rtl">رَبَّ</div>
          <div className="text-xs text-slate-500 font-mono" dir="rtl">رَبْ + بَ = رَبَّ</div>
          <div className="text-sm font-bold text-orange-800">Rab + ba = Rabba</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {examples.map((ex) => (
            <button
              key={ex.arabic}
              onClick={() => playArabicAudio(ex.arabic)}
              className="bg-white hover:bg-orange-100 rounded-2xl p-3 text-center border border-orange-200 shadow-2xs cursor-pointer transition-all"
            >
              <div className="font-arabic text-3xl font-black text-slate-900 mb-1" dir="rtl">{ex.arabic}</div>
              <div className="text-xs font-bold text-orange-800">{ex.sound}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{ex.note}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 space-y-4 shadow-lg">
        <div className="flex items-start gap-3">
          <Mic className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-black text-base flex items-center gap-2">
              <span>🔔 Ghunnah — 1-Alif Resonant Nasal Hum on نّ and مّ</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">
                🟢 Green Tag
              </span>
            </h3>
            <p className="text-slate-300 text-xs mt-1">
              Whenever Noon (نّ) or Meem (مّ) carries Tashdeed, hold a resonant hum inside your nose for 1 Alif duration!
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {['نّ', 'مّ'].map((l) => (
            <button
              key={l}
              onClick={() => playArabicAudio(l)}
              className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 hover:bg-emerald-400/30 text-emerald-300 font-arabic text-3xl font-black flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {ghunnahEx.map((ex) => (
            <button
              key={ex.arabic}
              onClick={() => playArabicAudio(ex.arabic)}
              className="bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 rounded-2xl p-3 text-center cursor-pointer transition-all"
            >
              <div className="font-arabic text-2xl text-emerald-300 font-black" dir="rtl">{ex.arabic}</div>
              <div className="text-emerald-200 font-bold text-[11px] mt-1">{ex.sound}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Exhaustive Master Practice Grid for Tashdeed & Laam-e-Jalalah */}
      <ExhaustiveNooraniExerciseGrid
        title="Al-Hira Noorani Qaida Tashdeed & Laam-e-Jalalah Master Exercises (الْمَشْقُ الْكَبِيرُ)"
        subtitle="24 Authentic Practice Words with Doubled Shaddah, Ghunnah & Heavy/Light Laam of Allah"
        words={[
          { arabic: 'رَبَّ', transliteration: 'Rab - ba', note: 'Shaddah on Baa' },
          { arabic: 'حَقَّ', transliteration: 'Haq - qa', note: 'Shaddah on Heavy Qaf' },
          { arabic: 'مَدَّ', transliteration: 'Mad - da', note: 'Shaddah on Dal' },
          { arabic: 'إِنَّ', transliteration: 'In - na', tag: '🟢 Ghunnah', meaning: 'Indeed' },
          { arabic: 'ثُمَّ', transliteration: 'Thum - ma', tag: '🟢 Ghunnah', meaning: 'Then / Next' },
          { arabic: 'عَمَّ', transliteration: 'ʻAm - ma', tag: '🟢 Ghunnah', meaning: 'About what' },
          { arabic: 'قَالَ اللَّهُ', transliteration: 'Qaa - lal - laah', tag: '🐘 Heavy Allah', meaning: 'Allah said' },
          { arabic: 'خَلَقَ اللَّهُ', transliteration: 'Kha - la - qal - laah', tag: '🐘 Heavy Allah', meaning: 'Allah created' },
          { arabic: 'إِنَّ اللَّهَ', transliteration: 'In - nal - laa - ha', tag: '🐘 Heavy Allah', meaning: 'Indeed Allah' },
          { arabic: 'بِسْمِ اللَّهِ', transliteration: 'Bis - mil - laa - hi', tag: '🦋 Light Allah', meaning: 'In the name of Allah' },
          { arabic: 'سَبِيلِ اللَّهِ', transliteration: 'Sa - bee - lil - laah', tag: '🦋 Light Allah', meaning: 'The way of Allah' },
          { arabic: 'لِلَّهِ', transliteration: 'Lil - laah', tag: '🦋 Light Allah', meaning: 'Belongs to Allah' },
          { arabic: 'وَالصَّافَّاتِ', transliteration: 'Was - saaf - faat', tag: 'Shaddah + Madd', meaning: 'By those lined up' },
          { arabic: 'فَالْمُدَبِّرَاتِ', transliteration: 'Fal - mu - dab - bi - raat', meaning: 'Those who arrange' },
          { arabic: 'أَمْرًا', transliteration: 'Am - ran', meaning: 'A matter / Command' },
          { arabic: 'تَبَّتْ', transliteration: 'Tab - bat', meaning: 'May perish' },
          { arabic: 'يَدَا', transliteration: 'Ya - daa', meaning: 'The hands of' },
          { arabic: 'أَبِي', transliteration: 'A - bee', meaning: 'Father of' },
          { arabic: 'لَهَبٍ', transliteration: 'La - ha - bin', meaning: 'Flame' },
          { arabic: 'وَتَبَّ', transliteration: 'Wa - tab', tag: '🔵 Qalqalah Stop', meaning: 'And perished' },
          { arabic: 'مَا', transliteration: 'Maa', meaning: 'Not / What' },
          { arabic: 'أَغْنَىٰ', transliteration: 'Agh - naa', meaning: 'Availed' },
          { arabic: 'عَنْهُ', transliteration: 'ʻAn - hu', meaning: 'From him' },
          { arabic: 'مَالُهُ', transliteration: 'Maa - lu - hoo', meaning: 'His wealth' },
        ]}
      />
    </div>
  );
};

// ─── Chapter 8: Simple & Easy Tajweed Rules, Waqf Signs & Surah Practice ───────
const TajweedRulesLesson: React.FC<{ language?: LanguageOption }> = ({ language = 'english' }) => {
  const [activeTab, setActiveTab] = useState<'noon' | 'meem' | 'madd_heavy' | 'waqf' | 'surahs'>('noon');
  const [selectedSurah, setSelectedSurah] = useState<'fatiha' | 'ikhlas' | 'falaq' | 'naas' | 'kursi'>('fatiha');
  const [expandedVerse, setExpandedVerse] = useState<number | null>(null);

  // 1. Trilingual Content Dictionary for Stage 8
  const STAGE8_DATA = {
    tabs: [
      { id: 'noon', label: { english: '1. Noon Saakin (4 Rules)', hinglish: '1. Noon Saakin (4 Rules)', urdu: '۱. نون ساکن (۴ قواعد)' } },
      { id: 'meem', label: { english: '2. Meem Saakin (3 Rules)', hinglish: '2. Meem Saakin (3 Rules)', urdu: '۲. میم ساکن (۳ قواعد)' } },
      { id: 'madd_heavy', label: { english: '3. Madd & Heavy Letters', hinglish: '3. Madd aur Mota Huroof', urdu: '۳. مد اور موٹے حروف' } },
      { id: 'waqf', label: { english: '4. Waqf (Stopping Signs)', hinglish: '4. Waqf (Rukne ke Rules)', urdu: '۴. وقف (رکن کے قواعد)' } },
      { id: 'surahs', label: { english: '5. Short Surahs Practice', hinglish: '5. Surah Tajweed Practice', urdu: '۵. سورتوں کی تجوید مشق' } },
    ],

    headers: {
      noon: {
        title: { english: 'The 4 Rules of Noon Saakinah (نْ) & Tanween', hinglish: 'Noon Saakin (نْ) aur Tanween ke 4 Aasan Rules', urdu: 'نون ساکن (نْ) اور تنوین کے ۴ آسان قواعد' },
        desc: { english: 'When Noon Saakin (نْ) or Tanween appears, examine the next letter to apply 1 of 4 simple rules!', hinglish: 'Jab Noon Saakin ya Tanween aaye, to agle letter ko dekh kar yeh 4 simple rules lagayein!', urdu: 'جب نون ساکن یا تنوین آئے، تو اگلے حرف کو دیکھ کر یہ ۴ آسان قواعد لگائیں!' }
      },
      meem: {
        title: { english: 'The 3 Rules of Meem Saakinah (مْ)', hinglish: 'Meem Saakin (مْ) ke 3 Aasan Rules', urdu: 'میم ساکن (مْ) کے ۳ آسان قواعد' },
        desc: { english: 'When Meem has Sukoon (مْ), check the next letter to apply 1 of 3 simple rules!', hinglish: 'Jab Meem par Sukoon (مْ) ho, to agle letter ke hisab se yeh 3 rules padhein!', urdu: 'جب میم ساکن (مْ) آئے، تو اگلے حرف کے مطابق یہ ۳ آسان قواعد پڑھیں!' }
      },
      madd_heavy: {
        title: { english: 'Rules of Madd (Lengthening) & Heavy Letters', hinglish: 'Madd (Khinchna) aur Mota Huroof ke Rules', urdu: 'مد (لمبا کرنا) اور موٹے حروف کے قواعد' },
        desc: { english: 'Learn how to stretch vowels correctly and pronounce heavy letters with a full mouth!', hinglish: 'Sikhein kab awaz ko lamba khinchna hai aur kab moonh bhar kar mota padhna hai!', urdu: 'سیکھیں کب آواز کو لمبا کھینچنا ہے اور کب منہ بھر کر موٹا پڑھنا ہے!' }
      },
      waqf: {
        title: { english: 'Signs of Waqf (Stopping Rules in Quran)', hinglish: 'Waqf ke Nishaan (Quran me Rukne ke Rules)', urdu: 'علاماتِ وقف (قرآن میں رکنے کے قواعد)' },
        desc: { english: 'Punctuation marks above Quranic words guide you where to stop, pause, or continue reading.', hinglish: 'Quran Majeed ke alfaz ke upar bane yeh nishaan aapko batate hain kahan rukna hai aur kahan milakar padhna hai.', urdu: 'قرآن مجید کے الفاظ کے اوپر بنے یہ نشانات آپ کو بتاتے ہیں کہاں رکنا ہے اور کہاں ملا کر پڑھنا ہے۔' }
      },
      surahs: {
        title: { english: 'Short Surahs Recitation & Tajweed Breakdown', hinglish: 'Choti Suratein Padhna aur Tajweed Pehchanna', urdu: 'چھوٹی سورتیں مع تجوید مشق' },
        desc: { english: 'Select a Surah below to inspect the Tajweed rules used in every single verse.', hinglish: 'Niche diye gaye buttons me se Surah chunein aur har aayat ke Tajweed rules dekhein.', urdu: 'نیچے دیے گئے بٹنز میں سے سورت منتخب کریں اور ہر آیت کے تجوید قواعد دیکھیں۔' }
      }
    },

    // Sub-Tab 1: Noon Saakinah (4 Simple Rules)
    noonRules: [
      {
        id: 'izhar',
        title: { english: '1. Izhaar (إظهار - Clear Pronunciation)', hinglish: '1. Izhaar (إظهار - Saaf Padhna)', urdu: '۱. اظہار (إظهار - صاف پڑھنا)' },
        ruleText: {
          english: 'Pronounce Noon Saakin (نْ) or Tanween clearly without extra nasal hum when followed by 6 throat letters.',
          hinglish: 'Gale ke 6 huroof (ء هـ ع ح غ خ) se pehle Noon Saakin ya Tanween ko bina naak me gungunaaye bilkul saaf padhein!',
          urdu: 'حلق کے ۶ حروف (ء هـ ع ح غ خ) سے پہلے نون ساکن یا تنوین کو بغیر غنہ کے بالکل صاف پڑھیں!'
        },
        letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
        color: 'border-slate-300 bg-slate-50',
        badge: { english: 'Throat Letters (6)', hinglish: 'Gale ke 6 Huroof', urdu: 'حلق کے ۶ حروف' },
        examples: [
          { arabic: 'مَنْ آمَنَ', trans: 'Man aa-ma-na', note: { english: 'Noon Saakin before Hamzah', hinglish: 'Noon Saakin ke baad Hamzah (ء)', urdu: 'نون ساکن کے بعد ہمزہ (ء)' } },
          { arabic: 'عَذَابٌ أَلِيمٌ', trans: 'ʻA-ḏaa-bun a-leem', note: { english: 'Tanween before Hamzah', hinglish: 'Tanween ke baad Hamzah (ء)', urdu: 'تنوین کے بعد ہمزہ (ء)' } },
          { arabic: 'مِنْ حَكِيمٍ', trans: 'Min ḥa-keem', note: { english: 'Noon Saakin before Haa', hinglish: 'Noon Saakin ke baad Haa (ح)', urdu: 'نون ساکن کے بعد حاء (ح)' } },
        ]
      },
      {
        id: 'idgham',
        title: { english: '2. Idghaam (إدغام - Merging into Next Letter)', hinglish: '2. Idghaam (إدغام - Mila kar Padhna)', urdu: '۲. ادغام (إدغام - ملا کر پڑھنا)' },
        ruleText: {
          english: 'Merge Noon Saakin into the next letter (يرملون). With Ghunnah for (ي ن م و), Without Ghunnah for (ر ل).',
          hinglish: 'Noon Saakin ko agle letter me mila dein. (ي ن م و) me naak me Ghunnah ke sath, aur (ر ل) me bina Ghunnah ke!',
          urdu: 'نون ساکن کو اگلے حرف میں ملا دیں۔ (ي ن م و) میں ناک میں غنہ کے ساتھ، اور (ر ل) میں بغیر غنہ کے!'
        },
        letters: ['ي', 'ر', 'م', 'ل', 'و', 'ن'],
        color: 'border-emerald-300 bg-emerald-50/60',
        badge: { english: 'Yarmaloon Group (6)', hinglish: 'Yarmaloon (يرملون)', urdu: 'حروفِ يرملون' },
        examples: [
          { arabic: 'مَن يَقُولُ', trans: 'May-ya-qool', note: { english: 'Merge with Ghunnah', hinglish: 'Ghunnah ke sath milayein', urdu: 'غنہ کے ساتھ ملائیں' } },
          { arabic: 'مِن رَّبِّهِمْ', trans: 'Mir-rab-bi-him', note: { english: 'Merge without Ghunnah', hinglish: 'Bina Ghunnah ke milayein', urdu: 'بغیر غنہ کے ملائیں' } },
          { arabic: 'مِن مَّالٍ', trans: 'Mim-maal', note: { english: 'Noon into Meem', hinglish: 'Noon ko Meem me milayein', urdu: 'نون کو میم میں ملائیں' } },
        ],
        specialRule: {
          english: '⚠️ Single-Word Exception (Izhaar Mutlaq): In words like (دُنْيَا, بُنْيَان), do NOT merge—pronounce clearly!',
          hinglish: '⚠️ Ek hi lafz me (دُنْيَا, بُنْيَان) aaye to mat milayein—saaf padhein!',
          urdu: '⚠️ ایک ہی لفظ میں (دُنْيَا، بُنْيَان) آئے تو مت ملائیں—صاف پڑھیں!'
        }
      },
      {
        id: 'iqlab',
        title: { english: '3. Iqlaab (إقلاب - Convert to Meem)', hinglish: '3. Iqlaab (إقلاب - Meem me Badalna)', urdu: '۳. اقلاب (إقلاب - میم سے بدلنا)' },
        ruleText: {
          english: 'Convert Noon Saakin / Tanween into a mini Meem (م) sound when followed by Baa (ب).',
          hinglish: 'Jab Noon Saakin ke baad Baa (ب) aaye, to Noon ko choti Meem (م) ki awaz me badal kar Ghunnah karein!',
          urdu: 'جب نون ساکن کے بعد باء (ب) آئے، تو نون کو چھوٹی میم (م) کی آواز میں بدل کر غنہ کریں!'
        },
        letters: ['ب'],
        color: 'border-purple-300 bg-purple-50/60',
        badge: { english: 'Baa Letter Only', hinglish: 'Sirf Baa (ب)', urdu: 'صرف حرف باء (ب)' },
        examples: [
          { arabic: 'مِن بَعْدِ', trans: 'Mim-baʻ-di', note: { english: 'Noon converts to Meem', hinglish: 'Noon ko Meem me badlein', urdu: 'نون کو میم میں بدلیں' } },
          { arabic: 'سَمِيعٌ بَصِيرٌ', trans: 'Sa-mee-ʻum-ba-ṣeer', note: { english: 'Tanween converts to Meem', hinglish: 'Tanween ko Meem me badlein', urdu: 'تنوین کو میم میں بدلیں' } },
        ]
      },
      {
        id: 'ikhfa',
        title: { english: '4. Ikhfaa (إخفاء - Concealment with Ghunnah)', hinglish: '4. Ikhfaa (إخفاء - Chupa kar Padhna)', urdu: '۴. اخفاء (إخفاء - چھپا کر پڑھنا)' },
        ruleText: {
          english: 'Softly hide the sound of Noon Saakin in the nose with a 2-count hum before the remaining 15 letters.',
          hinglish: 'Baki 15 huroof se pehle Noon ki awaz ko naak me 2 counts chupakar gungunaayein.',
          urdu: 'باقی ۱۵ حروف سے پہلے نون کی آواز کو ناک میں ۲ حرکات چھپا کر غنہ کریں۔'
        },
        letters: ['ت', 'ث', 'ج', 'د', 'ذ', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ف', 'ق', 'ك'],
        color: 'border-amber-300 bg-amber-50/60',
        badge: { english: 'Remaining 15 Letters', hinglish: 'Baki 15 Huroof', urdu: 'باقی ۱۵ حروف' },
        examples: [
          { arabic: 'مِن كَانَ', trans: 'Mig-kaa-na', note: { english: 'Light Ikhfa', hinglish: 'Halki awaz me chupayein', urdu: 'ہلکی آواز میں چھپائیں' } },
          { arabic: 'عَن صَلاَتِهِمْ', trans: 'ʻAng-ṣa-laa-ti-him', note: { english: 'Heavy Ikhfa', hinglish: 'Mota Ghunnah me chupayein', urdu: 'موٹے غنہ میں چھپائیں' } },
        ]
      }
    ],

    // Sub-Tab 2: Meem Saakinah (3 Simple Rules)
    meemRules: [
      {
        title: { english: '1. Idghaam-e-Shafawi (Meem + Meem)', hinglish: '1. Idghaam-e-Shafawi (Meem + Meem)', urdu: '۱. ادغامِ شفوی (میم + میم)' },
        ruleText: {
          english: 'When Meem Saakin (مْ) is followed by another Meem (م), merge them with 2-count Ghunnah hum.',
          hinglish: 'Meem Saakin (مْ) ke baad Meem (م) aaye to dono Meem ko mila kar 2 counts naak me gungunaayein.',
          urdu: 'میم ساکن (مْ) کے بعد میم (م) آئے تو دونوں میم کو ملا کر ۲ حرکات ناک میں غنہ کریں۔'
        },
        example: 'لَهُم مَّا يَشَاءُونَ',
        trans: 'La-hum-maa ya-shaa-oon'
      },
      {
        title: { english: '2. Ikhfaa-e-Shafawi (Meem + Baa)', hinglish: '2. Ikhfaa-e-Shafawi (Meem + Baa)', urdu: '۲. اخفاءِ شفوی (میم + باء)' },
        ruleText: {
          english: 'When Meem Saakin (مْ) is followed by Baa (ب), close lips lightly with 2-count Ghunnah hum.',
          hinglish: 'Meem Saakin (مْ) ke baad Baa (ب) aaye to honton ko halke se mila kar 2 counts Ghunnah karein.',
          urdu: 'میم ساکن (مْ) کے بعد باء (ب) آئے تو ہونٹوں کو ہولے سے بند کر کے ۲ حرکات غنہ کریں۔'
        },
        example: 'تَرْمِيهِم بِحِجَارَةٍ',
        trans: 'Tar-mee-him bi-ḥi-jaa-rah'
      },
      {
        title: { english: '3. Izhaar-e-Shafawi (Meem + 26 Other Letters)', hinglish: '3. Izhaar-e-Shafawi (Meem + Baaki 26 Huroof)', urdu: '۳. اظہارِ شفوی (میم + باقی ۲۶ حروف)' },
        ruleText: {
          english: 'Pronounce Meem Saakin clearly before all other 26 letters.',
          hinglish: 'Meem Saakin ko baki 26 huroof se pehle bilkul saaf padhein.',
          urdu: 'میم ساکن کو باقی ۲۶ حروف سے پہلے بالکل صاف پڑھیں۔'
        },
        example: 'أَلَمْ تَرَ كَيْفَ',
        trans: 'A-lam ta-ra kay-fa',
        warning: {
          english: '⚠️ Warning: Do NOT conceal Meem before Waw (و) or Fa (ف)!',
          hinglish: '⚠️ Dehyan dein: Waw (و) aur Fa (ف) se pehle Meem ko hargiz na chupayein, saaf padhein!',
          urdu: '⚠️ خاص دھیان رکھیں: واؤ (و) اور فاء (ف) سے پہلے میم کو ہرگز نہ چھپائیں، صاف پڑھیں!'
        }
      }
    ],

    // Sub-Tab 3: Madd & Heavy Letters
    maddHeavyRules: [
      {
        title: { english: '1. Natural Madd (مد اصلی - 2 Counts)', hinglish: '1. Natural Madd (2 Counts)', urdu: '۱. مدِ اصلی (۲ حرکات)' },
        ruleText: {
          english: 'Stretch sound for 2 counts (1 Alif) on Alif, Waw, Yaa.',
          hinglish: 'Alif, Waw, Yaa par awaz ko 2 counts (1 Alif ke barabar) khinchein.',
          urdu: 'الف، واؤ، یاء پر آواز کو ۲ حرکات (۱ الف کے برابر) لمبا کریں۔'
        },
        examples: ['قَالَ', 'قِيلَ', 'يَقُولُ']
      },
      {
        title: { english: '2. Long Wave Madd (~ Sign - 4 to 5 Counts)', hinglish: '2. Long Madd (~ Nishani - 4 se 5 Counts)', urdu: '۲. لمبی مد (~ علامت - ۴ سے ۵ حرکات)' },
        ruleText: {
          english: 'When wave mark (~) appears above a letter, stretch sound for 4 to 5 counts.',
          hinglish: 'Jab madd ki nishani (~) aaye, to awaz ko 4 se 5 counts lamba khinchein.',
          urdu: 'جب مد کی علامت (~) آئے، تو آواز کو ۴ سے ۵ حرکات لمبا کھینچیں۔'
        },
        examples: ['جَاءَ', 'سُوءَ', 'إِنَّا أَعْطَيْنَاكَ']
      },
      {
        title: { english: '3. Heavy Word Madd (مد لازم - 6 Counts)', hinglish: '3. Heavy Madd (6 Counts)', urdu: '۳. مدِ لازم (۶ حرکات)' },
        ruleText: {
          english: 'Stretch strictly for 6 counts on words with Tashdeed like (وَلَا الضَّالِّينَ).',
          hinglish: '(وَلَا الضَّالِّينَ) jaise alfaz par awaz ko poori 6 counts lamba khinchein!',
          urdu: '(وَلَا الضَّالِّينَ) جیسے الفاظ پر آواز کو پورے ۶ حرکات لمبا کھینچیں!'
        },
        examples: ['وَلَا الضَّالِّينَ', 'الْحَاقَّةُ']
      },
      {
        title: { english: '4. Rules of Raa (Heavy vs Light)', hinglish: '4. Raa Mota ya Bareek Padhne ka Rule', urdu: '۴. راء موٹا یا باریک پڑھنے کا قاعدہ' },
        ruleText: {
          english: 'Raa with Fatha/Dhamma (رَ, رُ) = Heavy (Mota). Raa with Kasrah (رِ) = Light (Bareek).',
          hinglish: 'Raa par Zabar/Pesh ho to Mota (Heavy) padhein (رَ, رُ). Zer ho to Bareek (Light) padhein (رِ).',
          urdu: 'راء پر زبر یا پیش ہو تو موٹا پڑھیں (رَ، رُ)۔ زیر ہو تو باریک پڑھیں (رِ)۔'
        },
        examples: ['رَبَّنَا (Mota)', 'رِجَالٌ (Bareek)']
      },
      {
        title: { english: '5. Laam in Allah\'s Name', hinglish: '5. Lafz Allah me Laam Padhne ka Rule', urdu: '۵. لفظِ اللہ میں لام پڑھنے کا قاعدہ' },
        ruleText: {
          english: 'Zabar or Pesh before Allah = Heavy Laam. Kasrah (Zer) before Allah = Light Laam.',
          hinglish: 'Lafz Allah se pehle Zabar/Pesh ho to Mota padhein (قُلْ هُوَ اللَّهُ). Zer ho to Bareek padhein (بِسْمِ اللَّهِ).',
          urdu: 'لفظِ اللہ سے پہلے زبر یا پیش ہو تو موٹا پڑھیں (قُلْ هُوَ اللَّهُ)۔ زیر ہو تو باریک پڑھیں (بِسْمِ اللَّهِ)۔'
        },
        examples: ['قُلْ هُوَ اللَّهُ (Mota)', 'بِسْمِ اللَّهِ (Bareek)']
      }
    ],

    // Sub-Tab 4: Waqf Stopping Signs
    waqfSigns: [
      {
        sign: 'مـ',
        name: { english: 'Compulsory Stop (مـ)', hinglish: 'Zaroori Stop (مـ)', urdu: 'لازمی وقف (مـ)' },
        rule: { english: 'You MUST stop here to avoid altering the Quranic meaning!', hinglish: 'Yahan rukna zaroori hai taaki matlab na badle!', urdu: 'یہاں رکنا ضروری ہے تاکہ معنی نہ بدلے!' }
      },
      {
        sign: 'ط / قلى',
        name: { english: 'Recommended Stop (ط / قلى)', hinglish: 'Accha Stop (ط / قلى)', urdu: 'بہتر وقف (ط / قلى)' },
        rule: { english: 'Recommended to take a breath and stop here.', hinglish: 'Yahan saans lekar rukna zaroori aur behtar hai.', urdu: 'یہاں سانس لے کر رکنا بہتر ہے۔' }
      },
      {
        sign: 'ج',
        name: { english: 'Optional Stop (ج)', hinglish: 'Ruk Sakte Hain (ج)', urdu: 'جائز وقف (ج)' },
        rule: { english: 'You are free to either stop or continue reading smoothly.', hinglish: 'Ruk bhi sakte hain aur aage milakar bhi padh sakte hain.', urdu: 'روک بھی سکتے ہیں اور آگے ملا کر بھی پڑھ سکتے ہیں۔' }
      },
      {
        sign: 'صلى / ز / ص',
        name: { english: 'Continue Preferred (صلى)', hinglish: 'Aage Milayein (صلى)', urdu: 'ملا کر پڑھیں (صلى)' },
        rule: { english: 'Better to keep reading smoothly without stopping.', hinglish: 'Rukne se behtar hai ki aage milakar padhein.', urdu: 'روکنے سے بہتر ہے کہ آگے ملا کر پڑھیں۔' }
      },
      {
        sign: 'لا',
        name: { english: 'Do NOT Stop! (لا)', hinglish: 'Mat Rukein! (لا)', urdu: 'نہ رکیں! (لا)' },
        rule: { english: 'Do not stop here because sentence continues into next word.', hinglish: 'Yahan mat rukein, aage milakar padhein!', urdu: 'یہاں نہ رکیں، آگے ملا کر پڑھیں!' }
      },
      {
        sign: 'ة ➔ هـ',
        name: { english: 'Gol Taa Stop Rule (ة ➔ هـْ)', hinglish: 'Gol Taa Stop Rule (ة ➔ هـْ)', urdu: 'گول تاء کا قاعدہ (ة ➔ هـْ)' },
        rule: {
          english: 'When stopping on a word ending with Gol Taa (ة), convert it into a silent Haa (هـْ).',
          hinglish: 'Gol Taa (ة) par rukte waqt uski awaz silent Haa (هـْ) ban jati hai (e.g. حِجَارَةٍ ➔ ḥi-jaa-rah).',
          urdu: 'گول تاء (ة) پر وقف کرتے وقت اس کی آواز ہائے ساکنہ (هـْ) بن جاتی ہے۔'
        }
      },
      {
        sign: 'سكتة ۜ',
        name: { english: 'Silent Pause (Saktah ۜ)', hinglish: 'Bina Saans Liye Rukein (Saktah ۜ)', urdu: 'سکتہ (سكتة ۜ)' },
        rule: {
          english: 'Pause briefly for 1-2 counts WITHOUT taking a new breath (e.g. عِوَجًا ۜ قَيِّمًا).',
          hinglish: '1-2 counts bina nayi saans liye thodi der saaf rukein (e.g. عِوَجًا ۜ قَيِّمًا).',
          urdu: 'بغیر سانس توڑے ۱-۲ حرکات کے لیے تھوڑی دیر رکیں۔'
        }
      }
    ]
  };

  // Surah Database in English, Hinglish, and Urdu
  const SURAH_PRACTICE = {
    fatiha: {
      title: 'Surah Al-Fatiha (سُورَةُ الْفَاتِحَةِ)',
      verses: [
        { num: 1, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', trans: 'Bismillāhir-raḥmānir-raḥīm', rule: { english: 'Light Laam in Bismillah + Heavy Raa in Ar-Rahman', hinglish: 'Bismillah me Bareek Laam + Ar-Rahman me Mota Raa', urdu: 'بسم اللہ میں باریک لام + الرحمٰن میں موٹا راء' } },
        { num: 2, arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', trans: 'Al-ḥamdu lillāhi rabbil-ʻālamīn', rule: { english: 'Izhar on Meem + 2-4-6 counts Madd at verse end', hinglish: 'Meem par Saaf Izhar + Aayat ke aakhir me 2-4-6 counts Madd', urdu: 'میم پر صاف اظہار + آیت کے آخر میں ۲-۴-۶ حرکات مد' } },
        { num: 3, arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', trans: 'Ar-raḥmānir-raḥīm', rule: { english: 'Heavy Raa + Sharp Throat Haa (ح)', hinglish: 'Mota Raa + Gale ki Haa (ح)', urdu: 'موٹا راء + حلق کی حاء (ح)' } },
        { num: 4, arabic: 'مَالِكِ يَوْمِ الدِّينِ', trans: 'Māliki yawmid-dīn', rule: { english: 'Natural Madd 2 counts on Maaliki', hinglish: 'Maaliki par 2 counts lamba khinchein', urdu: 'مالکِ پر ۲ حرکات لمبا کھینچیں' } },
        { num: 5, arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', trans: 'Iyyāka naʻbudu wa iyyāka nastaʻīn', rule: { english: 'Tashdeed on Yaa + Deep Throat Ain (ع)', hinglish: 'Yaa par Tashdeed + Gale ki Ain (ع)', urdu: 'یاء پر تشدید + حلق کی عین (ع)' } },
        { num: 6, arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', trans: 'Ihdinā ṣ-ṣirāṭal-mustaqīm', rule: { english: 'Heavy Saad (ص) & Heavy Taa (ط)', hinglish: 'Saad (ص) aur Taa (ط) ko Mota padhein', urdu: 'صاد (ص) اور طاء (ط) کو موٹا پڑھیں' } },
        { num: 7, arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', trans: 'Ṣirāṭal-laḏīna anʻamta ʻalayhim ghayril-maghḍūbi ʻalayhim wa laḍ-ḍāllīn', rule: { english: 'Izhar on An\'amta + 6 counts Heavy Madd on Dhaalleen', hinglish: 'An\'amta par Saaf Izhar + Dhaalleen par poore 6 counts Madd', urdu: 'أنعمت پر صاف اظہار + الضالين پر پورے ۶ حرکات مد' } },
      ]
    },
    ikhlas: {
      title: 'Surah Al-Ikhlas (سُورَةُ الإِخْلَاصِ)',
      verses: [
        { num: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', trans: 'Qul hu-wal-laa-hu a-ḥad', rule: { english: 'Heavy Qaf + Qalqalah Bounce on Dal at stop', hinglish: 'Mota Qaf + Aayat ke aakhir me Dal par Qalqalah bounce', urdu: 'موٹا قاف + آیت کے آخر میں دال پر قلقلہ' } },
        { num: 2, arabic: 'اللَّهُ الصَّمَدُ', trans: 'Al-laa-huṣ-ṣa-mad', rule: { english: 'Heavy Laam in Allah + Heavy Saad + Qalqalah Dal', hinglish: 'Lafz Allah Mota + Saad Mota + Dal par Qalqalah bounce', urdu: 'لفظِ اللہ موٹا + صاد موٹا + دال پر قلقلہ' } },
        { num: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', trans: 'Lam ya-lid wa lam yoo-lad', rule: { english: 'Clear Meem + Double Qalqalah Bounce on Dal', hinglish: 'Meem Saaf + Dono Dal par Qalqalah bounce', urdu: 'میم صاف + دونوں دال پر قلقلہ' } },
        { num: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', trans: 'Wa lam ya-kul-la-hoo ku-fu-wan a-ḥad', rule: { english: 'Merge without Ghunnah (يَكُن لَّهُ) + Qalqalah Dal', hinglish: 'Bina Ghunnah ke milayein (يَكُن لَّهُ) + Dal par Qalqalah', urdu: 'بغیر غنہ کے ملائیں (يَكُن لَّهُ) + دال پر قلقلہ' } },
      ]
    },
    falaq: {
      title: 'Surah Al-Falaq (سُورَةُ الْفَلَقِ)',
      verses: [
        { num: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', trans: 'Qul a-ʻoo-ḏu bi-rab-bil-fa-laq', rule: { english: 'Qalqalah Bounce on Qaf at stop (الْفَلَقْ)', hinglish: 'Rukne par Qaf par Qalqalah bounce karein (الْفَلَقْ)', urdu: 'وقف پر قاف پر قلقلہ کریں (الْفَلَقْ)' } },
        { num: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', trans: 'Min shar-ri maa kha-laq', rule: { english: 'Light Ikhfa Ghunnah (مِن شَرِّ) + Qalqalah Qaf', hinglish: 'Naak me Ikhfa Ghunnah (مِن شَرِّ) + Qaf par Qalqalah', urdu: 'ناک میں اخفاء غنہ (مِن شَرِّ) + قاف پر قلقلہ' } },
        { num: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', trans: 'Wa min shar-ri ghaa-si-qin i-ḏaa wa-qab', rule: { english: 'Clear Izhar (غَاسِقٍ إِذَا) + Qalqalah Baa', hinglish: 'Bina Ghunnah Saaf (غَاسِقٍ إِذَا) + Baa par Qalqalah', urdu: 'بغیر غنہ صاف (غَاسِقٍ إِذَا) + باء پر قلقلہ' } },
        { num: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', trans: 'Wa min shar-rin-naf-faa-thaa-ti fil-ʻu-qad', rule: { english: '2-count Ghunnah on Naffathaat + Qalqalah Dal', hinglish: 'Naffathaat par 2 counts Ghunnah + Dal par Qalqalah', urdu: 'النفّاثات پر ۲ حرکات غنہ + دال پر قلقلہ' } },
        { num: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', trans: 'Wa min shar-ri haa-si-din i-ḏaa ha-sad', rule: { english: 'Clear Izhar on Tanween + Qalqalah Dal', hinglish: 'Tanween par Saaf Izhar + Dal par Qalqalah', urdu: 'تنوین پر صاف اظہار + دال پر قلقلہ' } },
      ]
    },
    naas: {
      title: 'Surah An-Naas (سُورَةُ النَّاسِ)',
      verses: [
        { num: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', trans: 'Qul a-ʻoo-ḏu bi-rab-bin-naas', rule: { english: '2-count Ghunnah on Noon Tashdeed (النَّاسِ)', hinglish: 'Noon Tashdeed (النَّاسِ) par 2 counts Ghunnah karein', urdu: 'نون تشدید (النَّاسِ) پر ۲ حرکات غنہ کریں' } },
        { num: 2, arabic: 'مَلِكِ النَّاسِ', trans: 'Ma-li-kin-naas', rule: { english: '2-count Ghunnah on Noon Tashdeed', hinglish: 'Noon Tashdeed par 2 counts Ghunnah', urdu: 'نون تشدید پر ۲ حرکات غنہ' } },
        { num: 3, arabic: 'إِلَٰهِ النَّاسِ', trans: 'I-laa-hin-naas', rule: { english: 'Standing Alif 2 counts + Ghunnah', hinglish: 'Khada Zabar 2 counts + Ghunnah', urdu: 'کھڑا زبر ۲ حرکات + غنہ' } },
        { num: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', trans: 'Min shar-ril-was-waa-sil-khan-naas', rule: { english: 'Light Ikhfa + Ghunnah on Khannas', hinglish: 'Noon par Ikhfa + Khannas par Ghunnah', urdu: 'نون پر اخفاء + الخنّاس پر غنہ' } },
        { num: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', trans: 'Al-la-ḏee yu-was-wi-su fee ṣu-doo-rin-naas', rule: { english: 'Heavy Saad (صُدُورِ) + Ghunnah on Naas', hinglish: 'Saad Mota (صُدُورِ) + Naas par Ghunnah', urdu: 'صاد موٹا (صُدُورِ) + النّاس پر غنہ' } },
        { num: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', trans: 'Mi-nal-jin-na-ti wan-naas', rule: { english: 'Double Ghunnah on Al-Jinnati & An-Naas', hinglish: 'Al-Jinnati aur An-Naas dono par Ghunnah', urdu: 'الجِنَّةِ اور النّاس دونوں پر غنہ' } },
      ]
    },
    kursi: {
      title: 'Ayatul Kursi (آيَةُ الْكُرْسِيِّ)',
      verses: [
        { num: 1, arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ', trans: 'Al-laa-hu laa i-laa-ha il-laa hu-wal-ḥay-yul-qay-yoom', rule: { english: 'Heavy Laam in Allah + 2-4-6 counts Madd at stop', hinglish: 'Lafz Allah Mota + Rukne par 2-4-6 counts Madd', urdu: 'لفظِ اللہ موٹا + وقف پر ۲-۴-۶ حرکات مد' } },
        { num: 2, arabic: 'مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ', trans: 'Man-ḏal-la-ḏee yash-fa-ʻu ʻin-da-hoo il-laa bi-iḏ-nih', rule: { english: 'Ikhfa Ghunnah on (مَن ذَا) & (عِندَهُ)', hinglish: '(مَن ذَا) aur (عِندَهُ) par naak me Ghunnah karein', urdu: '(مَن ذَا) اور (عِندَهُ) پر ناک میں غنہ کریں' } },
        { num: 3, arabic: 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ', trans: 'Yaʻ-la-mu maa bay-na ay-dee-him... bi-shay-ʼim-min ʻil-mih... shaaa-a', rule: { english: 'Merge with Ghunnah (بِشَيْءٍ مِّنْ) + Long Madd on (شَاءَ)', hinglish: '(بِشَيْءٍ مِّنْ) me Ghunnah ke sath milayein + (شَاءَ) par lamba khinchein', urdu: '(بِشَيْءٍ مِّنْ) میں غنہ کے ساتھ ملائیں + (شَاءَ) پر لمبا کھینچیں' } },
        { num: 4, arabic: 'وَهُوَ الْعَلِيُّ الْعَظِيمُ', trans: 'Wa hu-wal-ʻa-li-yul-ʻa-ẓeem', rule: { english: 'Heavy Zhaa (الْعَظِيمُ) + Madd at verse end', hinglish: 'Zhaa Mota (الْعَظِيمُ) + Aayat ke aakhir me Madd', urdu: 'ظاء موٹا (الْعَظِيمُ) + آیت کے آخر میں مد' } },
      ]
    }
  };

  const currentSurah = SURAH_PRACTICE[selectedSurah];

  return (
    <div className="space-y-6">
      <MadaniPearlBox
        title={APP_TRANSLATIONS.ch8Title[language]}
        points={APP_TRANSLATIONS.ch8Points[language]}
        language={language}
      />

      {/* STAGE 8 SUB-NAVIGATION TABS (TRILINGUAL) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100 p-2 rounded-2xl border border-slate-200">
        {STAGE8_DATA.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-3.5 py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-burgundy-950 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            {tab.label[language]}
          </button>
        ))}
      </div>

      {/* SUB-TAB 1: NOON SAAKINAH (4 SIMPLE RULES) */}
      {activeTab === 'noon' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-emerald-950 via-burgundy-950 to-slate-900 text-white p-5 rounded-3xl space-y-2 border border-emerald-500/30">
            <h3 className="text-lg font-black text-emerald-300">
              {STAGE8_DATA.headers.noon.title[language]}
            </h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
              {STAGE8_DATA.headers.noon.desc[language]}
            </p>
          </div>

          <div className="space-y-4">
            {STAGE8_DATA.noonRules.map((rule) => (
              <div key={rule.id} className={`bg-white border-2 ${rule.color} rounded-3xl p-5 space-y-4 shadow-xs`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <h4 className="font-black text-slate-900 text-base">{rule.title[language]}</h4>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{rule.ruleText[language]}</p>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-800 text-white self-start sm:self-auto">
                    {rule.badge[language]}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex flex-wrap items-center gap-1.5 font-bold">
                    <span className="text-slate-900">
                      {language === 'urdu' ? 'حروف:' : language === 'hinglish' ? 'Target Letters:' : 'Target Letters:'}
                    </span>
                    {rule.letters.map((char) => (
                      <span key={char} className="w-7 h-7 rounded-lg bg-amber-100 text-amber-950 font-arabic font-black text-base flex items-center justify-center border border-amber-300">
                        {char}
                      </span>
                    ))}
                  </div>

                  {rule.specialRule && (
                    <div className="bg-amber-100/80 border border-amber-300 text-amber-950 p-3 rounded-xl font-bold leading-relaxed text-xs">
                      {rule.specialRule[language]}
                    </div>
                  )}
                </div>

                {/* Example Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {rule.examples.map((ex, idx) => (
                    <div key={idx} className="bg-slate-900 text-white rounded-2xl p-3.5 text-center space-y-1">
                      <div className="font-arabic text-2xl font-black text-amber-300" dir="rtl">{ex.arabic}</div>
                      <div className="text-xs font-bold text-slate-200">{ex.trans}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{ex.note[language]}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: MEEM SAAKINAH (3 SIMPLE RULES) */}
      {activeTab === 'meem' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-amber-950 text-white p-5 rounded-3xl space-y-2 border border-purple-400/30">
            <h3 className="text-lg font-black text-purple-200">
              {STAGE8_DATA.headers.meem.title[language]}
            </h3>
            <p className="text-xs text-purple-100/90 leading-relaxed font-medium">
              {STAGE8_DATA.headers.meem.desc[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STAGE8_DATA.meemRules.map((m, idx) => (
              <div key={idx} className="bg-white border-2 border-purple-200 rounded-3xl p-5 space-y-3 shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-purple-950 text-sm border-b border-purple-100 pb-2">{m.title[language]}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.ruleText[language]}</p>
                </div>

                <div className="bg-slate-900 text-amber-300 rounded-2xl p-3.5 text-center space-y-1 mt-3">
                  <div className="font-arabic text-2xl font-black" dir="rtl">{m.example}</div>
                  <div className="text-xs text-slate-300 font-bold">{m.trans}</div>
                </div>

                {m.warning && (
                  <p className="text-[11px] text-rose-800 bg-rose-50 p-2.5 rounded-xl border border-rose-200 font-bold leading-relaxed mt-2">
                    {m.warning[language]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: MADD & HEAVY LETTERS */}
      {activeTab === 'madd_heavy' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-amber-950 via-burgundy-950 to-slate-900 text-white p-5 rounded-3xl space-y-2 border border-amber-400/30">
            <h3 className="text-lg font-black text-amber-200">
              {STAGE8_DATA.headers.madd_heavy.title[language]}
            </h3>
            <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
              {STAGE8_DATA.headers.madd_heavy.desc[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STAGE8_DATA.maddHeavyRules.map((m, idx) => (
              <div key={idx} className="bg-white border-2 border-amber-200 rounded-3xl p-5 space-y-3 shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-amber-950 text-sm border-b border-amber-100 pb-2">{m.title[language]}</h4>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">{m.ruleText[language]}</p>
                </div>

                <div className="bg-slate-900 text-amber-300 rounded-2xl p-3 text-center space-y-1 mt-2">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {m.examples.map((ex, i) => (
                      <span key={i} className="text-sm font-arabic font-black bg-slate-800 text-amber-300 px-3 py-1 rounded-xl border border-slate-700">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: WAQF STOPPING SIGNS */}
      {activeTab === 'waqf' && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-slate-900 via-burgundy-950 to-slate-900 text-white p-5 rounded-3xl space-y-2 border border-slate-700">
            <h3 className="text-lg font-black text-amber-300">
              {STAGE8_DATA.headers.waqf.title[language]}
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {STAGE8_DATA.headers.waqf.desc[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STAGE8_DATA.waqfSigns.map((w, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-4 flex items-start gap-3 shadow-xs">
                <span className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-950 font-arabic font-black text-xl flex items-center justify-center border border-amber-300 shrink-0">
                  {w.sign}
                </span>
                <div className="space-y-1 text-xs">
                  <h4 className="font-extrabold text-slate-900 text-sm">{w.name[language]}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{w.rule[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: SHORT SURAHS PRACTICE */}
      {activeTab === 'surahs' && (
        <div className="space-y-5">
          {/* Surah Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-3 rounded-2xl border border-amber-900/10 shadow-xs">
            {[
              { id: 'fatiha', label: 'Al-Fatiha (الفاتحة)' },
              { id: 'ikhlas', label: 'Al-Ikhlas (الإخلاص)' },
              { id: 'falaq', label: 'Al-Falaq (الفلق)' },
              { id: 'naas', label: 'An-Naas (الناس)' },
              { id: 'kursi', label: 'Ayatul Kursi (آية الكرسي)' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedSurah(s.id as typeof selectedSurah);
                  setExpandedVerse(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                  selectedSurah === s.id
                    ? 'bg-amber-500 text-burgundy-950 shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Active Surah Banner */}
          <div className="bg-gradient-to-r from-burgundy-950 to-amber-950 rounded-3xl p-5 text-white text-center space-y-1.5 shadow-md">
            <h3 className="font-arabic text-3xl font-black text-amber-200" dir="rtl">{currentSurah.title}</h3>
            <p className="text-xs text-amber-100/90 font-semibold">{STAGE8_DATA.headers.surahs.desc[language]}</p>
          </div>

          {/* Verses List */}
          <div className="space-y-3">
            {currentSurah.verses.map((v) => {
              const isOpen = expandedVerse === v.num;
              return (
                <div
                  key={v.num}
                  onClick={() => setExpandedVerse(isOpen ? null : v.num)}
                  className="bg-white border-2 border-slate-200 hover:border-amber-400 rounded-2xl p-4 cursor-pointer transition-all space-y-2.5 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-7 h-7 rounded-full bg-burgundy-950 text-white text-xs font-black flex items-center justify-center shrink-0">
                      #{v.num}
                    </span>
                    <div className="font-arabic text-2xl font-black text-slate-900 flex-1 text-right leading-loose" dir="rtl">
                      {v.arabic}
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                    <div className="font-bold text-burgundy-950">{v.trans}</div>
                    <div className="text-slate-700 font-semibold bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80">
                      📜 <strong>{language === 'urdu' ? 'تجوید کا قاعدہ:' : language === 'hinglish' ? 'Tajweed Rule:' : 'Tajweed Rule:'}</strong>{' '}
                      <span className="text-amber-950">{v.rule[language]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Quiz Questions Data for Chapters 1-8 ───────────────────────────────────
interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const CHAPTER_QUIZZES: Record<number, QuizQuestion[]> = {
  1: [
    {
      question: "How many letters in the Arabic alphabet are Heavy (Musta'aliyah)?",
      options: ['7 Heavy Letters (خ ص ض ط ظ غ ق)', '12 Letters', 'All 28 Letters'],
      correctIndex: 0,
      explanation: "There are 7 Heavy letters remembered by the Al-Hira Qaidah phrase (خُصَّ ضَغْطٍ قِظْ). They sound deep with a full mouth!",
    },
    {
      question: "What is the difference between Heavy Taa (ط) and Light Taa (ت)?",
      options: ['Taa (ط) is full-mouthed and heavy, while Taa (ت) is soft and smiling', 'They sound exactly identical', 'Taa (ت) comes from the nose'],
      correctIndex: 0,
      explanation: "Heavy Taa (ط) is pronounced with the back of the tongue raised (full mouth sound), while Light Taa (ت) is flat and soft.",
    },
    {
      question: "Which major articulation zone produces letters like Baa (ب), Meem (م), and Faa (ف)?",
      options: ['The Lips (Ash-Shafatan)', 'The Throat (Al-Halq)', 'The Nasal Cavity'],
      correctIndex: 0,
      explanation: "The 4 lip letters (ف ب م و) are articulated using the lips.",
    },
  ],
  2: [
    {
      question: "What short vowel sound does Fatha (ـَ) make?",
      options: ['Short "A" sound (Ba)', 'Long "OO" sound (Boo)', 'Silent stop'],
      correctIndex: 0,
      explanation: "Fatha is a slanted line above a letter that produces the short 'a' sound (e.g. دَرَسَ = Darasa). Must be read with shortest spell!",
    },
    {
      question: "Which vowel symbol is placed below the letter?",
      options: ['Kasrah (ـِ)', 'Fatha (ـَ)', 'Dhamma (ـُ)'],
      correctIndex: 0,
      explanation: "Kasrah sits underneath the letter and gives it a short 'i' sound (e.g. رَدِفَ = Radifa).",
    },
    {
      question: "What happens when Alif appears with any Harakat sign in Al-Hira Qaidah?",
      options: ['It converts itself into Hamzah (ء)', 'It stays Alif', 'It becomes silent'],
      correctIndex: 0,
      explanation: "In Al-Hira Qaidah, Alif is always stand-alone without a sign; if Alif appears with any sign, it converts itself into Hamzah (ء).",
    },
  ],
  3: [
    {
      question: "What form does a letter take when connected on both sides inside a word?",
      options: ['Darmiyani (Middle form)', 'Alaahida (Isolated form)', 'Aakhri (Ending form)'],
      correctIndex: 0,
      explanation: "Darmiyani (Middle form) has connection strokes on both the left and right sides.",
    },
    {
      question: "Which of the following is a 'Non-Joiner' letter that never connects to the left?",
      options: ['Dal (د)', 'Baa (ب)', 'Meem (م)'],
      correctIndex: 0,
      explanation: "The 6 non-joiner letters (ا د ذ ر ز و) only connect to the letter before them, never after.",
    },
    {
      question: "How does the word 'كَتَبَ' connect its letters?",
      options: ['All 3 letters join continuously', 'Only the first letter joins', 'None of the letters join'],
      correctIndex: 0,
      explanation: "Kaaf, Taa, and Baa are all joiner letters, so they connect smoothly into a 3-letter word.",
    },
  ],
  4: [
    {
      question: "What sound is added to the end of a word when it carries Tanween (ـً ـٍ ـٌ)?",
      options: ['An extra "N" sound (Nunation)', 'A "M" sound', 'A "W" sound'],
      correctIndex: 0,
      explanation: "Tanween adds a double vowel sound pronounced with a silent 'N' at the end.",
    },
    {
      question: "Which symbol creates the '-an' sound at the end of a noun?",
      options: ['Fathatain (ـً)', 'Kasratain (ـٍ)', 'Dhammatain (ـٌ)'],
      correctIndex: 0,
      explanation: "Fathatain consists of two Fatha lines on top, creating the '-an' sound (e.g., أَبَدًا = Abadan).",
    },
    {
      question: "How is the word 'رَجُلٌ' pronounced with Dhammatain?",
      options: ['"Ra-ju-lun"', '"Ra-ju-la"', '"Ra-ju-li"'],
      correctIndex: 0,
      explanation: "Dhammatain produces the '-un' double vowel ending (Ra-ju-lun).",
    },
  ],
  5: [
    {
      question: "How is Hamzah-Saakinah (أْ إْ ؤْ ئْ) pronounced in Al-Hira Qaidah?",
      options: ['With a sharp twitch / jerk effect (Jhatka)', 'With a 6-count Madd', 'Softly like Waw'],
      correctIndex: 0,
      explanation: "In Al-Hira Neo-Noorani Qaidah, Hamzah-Saakinah is always pronounced with a twitch (jerk) effect!",
    },
    {
      question: "Which 5 letters produce the Qalqalah bouncing sound when they carry Sukoon?",
      options: ['ق ط ب ج د', 'أ ب ت ث ج', 'ن م ل ر و'],
      correctIndex: 0,
      explanation: "The 5 Qalqalah letters are remembered by the phrase (قُطْبُ جَدٍّ): Qaf, Taa, Baa, Jeem, Dal.",
    },
    {
      question: "What happens when you pronounce 'قُلْ' with Sukoon on Laam?",
      options: ['You rest silently on Laam with no vowel movement', 'You stretch for 6 beats', 'You double the letter'],
      correctIndex: 0,
      explanation: "Sukoon on Laam (لْ) means your tongue stops silently on Laam.",
    },
  ],
  6: [
    {
      question: "How long is Natural Maddah (Madd Asli) stretched in Al-Hira Qaidah?",
      options: ['Duration of 1 Alif (2 counts)', '6 counts', '1 count'],
      correctIndex: 0,
      explanation: "Natural Maddah lengthens a short vowel into a natural 1 Alif duration (2 counts).",
    },
    {
      question: "How are Standing Vowels (Alif-Sageera, Yaa-Sageera, Waaw-Sageera) pronounced?",
      options: ['Exactly like Maddah-letters (2 counts)', 'Short 1 count', 'Silent'],
      correctIndex: 0,
      explanation: "Standing Vowels (Khada-Zabar / Zer / Ulta-Pesh) are pronounced like Alif-Maddah, Yaa-Maddah, and Waaw-Maddah.",
    },
    {
      question: "What symbol signals long lengthening (4–5 counts) before Hamzah?",
      options: ['Curved Madd wave (~ ۤ)', 'Sukoon', 'Dhamma'],
      correctIndex: 0,
      explanation: "The wavy Madd sign (~ ۤ) indicates mandatory elongation beyond the standard 2 counts.",
    },
  ],
  7: [
    {
      question: "How is Laam-e-Jalalah (the word 'Allah') pronounced after Fatha or Dhamma?",
      options: ['Heavy (Mota sound - e.g. قَالَ اللَّهُ)', 'Light (Bareek sound)', 'Silent'],
      correctIndex: 0,
      explanation: "Laam-e-Jalalah is read with a heavier (Mota) sound after Fatha or Dhamma, and lighter after Kasrah.",
    },
    {
      question: "What is Ghunnah in Al-Hira Qaidah?",
      options: ['Holding sound of Noon or Meem with Tashdeed in nose for 1 Alif duration', 'Throat clearing', 'A fast click'],
      correctIndex: 0,
      explanation: "Ghunnah is a resonant nasal sound produced inside the nose for 1 Alif duration on نّ and مّ.",
    },
    {
      question: "How do you pronounce 'إِنَّ' with Tashdeed on Noon?",
      options: ['Hold 1-Alif nasal Ghunnah hum "In-na"', 'Quick "Ina"', 'Silent'],
      correctIndex: 0,
      explanation: "Noon with Tashdeed requires a full 1-Alif nasal Ghunnah hold before releasing.",
    },
  ],
  8: [
    {
      question: "How is the letter Raa pronounced when it carries Fatha or Dhamma (رَ, رُ)?",
      options: ['Heavy (Mota sound)', 'Light (Bareek sound)', 'Silent'],
      correctIndex: 0,
      explanation: "In Al-Hira Qaidah Lesson 10, Raa with Fatha or Dhamma is read with a heavier sound (Mota).",
    },
    {
      question: "What does Iqlaab (إقْلاب) mean when Tanween or Noon-Saakin meets Baa (ب)?",
      options: ['Convert the "N" sound into a "M" (Meem) sound with Ghunnah', 'Skip the letter', 'Echo the sound'],
      correctIndex: 0,
      explanation: "Iqlaab converts the Noon sound into a Meem sound with nasal Ghunnah before the letter Baa.",
    },
    {
      question: "What happens when stopping on a word ending with Ta Marbutah (ة)?",
      options: ['It alters completely into Haa-Saakinah (هْ)', 'It stays Taa', 'It doubles'],
      correctIndex: 0,
      explanation: "In Lesson 11 (Waqf), if the last letter in a word is Rounded-Taa (ة), it shall be read altering it to Haa-Saakinah.",
    },
  ],
};

const ChapterQuiz: React.FC<{
  chapterNumber: number;
  mode: AppMode;
  onPassQuiz: () => void;
  isCompleted: boolean;
}> = ({ chapterNumber, mode, onPassQuiz, isCompleted }) => {
  const questions = CHAPTER_QUIZZES[chapterNumber] || [];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  if (questions.length === 0) return null;

  const currentQ = questions[currentIdx];
  const selectedOpt = selectedAnswers[currentIdx];
  const isAnswered = selectedOpt !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizFinished(true);
    }
  };

  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const passed = correctCount >= 2;

  const handleRetake = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizFinished(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 text-center space-y-2 shadow-xs">
        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
        <h3 className="font-black text-emerald-950 text-base">Chapter Mastery Quiz Passed! 🎉</h3>
        <p className="text-xs text-emerald-700">You have completed all practice questions and unlocked the next stage.</p>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 text-center space-y-4 shadow-xl">
        <div className="w-14 h-14 bg-amber-100 border border-amber-300 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-sm">
          {passed ? '🏆' : '📚'}
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900 font-serif">
            {passed ? 'Knowledge Check Passed!' : 'Needs Review'}
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            You scored <strong className="text-amber-700 font-bold">{correctCount} / {questions.length}</strong> correct questions.
          </p>
        </div>

        {passed ? (
          <div className="space-y-3 pt-2">
            <p className="text-xs text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              Great job! You have demonstrated Tajweed mastery for this chapter.
            </p>
            <button
              onClick={onPassQuiz}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-burgundy-950 font-black text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Star className="w-5 h-5 fill-burgundy-950" />
              Complete Chapter &amp; Unlock Next Stage 🎉
            </button>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            <p className="text-xs text-rose-700 font-semibold bg-rose-50 p-2.5 rounded-xl border border-rose-200">
              You need at least 2 correct answers to pass. Please review the lesson and try again!
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleRetake}
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Retake Knowledge Check
              </button>
              {mode === 'teacher' && (
                <button
                  onClick={onPassQuiz}
                  className="px-4 py-3 bg-amber-500 text-burgundy-950 font-black text-xs rounded-xl shadow-2xs cursor-pointer"
                >
                  Teacher Pass
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-amber-900/10 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
      {/* Teacher Mode Control Banner */}
      {mode === 'teacher' && (
        <div className="bg-amber-400/20 border border-amber-500/40 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-amber-950 font-bold">
            <Trophy className="w-4 h-4 text-amber-700" />
            <span>Teacher Mode: Review answers or fast-track chapter completion.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAnswerKey(!showAnswerKey)}
              className="px-3 py-1.5 bg-white text-slate-800 font-bold text-xs rounded-xl border border-amber-300 hover:bg-amber-50 transition-all cursor-pointer"
            >
              {showAnswerKey ? 'Hide Answer Key' : 'Show Answer Key'}
            </button>
            <button
              onClick={onPassQuiz}
              className="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
              Mark Complete
            </button>
          </div>
        </div>
      )}

      {/* Teacher Answer Key Box */}
      {mode === 'teacher' && showAnswerKey && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl space-y-3 text-xs text-amber-950">
          <h4 className="font-black text-amber-900 flex items-center gap-1.5">
            🔑 Teacher Answer Key for Chapter {chapterNumber}:
          </h4>
          <ol className="list-decimal list-inside space-y-2 font-medium">
            {questions.map((q, idx) => (
              <li key={idx}>
                <strong>{q.question}</strong> → <span className="font-bold text-emerald-800">{q.options[q.correctIndex]}</span>
                <p className="text-[11px] text-slate-600 pl-4 font-normal">{q.explanation}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-700" />
          <h3 className="font-black text-slate-900 text-sm">
            Chapter {chapterNumber} Practice &amp; Knowledge Check
          </h3>
        </div>
        <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
          Question {currentIdx + 1} of {questions.length}
        </span>
      </div>

      <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
        {currentQ.question}
      </p>

      <div className="space-y-2">
        {currentQ.options.map((opt, optIdx) => {
          let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-amber-50 hover:border-amber-300';

          if (isAnswered) {
            if (optIdx === currentQ.correctIndex) {
              btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
            } else if (selectedOpt === optIdx) {
              btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
            } else {
              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => handleSelectOption(optIdx)}
              disabled={isAnswered}
              className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && optIdx === currentQ.correctIndex && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-950 space-y-1">
          <div className="font-bold text-amber-900 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-600" /> Tajweed Explanation:
          </div>
          <p className="leading-relaxed text-slate-700">{currentQ.explanation}</p>
        </div>
      )}

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
        >
          <span>{currentIdx + 1 === questions.length ? 'View Quiz Results' : 'Next Question'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// ─── Lesson Selector ─────────────────────────────────────────────────────────
const getLessonContent = (
  chapterNumber: number,
  language: LanguageOption
): React.ReactNode => {
  switch (chapterNumber) {
    case 1: return <AlphabetMakhrajLesson language={language} />;
    case 2: return <HarakatLesson language={language} />;
    case 3: return <LetterJoiningLesson language={language} />;
    case 4: return <TanweenLesson language={language} />;
    case 5: return <SukunQalqalahLesson language={language} />;
    case 6: return <MaddLesson language={language} />;
    case 7: return <TashdeedLesson language={language} />;
    case 8: return <TajweedRulesLesson language={language} />;
    default: return null;
  }
};

// ─── Main Component ──────────────────────────────────────────────────────────
export const ChapterLessonView: React.FC<ChapterLessonViewProps> = ({
  chapter,
  mode,
  language = 'english',
  onBack,
  onMarkComplete,
  isCompleted,
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Curriculum Path
      </button>

      {/* Noorani Opening Supplication Banner */}
      <NooraniSupplicationBanner language={language} />

      <div className={`relative overflow-hidden bg-gradient-to-br ${chapter.gradient} rounded-3xl p-6 text-white shadow-xl`}>
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="text-xs font-bold text-white/70 uppercase tracking-widest">Stage {chapter.number} of 8 • Al-Hira Neo-Noorani Qaidah Analysis</div>
          <h1 className="text-2xl font-black leading-tight">{chapter.title}</h1>
          <p className="font-arabic text-lg font-black text-white/80" dir="rtl">{chapter.arabicTitle}</p>
          <p className="text-xs text-white/70 font-medium leading-relaxed mt-1">{chapter.description}</p>
        </div>
      </div>

      {getLessonContent(chapter.number, language)}

      {/* Tajweed Color Legend */}
      <TajweedColorLegend language={language} />

      {/* Interactive Knowledge Check Quiz */}
      <ChapterQuiz
        chapterNumber={chapter.number}
        mode={mode}
        onPassQuiz={onMarkComplete}
        isCompleted={isCompleted}
      />
    </div>
  );
};
