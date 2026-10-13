import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  Lock,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  Check,
  Video,
  Heart,
  Calendar,
  X
} from 'lucide-react';
import type { LanguageOption } from '../utils/translations';
import confetti from 'canvas-confetti';

interface AdultLandingPageProps {
  language?: LanguageOption;
  onStartLearning: () => void;
  onSelectTab: (tab: string) => void;
}

export const AdultLandingPage: React.FC<AdultLandingPageProps> = ({
  onStartLearning,
  onSelectTab,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'2x' | '3x' | '4x' | 'self_paced'>('3x');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<'all' | 'reverts' | 'scheduling' | 'curriculum'>('all');
  const [startingLevel, setStartingLevel] = useState<'zero' | 'alphabet' | 'surahs'>('zero');

  // Interactive Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<1 | 2>(1);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingBackground, setBookingBackground] = useState<'revert' | 'adult_beginner' | 'revision'>('revert');
  const [bookingTime, setBookingTime] = useState<'morning' | 'evening' | 'weekend'>('evening');
  const [bookingGoal, setBookingGoal] = useState<'salah_confidence' | 'read_quran' | 'master_tajweed'>('salah_confidence');
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);

  const handleOpenBooking = (plan: '2x' | '3x' | '4x' | 'self_paced') => {
    setSelectedPlan(plan);
    setBookingStep(1);
    setIsBookingModalOpen(true);
    setIsBookedSuccess(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookedSuccess(true);
    confetti({ particleCount: 140, spread: 85, origin: { y: 0.55 } });
    setTimeout(() => {
      setIsBookingModalOpen(false);
      onStartLearning();
    }, 2800);
  };

  const roadmapStages = [
    { num: '01', title: 'Vocal Organs & True Articulation', desc: 'Identify throat, tongue, and lip points with clear anatomical models', icon: '🎯' },
    { num: '02', title: 'Script Joining & Recognition', desc: 'Read beginning, middle, and isolated letter shapes without hesitation', icon: '✍️' },
    { num: '03', title: 'Vowels & Madd Rhythmic Counts', desc: 'Fathah, Kasrah, Dammah and natural 2, 4, 6 count rhythmic prolongations', icon: '📏' },
    { num: '04', title: 'Tanween & Sukoon Mastery', desc: 'Double vowels, resting pauses, and seamless phonetic flow in verses', icon: '✨' },
    { num: '05', title: 'Noon & Meem Sakinah Rules', desc: 'Idgham, Ikhfa, Iqlab and gentle nasal resonance (Ghunnah)', icon: '🌊' },
    { num: '06', title: 'Heavy vs Light Qualities', desc: 'Tafkheem (elevated thick resonance) vs Tarqeeq (soft light melody)', icon: '⚖️' },
    { num: '07', title: 'Rules of Stopping (Waqf)', desc: 'Where to pause naturally in a verse without altering sacred meaning', icon: '🛑' },
    { num: '08', title: 'Direct Mushaf Recitation', desc: 'Read Surah Al-Mulk, Surah Yasin & Juz Amma with serene beauty', icon: '📖' }
  ];

  const outcomes = [
    {
      title: 'Daily Salah with Serene Confidence',
      desc: 'Never second-guess whether your Surah Al-Fatihah or Tashahhud is pronounced correctly in your 5 daily prayers.',
      icon: '🤲'
    },
    {
      title: '100% Dignified, Non-Judgmental Space',
      desc: 'Our Ustadhs are specifically trained to mentor adult beginners and reverts. Ask questions freely without shame.',
      icon: '🔒'
    },
    {
      title: 'Trained Ear for Fine Pronunciation',
      desc: 'Learn the exact physical positioning of tongue and throat so difficult Arabic sounds become second nature.',
      icon: '🎯'
    },
    {
      title: 'Direct Recitation from the Quran',
      desc: 'Progress from isolated words to reciting full pages of the Holy Mushaf with peaceful flow and Tajweed.',
      icon: '📖'
    }
  ];

  const faqs = [
    {
      q: 'I am a revert and know zero Arabic. Will I feel overwhelmed or judged?',
      category: 'reverts',
      a: 'Never. Our Ustadhs are specifically trained to mentor adult reverts with utmost gentleness, patience, and warmth. You will be in a 100% private 1-on-1 environment where you can ask any question, repeat sounds as many times as you need, and learn with total dignity.'
    },
    {
      q: 'Why 1-on-1 instead of group classes?',
      category: 'curriculum',
      a: 'Tajweed is a physical vocal science. In a group class, students often feel shy or embarrassed making mistakes in front of others. In private 1-on-1 sessions, your teacher listens exclusively to your voice, catches subtle tongue and throat positioning flaws instantly, and adapts the speed entirely to your comfort.'
    },
    {
      q: 'What if I already know the alphabet and just need revision?',
      category: 'curriculum',
      a: 'During your first 1-on-1 session, your Ustadh will conduct a quick placement audit. If you already know the letters, we immediately fast-track you to Makhraj refinement, Heavy vs Light rules (Tafkheem/Tarqeeq), and reading directly from the Qur\'an.'
    },
    {
      q: 'How does scheduling work with my busy work or family routine?',
      category: 'scheduling',
      a: 'We offer maximum flexibility. You choose your class times (morning, evening, or weekend). If an unexpected work meeting or family event comes up, you can easily reschedule with 12 hours notice directly inside your portal or via WhatsApp.'
    },
    {
      q: 'Can I practice between our live 1-on-1 sessions?',
      category: 'curriculum',
      a: 'Yes! Every enrolled student gets full 24/7 access to our interactive web app with 3D anatomical mouth diagrams, HabitKit dot-matrix habit tracker, and Seerah stories to study privately anytime.'
    },
    {
      q: 'Can female students request a female teacher?',
      category: 'reverts',
      a: 'Yes! We have certified female Ustadhas available for private 1-on-1 mentorship so sisters can study in complete comfort, modesty, and privacy.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) => selectedFaqCategory === 'all' || f.category === selectedFaqCategory
  );

  return (
    <div className="space-y-16 max-w-6xl mx-auto pb-24 font-sans text-slate-800">
      {/* ─── URGENCY TOP ANNOUNCEMENT BAR ──────────────────────────────────── */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-burgundy-950 font-black text-xs sm:text-sm py-2.5 px-4 rounded-2xl text-center shadow-md flex items-center justify-center gap-2 border border-amber-300">
        <Sparkles className="w-4 h-4 text-burgundy-950 shrink-0" />
        <span>PRIVATE 1-ON-1 TAJWEED MENTORSHIP: Safe, Patient & Non-Judgmental for Adults & Reverts</span>
      </div>

      {/* ─── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-burgundy-950 via-[#531321] to-[#2B0810] rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-amber-500/20 text-center space-y-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black border border-amber-400/30 uppercase tracking-wider">
          <Heart className="w-4 h-4 text-amber-300" /> Dedicated 1-on-1 Adult & Revert Mentorship
        </div>

        {/* High-Converting Core Hook */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight font-serif text-white">
            Too Embarrassed to Start Basic Arabic as an Adult or New Muslim?
          </h1>
          <p className="text-base sm:text-xl text-amber-100/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Experience patient, zero-judgment <strong className="text-amber-300 underline decoration-amber-400/60 font-bold">private 1-on-1 Quran mentorship</strong> tailored to your schedule. Learn proper articulation, read your daily Salah with serenity, and connect with Allah’s words from scratch.
          </p>
        </div>

        {/* 3 Core Value Pill Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto text-xs font-bold pt-1">
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-center gap-2.5 text-amber-200 shadow-md">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>100% Private & Zero Judgment</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-center gap-2.5 text-amber-200 shadow-md">
            <Video className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Dedicated Live Ustadh Every Call</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-center gap-2.5 text-amber-200 shadow-md">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Flexible Hours (Morning / Evening / Weekends)</span>
          </div>
        </div>

        {/* Hero Primary Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => handleOpenBooking('3x')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-burgundy-950 font-black text-sm sm:text-base shadow-xl shadow-amber-950/50 transition-all transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-burgundy-950" />
            <span>Book Your Free 1-on-1 Assessment Call ➔</span>
          </button>

          <button
            onClick={() => onSelectTab('journey')}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-black text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Explore 8-Stage Curriculum</span>
          </button>
        </div>
      </div>

      {/* ─── 2. WHAT YOU WILL MASTER (PRACTICAL OUTCOMES) ────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            Life-Changing Results
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What You Achieve in Your 1-on-1 Mentorship
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Clear, practical transformations that elevate your daily worship and connection with Allah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-2xl shadow-xs">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. INTERACTIVE TRANSFORMATION ESTIMATOR ─────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 to-[#121B28] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            Estimated Learning Speed
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Where Are You Starting Today?
          </h2>
          <p className="text-xs text-slate-400">
            Select your current background to preview your personal 1-on-1 milestone roadmap:
          </p>
        </div>

        {/* Level Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs">
          {[
            { id: 'zero' as const, label: '🌱 Complete Beginner (Zero Arabic)', badge: 'From Scratch' },
            { id: 'alphabet' as const, label: '📖 Know Letters, Stumble in Words', badge: 'Intermediate' },
            { id: 'surahs' as const, label: '🎙️ Need Tajweed & Salah Revision', badge: 'Refinement' },
          ].map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setStartingLevel(lvl.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-1 ${
                startingLevel === lvl.id
                  ? 'bg-amber-400 text-burgundy-950 border-amber-300 font-bold shadow-lg scale-102'
                  : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              <div className="font-bold text-xs">{lvl.label}</div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full inline-block ${
                startingLevel === lvl.id ? 'bg-burgundy-950 text-amber-300' : 'bg-slate-700 text-slate-300'
              }`}>
                {lvl.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Milestone Projection Box */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-black/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div className="font-bold text-amber-300 text-sm">
              {startingLevel === 'zero' && '🎯 Goal: Reading Quranic Words in 6–8 Weeks'}
              {startingLevel === 'alphabet' && '🎯 Goal: Fluent Quran Reading & Vowel Flow in 3–4 Weeks'}
              {startingLevel === 'surahs' && '🎯 Goal: Flawless Tajweed & Salah Certification in 2–3 Weeks'}
            </div>
            <p className="text-slate-300">
              {startingLevel === 'zero' && 'Focus on friendly letter identification, tongue placement, and joining sounds step-by-step.'}
              {startingLevel === 'alphabet' && 'Skip basics! Fast-track to Madd elongation, Sukoon flow, and reading short Surahs smoothly.'}
              {startingLevel === 'surahs' && 'Master Ghunnah, Qalqalah, heavy/light rules, and recite directly with your teacher.'}
            </p>
          </div>

          <button
            onClick={() => handleOpenBooking('3x')}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-bold text-xs shrink-0 shadow-md cursor-pointer transition-all"
          >
            Claim Assessment Call
          </button>
        </div>
      </div>

      {/* ─── 4. WHY 1-ON-1 IS ESSENTIAL FOR ADULTS & REVERTS ─────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            The Mentorship Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Group Classes Fail Adults & New Muslims
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Learn why private 1-on-1 mentorship produces 4x faster results without any embarrassment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Group Class Pitfalls */}
          <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border-2 border-rose-200 space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-rose-200">
              <div className="w-10 h-10 rounded-2xl bg-rose-200 text-rose-800 flex items-center justify-center font-black text-lg">
                ❌
              </div>
              <div>
                <h3 className="font-black text-rose-950 text-base">Crowded Group Classes</h3>
                <p className="text-xs text-rose-700 font-semibold">Shyness, Waiting & Zero Personal Care</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 text-sm">✕</span>
                <span>Feeling self-conscious or humiliated mispronouncing letters in front of 15 other students.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 text-sm">✕</span>
                <span>Waiting 45 minutes for other students while getting only 2-3 minutes of actual recitation time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 text-sm">✕</span>
                <span>Fixed rigid schedules that clash with your job, university exams, or children’s routines.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0 text-sm">✕</span>
                <span>Teachers who rush through rules without showing where the tongue and throat physically position.</span>
              </li>
            </ul>
          </div>

          {/* 1-on-1 Mentorship Model */}
          <div className="bg-emerald-50/90 rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 space-y-5 shadow-lg">
            <div className="flex items-center gap-3 pb-3 border-b border-emerald-200">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                ✅
              </div>
              <div>
                <h3 className="font-black text-emerald-950 text-base">Our 1-on-1 Mentorship Model</h3>
                <p className="text-xs text-emerald-800 font-bold">Safe, Dedicated, Patient & Dignified</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-800 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% Private Dignity</strong> — Make mistakes freely in a patient, welcoming, safe environment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% of Teacher’s Attention</strong> — Every minute is dedicated to listening and correcting your vocal flow.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Flexible Scheduling</strong> — Morning, evening, or weekend slots designed around your adult lifestyle.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Interactive Web App Included</strong> — Practice with 3D mouth diagrams and the HabitKit tracker between your live calls.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── 5. THE 8-STAGE LEARNING ROADMAP ─────────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            Clear Step-by-Step Pathway
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The 8-Stage Quran Mastery Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            From absolute zero to fluent, melodious recitation of the Holy Quran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmapStages.map((stage) => (
            <div
              key={stage.num}
              className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{stage.icon}</span>
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  STAGE {stage.num}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">{stage.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 6. FREQUENCY-BASED 1-ON-1 PACKAGES ─────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Simple 1-on-1 Monthly Mentorship Plans
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Choose Your Weekly 1-on-1 Live Class Frequency
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            All plans include a dedicated Ustadh, private live calls, flexible rescheduling, and full 24/7 web app access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Plan 1: 2x / Week */}
          <div
            onClick={() => setSelectedPlan('2x')}
            className={`bg-white rounded-3xl p-6 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
              selectedPlan === '2x'
                ? 'border-amber-500 shadow-xl ring-2 ring-amber-400/40'
                : 'border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">The Busy Professional</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">$59</span>
                <span className="text-xs text-slate-500 font-bold">/ month</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">Steady, manageable pace for working adults and busy parents.</p>

              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <strong>2 Private 1-on-1 Classes / Week</strong> (8/mo)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 25 Minutes Per Live Session</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Patient, Zero-Judgment Ustadh</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Full 24/7 Web App & HabitKit Pass</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Flexible 12-Hour Rescheduling</li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenBooking('2x')}
              className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Choose 2 Classes / Week
            </button>
          </div>

          {/* Plan 2: 3x / Week (⭐ MOST POPULAR) */}
          <div
            onClick={() => setSelectedPlan('3x')}
            className={`bg-gradient-to-b from-burgundy-950 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 relative shadow-2xl transform md:-translate-y-2 ${
              selectedPlan === '3x'
                ? 'border-amber-400 ring-4 ring-amber-400/30'
                : 'border-amber-500/40'
            }`}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-burgundy-950 font-black text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              ⭐ Most Recommended for Reverts
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">The Dedicated Revert</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-amber-400">$89</span>
                <span className="text-xs text-amber-200 font-bold">/ month</span>
              </div>
              <p className="text-xs text-amber-100/90 font-medium">Optimal balance of live repetition, habit-building, and rapid retention.</p>

              <ul className="space-y-2.5 text-xs text-amber-100 font-semibold pt-3 border-t border-white/10">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> <strong>3 Private 1-on-1 Classes / Week</strong> (12/mo)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> 25 Minutes Per Live Session</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Real-time Salah & Surah Correction</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Direct WhatsApp Q&A with Ustadh</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Full 24/7 Web App & HabitKit Pass</li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenBooking('3x')}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-burgundy-950 font-black text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
            >
              Choose 3 Classes / Week ➔
            </button>
          </div>

          {/* Plan 3: 4x / Week Intensive */}
          <div
            onClick={() => setSelectedPlan('4x')}
            className={`bg-white rounded-3xl p-6 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
              selectedPlan === '4x'
                ? 'border-amber-500 shadow-xl ring-2 ring-amber-400/40'
                : 'border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Intensive Fast-Track</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">$129</span>
                <span className="text-xs text-slate-500 font-bold">/ month</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">Read the Qur'an with authentic Tajweed in 30–60 days.</p>

              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <strong>4 Private 1-on-1 Classes / Week</strong> (16/mo)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 30 Minutes Per Live Session</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Intensive Daily Recitation Coaching</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> VIP Scheduling & Weekend Priority</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Official Verified Certificate</li>
              </ul>
            </div>

            <button
              onClick={() => handleOpenBooking('4x')}
              className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Choose 4 Classes / Week
            </button>
          </div>
        </div>

        {/* Self-Paced Option Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold text-amber-900 uppercase">Prefer Independent Self-Study?</div>
            <p className="text-xs text-slate-600 mt-0.5">
              Get the <strong>Self-Paced Web App Only Pass</strong> ($19/mo) with full interactive makhraj diagrams, HabitKit tracker, and 8-chapter curriculum.
            </p>
          </div>
          <button
            onClick={onStartLearning}
            className="px-5 py-2.5 rounded-xl bg-white border border-amber-300 text-burgundy-950 font-bold text-xs hover:bg-amber-100 transition-colors shrink-0 cursor-pointer"
          >
            Start Self-Paced ($19/mo)
          </button>
        </div>
      </div>

      {/* ─── 7. REAL REVERT & ADULT STORIES ─────────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Real Transformations
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Inspiring Stories from Adult Learners & Reverts
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Hear from brothers and sisters who started with zero Arabic and now recite with serene fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 hover:border-amber-300 transition-all">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "I took Shahadah last year and was terrified of saying words wrong in Salah. Having a private 1-on-1 teacher who was so gentle and patient completely changed my spiritual life. I can now recite Surah Al-Fatihah with proper Tajweed!"
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Brother David (Dawud)</span>
              <span className="text-slate-400">Revert, United States 🇺🇸</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 hover:border-amber-300 transition-all">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "As a 42-year-old father, I felt ashamed that my young kids read better than me. The 1-on-1 setting gave me complete privacy. My Ustadh never judged me once. Best decision I made this year."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Rashid A.</span>
              <span className="text-slate-400">Project Manager, UK 🇬🇧</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 hover:border-amber-300 transition-all">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "The 3x a week 1-on-1 plan was perfect for my university schedule. Being able to practice with the app between classes and then get immediate live correction in my calls kept me 100% accountable."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Sister Emily (Amina)</span>
              <span className="text-slate-400">Medical Student, Canada 🇨🇦</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS (FILTERABLE ACCORDION) ───────────── */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Everything you need to know about starting your 1-on-1 adult mentorship journey.
          </p>
        </div>

        {/* FAQ Category Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all' as const, label: 'All Questions' },
            { id: 'reverts' as const, label: '🌱 New Reverts' },
            { id: 'scheduling' as const, label: '🕒 Scheduling & Hours' },
            { id: 'curriculum' as const, label: '📖 Teaching Method' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFaqCategory(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFaqCategory === cat.id
                  ? 'bg-burgundy-950 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4.5 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="p-4.5 pt-0 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── 9. FINAL HIGH-IMPACT CTA BANNER ─────────────────────────────────── */}
      <div className="bg-gradient-to-r from-burgundy-950 via-[#5E1726] to-[#2B0810] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl border border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif leading-tight">
            Book Your Free 1-on-1 Assessment Call
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/90 font-medium leading-relaxed">
            Meet your dedicated Ustadh, assess your current vocal pronunciation with zero pressure, and experience the warmth of private mentorship.
          </p>
        </div>

        <div className="relative z-10">
          <button
            onClick={() => handleOpenBooking('3x')}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-burgundy-950 font-black text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5 text-burgundy-950" />
            <span>Claim Your Free 1-on-1 Session Now ➔</span>
          </button>
        </div>

        <p className="relative z-10 text-[11px] text-amber-200/70 font-semibold">
          🔒 100% Private & Non-Judgmental • Zero Obligation
        </p>
      </div>

      {/* ─── 10. INTERACTIVE 1-ON-1 BOOKING MODAL (MULTI-STEP) ───────────────── */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-900/20 relative space-y-5">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isBookedSuccess ? (
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <div className="text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    <Video className="w-3.5 h-3.5 text-amber-700" />
                    <span>Free 1-on-1 Assessment Call</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    Meet Your Dedicated Ustadh
                  </h3>
                  <p className="text-xs text-slate-500">
                    Selected Plan: <strong className="text-amber-900 uppercase">{selectedPlan} Classes/Week</strong>
                  </p>
                </div>

                {bookingStep === 1 ? (
                  <div className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. Dawud / Sarah"
                        className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Your Email or WhatsApp</label>
                      <input
                        type="text"
                        required
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="To send your private Zoom link"
                        className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Where are you starting from?</label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {[
                          { id: 'revert' as const, label: '🌱 New Revert' },
                          { id: 'adult_beginner' as const, label: '📚 Adult Beginner' },
                          { id: 'revision' as const, label: '⚡ Revision' },
                        ].map((bg) => (
                          <button
                            type="button"
                            key={bg.id}
                            onClick={() => setBookingBackground(bg.id)}
                            className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                              bookingBackground === bg.id
                                ? 'bg-amber-100 border-amber-400 text-amber-950 shadow-2xs'
                                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {bg.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (!bookingName.trim()) {
                            alert('Please enter your name.');
                            return;
                          }
                          setBookingStep(2);
                        }}
                        className="w-full py-3.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Next: Select Goal & Timing ➔</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Your Primary Spiritual Goal</label>
                      <div className="grid grid-cols-1 gap-2 text-xs">
                        {[
                          { id: 'salah_confidence' as const, label: '🤲 Recite daily Salah & Fatihah with pure confidence' },
                          { id: 'read_quran' as const, label: '📖 Learn to read the full Qur’an from scratch' },
                          { id: 'master_tajweed' as const, label: '🎙️ Perfect my Makharij and advanced Tajweed rules' }
                        ].map((goal) => (
                          <button
                            type="button"
                            key={goal.id}
                            onClick={() => setBookingGoal(goal.id)}
                            className={`p-2.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                              bookingGoal === goal.id
                                ? 'bg-amber-100 border-amber-400 text-amber-950'
                                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {goal.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Preferred Live Class Timing</label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {[
                          { id: 'morning' as const, label: '🌅 Morning' },
                          { id: 'evening' as const, label: '🌆 Evening' },
                          { id: 'weekend' as const, label: '🗓️ Weekends' },
                        ].map((time) => (
                          <button
                            type="button"
                            key={time.id}
                            onClick={() => setBookingTime(time.id)}
                            className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                              bookingTime === time.id
                                ? 'bg-amber-100 border-amber-400 text-amber-950 shadow-2xs'
                                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {time.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="py-3 px-4 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Confirm Free Assessment Session ➔</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    BarakAllahu Feek, {bookingName || 'Brother/Sister'}!
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                    Your free 1-on-1 assessment request has been confirmed. Your Ustadh will connect with you via {bookingEmail || 'email'} to confirm your first private session. Opening your learning portal now...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
