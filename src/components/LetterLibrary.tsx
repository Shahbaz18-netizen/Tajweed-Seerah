import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LessonData, ArticulationZone } from '../types';

interface LetterLibraryProps {
  lessons: LessonData[];
  onSelectLesson: (lessonNumber: number) => void;
}

const ZONES: (ArticulationZone | 'All')[] = [
  'All',
  'Throat',
  'Tongue',
  'Lips',
  'Nasal',
  'Empty Space',
];

export const LetterLibrary: React.FC<LetterLibraryProps> = ({
  lessons,
  onSelectLesson,
}) => {
  const [activeZone, setActiveZone] = useState<ArticulationZone | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLessons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return lessons.filter((lesson) => {
      const matchesZone = activeZone === 'All' || lesson.makhraj.zone === activeZone;
      const matchesSearch = 
        !query ||
        lesson.name.toLowerCase().includes(query) ||
        lesson.arabicLetter.includes(query) ||
        String(lesson.lessonNumber).includes(query);
      return matchesZone && matchesSearch;
    });
  }, [lessons, activeZone, searchQuery]);

  return (
    <div className="space-y-6 pb-16">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-amber-900/10 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">28 Arabic Alphabet Library</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Explore all 28 Arabic letters in authentic Right-to-Left (RTL) order with audio pronunciation & articulation guide.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-bold border border-amber-200">
            {filteredLessons.length} Letters Showing
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-amber-900/10 shadow-xs">
        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search letter, name, or number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-slate-900"
          />
        </div>

        {/* Articulation Zone Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
          {ZONES.map((zone) => {
            const isActive = activeZone === zone;
            return (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                className={`
                  px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-150 cursor-pointer
                  ${isActive
                    ? 'bg-burgundy-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                `}
              >
                {zone}
              </button>
            );
          })}
        </div>
      </div>

      {/* Letter Cards Grid — AUTHENTIC ARABIC RIGHT-TO-LEFT (RTL) FLOW */}
      <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredLessons.map((lesson) => {
          return (
            <div
              key={lesson.id}
              className={`
                group relative bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer
                hover:-translate-y-1 hover:shadow-lg hover:border-amber-500/50 flex flex-col justify-between
                ${lesson.isCompleted ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'}
              `}
            >
              {/* Card Top Header */}
              <div dir="ltr" className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-black text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded-lg border border-amber-200">
                  Lesson {String(lesson.lessonNumber).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-200">
                  {lesson.makhraj.zone}
                </span>
              </div>

              {/* Big Arabic Display */}
              <div 
                onClick={() => onSelectLesson(lesson.lessonNumber)}
                className="my-6 text-center space-y-2"
                dir="rtl"
              >
                <div className="font-arabic font-bold text-6xl text-slate-900 group-hover:text-burgundy-900 transition-colors">
                  {lesson.arabicLetter}
                </div>
                <div dir="ltr" className="text-lg font-extrabold text-slate-800">{lesson.name}</div>
                <div dir="ltr" className="text-xs text-slate-500 font-medium italic">
                  "{lesson.pronunciation}"
                </div>
              </div>

              {/* Card Footer with Lesson Link */}
              <div dir="ltr" className="pt-4 border-t border-slate-100 flex items-center justify-end text-xs">
                <button
                  onClick={() => onSelectLesson(lesson.lessonNumber)}
                  className="text-amber-800 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  {lesson.isCompleted ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Done
                    </span>
                  ) : (
                    <>Open Lesson <ArrowRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
