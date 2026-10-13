import React, { useState, useEffect } from 'react';
import {
  TIMELINE_PHASES,
  DAILY_HABITS_CATEGORIES,
  DAILY_HABITS_DATA,
  type HabitCategory,
  type TimelinePhase
} from '../data/dailyHabitsData';
import {
  Sparkles,
  Sun,
  Flame,
  CheckCircle2,
  Calendar,
  Languages,
  Clock,
  Award,
  Copy,
  Check,
  Video,
  ChevronRight,
  TrendingUp,
  Filter
} from 'lucide-react';

interface DailyHabitsViewProps {
  language?: 'english' | 'hinglish' | 'urdu';
  onNavigateTab?: (tab: string) => void;
}

type DisplayMode = 'timeline' | 'divine_rewards' | 'categories';

export const DailyHabitsView: React.FC<DailyHabitsViewProps> = ({
  language = 'hinglish',
  onNavigateTab
}) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('timeline');
  const [selectedPhase, setSelectedPhase] = useState<TimelinePhase | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<HabitCategory | 'all'>('all');
  const [langPreference, setLangPreference] = useState<'english' | 'hinglish' | 'urdu'>(language);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Daily tracker state keyed by date
  const todayKey = new Date().toISOString().slice(0, 10);
  const [completedHabits, setCompletedHabits] = useState<string[]>(() => {
    const saved = localStorage.getItem(`tajweed_habits_${todayKey}`);
    return saved ? JSON.parse(saved) : ['waking-up', 'wudu-bismillah', 'smiling-salam'];
  });

  // Streak tracking (number of days user marked at least 3 habits)
  const [streakDays, setStreakDays] = useState<number>(() => {
    const saved = localStorage.getItem('tajweed_habits_streak_days');
    return saved ? parseInt(saved, 10) : 4;
  });

  useEffect(() => {
    localStorage.setItem(`tajweed_habits_${todayKey}`, JSON.stringify(completedHabits));
    if (completedHabits.length >= 3) {
      localStorage.setItem('tajweed_habits_streak_days', String(streakDays));
    }
  }, [completedHabits, todayKey, streakDays]);

  const toggleHabit = (id: string) => {
    setCompletedHabits((prev) => {
      const isAlready = prev.includes(id);
      const updated = isAlready ? prev.filter((item) => item !== id) : [...prev, id];
      // If crossing threshold of 3 habits today for first time
      if (!isAlready && updated.length === 3) {
        setStreakDays((s) => s + 1);
      }
      return updated;
    });
  };

  const handleCopyDua = (habitId: string, arabic?: string, translit?: string, english?: string) => {
    const textToCopy = `${arabic || ''}\n${translit || ''}\n"${english || ''}"\n— Learned on Tajweed & Sunnah Portal`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(habitId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Filter items based on active displayMode
  let displayedHabits = DAILY_HABITS_DATA;
  if (displayMode === 'timeline') {
    displayedHabits = selectedPhase === 'all'
      ? [...DAILY_HABITS_DATA].sort((a, b) => a.phaseOrder - b.phaseOrder)
      : DAILY_HABITS_DATA.filter((h) => h.timelinePhase === selectedPhase).sort((a, b) => a.phaseOrder - b.phaseOrder);
  } else if (displayMode === 'categories') {
    displayedHabits = selectedCategory === 'all'
      ? DAILY_HABITS_DATA
      : DAILY_HABITS_DATA.filter((h) => h.category === selectedCategory);
  }

  const completionPercent = Math.round((completedHabits.length / DAILY_HABITS_DATA.length) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER WITH BARAKAH TRACKER & STREAK               */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1C4318] via-[#122E10] to-[#0A1A09] border border-emerald-500/30 p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" />
              Living the Sunnah: Daily Habits & Prophetic Adab
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Day in the Life of a Muslim
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              Transform your daily routine into continuous peace and worship.
              Follow the chronological timeline from dawn to dusk, unlock giant spiritual rewards from small deeds,
              and build consistent habits without judgment.
            </p>
          </div>

          {/* Habit Tracker Stats Widget */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-4 sm:p-5">
            {/* Completion Percentage Ring */}
            <div className="flex items-center gap-3 pr-4 border-r border-emerald-900/60">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-emerald-950 flex flex-col items-center justify-center font-black shadow-lg border border-emerald-300/40">
                <span className="text-lg leading-tight">{completionPercent}%</span>
                <span className="text-[9px] font-bold uppercase tracking-wider">Today</span>
              </div>
              <div>
                <div className="text-base font-black text-white">
                  {completedHabits.length} of {DAILY_HABITS_DATA.length}
                </div>
                <div className="text-xs text-emerald-300/80 font-medium">Habits Done</div>
                <div className="text-[10px] text-emerald-200/60 flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3 h-3" />
                  <span>{todayKey}</span>
                </div>
              </div>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-3 pl-2">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-black text-amber-300">{streakDays} Days</div>
                <div className="text-xs text-amber-100/70 font-medium">Barakah Streak 🔥</div>
              </div>
            </div>
          </div>
        </div>

        {/* View Mode Switcher & Language Controls */}
        <div className="relative z-10 mt-6 pt-6 border-t border-emerald-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setDisplayMode('timeline')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${displayMode === 'timeline'
                ? 'bg-emerald-400 text-emerald-950 shadow-lg font-black scale-102'
                : 'bg-white/10 hover:bg-white/20 text-emerald-100'
                }`}
            >
              <Clock className="w-4 h-4" />
              <span>1. Chronological Day Timeline (Dawn ➔ Night)</span>
            </button>

            <button
              onClick={() => setDisplayMode('divine_rewards')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${displayMode === 'divine_rewards'
                ? 'bg-amber-400 text-burgundy-950 shadow-lg font-black scale-102'
                : 'bg-white/10 hover:bg-white/20 text-emerald-100'
                }`}
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>2. Small Deeds, Giant Rewards (Divine Promises)</span>
            </button>

            <button
              onClick={() => setDisplayMode('categories')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${displayMode === 'categories'
                ? 'bg-emerald-400 text-emerald-950 shadow-lg font-black scale-102'
                : 'bg-white/10 hover:bg-white/20 text-emerald-100'
                }`}
            >
              <Filter className="w-4 h-4" />
              <span>3. Filter By Category</span>
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-xl border border-emerald-500/30 text-xs">
            <Languages className="w-3.5 h-3.5 text-emerald-300" />
            <button
              onClick={() => setLangPreference('english')}
              className={`px-2 py-0.5 rounded-md font-semibold transition-all ${langPreference === 'english' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'text-emerald-200/70 hover:text-white'
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLangPreference('hinglish')}
              className={`px-2 py-0.5 rounded-md font-semibold transition-all ${langPreference === 'hinglish' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'text-emerald-200/70 hover:text-white'
                }`}
            >
              Hinglish
            </button>
            <button
              onClick={() => setLangPreference('urdu')}
              className={`px-2 py-0.5 rounded-md font-semibold transition-all ${langPreference === 'urdu' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'text-emerald-200/70 hover:text-white'
                }`}
            >
              اردو
            </button>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. CHRONOLOGICAL TIMELINE FILTER BAR (If Timeline Active)    */}
      {/* ──────────────────────────────────────────────────────────── */}
      {displayMode === 'timeline' && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Filter Day Phase:
            </span>
            <span>Step-by-Step Flow</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`p-2.5 rounded-xl text-left border transition-all text-xs ${selectedPhase === 'all'
                ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
            >
              <div className="font-bold">Full Day</div>
              <div className="text-[10px] opacity-80">All 13 habits</div>
            </button>

            {TIMELINE_PHASES.map((phase) => {
              const isSelected = selectedPhase === phase.id;
              const phaseHabits = DAILY_HABITS_DATA.filter((h) => h.timelinePhase === phase.id);
              const doneInPhase = phaseHabits.filter((h) => completedHabits.includes(h.id)).length;

              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${isSelected
                    ? 'bg-[#1C4318] text-white border-emerald-700 shadow-sm font-bold'
                    : 'bg-slate-50 hover:bg-emerald-50/50 text-slate-700 border-slate-200'
                    }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-base">{phase.icon}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${doneInPhase === phaseHabits.length && phaseHabits.length > 0
                      ? 'bg-emerald-400 text-emerald-950'
                      : isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                      {doneInPhase}/{phaseHabits.length}
                    </span>
                  </div>
                  <div className="mt-1 font-bold text-xs truncate">{phase.label}</div>
                  <div className="text-[10px] opacity-70 truncate">{phase.timeSpan}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3. CATEGORY FILTER BAR (If Categories Active)               */}
      {/* ──────────────────────────────────────────────────────────── */}
      {displayMode === 'categories' && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'all'
              ? 'bg-emerald-800 text-white shadow-xs font-black'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
          >
            All Categories ({DAILY_HABITS_DATA.length})
          </button>
          {DAILY_HABITS_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${selectedCategory === cat.id
                ? 'bg-emerald-800 text-white shadow-xs font-black'
                : 'bg-white hover:bg-emerald-50/50 text-slate-700 border border-slate-200'
                }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 4. DIVINE REWARDS SHOWCASE BANNER (If Divine Rewards Active) */}
      {/* ──────────────────────────────────────────────────────────── */}
      {displayMode === 'divine_rewards' && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border border-amber-300/80 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-burgundy-950">
            <Award className="w-5 h-5 text-amber-700" />
            <span>The Divine Return on Investment (Small Deeds, Giant Rewards)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            In Islam, Allah multiplies small sincere actions exponentially.
            A 10-second post-wudu du'a opens all 8 gates of Paradise; a 1-second smile counts as gold charity;
            a 25-second Ayat al-Kursi stations a guarding angel at your side. Explore each promise below:
          </p>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 5. HABITS GRID / TIMELINE CARDS                             */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedHabits.map((habit) => {
          const isDone = completedHabits.includes(habit.id);
          const isCopied = copiedId === habit.id;

          return (
            <div
              key={habit.id}
              className={`p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${isDone
                ? 'bg-emerald-50/30 border-emerald-300/80 shadow-xs ring-1 ring-emerald-400/20'
                : 'bg-white border-slate-200 shadow-xs hover:border-emerald-300'
                }`}
            >
              <div className="space-y-4">
                {/* Header row: Time phase badge & Habit Checkbox */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                        {habit.phaseLabel}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {habit.timeOfDayLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {habit.title}
                    </h3>
                  </div>

                  {/* Interactive Habit Checkbox with Streak Trigger */}
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`px-3 py-2 rounded-2xl border transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${isDone
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                      : 'bg-slate-100 text-slate-500 border-slate-200 hover:text-emerald-700 hover:bg-emerald-50'
                      }`}
                    title={isDone ? 'Marked complete today' : 'Tap to mark done today'}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold">{isDone ? 'Done' : 'Do Today'}</span>
                  </button>
                </div>

                {/* 🌟 DIVINE PROMISE BADGE (Small Deed, Giant Reward) */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/60 border border-amber-200/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-amber-900 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      Divine Promise: {habit.divineReward.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-950">
                      ⚡ {habit.divineReward.estimatedTime}
                    </span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed font-medium">
                    {habit.divineReward.rewardPromise}
                  </p>
                  <div className="text-[11px] text-amber-800/80 italic">
                    {habit.divineReward.hadithSnippet} — <span className="font-semibold">{habit.hadithSource}</span>
                  </div>
                </div>

                {/* Arabic Du'a if present */}
                {habit.arabicDua && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border border-emerald-200/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        Prophetic Invocation
                      </span>
                      <button
                        onClick={() => handleCopyDua(habit.id, habit.arabicDua, habit.transliteration, habit.englishMeaning)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 bg-white/80 hover:bg-white px-2 py-1 rounded-lg border border-emerald-300 transition-all cursor-pointer"
                        title="Copy du'a to clipboard"
                      >
                        {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{isCopied ? 'Copied!' : 'Copy Du’a'}</span>
                      </button>
                    </div>

                    <div className="font-arabic text-xl sm:text-2xl font-bold text-emerald-950 leading-loose text-right" dir="rtl">
                      {habit.arabicDua}
                    </div>
                  </div>
                )}

                {/* Transliteration & Meaning */}
                {habit.transliteration && (
                  <div className="space-y-1 text-xs">
                    <div className="font-mono font-bold text-emerald-900 tracking-wide">
                      {habit.transliteration}
                    </div>
                    <div className="text-slate-700 font-medium leading-relaxed">
                      {langPreference === 'hinglish' && habit.hinglishMeaning
                        ? habit.hinglishMeaning
                        : habit.englishMeaning}
                    </div>
                  </div>
                )}

                {/* Action Steps */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Practical Action Steps:
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {habit.actionSteps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mentorship & Revert Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 space-y-2.5">
                {/* Revert Comfort */}
                <div className="flex items-start gap-2 text-xs text-emerald-800">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="italic leading-relaxed">{habit.revertEncouragement}</span>
                </div>

                {/* 1-on-1 Class Prompt */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs">
                  <div className="text-slate-600 truncate">
                    <span className="font-bold text-slate-800">1-on-1 Discussion: </span>
                    <span className="truncate">{habit.mentorshipPrompt}</span>
                  </div>
                  {onNavigateTab && (
                    <button
                      onClick={() => onNavigateTab('classroom')}
                      className="shrink-0 text-emerald-700 font-bold hover:text-emerald-900 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Video className="w-3 h-3" />
                      <span>Class</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 6. WEEKLY CONSISTENCY & ENCOURAGEMENT FOOTER                */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Build Consistency Without Guilt</span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl">
            "The deeds most beloved to Allah are those done regularly, even if they are few." (Bukhari).
            Even checking off 2 or 3 habits each day builds an unshakeable connection of peace.
          </p>
        </div>

        {onNavigateTab && (
          <button
            onClick={() => onNavigateTab('life-mastery')}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1C4318] hover:bg-[#122E10] text-emerald-200 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
          >
            <span>Read Prophetic Stories (Seerah)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
