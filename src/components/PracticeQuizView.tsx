import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  Volume2, 
  Brain, 
  Check, 
  RefreshCw,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { LessonData, ArticulationZone } from '../types';

interface PracticeQuizViewProps {
  lessons: LessonData[];
  language?: 'english' | 'hinglish' | 'urdu';
  onSelectLesson?: (lessonNumber: number) => void;
}

type QuizCategory = 'makhraj' | 'sifat' | 'forms' | 'flashcards';

interface Question {
  id: string;
  category: 'makhraj' | 'sifat' | 'forms';
  promptTitle: string;
  arabicPrompt?: string;
  subPrompt?: string;
  options: {
    id: string;
    text: string;
    arabic?: string;
    isCorrect: boolean;
  }[];
  explanation: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  targetLessonNumber?: number;
}

// Special Tajweed letter categories
const HEAVY_LETTERS = ['خ', 'ص', 'ض', 'غ', 'ط', 'ق', 'ظ'];
const QALQALAH_LETTERS = ['ق', 'ط', 'ب', 'ج', 'د'];
const THROAT_LETTERS = ['ء', 'ه', 'ع', 'ح', 'غ', 'خ'];
const LIP_LETTERS = ['ب', 'م', 'و', 'ف'];

// Web Audio sound synthesizer for instant feedback without external audio files
const playTone = (type: 'correct' | 'wrong' | 'complete') => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    if (type === 'correct') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'complete') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.35);
      });
    }
  } catch {
    // Audio context may fail if user hasn't interacted or unsupported
  }
};

export const PracticeQuizView: React.FC<PracticeQuizViewProps> = ({
  lessons,
  language = 'hinglish',
  onSelectLesson,
}) => {
  const [activeCategory, setActiveCategory] = useState<QuizCategory>('makhraj');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => {
    return parseInt(localStorage.getItem('tajweed_best_streak') || '0', 10);
  });
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Flashcard Mode States
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [flashcardHarakah, setFlashcardHarakah] = useState<'none' | 'fathah' | 'kasrah' | 'dammah' | 'sukoon'>('none');
  const [knownFlashcards, setKnownFlashcards] = useState<string[]>([]);

  // Sound toggle
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  // Generate question pool based on actual 29 lessons
  const questions: Question[] = useMemo(() => {
    const list: Question[] = [];

    if (activeCategory === 'makhraj') {
      // Zone & Articulation questions
      lessons.forEach((lesson) => {
        const allZones: ArticulationZone[] = ['Throat', 'Tongue', 'Lips', 'Nasal', 'Empty Space'];
        const otherZones = allZones.filter(z => z !== lesson.makhraj.zone).sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [
          { id: 'correct', text: `${lesson.makhraj.zone} (${lesson.makhraj.name})`, isCorrect: true },
          ...otherZones.map((z, idx) => ({ id: `wrong_${idx}`, text: `${z}`, isCorrect: false })),
        ].sort(() => 0.5 - Math.random());

        list.push({
          id: `makhraj_${lesson.lessonNumber}`,
          category: 'makhraj',
          promptTitle: `Where is the letter articulated from?`,
          arabicPrompt: lesson.arabicLetter,
          subPrompt: `Letter: ${lesson.name} (${lesson.pronunciation})`,
          options,
          explanation: {
            english: `${lesson.name} (${lesson.arabicLetter}) is articulated from the ${lesson.makhraj.zone}: ${lesson.makhraj.simpleExplanation}`,
            hinglish: `${lesson.name} (${lesson.arabicLetter}) ka Makhraj ${lesson.makhraj.zone} hai: ${lesson.hinglishDescription}`,
            urdu: `${lesson.name} (${lesson.arabicLetter}) کا مخرج ${lesson.makhraj.zone} ہے: ${lesson.makhraj.simpleExplanation}`,
          },
          targetLessonNumber: lesson.lessonNumber,
        });
      });
    } else if (activeCategory === 'sifat') {
      // 1. Heavy vs Light (Tafkheem vs Tarqeeq)
      lessons.forEach((lesson) => {
        const isHeavy = HEAVY_LETTERS.includes(lesson.arabicLetter);
        list.push({
          id: `sifat_heavy_${lesson.lessonNumber}`,
          category: 'sifat',
          promptTitle: `Is this letter Heavy (Tafkheem / Musta'liyah) or Light (Tarqeeq / Mustafilah)?`,
          arabicPrompt: lesson.arabicLetter,
          subPrompt: `Letter: ${lesson.name}`,
          options: [
            { id: 'heavy', text: 'Heavy (Tafkheem / تفخيم) — Full mouth sound', isCorrect: isHeavy },
            { id: 'light', text: 'Light (Tarqeeq / ترقيق) — Flat mouth sound', isCorrect: !isHeavy },
          ],
          explanation: {
            english: isHeavy
              ? `${lesson.arabicLetter} is one of the 7 Heavy letters (خص ضغط قظ). Keep mouth full.`
              : `${lesson.arabicLetter} is a Light letter (Tarqeeq). Pronounce with relaxed lips and flat tongue.`,
            hinglish: isHeavy
              ? `${lesson.arabicLetter} Mota (Heavy/Tafkheem) padha jata hai (Khas Daghtin Qiz).`
              : `${lesson.arabicLetter} Baareek (Light/Tarqeeq) padha jata hai, aawaz ko patla rakhein.`,
            urdu: isHeavy
              ? `${lesson.arabicLetter} حروفِ مستعلیہ (تفخیم) میں سے ہے، اسے پر کر کے پڑھیں۔`
              : `${lesson.arabicLetter} حروفِ مستفلہ (ترقیق) میں سے ہے، اسے باریک پڑھیں۔`,
          },
          targetLessonNumber: lesson.lessonNumber,
        });
      });

      // 2. Qalqalah Questions
      lessons.slice(0, 15).forEach((lesson) => {
        const isQalqalah = QALQALAH_LETTERS.includes(lesson.arabicLetter);
        list.push({
          id: `sifat_qalqalah_${lesson.lessonNumber}`,
          category: 'sifat',
          promptTitle: `Does this letter produce Qalqalah (Echo / Bouncing Sound) when Saakin (ْ)?`,
          arabicPrompt: `${lesson.arabicLetter}ْ`,
          subPrompt: `Letter: ${lesson.name} with Sukoon`,
          options: [
            { id: 'yes', text: 'Yes, it is a Qalqalah Letter (ق ط ب ج د)', isCorrect: isQalqalah },
            { id: 'no', text: 'No, it does NOT bounce', isCorrect: !isQalqalah },
          ],
          explanation: {
            english: isQalqalah
              ? `${lesson.arabicLetter} belongs to 'Qutb Jadd' (قطب جد). When Saakin, it creates a crisp echo/bounce.`
              : `${lesson.arabicLetter} is not a Qalqalah letter. Do not bounce when silent.`,
            hinglish: isQalqalah
              ? `${lesson.arabicLetter} Qutb Jadd (قطب جد) ka hissa hai. Sukoon par jhatka ya echo aata hai.`
              : `${lesson.arabicLetter} Qalqalah nahi hai, isko bina hilaye roka jaye.`,
            urdu: isQalqalah
              ? `${lesson.arabicLetter} حروفِ قلقلہ (قُطْبُ جَدٍّ) میں سے ہے۔ ساکن ہونے پر آواز لوٹتی ہے۔`
              : `${lesson.arabicLetter} قلقلہ کا حرف نہیں ہے۔`,
          },
          targetLessonNumber: lesson.lessonNumber,
        });
      });

      // 3. Throat vs Lip classification
      list.push({
        id: 'sifat_rule_1',
        category: 'sifat',
        promptTitle: 'Which of the following is a Throat Letter (حروفِ حلق)?',
        options: [
          { id: 'opt_1', text: `Letter Haa (${THROAT_LETTERS[3]}) & Ayn (${THROAT_LETTERS[2]})`, arabic: 'ح / ع', isCorrect: true },
          { id: 'opt_2', text: `Letter Baa (${LIP_LETTERS[0]}) & Meem (${LIP_LETTERS[1]})`, arabic: 'ب / م', isCorrect: false },
          { id: 'opt_3', text: 'Letter Kaaf (ك) & Laam (ل)', arabic: 'ك / ل', isCorrect: false },
          { id: 'opt_4', text: 'Letter Seen (س) & Saad (ص)', arabic: 'س / ص', isCorrect: false },
        ],
        explanation: {
          english: `The 6 Throat letters are: ${THROAT_LETTERS.join(' ')}.`,
          hinglish: `Huroof-e-Halqi 6 hain: ${THROAT_LETTERS.join(' ')}.`,
          urdu: `حروفِ حلقی چھ ہیں: ${THROAT_LETTERS.join('، ')}۔`,
        },
      });

      list.push({
        id: 'sifat_rule_2',
        category: 'sifat',
        promptTitle: 'Which of these letters is pronounced from the Lips (حروفِ شفتین)?',
        options: [
          { id: 'lip_1', text: `Letter ${LIP_LETTERS.slice(0, 2).join(' & ')}`, arabic: LIP_LETTERS.slice(0, 2).join(' / '), isCorrect: true },
          { id: 'throat_1', text: `Letter ${THROAT_LETTERS.slice(0, 2).join(' & ')}`, arabic: THROAT_LETTERS.slice(0, 2).join(' / '), isCorrect: false },
          { id: 'tongue_1', text: 'Letter Seen (س) & Zay (ز)', arabic: 'س / ز', isCorrect: false },
          { id: 'tongue_2', text: 'Letter Daal (د) & Taa (ت)', arabic: 'د / ت', isCorrect: false },
        ],
        explanation: {
          english: `The 4 Lip letters are: ${LIP_LETTERS.join(' ')}.`,
          hinglish: `Honton (Lips) se nikalne wale huroof 4 hain: ${LIP_LETTERS.join(' ')}.`,
          urdu: `دونوں ہونٹوں سے ادا ہونے والے حروف: ${LIP_LETTERS.join('، ')}۔`,
        },
      });
    } else if (activeCategory === 'forms') {
      // 4-Forms & Word Recognition Questions
      lessons.forEach((lesson) => {
        if (!lesson.vocabulary || lesson.vocabulary.length === 0) return;
        const sampleVocab = lesson.vocabulary[0];
        const posText = sampleVocab.position === 1 ? 'Beginning (اول)' : sampleVocab.position === 2 ? 'Middle (درمیان)' : sampleVocab.position === 3 ? 'Ending (آخر)' : 'Isolated (تنہا)';

        const options = [
          { id: 'pos_1', text: 'Beginning (Initial)', isCorrect: sampleVocab.position === 1 },
          { id: 'pos_2', text: 'Middle (Medial)', isCorrect: sampleVocab.position === 2 },
          { id: 'pos_3', text: 'Ending (Final)', isCorrect: sampleVocab.position === 3 },
          { id: 'pos_4', text: 'Isolated (Alone)', isCorrect: sampleVocab.position === 4 },
        ];

        list.push({
          id: `forms_${lesson.lessonNumber}`,
          category: 'forms',
          promptTitle: `In what position does '${lesson.arabicLetter}' appear in this word?`,
          arabicPrompt: sampleVocab.arabicWord,
          subPrompt: `Word: ${sampleVocab.transliteration} (${sampleVocab.meaning}) — Highlighted: ${sampleVocab.highlightChar}`,
          options,
          explanation: {
            english: `In '${sampleVocab.arabicWord}', the letter appears in the ${posText} form (${lesson.forms.beginning || lesson.arabicLetter}).`,
            hinglish: `'${sampleVocab.arabicWord}' me ye letter ${posText} shakal me aaya hai.`,
            urdu: `لفظ '${sampleVocab.arabicWord}' میں یہ حرف ${posText} شکل میں ہے۔`,
          },
          targetLessonNumber: lesson.lessonNumber,
        });
      });
    }

    // Shuffle and pick 10 questions per quiz session
    return list.sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [lessons, activeCategory]);

  const currentQ = questions[currentQuestionIndex];

  // Save best streak
  useEffect(() => {
    if (streak > bestStreak) {
      setBestStreak(streak);
      localStorage.setItem('tajweed_best_streak', String(streak));
    }
  }, [streak, bestStreak]);

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
    setIsAnswerSubmitted(true);

    const isCorrect = currentQ.options.find(o => o.id === optionId)?.isCorrect;
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setScore(prev => prev + 10);
      if (!isSoundMuted) playTone('correct');

      // Milestone confetti
      if (newStreak % 5 === 0) {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
    } else {
      setStreak(0);
      if (!isSoundMuted) playTone('wrong');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      if (!isSoundMuted) playTone('complete');
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  // Flashcard Helpers
  const currentFlashcard = lessons[flashcardIndex];
  const applyHarakah = (char: string) => {
    switch (flashcardHarakah) {
      case 'fathah': return `${char}َ`;
      case 'kasrah': return `${char}ِ`;
      case 'dammah': return `${char}ُ`;
      case 'sukoon': return `${char}ْ`;
      default: return char;
    }
  };

  const toggleKnownCard = (id: string) => {
    setKnownFlashcards(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#551421] via-[#6A1B29] to-[#3B0C16] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold mb-2 border border-amber-400/30">
            <Brain className="w-3.5 h-3.5 text-amber-300" />
            <span>Interactive Tajweed Practice & Evaluation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tajweed Mastery Drill & Quiz
          </h1>
          <p className="text-amber-100/80 text-sm mt-1 max-w-xl">
            Test your knowledge of all 29 letter makharij, heavy vs light rules, qalqalah echoes, and word positions with instant explanations.
          </p>
        </div>

        {/* Gamified Live Stats Counter */}
        <div className="flex items-center gap-3 bg-burgundy-950/70 p-3 rounded-2xl border border-amber-400/20 self-start md:self-auto shadow-inner">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
            <div>
              <div className="text-[10px] text-amber-200 uppercase font-black">Streak</div>
              <div className="text-lg font-black text-amber-300 leading-none">{streak} 🔥</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <Trophy className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-[10px] text-emerald-200 uppercase font-black">Score</div>
              <div className="text-lg font-black text-emerald-300 leading-none">{score} XP</div>
            </div>
          </div>

          <button
            onClick={() => setIsSoundMuted(!isSoundMuted)}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 transition-colors"
            title={isSoundMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
          >
            <Volume2 className={`w-5 h-5 ${isSoundMuted ? 'opacity-40' : 'text-amber-300'}`} />
          </button>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 bg-white p-2 rounded-2xl border border-amber-900/10 shadow-xs">
        {[
          { id: 'makhraj' as QuizCategory, label: '🎯 Makhraj Zones', desc: 'Articulation test' },
          { id: 'sifat' as QuizCategory, label: '⚡ Sifat & Rules', desc: 'Heavy/Light & Qalqalah' },
          { id: 'forms' as QuizCategory, label: '🔤 Forms in Words', desc: '4-Positions test' },
          { id: 'flashcards' as QuizCategory, label: '🃏 Rapid Flashcards', desc: 'Spaced review' },
        ].map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                handleRestartQuiz();
              }}
              className={`flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-burgundy-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-amber-50/60 hover:text-slate-900'
              }`}
            >
              <div className="font-bold text-xs sm:text-sm">{tab.label}</div>
              <div className={`text-[10px] ${isActive ? 'text-amber-200' : 'text-slate-400'}`}>
                {tab.desc}
              </div>
            </button>
          );
        })}
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* MODE 1, 2, 3: QUIZ QUESTION CARD */}
      {/* ──────────────────────────────────────────────────────────── */}
      {activeCategory !== 'flashcards' && !isQuizCompleted && currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg space-y-6">
          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
              <span>Best Streak: {bestStreak} 🔥</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Prompt Area */}
          <div className="text-center py-4 bg-[#FAF7F2] rounded-2xl border border-amber-900/10 relative overflow-hidden">
            <div className="text-xs uppercase font-extrabold tracking-wider text-amber-800 mb-2">
              {currentQ.promptTitle}
            </div>

            {currentQ.arabicPrompt && (
              <div className="my-2">
                <span className="font-arabic font-bold text-6xl sm:text-7xl text-burgundy-950 inline-block drop-shadow-xs">
                  {currentQ.arabicPrompt}
                </span>
              </div>
            )}

            {currentQ.subPrompt && (
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                {currentQ.subPrompt}
              </p>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:bg-amber-50/30';

              if (isAnswerSubmitted) {
                if (option.isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/30';
                } else if (isSelected && !option.isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-500/30';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={isAnswerSubmitted}
                  className={`
                    p-4 rounded-2xl border-2 text-left transition-all duration-150 flex items-center justify-between gap-3
                    ${btnStyle}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 shrink-0">
                      {option.arabic || '•'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold leading-snug">
                      {option.text}
                    </span>
                  </div>

                  {isAnswerSubmitted && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner (Appears after answer submitted) */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Ustadh Explanation & Tajweed Rule</span>
                </div>
                {currentQ.targetLessonNumber && onSelectLesson && (
                  <button
                    onClick={() => onSelectLesson(currentQ.targetLessonNumber!)}
                    className="text-xs font-black text-amber-900 hover:text-burgundy-900 underline flex items-center gap-1"
                  >
                    <span>Open Lesson #{currentQ.targetLessonNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {language === 'urdu'
                  ? currentQ.explanation.urdu
                  : language === 'hinglish'
                  ? currentQ.explanation.hinglish
                  : currentQ.explanation.english}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-transform active:scale-95"
                >
                  <span>{currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Quiz Results'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* QUIZ COMPLETED SUMMARY SCREEN */}
      {/* ──────────────────────────────────────────────────────────── */}
      {isQuizCompleted && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-900/10 shadow-xl text-center space-y-6 max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center shadow-inner">
            <Award className="w-10 h-10 text-amber-600" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Round Complete! ماشاء الله
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              You scored <span className="font-bold text-emerald-700">{score} XP</span> with a best streak of <span className="font-bold text-amber-700">{bestStreak} 🔥</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold">Accuracy</div>
              <div className="text-2xl font-black text-slate-900">{Math.round((score / (questions.length * 10)) * 100)}%</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="text-xs text-slate-500 uppercase font-bold">Total XP Earned</div>
              <div className="text-2xl font-black text-amber-600">+{score} XP</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestartQuiz}
              className="px-6 py-3 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-sm flex items-center gap-2 shadow-md transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another 10 Questions</span>
            </button>
            <button
              onClick={() => setActiveCategory('flashcards')}
              className="px-6 py-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-sm border border-amber-300 transition-all"
            >
              <span>Practice Flashcards</span>
            </button>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* MODE 4: RAPID 3D FLASHCARDS */}
      {/* ──────────────────────────────────────────────────────────── */}
      {activeCategory === 'flashcards' && currentFlashcard && (
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Flashcard Header Controls */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-amber-900/10 shadow-xs">
            <div className="text-xs font-bold text-slate-600">
              Letter {flashcardIndex + 1} of {lessons.length}
            </div>

            {/* Harakah Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {(['none', 'fathah', 'kasrah', 'dammah', 'sukoon'] as const).map((h) => (
                <button
                  key={h}
                  onClick={() => setFlashcardHarakah(h)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold font-arabic transition-all ${
                    flashcardHarakah === h ? 'bg-burgundy-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {h === 'none' ? 'حرف' : h === 'fathah' ? 'ـَ' : h === 'kasrah' ? 'ـِ' : h === 'dammah' ? 'ـُ' : 'ـْ'}
                </button>
              ))}
            </div>

            <div className="text-xs font-black text-emerald-700">
              Mastered: {knownFlashcards.length}/{lessons.length}
            </div>
          </div>

          {/* Interactive Flashcard with Flip Animation */}
          <div 
            onClick={() => setIsCardFlipped(!isCardFlipped)}
            className="cursor-pointer perspective-[1000px] min-h-[360px]"
          >
            <div 
              className={`
                w-full h-full min-h-[360px] rounded-3xl p-8 border-2 shadow-xl transition-all duration-500 flex flex-col justify-between items-center text-center
                ${isCardFlipped 
                  ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-400' 
                  : 'bg-white border-amber-900/15 hover:border-amber-400 hover:shadow-2xl'}
              `}
            >
              {!isCardFlipped ? (
                // Card Front
                <>
                  <div className="w-full flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-semibold">
                      #{currentFlashcard.lessonNumber}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <RefreshCw className="w-3.5 h-3.5" /> Tap card to flip
                    </span>
                  </div>

                  <div className="my-6">
                    <span className="font-arabic font-extrabold text-8xl text-burgundy-950 block drop-shadow-sm">
                      {applyHarakah(currentFlashcard.arabicLetter)}
                    </span>
                    <div className="mt-3 text-lg font-black text-slate-800">
                      {currentFlashcard.name}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Pronunciation: <span className="font-bold text-amber-800">{currentFlashcard.pronunciation}</span>
                    </div>
                  </div>

                  <div className="w-full text-xs text-slate-400 flex items-center justify-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Guess the Makhraj zone & rules before flipping</span>
                  </div>
                </>
              ) : (
                // Card Back
                <>
                  <div className="w-full flex items-center justify-between text-xs font-bold text-amber-900">
                    <span className="bg-amber-200/70 px-2 py-0.5 rounded-md">
                      Makhraj & Tajweed Guide
                    </span>
                    <span className="flex items-center gap-1 text-amber-800">
                      <RefreshCw className="w-3.5 h-3.5" /> Tap to see letter
                    </span>
                  </div>

                  <div className="my-3 space-y-3 text-left w-full">
                    <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block">
                        Articulation Zone ({currentFlashcard.makhraj.zone})
                      </span>
                      <p className="text-xs text-slate-800 font-bold mt-0.5">
                        {currentFlashcard.makhraj.name}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        {currentFlashcard.makhraj.simpleExplanation}
                      </p>
                    </div>

                    {currentFlashcard.makhraj.keyRule && (
                      <div className="bg-amber-100/70 p-3 rounded-xl border border-amber-300/80">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 block">
                          Key Tajweed Rule
                        </span>
                        <p className="text-xs text-amber-950 font-medium mt-0.5">
                          {currentFlashcard.makhraj.keyRule}
                        </p>
                      </div>
                    )}

                    {currentFlashcard.vocabulary && currentFlashcard.vocabulary[0] && (
                      <div className="text-xs text-slate-600 flex items-center justify-between pt-1">
                        <span>Example Word:</span>
                        <span className="font-arabic font-bold text-lg text-burgundy-900">
                          {currentFlashcard.vocabulary[0].arabicWord}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="w-full text-center text-xs text-amber-800 font-semibold">
                    Mark your confidence below 👇
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Flashcard Action Buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setFlashcardIndex(prev => (prev > 0 ? prev - 1 : lessons.length - 1));
                setIsCardFlipped(false);
              }}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Previous
            </button>

            <button
              onClick={() => toggleKnownCard(currentFlashcard.id)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                knownFlashcards.includes(currentFlashcard.id)
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{knownFlashcards.includes(currentFlashcard.id) ? 'Mastered ✅' : 'Mark as Mastered'}</span>
            </button>

            <button
              onClick={() => {
                setFlashcardIndex(prev => (prev < lessons.length - 1 ? prev + 1 : 0));
                setIsCardFlipped(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white text-xs font-black transition-colors"
            >
              Next Letter →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
