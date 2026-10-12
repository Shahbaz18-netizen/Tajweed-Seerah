import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Play, 
  Pause, 
  BookOpen, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { StudentProfile, LessonData } from '../types';

interface TeacherEvaluationQueueProps {
  lessons: LessonData[];
  onOpenLesson?: (lessonNumber: number) => void;
  onOpenClassroom?: () => void;
}

// Initial realistic student cohort data
const INITIAL_STUDENTS: StudentProfile[] = [
  {
    id: 'std_1',
    name: 'Zaid Khan',
    avatar: '👦',
    currentChapterNumber: 1,
    unlockedLessonNumber: 4,
    homework: {
      lessonNumber: 4,
      listenDone: true,
      quizPassed: true,
      recordingSubmitted: true,
      audioBlobUrl: 'mock_audio_url_zaid',
      feedbackStatus: 'pending',
      submittedAt: 'Today at 10:15 AM',
    },
    lastActive: '15 mins ago',
  },
  {
    id: 'std_2',
    name: 'Aisha Siddiqua',
    avatar: '👧',
    currentChapterNumber: 1,
    unlockedLessonNumber: 7,
    homework: {
      lessonNumber: 7,
      listenDone: true,
      quizPassed: true,
      recordingSubmitted: true,
      audioBlobUrl: 'mock_audio_url_aisha',
      feedbackStatus: 'pending',
      submittedAt: 'Today at 09:30 AM',
    },
    lastActive: '1 hour ago',
  },
  {
    id: 'std_3',
    name: 'Hamza Ali',
    avatar: '👦',
    currentChapterNumber: 1,
    unlockedLessonNumber: 12,
    homework: {
      lessonNumber: 12,
      listenDone: true,
      quizPassed: true,
      recordingSubmitted: false,
      feedbackStatus: 'pending',
      submittedAt: 'Pending voice submission',
    },
    lastActive: 'Yesterday',
  },
  {
    id: 'std_4',
    name: 'Sarah Fatima',
    avatar: '👧',
    currentChapterNumber: 2,
    unlockedLessonNumber: 18,
    homework: {
      lessonNumber: 18,
      listenDone: true,
      quizPassed: true,
      recordingSubmitted: true,
      audioBlobUrl: 'mock_audio_url_sarah',
      feedbackStatus: 'passed',
      teacherFeedback: 'Excellent articulation of Ayn and Haa! Clean throat separation.',
      submittedAt: 'Yesterday at 4:20 PM',
    },
    lastActive: '2 hours ago',
  },
  {
    id: 'std_5',
    name: 'Bilal Farooq',
    avatar: '👦',
    currentChapterNumber: 1,
    unlockedLessonNumber: 3,
    homework: {
      lessonNumber: 3,
      listenDone: true,
      quizPassed: false,
      recordingSubmitted: false,
      feedbackStatus: 'needs_practice',
      teacherFeedback: 'Please review the Taa vs Thaa tongue placement drill.',
      submittedAt: 'Pending quiz completion',
    },
    lastActive: '3 hours ago',
  },
];

const PREDEFINED_FEEDBACK_CHIPS = [
  'Mumtaz! Clean & clear articulation.',
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
    const saved = localStorage.getItem('tajweed_teacher_students_roster');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [activeTab, setActiveTab] = useState<'queue' | 'sop'>('queue');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('std_1');
  const [feedbackNote, setFeedbackNote] = useState<string>('');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'passed' | 'needs_practice'>('all');
  const [isSopExpanded, setIsSopExpanded] = useState<boolean>(true);

  const saveStudents = (updated: StudentProfile[]) => {
    setStudents(updated);
    localStorage.setItem('tajweed_teacher_students_roster', JSON.stringify(updated));
  };

  const selectedStudent = students.find((s) => s.id === selectedStudentId) || students[0];
  const targetLesson = lessons.find((l) => l.lessonNumber === selectedStudent.homework.lessonNumber) || lessons[0];

  const pendingCount = students.filter((s) => s.homework.recordingSubmitted && s.homework.feedbackStatus === 'pending').length;

  const filteredStudents = students.filter((s) => {
    if (filterStatus === 'all') return true;
    return s.homework.feedbackStatus === filterStatus;
  });

  const handleApproveStudent = (studentId: string) => {
    const updated = students.map((s) => {
      if (s.id === studentId) {
        return {
          ...s,
          unlockedLessonNumber: Math.min(29, s.unlockedLessonNumber + 1),
          homework: {
            ...s.homework,
            feedbackStatus: 'passed' as const,
            teacherFeedback: feedbackNote || 'Approved! Excellent articulation. Next letter unlocked.',
          },
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
          homework: {
            ...s.homework,
            feedbackStatus: 'needs_practice' as const,
            teacherFeedback: feedbackNote || 'Please review makhraj step 2 and re-record recitation.',
          },
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
            <span>Teacher Command Center & Async Evaluation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Student Roster & Homework Review
          </h1>
          <p className="text-amber-100/80 text-sm mt-1 max-w-xl">
            Evaluate student voice homework asynchronously in minutes. 1 teacher can easily guide 50+ students with instant rubric checks and unlocks.
          </p>
        </div>

        {/* Quick Action Metrics */}
        <div className="flex items-center gap-3 bg-burgundy-950/70 p-3 rounded-2xl border border-amber-400/20 self-start md:self-auto shadow-inner">
          <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
            <div className="text-[10px] text-amber-200 uppercase font-black">Pending Reviews</div>
            <div className="text-xl font-black text-amber-300 leading-none mt-0.5">{pendingCount} ⏳</div>
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="text-[10px] text-emerald-200 uppercase font-black">Total Students</div>
            <div className="text-xl font-black text-emerald-300 leading-none mt-0.5">{students.length} 🎓</div>
          </div>

          {onOpenClassroom && (
            <button
              onClick={onOpenClassroom}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-black text-xs shadow-md transition-all whitespace-nowrap"
            >
              Start Live Class
            </button>
          )}
        </div>
      </div>

      {/* Main Switcher: Homework Queue vs Teacher SOP Plan */}
      <div className="flex items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-amber-900/10 shadow-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('queue')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'queue'
                ? 'bg-burgundy-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Homework Evaluation Inbox ({pendingCount})</span>
          </button>
          <button
            onClick={() => setActiveTab('sop')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'sop'
                ? 'bg-burgundy-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Teacher Execution SOP & Lesson Flow</span>
          </button>
        </div>

        {activeTab === 'queue' && (
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
            {(['all', 'pending', 'passed', 'needs_practice'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2.5 py-1 rounded-lg font-bold capitalize transition-all ${
                  filterStatus === st ? 'bg-white text-burgundy-950 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {st === 'needs_practice' ? 'Needs Revision' : st}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* VIEW A: HOMEWORK EVALUATION QUEUE */}
      {/* ──────────────────────────────────────────────────────────── */}
      {activeTab === 'queue' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Student Roster List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center justify-between">
              <span>Student Cohort List</span>
              <span className="text-xs font-semibold text-slate-500">{filteredStudents.length} Students</span>
            </h3>

            <div className="space-y-2">
              {filteredStudents.map((std) => {
                const isSelected = std.id === selectedStudentId;
                const lesson = lessons.find((l) => l.lessonNumber === std.homework.lessonNumber) || lessons[0];

                return (
                  <div
                    key={std.id}
                    onClick={() => {
                      setSelectedStudentId(std.id);
                      setIsPlayingAudio(false);
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
                          Target: <span className="font-bold text-amber-900">{lesson.name} ({lesson.arabicLetter})</span> • Ch {std.currentChapterNumber}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      {std.homework.feedbackStatus === 'pending' && std.homework.recordingSubmitted ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black border border-amber-300">
                          <Clock className="w-3 h-3 text-amber-600" /> Pending Review
                        </span>
                      ) : std.homework.feedbackStatus === 'passed' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Approved
                        </span>
                      ) : std.homework.feedbackStatus === 'needs_practice' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black">
                          <AlertCircle className="w-3 h-3 text-rose-600" /> Needs Revision
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">
                          Waiting voice
                        </span>
                      )}
                      <div className="text-[10px] text-slate-400 mt-1">{std.lastActive}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Student Review & Audio Rubric Panel */}
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
                    Chapter {selectedStudent.currentChapterNumber} • Highest Unlocked: Letter {selectedStudent.unlockedLessonNumber} of 29
                  </p>
                </div>
              </div>

              {onOpenLesson && (
                <button
                  onClick={() => onOpenLesson(targetLesson.lessonNumber)}
                  className="px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs font-black hover:bg-amber-100 transition-colors flex items-center gap-1"
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
                  Assigned Letter & Articulation
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

            {/* Homework Status Checkmarks */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] text-slate-500 font-bold uppercase">1. Audio Drill</div>
                <div className="text-xs font-black text-emerald-700 flex items-center justify-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Done
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] text-slate-500 font-bold uppercase">2. Quiz Result</div>
                <div className={`text-xs font-black flex items-center justify-center gap-1 mt-1 ${selectedStudent.homework.quizPassed ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {selectedStudent.homework.quizPassed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Clock className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{selectedStudent.homework.quizPassed ? 'Passed (90%)' : 'Incomplete'}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[10px] text-slate-500 font-bold uppercase">3. Voice File</div>
                <div className={`text-xs font-black flex items-center justify-center gap-1 mt-1 ${selectedStudent.homework.recordingSubmitted ? 'text-emerald-700' : 'text-slate-400'}`}>
                  {selectedStudent.homework.recordingSubmitted ? 'Available 🎙️' : 'Awaiting'}
                </div>
              </div>
            </div>

            {/* Student Audio Recitation Playback Box */}
            {selectedStudent.homework.recordingSubmitted ? (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-amber-950 uppercase tracking-wider">
                      Student Voice Submission:
                    </span>
                    <span className="text-xs text-slate-500">{selectedStudent.homework.submittedAt}</span>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                    0:12 Recitation
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-10 h-10 rounded-xl bg-burgundy-900 text-white flex items-center justify-center shadow-md hover:bg-burgundy-950 transition-colors shrink-0"
                  >
                    {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-600 font-semibold mb-1">
                      <span>{isPlayingAudio ? 'Playing student pronunciation...' : 'Recitation Sample (3 repetitions)'}</span>
                      <span>{isPlayingAudio ? '0:07 / 0:12' : '0:12'}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-emerald-500 rounded-full transition-all duration-300 ${isPlayingAudio ? 'w-2/3 animate-pulse' : 'w-0'}`} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center text-slate-500 text-xs">
                No voice recording submitted yet for this lesson. Student is currently completing drills.
              </div>
            )}

            {/* Predefined Quick Feedback Chips */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Quick Pedagogical Feedback Chips (Tap to Insert):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {PREDEFINED_FEEDBACK_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeedbackNote(chip)}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Teacher Note Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Teacher Feedback & Guidance Note:
              </label>
              <textarea
                value={feedbackNote}
                onChange={(e) => setFeedbackNote(e.target.value)}
                placeholder="Write specific makhraj feedback or encouragement..."
                rows={2}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white"
              />
            </div>

            {/* 1-Click Evaluation Decisions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleRequestRevision(selectedStudent.id)}
                className="flex-1 py-3 px-4 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-black text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Needs Revision (Retry)</span>
              </button>

              <button
                onClick={() => handleApproveStudent(selectedStudent.id)}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>Pass & Unlock Next Letter (ممتاز)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* VIEW B: TEACHER EXECUTION SOP ACCORDION (From SOP Plan PDF) */}
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
                Tajweed & Makhraj Class SOP Flow (30–45 Min Framework)
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
                  5 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Warmup & Sifat Recall</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review previous lesson. Drill heavy letters (*Isti'la*) vs light letters (*Tarqeeq*) to prepare student articulation organs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                  2
                </span>
                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                  10 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Makhraj Demonstration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open articulation anatomical diagram. Show Step 1 (placement) and Step 2 (release sound). Contrast with common student traps (*Lahn Jali*).
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center">
                  3
                </span>
                <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md">
                  15 Mins
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">Recitation Drill & Rubric</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Each student pronounces target letter with Fathah, Kasrah, Dammah, and Sukoon. Teacher evaluates on 3-point scale (*Mumtaz / Jayyid / Da'eef*).
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
              <h4 className="font-extrabold text-sm text-slate-900">Homework & Unlock Gate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assign 10-second audio recitation in the app. Once approved in the review queue, the next letter is automatically unlocked for the student.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
