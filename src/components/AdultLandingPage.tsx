import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  Award,
  Lock,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  Check
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
  const [selectedTier, setSelectedTier] = useState<'monthly' | 'annual' | 'lifetime'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleClaimTrial = () => {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    onStartLearning();
  };

  const faqs = [
    {
      q: 'Is this platform suitable for complete adult beginners with zero prior Arabic knowledge?',
      a: 'Absolutely. Over 65% of our adult learners start from total zero. We begin with Letter 1 (Alif) using 3D mouth position diagrams, slow-motion audio, and plain-English explanations without complex jargon.'
    },
    {
      q: 'How much time do I need to commit every day?',
      a: 'Just 10 minutes a day! Our micro-learning lessons are specifically structured for busy working professionals, university students, and parents. You can complete a lesson on your commute, lunch break, or before sleep.'
    },
    {
      q: 'Is my learning progress completely private?',
      a: '100% Yes. We understand that many adult learners feel self-conscious or shy starting from zero. Your progress, quizzes, and practice sessions are completely private and self-paced.'
    },
    {
      q: 'Can I use this on both my mobile phone and laptop/desktop computer?',
      a: 'Yes! The platform is fully responsive and works seamlessly across iPhone, Android, iPad, Mac, and Windows PC with automatic cloud synchronization.'
    },
    {
      q: 'What is included in the 30-Module Seerah Journey & Geo-Map?',
      a: 'You get full access to 30 long-form historical chapters inspired by safiur Rahman Mubarakpuri\'s *Ar-Raheeq Al-Makhtum (The Sealed Nectar)*, complete with an interactive animated map of Ancient Arabia and key figure biographies.'
    }
  ];

  return (
    <div className="space-y-12 max-w-6xl mx-auto pb-16 font-sans">
      {/* ─── 1. HERO SECTION (HIGH-CONVERTING ADULT HOOKS) ────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-burgundy-950 via-[#581523] to-amber-950 rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-amber-500/20 text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black border border-amber-400/30 uppercase tracking-wider animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-300" /> Built Specifically for Adults, Professionals & Reverts
        </div>

        {/* Main Adult Privacy & Busy Hooks */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-serif text-white">
            Too Embarrassed to Take Basic Arabic Classes as an Adult?
          </h1>
          <p className="text-base sm:text-xl text-amber-100/90 font-medium leading-relaxed max-w-3xl mx-auto">
            No time for 1-hour Tajweed classes? Master authentic Qur'an letter pronunciations (Makharij) & Seerah <strong className="text-amber-300 underline decoration-amber-400/60">privately from home in 10 minutes a day</strong>.
          </p>
        </div>

        {/* 3 Core Value Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs font-bold pt-2">
          <div className="bg-black/30 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-amber-200">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>100% Private & Self-Paced</span>
          </div>
          <div className="bg-black/30 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-amber-200">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>10 Mins / Day Commute Friendly</span>
          </div>
          <div className="bg-black/30 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-amber-200">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Printable Adult Certificate</span>
          </div>
        </div>

        {/* Hero CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleClaimTrial}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-burgundy-950 font-black text-sm sm:text-base shadow-xl shadow-amber-950/40 transition-all transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start Free 7-Day Adult Trial ➔</span>
          </button>

          <button
            onClick={() => onSelectTab('journey')}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-black text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Explore 8-Stage Pathway</span>
          </button>
        </div>

        {/* Trust Rating Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-200/80 font-semibold">
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <span className="font-bold text-white">4.9/5 Rating</span>
          </div>
          <span>•</span>
          <span>12,000+ Active Adult Learners</span>
          <span>•</span>
          <span>Trilingual English, Hinglish & Urdu</span>
        </div>
      </div>

      {/* ─── 2. OLD WAY VS NEW WAY COMPARISON TABLE ──────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Why Traditional Classes Fail Busy Adults
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            See how Tajweed Master Adult Edition transforms your learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Old Way Card */}
          <div className="bg-rose-50/70 rounded-3xl p-6 border-2 border-rose-200 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-rose-200">
              <div className="w-10 h-10 rounded-2xl bg-rose-200 text-rose-800 flex items-center justify-center font-black text-lg">
                ❌
              </div>
              <div>
                <h3 className="font-black text-rose-950 text-base">The Old Way (Kids' Madrasahs & Rigid Tutors)</h3>
                <p className="text-xs text-rose-700 font-semibold">Frustrating, inconvenient & uncomfortable</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Feeling embarrassed sitting alongside 8-year-old children in basic Qaida classes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Fixed 1-hour evening schedules that clash with office hours, traffic, and family time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Boring cartoon apps designed for kids that lack linguistic depth and classical sources.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>Guessing how guttural throat letters (`ع`, `ح`, `خ`) sound without seeing inside the mouth.</span>
              </li>
            </ul>
          </div>

          {/* New Way Card */}
          <div className="bg-emerald-50/80 rounded-3xl p-6 border-2 border-emerald-300 space-y-4 shadow-md">
            <div className="flex items-center gap-3 pb-3 border-b border-emerald-200">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                ✅
              </div>
              <div>
                <h3 className="font-black text-emerald-950 text-base">The New Way (Tajweed Master Adult Edition)</h3>
                <p className="text-xs text-emerald-800 font-bold">100% Private, dignified & flexible</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-800 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% Private Self-Paced Learning</strong> — Practice from home with zero social anxiety.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>10-Minute Daily Micro-Lessons</strong> — Study on your phone during commutes or lunch breaks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Scholarly Adult Depth</strong> — Trilingual notes (EN, Hinglish, Urdu) with classical Tajweed rules (*Al-Jazariyyah*).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>3D Makhraj Mouth Diagrams & 0.5x Slow Motion</strong> — Crystal clear visual articulation points.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── 3. CORE ADULT FEATURES GRID ─────────────────────────────────────── */}
      <div className="space-y-6 bg-slate-900 text-white p-6 sm:p-10 rounded-3xl border-2 border-amber-500/30 shadow-2xl">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
            Built for Adult Mastery
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            4 Key Pillars of the Adult Learning Engine
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2.5 hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-burgundy-950 font-black flex items-center justify-center">
              👄
            </div>
            <h4 className="font-bold text-white text-sm">3D Mouth Articulation</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clear side-view mouth diagrams showing exact tongue & throat contact points for all 28 letters.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2.5 hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-burgundy-950 font-black flex items-center justify-center">
              🐢
            </div>
            <h4 className="font-bold text-white text-sm">Slow-Motion Audio Player</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Listen to difficult throat letters (`ع`, `ح`, `خ`, `غ`) in 0.5x slow motion for exact audio mimicry.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2.5 hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-burgundy-950 font-black flex items-center justify-center">
              🗺️
            </div>
            <h4 className="font-bold text-white text-sm">Interactive Seerah Map</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              30 long-form modules inspired by *The Sealed Nectar* with an interactive map of Ancient Arabia.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2.5 hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-burgundy-950 font-black flex items-center justify-center">
              📜
            </div>
            <h4 className="font-bold text-white text-sm">Printable Certificate</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Receive a verified personalized Certificate of Completion upon passing course retention exams.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 4. ADULT PRICING TIERS ─────────────────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Invest in Your Sacred Qur'an Literacy Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Choose the plan that fits your learning goals. Cancel anytime with 1 click.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1: Monthly */}
          <div 
            onClick={() => setSelectedTier('monthly')}
            className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
              selectedTier === 'monthly'
                ? 'border-amber-500 shadow-xl ring-2 ring-amber-400/40'
                : 'border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Monthly Pass</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">$9.99</span>
                <span className="text-xs text-slate-500 font-bold">/ month</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">Flexible monthly learning for adults on the go.</p>
              
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Full Access to 8 Tajweed Stages</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> All 30 Seerah Modules & Geo-Map</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Trilingual English, Hinglish & Urdu</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Cancel anytime</li>
              </ul>
            </div>

            <button
              onClick={handleClaimTrial}
              className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Start Monthly Pass
            </button>
          </div>

          {/* Tier 2: Annual (MOST POPULAR) */}
          <div 
            onClick={() => setSelectedTier('annual')}
            className={`bg-gradient-to-b from-burgundy-950 to-amber-950 text-white rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 relative shadow-2xl transform md:-translate-y-2 ${
              selectedTier === 'annual'
                ? 'border-amber-400 ring-4 ring-amber-400/30'
                : 'border-amber-500/40'
            }`}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-burgundy-950 font-black text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              ⭐ Most Popular — Save 50%
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">Annual Adult Pass</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-amber-400">$59</span>
                <span className="text-xs text-amber-200 font-bold">/ year ($4.91/mo)</span>
              </div>
              <p className="text-xs text-amber-100/90 font-medium">Complete 1-year mastery pass with extra perks.</p>
              
              <ul className="space-y-2.5 text-xs text-amber-100 font-semibold pt-3 border-t border-white/10">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Everything in Monthly Pass</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> <strong>Verified Printable Certificate</strong></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Downloadable PDF Tajweed Cheat Sheets</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Priority Qari Audio Support</li>
              </ul>
            </div>

            <button
              onClick={handleClaimTrial}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-burgundy-950 font-black text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
            >
              Start 7-Day Free Annual Trial ➔
            </button>
          </div>

          {/* Tier 3: Lifetime */}
          <div 
            onClick={() => setSelectedTier('lifetime')}
            className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
              selectedTier === 'lifetime'
                ? 'border-amber-500 shadow-xl ring-2 ring-amber-400/40'
                : 'border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Executive Lifetime Pass</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">$149</span>
                <span className="text-xs text-slate-500 font-bold">one-time</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">Pay once for lifetime access & all future updates.</p>
              
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold pt-3 border-t border-slate-100">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Unlimited Lifetime Access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Family Access (Up to 4 Accounts)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> All Future Tajweed & Seerah Modules</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> VIP Student Support</li>
              </ul>
            </div>

            <button
              onClick={handleClaimTrial}
              className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Get Lifetime Pass
            </button>
          </div>
        </div>
      </div>

      {/* ─── 5. ADULT TESTIMONIALS & REVIEWS ────────────────────────────────── */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Loved by 12,000+ Adult Learners Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Real stories from working professionals, parents, and revert Muslims.
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
              "As a 34-year-old software engineer, I was always self-conscious that I couldn't recite Arabic fluently. This app gave me 100% privacy to learn at my own pace. In 3 weeks, I mastered all 28 letter makharij!"
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Tariq M.</span>
              <span className="text-slate-400">Software Engineer, UK</span>
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
              "I converted to Islam 2 years ago and struggled with Tajweed rules. The 3D mouth diagrams and slow-motion audio made letters like `ع` and `ح` crystal clear for the first time!"
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Sarah K.</span>
              <span className="text-slate-400">Revert Muslimah, Canada</span>
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
              "Between managing my business and 3 kids, 1-hour live classes were impossible. Doing 10 minutes on this app during my train commute is a total game changer."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Dr. Bilal H.</span>
              <span className="text-slate-400">Physician, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 6. FREQUENTLY ASKED QUESTIONS (ACCORDION) ───────────────────────── */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Everything you need to know about starting your adult learning journey.
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

      {/* ─── 7. FINAL HIGH-IMPACT CTA BANNER ─────────────────────────────────── */}
      <div className="bg-gradient-to-r from-burgundy-950 via-[#5E1726] to-amber-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-amber-500/20">
        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif">
            Start Your Private Adult Journey Today
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
            Join 12,000+ adult Muslims mastering authentic Qur'an pronunciation in 10 minutes a day.
          </p>
        </div>

        <button
          onClick={handleClaimTrial}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-burgundy-950 font-black text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 cursor-pointer inline-flex items-center gap-2"
        >
          <span>Claim 7-Day Free Trial Now ➔</span>
        </button>

        <p className="text-[11px] text-amber-200/70 font-semibold">
          🛡️ 30-Day Money-Back Guarantee • 100% Risk Free • Cancel Anytime
        </p>
      </div>
    </div>
  );
};
