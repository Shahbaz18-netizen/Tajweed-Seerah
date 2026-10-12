import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Brain,
  Lock,
  Compass
} from 'lucide-react';
import type { LessonData, AppMode, ArticulationZone } from '../types';
import { TeacherEvaluationQueue } from './TeacherEvaluationQueue';

interface DashboardProps {
  lessons: LessonData[];
  mode: AppMode;
  onSelectLesson: (lessonNumber: number) => void;
  onNavigateTab: (tab: any) => void;
  unlockedLessonNumber?: number;
  onUpdateUnlockedLesson?: (num: number) => void;
}

const ZONES: ArticulationZone[] = ['Throat', 'Tongue', 'Lips', 'Nasal', 'Empty Space'];

export const Dashboard: React.FC<DashboardProps> = ({
  lessons,
  mode,
  onSelectLesson,
  onNavigateTab,
  unlockedLessonNumber = 4,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('All');

  // If teacher mode is active, render the 1-on-1 Teacher Command Center & Live Roster
  if (mode === 'teacher') {
    return (
      <TeacherEvaluationQueue 
        lessons={lessons} 
        onOpenLesson={onSelectLesson} 
        onOpenClassroom={() => onNavigateTab('classroom')} 
      />
    );
  }

  const totalLetters = 29;
  const completedCount = lessons.filter(l => l.isCompleted).length;
  const progressPercent = Math.round((completedCount / totalLetters) * 100);

  // Active target lesson is the current unlocked progression gate
  const currentTargetLesson = lessons.find(l => l.lessonNumber === unlockedLessonNumber) || lessons[0];

  const filteredLessons = selectedZone === 'All'
    ? lessons
    : lessons.filter(l => l.makhraj.zone === selectedZone);

  return (
    <div className="space-y-8 pb-16">
      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. STUDENT ACTIVE 1-ON-1 LEARNING TARGET HERO BANNER         */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#551421] via-[#6A1B29] to-[#3B0C16] text-white p-6 sm:p-9 shadow-xl border border-amber-500/20">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-8">
          <span className="font-arabic text-[180px] font-bold text-amber-200">بِسْمِ اللَّهِ</span>
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold border border-amber-300/30">
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>Chapter 1: The 29 Arabic Letters & Makharij (Phase 1 of 8)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Your Active Lesson: #{currentTargetLesson.lessonNumber} {currentTargetLesson.name} ({currentTargetLesson.arabicLetter})
          </h1>

          <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed max-w-xl">
            Articulation: <span className="text-amber-200 font-bold">{currentTargetLesson.makhraj.zone}</span> — {currentTargetLesson.makhraj.simpleExplanation}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectLesson(currentTargetLesson.lessonNumber)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-black text-xs sm:text-sm shadow-md transition-all duration-150 transform active:scale-95 cursor-pointer"
            >
              <span>▶️ Study Lesson #{currentTargetLesson.lessonNumber}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateTab('practice')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-burgundy-950/80 hover:bg-burgundy-950 text-amber-200 font-bold text-xs sm:text-sm border border-amber-400/30 transition-all cursor-pointer"
            >
              <Brain className="w-4 h-4 text-amber-300" />
              <span>Interactive Knowledge Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. PROGRESS METRIC CARDS                                     */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Current Chapter</span>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">Chapter 1 of 8</div>
          <p className="text-xs text-slate-500 mt-1">Letters & Makhraj Articulation</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Letters Mastered</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-emerald-800">{completedCount} / 29</div>
          <p className="text-xs text-slate-500 mt-1">Recitation verified with Ustadh</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Stage Progression</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-amber-900">{progressPercent}%</div>
          <p className="text-xs text-slate-500 mt-1">Active Letter: #{unlockedLessonNumber}</p>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3. GUIDED 29-LETTER CURRICULUM GRID                          */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Alphabet Learning Map (1-on-1)</h2>
            <p className="text-xs text-slate-500">
              Practice each letter with your Ustadh during live 1-on-1 sessions to advance your journey.
            </p>
          </div>

          {/* Articulation Zone Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedZone('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedZone === 'All' ? 'bg-burgundy-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All (29)
            </button>
            {ZONES.map(zone => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedZone === zone ? 'bg-burgundy-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5">
          {filteredLessons.map((lesson) => {
            const isUnlocked = lesson.lessonNumber <= unlockedLessonNumber;
            const isCurrent = lesson.lessonNumber === unlockedLessonNumber;

            return (
              <div
                key={lesson.id}
                className={`
                  group relative flex flex-col justify-between p-4 rounded-2xl border text-right transition-all duration-200
                  ${!isUnlocked 
                    ? 'bg-slate-100/60 border-slate-200 opacity-60' 
                    : isCurrent
                    ? 'bg-amber-50/40 border-amber-400 ring-2 ring-amber-400/50 shadow-md hover:-translate-y-1'
                    : lesson.isCompleted 
                    ? 'bg-emerald-50/20 border-emerald-300 ring-1 ring-emerald-400/30 hover:-translate-y-1 hover:shadow-md'
                    : 'bg-white border-slate-200 hover:-translate-y-1 hover:shadow-md hover:border-amber-400'}
                `}
              >
                {/* Header number */}
                <div dir="ltr" className="flex items-center justify-between w-full text-left">
                  <span className={`text-xs font-extrabold px-2 py-0.5 rounded-md border ${
                    isCurrent 
                      ? 'bg-amber-400 text-burgundy-950 border-amber-500' 
                      : 'bg-amber-50 text-amber-900 border-amber-200/60'
                  }`}>
                    {String(lesson.lessonNumber).padStart(2, '0')}
                  </span>

                  {!isUnlocked && (
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>

                {/* Big Arabic Letter Clickable */}
                <button
                  onClick={() => isUnlocked && onSelectLesson(lesson.lessonNumber)}
                  disabled={!isUnlocked}
                  className={`my-3 text-center w-full focus:outline-hidden ${isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  <span className={`font-arabic font-bold text-4xl block transition-colors ${
                    isUnlocked ? 'text-slate-900 group-hover:text-burgundy-900' : 'text-slate-400'
                  }`}>
                    {lesson.arabicLetter}
                  </span>
                </button>

                {/* Footer Name & Status */}
                <button
                  onClick={() => isUnlocked && onSelectLesson(lesson.lessonNumber)}
                  disabled={!isUnlocked}
                  dir="ltr"
                  className={`flex items-center justify-between w-full text-left text-xs pt-2 border-t border-slate-100 ${isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  <span className="font-semibold text-slate-700 truncate">{lesson.name}</span>
                  {lesson.isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : isCurrent ? (
                    <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-xs">Active</span>
                  ) : isUnlocked ? (
                    <span className="text-[10px] text-slate-400">Study</span>
                  ) : (
                    <span className="text-[10px] text-slate-400">Locked</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
