import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  GraduationCap,
  Volume2
} from 'lucide-react';
import type { LessonData, AppMode, ArticulationZone } from '../types';
import { playArabicAudio } from '../utils/audioHelper';

interface DashboardProps {
  lessons: LessonData[];
  mode: AppMode;
  onSelectLesson: (lessonNumber: number) => void;
  onNavigateTab: (tab: any) => void;
}

const ZONES: ArticulationZone[] = ['Throat', 'Tongue', 'Lips', 'Nasal', 'Empty Space'];

export const Dashboard: React.FC<DashboardProps> = ({
  lessons,
  mode,
  onSelectLesson,
  onNavigateTab,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const totalLetters = 28;
  const completedCount = lessons.filter(l => l.isCompleted).length;
  const progressPercent = Math.round((completedCount / totalLetters) * 100);

  const filteredLessons = selectedZone === 'All'
    ? lessons
    : lessons.filter(l => l.makhraj.zone === selectedZone);

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#551421] via-[#6A1B29] to-[#3B0C16] text-white p-8 md:p-10 shadow-xl border border-amber-500/20">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-8">
          <span className="font-arabic text-[180px] font-bold text-amber-200">بِسْمِ اللَّهِ</span>
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold border border-amber-300/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {mode === 'teacher' ? '👨‍🏫 Instructor Dashboard' : '🎓 Student Learning Hub'}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Arabic Tajweed & Makhraj Master
          </h1>

          <p className="text-amber-100/80 text-sm sm:text-base leading-relaxed">
            Master all 28 Arabic letters with precise articulation diagrams, audio pronunciation, interactive forms, and instant self-practice.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('journey')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-black text-sm shadow-md transition-all duration-150 transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" /> View 8-Chapter Journey
            </button>
            <button
              onClick={() => onNavigateTab('letters')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all duration-150"
            >
              <span>Alphabet Library (28)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Alphabet</span>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">28 Letters</div>
          <p className="text-xs text-slate-500 mt-1">Complete Tajweed Curriculum</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Letters Mastered</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-emerald-800">{completedCount} / 28</div>
          <p className="text-xs text-slate-500 mt-1">Pronunciation & Makhraj verified</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Learning Progress</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-amber-900">{progressPercent}%</div>
          <p className="text-xs text-slate-500 mt-1">Overall completion score</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-bold text-slate-800">Overall Progress Tracker</span>
          <span className="font-extrabold text-amber-800">{progressPercent}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${Math.max(4, progressPercent)}%` }}
          />
        </div>
      </div>

      {/* 28 Arabic Letter Grid with Articulation Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">28 Arabic Letters Library</h2>
            <p className="text-xs text-slate-500">Tap any letter card to open its interactive lesson & audio guide</p>
          </div>

          {/* Articulation Zone Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedZone('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedZone === 'All' ? 'bg-burgundy-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
            >
              All
            </button>
            {ZONES.map(zone => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${selectedZone === zone ? 'bg-burgundy-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5">
          {filteredLessons.map((lesson) => {
            return (
              <div
                key={lesson.id}
                className={`
                  group relative flex flex-col justify-between p-4 rounded-2xl bg-white border text-right transition-all duration-200
                  hover:-translate-y-1 hover:shadow-md hover:border-amber-400
                  ${lesson.isCompleted ? 'border-emerald-300 bg-emerald-50/20 ring-1 ring-emerald-400/30' : 'border-slate-200'}
                `}
              >
                {/* Header number & audio quick button */}
                <div dir="ltr" className="flex items-center justify-between w-full text-left">
                  <span className="text-xs font-extrabold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                    {String(lesson.lessonNumber).padStart(2, '0')}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playArabicAudio(lesson.arabicLetter);
                    }}
                    className="p-1 rounded-lg hover:bg-amber-100 text-amber-800 transition-colors"
                    title="Play Audio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Big Arabic Letter Clickable */}
                <button
                  onClick={() => onSelectLesson(lesson.lessonNumber)}
                  className="my-3 text-center w-full focus:outline-hidden"
                >
                  <span className="font-arabic font-bold text-4xl text-slate-900 group-hover:text-burgundy-900 transition-colors block">
                    {lesson.arabicLetter}
                  </span>
                </button>

                {/* Footer Name & Status */}
                <button
                  onClick={() => onSelectLesson(lesson.lessonNumber)}
                  dir="ltr"
                  className="flex items-center justify-between w-full text-left text-xs pt-2 border-t border-slate-100"
                >
                  <span className="font-semibold text-slate-700 truncate">{lesson.name}</span>
                  {lesson.isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <span className="text-[10px] text-slate-400">Study</span>
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
