import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Trophy, 
  Flame,
  Star,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Volume2
} from 'lucide-react';
import type { LessonData, AppMode } from '../types';
import { QURAN_CURRICULUM_CHAPTERS, type ChapterData } from '../data/chaptersData';
import { playArabicAudio } from '../utils/audioHelper';

interface ChapterJourneyViewProps {
  lessons: LessonData[];
  mode: AppMode;
  onSelectLesson: (lessonNumber: number) => void;
  onOpenChapterLesson: (chapterNumber: number) => void;
  completedChapters: number[];
}

export const ChapterJourneyView: React.FC<ChapterJourneyViewProps> = ({
  lessons,
  mode,
  onSelectLesson,
  onOpenChapterLesson,
  completedChapters,
}) => {
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>('ch-1');
  const [teacherUnlockAll, setTeacherUnlockAll] = useState(false);

  // Compute student progress
  const completedLettersCount = lessons.filter((l) => l.isCompleted).length;
  const isCh1Completed = completedLettersCount === 28;
  const nextPendingLesson = lessons.find((l) => !l.isCompleted)?.lessonNumber || 1;

  // Full unlock logic for all 8 chapters
  const isChapterCompleted = (chapter: ChapterData): boolean => {
    if (chapter.number === 1) return isCh1Completed || completedChapters.includes(1);
    return completedChapters.includes(chapter.number);
  };

  const isChapterUnlocked = (chapter: ChapterData): boolean => {
    if (mode === 'teacher') return true;
    if (teacherUnlockAll) return true;
    if (chapter.number === 1) return true;
    if (chapter.number === 2) return isCh1Completed || completedChapters.includes(1) || completedLettersCount >= 14;
    return completedChapters.includes(chapter.number - 1);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* HERO BANNER: LEARNING JOURNEY */}
      <div className="relative overflow-hidden bg-gradient-to-r from-burgundy-950 via-[#6B1B2A] to-amber-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-amber-500/20">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" /> Complete Pathway to Qur'an Reading
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-serif">
              Your Qur'an & Tajweed Journey
            </h1>
            <p className="text-sm text-amber-100/80 leading-relaxed font-medium">
              A step-by-step classical curriculum that guides you from individual letter articulation (Makharij) to reading full Qur'anic verses with perfect Tajweed.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-5 shrink-0 self-stretch sm:self-auto justify-around">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-xs">
                <Flame className="w-4 h-4" /> Active
              </div>
              <div className="text-xl font-black text-white mt-0.5">Chapter 1</div>
              <div className="text-[10px] text-amber-200/70">28 Letters</div>
            </div>

            <div className="w-px h-10 bg-white/10" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4" /> Progress
              </div>
              <div className="text-xl font-black text-white mt-0.5">
                {completedLettersCount} <span className="text-xs text-slate-300 font-normal">/ 28</span>
              </div>
              <div className="text-[10px] text-emerald-200/70">Letters Mastered</div>
            </div>
          </div>
        </div>

        {/* Teacher Mode Active Banner */}
        {mode === 'teacher' && (
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-amber-200 font-bold bg-amber-400/20 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Teacher Mode Active — All 8 Chapters Unlocked for Classroom Preview & Instruction</span>
            </div>
            <button
              onClick={() => setTeacherUnlockAll(!teacherUnlockAll)}
              className="flex items-center gap-1.5 text-xs text-emerald-300 font-bold bg-emerald-500/20 hover:bg-emerald-500/30 px-3 py-1.5 rounded-xl border border-emerald-400/30 transition-all cursor-pointer"
            >
              <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{teacherUnlockAll ? 'All Chapters Manual Unlock ON' : 'Toggle Unlock All'}</span>
            </button>
          </div>
        )}
      </div>

      {/* CHAPTER PATHWAY LIST */}
      <div className="space-y-5">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-wide">
              8 Curriculum Stages
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Master each chapter sequentially to unlock the next stage.
            </p>
          </div>

          <button
            onClick={() => onSelectLesson(nextPendingLesson)}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-burgundy-950 font-black text-xs flex items-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <span>Continue Lesson {nextPendingLesson}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          {QURAN_CURRICULUM_CHAPTERS.map((chapter) => {
            const isUnlocked = isChapterUnlocked(chapter);
            const isExpanded = expandedChapterId === chapter.id;

            return (
              <div
                key={chapter.id}
                className={`
                  bg-white rounded-3xl border-2 transition-all overflow-hidden shadow-xs
                  ${isUnlocked 
                    ? 'border-amber-900/10 hover:border-amber-300' 
                    : 'border-slate-200 bg-slate-50/50 opacity-90'}
                `}
              >
                {/* Chapter Card Header */}
                <div 
                  className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                  onClick={() => setExpandedChapterId(isExpanded ? null : chapter.id)}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Chapter Number Badge */}
                    <div className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 shadow-sm
                      bg-gradient-to-br ${chapter.gradient} text-white
                    `}>
                      {isUnlocked ? (
                        chapter.number === 1 && isCh1Completed ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : (
                          chapter.number
                        )
                      ) : (
                        <Lock className="w-5 h-5 text-white/80" />
                      )}
                    </div>

                    {/* Chapter Titles & Subtitle */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                          Stage {chapter.number} of 8
                        </span>
                        {!isUnlocked && (
                          <span className="text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Lock className="w-3 h-3" /> Locked
                          </span>
                        )}
                        {isUnlocked && isChapterCompleted(chapter) && (
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3-5 h-3.5" /> Mastered
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                          {chapter.title}
                        </h3>
                        <span className="font-arabic font-bold text-base text-burgundy-900">
                          {chapter.arabicTitle}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 font-medium">
                        {chapter.subtitle} • {chapter.totalLessons} Lessons
                      </p>
                    </div>
                  </div>

                  {/* Right side: Progress / Action Button & Expand Chevron */}
                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    {isUnlocked ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenChapterLesson(chapter.number);
                          }}
                          className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer ${
                            isChapterCompleted(chapter)
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-amber-500 hover:bg-amber-600 text-burgundy-950'
                          }`}
                        >
                          {isChapterCompleted(chapter) ? (
                            <><CheckCircle2 className="w-3.5 h-3.5" /><span>Review Stage {chapter.number}</span></>
                          ) : (
                            <><Star className="w-3.5 h-3.5" /><span>Start Stage {chapter.number}</span></>
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 font-medium hidden sm:block">
                        <span>🔒 Requires Stage {chapter.prerequisiteChapter}</span>
                      </div>
                    )}

                    <div className="p-1 rounded-full text-slate-400 hover:text-slate-600">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details & Topics Breakdown */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-50/60 border-t border-slate-100 space-y-6">
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {chapter.description}
                    </p>

                    {/* INTERACTIVE 28 ARABIC LETTERS GRID FOR STAGE 1 */}
                    {chapter.number === 1 && (
                      <div className="space-y-3 pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black uppercase text-amber-950 tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-amber-600" /> Stage 1 Letters Grid (Click any letter to study)
                          </h4>
                          <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                            {completedLettersCount} / 28 Mastered
                          </span>
                        </div>

                        <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                          {lessons.map((l) => (
                            <div
                              key={l.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectLesson(l.lessonNumber);
                              }}
                              className={`
                                group relative flex flex-col justify-between p-3.5 rounded-2xl bg-white border text-right transition-all duration-150
                                hover:-translate-y-1 hover:shadow-md hover:border-amber-400 cursor-pointer
                                ${l.isCompleted ? 'border-emerald-300 bg-emerald-50/40 ring-1 ring-emerald-400/30' : 'border-slate-200'}
                              `}
                            >
                              <div dir="ltr" className="flex items-center justify-between w-full">
                                <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-200/60">
                                  {String(l.lessonNumber).padStart(2, '0')}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playArabicAudio(l.arabicLetter);
                                  }}
                                  className="p-1 rounded text-amber-800 hover:bg-amber-100 transition-colors"
                                  title="Play Audio"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="my-2 text-center w-full">
                                <span className="font-arabic font-bold text-3xl text-slate-900 group-hover:text-burgundy-900 transition-colors block">
                                  {l.arabicLetter}
                                </span>
                              </div>

                              <div dir="ltr" className="flex items-center justify-between w-full text-[11px] pt-1.5 border-t border-slate-100">
                                <span className="font-bold text-slate-700 truncate">{l.name}</span>
                                {l.isCompleted ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                ) : (
                                  <span className="text-[9px] text-amber-800 font-bold uppercase">Study</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Topics Grid - Clickable to open lesson */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                        Stage {chapter.number} Lesson Topics & Key Objectives
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {chapter.topics.map((topic, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isUnlocked || mode === 'teacher') {
                                onOpenChapterLesson(chapter.number);
                              }
                            }}
                            className={`w-full text-left bg-white p-3.5 rounded-2xl border transition-all space-y-1 shadow-2xs group ${
                              isUnlocked || mode === 'teacher'
                                ? 'hover:border-amber-400 hover:shadow-md cursor-pointer active:scale-[0.99] border-slate-200/80'
                                : 'opacity-70 border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5 group-hover:text-amber-900">
                                <span className="w-5 h-5 rounded-full bg-amber-100 group-hover:bg-amber-400 group-hover:text-slate-950 text-amber-900 text-[10px] font-black flex items-center justify-center transition-colors">
                                  {idx + 1}
                                </span>
                                {topic.title}
                              </span>
                              <div className="flex items-center gap-2">
                                {topic.arabicExample && (
                                  <span className="font-arabic font-black text-sm text-burgundy-900" dir="rtl">
                                    {topic.arabicExample}
                                  </span>
                                )}
                                {(isUnlocked || mode === 'teacher') && (
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 transition-colors" />
                                )}
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-snug pl-6 group-hover:text-slate-700">
                              {topic.description}
                            </p>
                            {(isUnlocked || mode === 'teacher') && (
                              <div className="text-[10px] font-bold text-amber-700 pt-1 pl-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Click to open lesson</span> →
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Milestone Reward Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/80 border border-amber-200/80 p-3.5 px-4 rounded-2xl">
                      <div className="flex items-center gap-2 text-xs text-amber-950 font-bold">
                        <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Completion Reward: {chapter.milestoneReward}</span>
                      </div>

                      {chapter.number === 1 ? (
                        <button
                          onClick={() => onSelectLesson(nextPendingLesson)}
                          className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-burgundy-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <span>Start Letter {nextPendingLesson}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => onOpenChapterLesson(chapter.number)}
                          className={`px-4 py-1.5 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-xs ${
                            isChapterCompleted(chapter)
                              ? 'bg-emerald-500 text-white'
                              : 'bg-amber-500 hover:bg-amber-600 text-burgundy-950'
                          }`}
                        >
                          {isChapterCompleted(chapter) ? (
                            <><CheckCircle2 className="w-3.5 h-3.5" /> Completed — Review</>
                          ) : (
                            <><ArrowRight className="w-3.5 h-3.5" /> Open Chapter</>
                          )}
                        </button>
                      ) : (
                        <div className="text-[11px] text-slate-500 font-semibold text-center sm:text-right">
                          🔒 Complete Stage {chapter.prerequisiteChapter} to Unlock
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
