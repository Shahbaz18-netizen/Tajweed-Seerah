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
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingBackground, setBookingBackground] = useState<'revert' | 'adult_beginner' | 'revision'>('revert');
  const [bookingTime, setBookingTime] = useState<'morning' | 'evening' | 'weekend'>('evening');
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);

  const handleOpenBooking = (plan: '2x' | '3x' | '4x' | 'self_paced') => {
    setSelectedPlan(plan);
    setIsBookingModalOpen(true);
    setIsBookedSuccess(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookedSuccess(true);
    confetti({ particleCount: 130, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => {
      setIsBookingModalOpen(false);
      onStartLearning();
    }, 2500);
  };

  const faqs = [
    {
      q: 'I am a revert and know zero Arabic. Will I feel overwhelmed or judged?',
      a: 'Never. Our Ustadhs are specifically trained to mentor adult reverts with utmost gentleness, patience, and warmth. You will be in a 100% private 1-on-1 environment where you can ask any question, repeat sounds as many times as you need, and learn with total dignity.'
    },
    {
      q: 'Why 1-on-1 instead of group classes?',
      a: 'Tajweed is a physical vocal science. In a group class, students often feel shy or embarrassed making mistakes in front of others. In private 1-on-1 sessions, your teacher listens exclusively to your voice, catches subtle tongue and throat positioning flaws instantly, and adapts the speed entirely to your comfort.'
    },
    {
      q: 'What if I already know the alphabet and just need revision?',
      a: 'During your first 1-on-1 session, your Ustadh will conduct a quick placement audit. If you already know the letters, we immediately fast-track you to Makhraj refinement, Heavy vs Light rules (Tafkheem/Tarqeeq), and reading directly from the Qur\'an.'
    },
    {
      q: 'How does scheduling work with my busy work or family routine?',
      a: 'We offer maximum flexibility. You choose your class times (morning, evening, or weekend). If an unexpected work meeting or family event comes up, you can easily reschedule with 12 hours notice.'
    },
    {
      q: 'Can I practice between our live 1-on-1 sessions?',
      a: 'Yes! Every enrolled student gets full 24/7 access to our interactive web app with 3D anatomical mouth diagrams, slow-motion audio, daily homework checklists, and Seerah stories to practice privately anytime.'
    }
  ];

  return (
    <div className="space-y-12 max-w-6xl mx-auto pb-20 font-sans">
      {/* ─── URGENCY TOP ANNOUNCEMENT BAR ──────────────────────────────────── */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-burgundy-950 font-black text-xs sm:text-sm py-2.5 px-4 rounded-2xl text-center shadow-md flex items-center justify-center gap-2 border border-amber-300">
        <Sparkles className="w-4 h-4 text-burgundy-950 shrink-0" />
        <span>PRIVATE 1-ON-1 TAJWEED MENTORSHIP: Safe, Patient & Non-Judgmental for Adults & Reverts</span>
      </div>

      {/* ─── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-burgundy-950 via-[#531321] to-amber-950 rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-amber-500/20 text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black border border-amber-400/30 uppercase tracking-wider">
          <Heart className="w-4 h-4 text-amber-300" /> Dedicated 1-on-1 Adult & Revert Mentorship
        </div>

        {/* High-Converting Core Hook */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-serif text-white">
            Too Embarrassed to Start Basic Arabic as an Adult or New Muslim?
          </h1>
          <p className="text-base sm:text-xl text-amber-100/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Experience patient, zero-judgment <strong className="text-amber-300 underline decoration-amber-400/60">private 1-on-1 Quran mentorship</strong> tailored to your schedule. Learn proper articulation, read your daily Salah with confidence, and connect with Allah's words from scratch.
          </p>
        </div>

        {/* 3 Core Value Pill Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs font-bold pt-2">
          <div className="bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-amber-200 shadow-xs">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>100% Private & Zero Judgment</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-amber-200 shadow-xs">
            <Video className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Dedicated Live Ustadh Every Call</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-amber-200 shadow-xs">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Flexible Scheduling (2x, 3x, 4x / Wk)</span>
          </div>
        </div>

        {/* Hero Primary Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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

        {/* Trust Badges Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-200/80 font-semibold">
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <span className="font-bold text-white">5.0 Star Mentor Rating</span>
          </div>
          <span>•</span>
          <span>1,200+ Adults & Reverts Mentored</span>
          <span>•</span>
          <span>Trilingual English, Hinglish & Urdu</span>
        </div>
      </div>

      {/* ─── 2. WHY 1-ON-1 IS ESSENTIAL FOR ADULTS & REVERTS ─────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Why Group Classes Fail Adults & New Muslims
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Learn why private 1-on-1 mentorship produces 4x faster results without any embarrassment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Group Class Pitfalls */}
          <div className="bg-rose-50/70 rounded-3xl p-6 border-2 border-rose-200 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-rose-200">
              <div className="w-10 h-10 rounded-2xl bg-rose-200 text-rose-800 flex items-center justify-center font-black text-lg">
                ❌
              </div>
              <div>
                <h3 className="font-black text-rose-950 text-base">Crowded Group Classes</h3>
                <p className="text-xs text-rose-700 font-semibold">Shyness, Waiting & Zero Personal Care</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Feeling self-conscious or humiliated mispronouncing letters in front of 15 other students.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Waiting 40 minutes for other students while getting only 3 minutes of actual recitation time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Fixed rigid schedules that clash with your job, university exams, or children's routines.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Teachers who rush through rules without showing how to physically place the tongue and lips.</span>
              </li>
            </ul>
          </div>

          {/* 1-on-1 Mentorship Model */}
          <div className="bg-emerald-50/90 rounded-3xl p-6 border-2 border-emerald-300 space-y-4 shadow-md">
            <div className="flex items-center gap-3 pb-3 border-b border-emerald-200">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                ✅
              </div>
              <div>
                <h3 className="font-black text-emerald-950 text-base">Our 1-on-1 Mentorship Model</h3>
                <p className="text-xs text-emerald-800 font-bold">Safe, Dedicated & Dignified</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-800 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% Private Dignity</strong> — Make mistakes freely in a patient, welcoming, safe environment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% of Teacher's Attention</strong> — Every single minute is dedicated to listening and correcting your recitation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Flexible Scheduling</strong> — Morning, evening, or weekend slots designed around your adult life.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Interactive Web App Included</strong> — Practice with 3D mouth diagrams and audio between your live calls.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── 3. FREQUENCY-BASED 1-ON-1 PACKAGES ─────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Simple 1-on-1 Monthly Mentorship Plans
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
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
            className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
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
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Full 24/7 Web App Access</li>
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
            className={`bg-gradient-to-b from-burgundy-950 to-amber-950 text-white rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 relative shadow-2xl transform md:-translate-y-2 ${
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
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Full 24/7 Web App & Seerah Modules</li>
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
            className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
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
              Get the <strong>Self-Paced Web App Only Pass</strong> ($19/mo) with full interactive makhraj diagrams, audio player, and weekly voice audit.
            </p>
          </div>
          <button
            onClick={onStartLearning}
            className="px-5 py-2.5 rounded-xl bg-white border border-amber-300 text-burgundy-950 font-bold text-xs hover:bg-amber-100 transition-colors shrink-0"
          >
            Start Self-Paced ($19/mo)
          </button>
        </div>
      </div>

      {/* ─── 4. REAL REVERT & ADULT STORIES ─────────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Inspiring Stories from Adult Learners & Reverts
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Hear from brothers and sisters who started with zero Arabic and now recite with serenity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
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
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Brother David (Dawud)</span>
              <span className="text-slate-400">Revert, United States</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
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
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Rashid A.</span>
              <span className="text-slate-400">Project Manager, UK</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
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
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Sister Emily (Amina)</span>
              <span className="text-slate-400">Medical Student, Canada</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 5. FREQUENTLY ASKED QUESTIONS (ACCORDION) ───────────────────────── */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Everything you need to know about starting your 1-on-1 adult mentorship journey.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
              </button>
              {openFaq === idx && (
                <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── 6. FINAL HIGH-IMPACT CTA BANNER ─────────────────────────────────── */}
      <div className="bg-gradient-to-r from-burgundy-950 via-[#5E1726] to-amber-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-amber-500/20">
        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif">
            Book Your Free 1-on-1 Assessment Call
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
            Meet your dedicated Ustadh, assess your current level with zero pressure, and experience the warmth of private 1-on-1 mentorship.
          </p>
        </div>

        <button
          onClick={() => handleOpenBooking('3x')}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-burgundy-950 font-black text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer inline-flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          <span>Claim Your Free 1-on-1 Session Now ➔</span>
        </button>

        <p className="text-[11px] text-amber-200/70 font-semibold">
          🔒 100% Private & Non-Judgmental • Zero Obligation
        </p>
      </div>

      {/* ─── 7. INTERACTIVE 1-ON-1 BOOKING MODAL ─────────────────────────────── */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-900/20 relative space-y-5">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
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

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
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
                        className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
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

                <div className="space-y-1.5">
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
                        className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
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

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Free 1-on-1 Assessment Session ➔</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    BarakAllahu Feek, {bookingName || 'Brother/Sister'}!
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                    Your free 1-on-1 assessment request has been confirmed. Your Ustadh will connect with you to confirm your first private session. Opening your learning portal now...
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
