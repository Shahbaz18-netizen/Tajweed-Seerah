import React, { useState } from 'react';
import {
  Users,
  AlertCircle,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  FileText,
  Check,
  Video,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { StudentProfile, LessonData } from '../types';

interface TeacherEvaluationQueueProps {
  lessons: LessonData[];
  onOpenLesson?: (lessonNumber: number) => void;
  onOpenClassroom?: () => void;
}

// Initial realistic 1-on-1 student cohort
const INITIAL_STUDENTS: StudentProfile[] = [
  {
    id: 'std_1',
    name: 'Zaid Khan',
    avatar: '👦',
    currentChapterNumber: 1,
    unlockedLessonNumber: 4,
    plan: '3x',
    nextLiveClass: 'Today at 4:30 PM',
    status: 'active',
    teacherNotes: 'Completed Letters 1 to 3. Practicing Thaa (ث) live today.',
    lastActive: '15 mins ago',
  },
  {
    id: 'std_2',
    name: 'Aisha Siddiqua',
    avatar: '👧',
    currentChapterNumber: 1,
    unlockedLessonNumber: 7,
    plan: '3x',
    nextLiveClass: 'Tomorrow at 5:00 PM',
    status: 'passed',
    teacherNotes: 'Excellent throat articulation on Haa and Khaa.',
    lastActive: '1 hour ago',
  },
  {
    id: 'std_3',
    name: 'Brother David (Dawud)',
    avatar: '👨',
    currentChapterNumber: 1,
    unlockedLessonNumber: 2,
    plan: '2x',
    nextLiveClass: 'Thursday at 6:00 PM',
    status: 'active',
    teacherNotes: 'New revert. Very patient pacing. Working on Baa vs Taa.',
    lastActive: 'Yesterday',
  },
  {
    id: 'std_4',
    name: 'Sarah Fatima',
    avatar: '👧',
    currentChapterNumber: 2,
    unlockedLessonNumber: 18,
    plan: '4x',
    nextLiveClass: 'Today at 6:15 PM',
    status: 'passed',
    teacherNotes: 'Fast-track learner. Ready for Joining Letters (Chapter 2).',
    lastActive: '2 hours ago',
  },
  {
    id: 'std_5',
    name: 'Rashid Ahmed',
    avatar: '👨',
    currentChapterNumber: 1,
    unlockedLessonNumber: 5,
    plan: '2x',
    nextLiveClass: 'Saturday at 10:00 AM',
    status: 'needs_revision',
    teacherNotes: 'Needs revision on Jeem (ج) middle tongue pressure.',
    lastActive: '3 hours ago',
  },
];

const PREDEFINED_FEEDBACK_CHIPS = [
  'Mumtaz! Clean & clear articulation in live session.',
  'Keep tongue tip slightly between teeth for Thaa (ث).',
  'Deepen the sound from bottom of throat for Hamzah/Haa.',
  'Do not bounce this letter (no Qalqalah).',
  'Fuller mouth rounding needed for Heavy letter (Tafkheem).',
  'Excellent progress! Moving to next lesson.',
];

export const TeacherEvaluationQueue: React.FC<TeacherEvaluationQueueProps> = ({
  lessons,
  onOpenLesson,
  onOpenClassroom,
}) => {
  const [students, setStudents] = useState<StudentProfile[]>(() => {
    const saved = localStorage.getItem('tajweed_teacher_students_roster_v2');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [activeTab, setActiveTab] = useState<'roster' | 'sop'>('roster');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('std_1');
  const [feedbackNote, setFeedbackNote] = useState<string>('');
  const [filterPlan, setFilterPlan] = useState<'all' | '2x' | '3x' | '4x'>('all');
  const [isSopExpanded, setIsSopExpanded] = useState<boolean>(true);

  const saveStudents = (updated: StudentProfile[]) => {
    setStudents(updated);
    localStorage.setItem('tajweed_teacher_students_roster_v2', JSON.stringify(updated));
  };

  const selectedStudent = students.find((s) => s.id === selectedStudentId) || students[0];
  const targetLesson = lessons.find((l) => l.lessonNumber === selectedStudent.unlockedLessonNumber) || lessons[0];

  const filteredStudents = students.filter((s) => {
    if (filterPlan === 'all') return true;
    return s.plan === filterPlan;
  });

  const handlePassLesson = (studentId: string) => {
    const updated = students.map((s) => {
      if (s.id === studentId) {
        return {
          ...s,
          unlockedLessonNumber: Math.min(29, s.unlockedLessonNumber + 1),
          status: 'passed' as const,
          teacherNotes: feedbackNote || `Passed Letter #${s.unlockedLessonNumber} in live session! Next letter unlocked.`,
        };
      }
      return s;
    });

    saveStudents(updated);
    setFeedbackNote('');
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const handleRequestRevision = (studentId: string) => {
    const updated = students.map((s) => {
      if (s.id === studentId) {
        return {
          ...s,
          status: 'needs_revision' as const,
          teacherNotes: feedbackNote || `Review needed on Letter #${s.unlockedLessonNumber}. Scheduled for next 1-on-1 call.`,
        };
      }
      return s;
    });

    saveStudents(updated);
    setFeedbackNote('');
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#551421] via-[#6A1B29] to-[#3B0C16] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold mb-2 border border-amber-400/30">
            <Users className="w-3.5 h-3.5 text-amber-300" />
            <span>Teacher 1-on-1 Portal & Live Session Manager</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Adult & Revert Student Roster
          </h1>
          <p className="text-amber-100/80 text-sm mt-1 max-w-xl">
            Manage your private 1-on-1 students, track individual lesson progress, and evaluate live recitation directly during calls.
          </p>
        </div>

        {/* Quick Action Metrics */}
        <div className="flex items-center gap-3 bg-burgundy-950/70 p-3 rounded-2xl border border-amber-400/20 self-start md:self-auto shadow-inner">
          <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
            <div className="text-[10px] text-amber-200 uppercase font-black">Active 1-on-1</div>
            <div className="text-xl font-black text-amber-300 leading-none mt-0.5">{students.length} 👨‍🎓</div>
          </div>

          {onOpenClassroom && (
            <button
              onClick={onOpenClassroom}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-black text-xs shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Video className="w-4 h-4 text-burgundy-950" />
              <span>Launch Live Call</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Switcher: Student Roster vs Teacher SOP Plan */}
      <div className="flex items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-amber-900/10 shadow-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('roster')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'roster'
                ? 'bg-burgundy-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            <Users className="w-4 h-4" />
            <span>Student 1-on-1 Roster ({students.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('sop')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'sop'
                ? 'bg-burgundy-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            <FileText className="w-4 h-4 text-amber-600" />
            <span>1-on-1 Class Execution SOP</span>
          </button>
        </div>

        {activeTab === 'roster' && (
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
            {(['all', '2x', '3x', '4x'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setFilterPlan(p)}
                className={`px-2.5 py-1 rounded-lg font-bold capitalize transition-all cursor-pointer ${filterPlan === p ? 'bg-white text-burgundy-950 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                {p === 'all' ? 'All Plans' : `${p} / Week`}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* VIEW A: 1-ON-1 STUDENT ROSTER & LIVE EVALUATION              */}
      {/* ──────────────────────────────────────────────────────────── */}
      {activeTab === 'roster' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Student Roster List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center justify-between">
              <span>Enrolled Students</span>
              <span className="text-xs font-semibold text-slate-500">{filteredStudents.length} Students</span>
            </h3>

            <div className="space-y-2">
              {filteredStudents.map((std) => {
                const isSelected = std.id === selectedStudentId;
                const lesson = lessons.find((l) => l.lessonNumber === std.unlockedLessonNumber) || lessons[0];

                return (
                  <div
                    key={std.id}
                    onClick={() => {
                      setSelectedStudentId(std.id);
                      setFeedbackNote('');
                    }}
                    className={`
                      p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3
                      ${isSelected
                        ? 'bg-amber-50/80 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50/60'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl shadow-2xs">
                        {std.avatar}
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 leading-tight">
                          {std.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Active: <span className="font-bold text-amber-900">{lesson.name} ({lesson.arabicLetter})</span> • Plan: {std.plan}/wk
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-bold">
                        <Calendar className="w-3 h-3 text-amber-600" /> {std.nextLiveClass}
                      </span>
                      <div className="text-[10px] text-slate-400 mt-1">{std.lastActive}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Student Review & Live Session Decision Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shadow-inner">
                  {selectedStudent.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    {selectedStudent.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Plan: <strong className="text-amber-900">{selectedStudent.plan} Sessions/Week</strong> • Next Class: {selectedStudent.nextLiveClass}
                  </p>
                </div>
              </div>

              {onOpenLesson && (
                <button
                  onClick={() => onOpenLesson(targetLesson.lessonNumber)}
                  className="px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs font-black hover:bg-amber-100 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Inspect Lesson</span>
                </button>
              )}
            </div>

            {/* Current Lesson Target Card */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-amber-900/10 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] text-amber-800 font-extrabold uppercase tracking-wider">
                  Target Letter for Live Session
                </div>
                <div className="text-base font-black text-slate-900 mt-0.5">
                  #{targetLesson.lessonNumber} {targetLesson.name} ({targetLesson.pronunciation})
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Zone: <span className="font-bold text-amber-900">{targetLesson.makhraj.zone}</span> — {targetLesson.makhraj.simpleExplanation}
                </p>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-white border border-amber-300 flex items-center justify-center shadow-xs shrink-0">
                <span className="font-arabic font-extrabold text-4xl text-burgundy-950">
                  {targetLesson.arabicLetter}
                </span>
              </div>
            </div>

            {/* Student Progress & Previous Session Notes */}
            {selectedStudent.teacherNotes && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                <span className="text-[10px] font-black text-amber-900 uppercase tracking-wider block">
                  Ustadh Notes from Last Session:
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  {selectedStudent.teacherNotes}
                </p>
              </div>
            )}

            {/* Predefined Quick Feedback Chips */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Quick Live Guidance Chips (Tap to Add):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {PREDEFINED_FEEDBACK_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeedbackNote(chip)}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 transition-colors cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Teacher Note Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Teacher Notes for This 1-on-1 Call:
              </label>
              <textarea
                value={feedbackNote}
                onChange={(e) => setFeedbackNote(e.target.value)}
                placeholder="Notes on student articulation, homework practice, or Salah recitation..."
                rows={2}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white"
              />
            </div>

            {/* Live Session Evaluation Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleRequestRevision(selectedStudent.id)}
                className="flex-1 py-3 px-4 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-black text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Repeat in Next Session</span>
              </button>

              <button
                onClick={() => handlePassLesson(selectedStudent.id)}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>Letter Mastered & Unlock Next (ممتاز)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* VIEW B: 1-ON-1 CLASSROOM SOP (From SOP Plan PDF)             */}
      {/* ──────────────────────────────────────────────────────────── */}
      {activeTab === 'sop' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-1">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Official Teacher Execution Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">
                1-on-1 Adult & Revert Class SOP (25-Min Framework)
              </h2>
            </div>

            <button
              onClick={() => setIsSopExpanded(!isSopExpanded)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
            >
              {isSopExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-amber-500 text-burgundy-950 font-black text-xs flex items-center justify-center">
                  1
                </span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  3 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Warmup & Welcome</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Greet the adult/revert warmly. Ask how their week was and review the previous letter to put them at ease.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                  2
                </span>
                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                  7 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Makhraj Anatomy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Show the 3D mouth diagram for today's letter. Explain tongue contact point and vocal cord tension without academic jargon.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center">
                  3
                </span>
                <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md">
                  10 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Live Repetition Drill</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student repeats letter with Fathah, Kasrah, Dammah, and Sukoon. Ustadh corrects mouth shaping in real time.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  4
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  5 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Surah / Dua Application</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect the letter to an Ayah from Surah Al-Fatihah or Salah. Stamp completion and unlock next letter.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
