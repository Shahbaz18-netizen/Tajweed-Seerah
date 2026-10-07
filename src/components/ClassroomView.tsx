import React, { useState } from 'react';
import {
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  Unlock,
  Plus,
  Search,
  ShieldCheck,
  Send,
  Video,
  FileCheck,
  Star,
  Printer,
  X
} from 'lucide-react';
import type { LessonData, AppMode, AppSettings } from '../types';
import { QURAN_CURRICULUM_CHAPTERS } from '../data/chaptersData';

export interface StudentRecord {
  id: string;
  name: string;
  avatar: string;
  currentChapter: number;
  completedChapters: number[];
  completedLettersCount: number;
  assignedChapter: number;
  lastActive: string;
  badges: string[];
  teacherNote?: string;
  streakDays: number;
}

const INITIAL_STUDENTS: StudentRecord[] = [
  {
    id: 'std-1',
    name: 'Youssef Al-Mansoor',
    avatar: '👨‍🎓',
    currentChapter: 3,
    completedChapters: [1, 2],
    completedLettersCount: 28,
    assignedChapter: 3,
    lastActive: '10 mins ago',
    badges: ['Makhraj Master', 'Harakat Scholar'],
    teacherNote: 'Excellent tongue placement on Haa (ح). Working on positional forms.',
    streakDays: 7,
  },
  {
    id: 'std-2',
    name: 'Fatima Al-Zahra',
    avatar: '👩‍🎓',
    currentChapter: 5,
    completedChapters: [1, 2, 3, 4],
    completedLettersCount: 28,
    assignedChapter: 5,
    lastActive: '2 hours ago',
    badges: ['Makhraj Master', 'Harakat Scholar', 'Joining Expert', 'Qalqalah Pro'],
    teacherNote: 'Memorized all Qalqalah letters (ق ط ب ج د). Ready for Madd rules.',
    streakDays: 12,
  },
  {
    id: 'std-3',
    name: 'Zayd Ahmed',
    avatar: '👦',
    currentChapter: 1,
    completedChapters: [],
    completedLettersCount: 14,
    assignedChapter: 1,
    lastActive: 'Yesterday',
    badges: ['First Step Makhraj'],
    teacherNote: 'Needs review on Baa vs Taa vs Thaa dot counts.',
    streakDays: 3,
  },
  {
    id: 'std-4',
    name: 'Aisha Siddiqua',
    avatar: '👧',
    currentChapter: 7,
    completedChapters: [1, 2, 3, 4, 5, 6],
    completedLettersCount: 28,
    assignedChapter: 7,
    lastActive: 'Just now',
    badges: ['Makhraj Master', 'Harakat Scholar', 'Joining Expert', 'Madd Expert', 'Tashdeed Star'],
    teacherNote: 'Practicing Noon Saakin rules (Izhar, Idgham, Iqlab, Ikhfa).',
    streakDays: 21,
  },
  {
    id: 'std-5',
    name: 'Bilal Husseini',
    avatar: '🧑‍🎓',
    currentChapter: 8,
    completedChapters: [1, 2, 3, 4, 5, 6, 7, 8],
    completedLettersCount: 28,
    assignedChapter: 8,
    lastActive: '3 hours ago',
    badges: ['Makhraj Master', 'Harakat Scholar', 'Qari Graduate', 'Surah Al-Fatiha Master'],
    teacherNote: 'Graduated Curriculum! Recites Surah Al-Fatiha with perfect Tajweed.',
    streakDays: 30,
  },
];

const AVAILABLE_BADGES = [
  { id: 'b1', name: 'Makhraj Master', icon: '🗣️', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { id: 'b2', name: 'Harakat Scholar', icon: '✍️', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { id: 'b3', name: 'Joining Expert', icon: '🔗', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  { id: 'b4', name: 'Qalqalah Pro', icon: '⚡', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  { id: 'b5', name: 'Madd Expert', icon: '🌊', color: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  { id: 'b6', name: 'Tashdeed Star', icon: '⭐', color: 'bg-rose-100 text-rose-800 border-rose-300' },
  { id: 'b7', name: 'Noon Saakin Pro', icon: '📜', color: 'bg-amber-100 text-amber-900 border-amber-400' },
  { id: 'b8', name: 'Surah Al-Fatiha Master', icon: '👑', color: 'bg-yellow-200 text-yellow-900 border-yellow-500' },
];

interface ClassroomViewProps {
  lessons: LessonData[];
  mode: AppMode;
  appSettings: AppSettings;
  onOpenPresentation: () => void;
  completedChapters: number[];
  onUpdateCompletedChapters: (chapters: number[]) => void;
}

export const ClassroomView: React.FC<ClassroomViewProps> = ({
  lessons: _lessons,
  mode: _mode,
  appSettings,
  onOpenPresentation,
  completedChapters: _completedChapters,
  onUpdateCompletedChapters,
}) => {
  const [students, setStudents] = useState<StudentRecord[]>(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(INITIAL_STUDENTS[0]);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAssignChapter = (studentId: string, chapterNum: number) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId ? { ...s, assignedChapter: chapterNum, currentChapter: Math.max(s.currentChapter, chapterNum) } : s
      )
    );
    if (selectedStudent?.id === studentId) {
      setSelectedStudent((prev) => prev ? { ...prev, assignedChapter: chapterNum, currentChapter: Math.max(prev.currentChapter, chapterNum) } : null);
    }
  };

  const handleToggleBadge = (studentId: string, badgeName: string) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== studentId) return s;
        const exists = s.badges.includes(badgeName);
        const newBadges = exists ? s.badges.filter((b) => b !== badgeName) : [...s.badges, badgeName];
        return { ...s, badges: newBadges };
      })
    );
    if (selectedStudent?.id === studentId) {
      setSelectedStudent((prev) => {
        if (!prev) return null;
        const exists = prev.badges.includes(badgeName);
        const newBadges = exists ? prev.badges.filter((b) => b !== badgeName) : [...prev.badges, badgeName];
        return { ...prev, badges: newBadges };
      });
    }
  };

  const handleSaveNote = (studentId: string) => {
    if (!newNote.trim()) return;
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, teacherNote: newNote } : s))
    );
    if (selectedStudent?.id === studentId) {
      setSelectedStudent((prev) => (prev ? { ...prev, teacherNote: newNote } : null));
    }
    setNewNote('');
  };

  const handleAddStudent = () => {
    if (!newStudentName.trim()) return;
    const newStudent: StudentRecord = {
      id: `std-${Date.now()}`,
      name: newStudentName.trim(),
      avatar: '🎓',
      currentChapter: 1,
      completedChapters: [],
      completedLettersCount: 0,
      assignedChapter: 1,
      lastActive: 'Just registered',
      badges: ['First Step Makhraj'],
      teacherNote: 'New student enrolled.',
      streakDays: 1,
    };
    setStudents((prev) => [newStudent, ...prev]);
    setSelectedStudent(newStudent);
    setNewStudentName('');
    setShowAddStudent(false);
  };

  const handleUnlockAllForStudent = (studentId: string) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? {
              ...s,
              completedChapters: [1, 2, 3, 4, 5, 6, 7, 8],
              currentChapter: 8,
              assignedChapter: 8,
              completedLettersCount: 28,
            }
          : s
      )
    );
    if (selectedStudent?.id === studentId) {
      setSelectedStudent((prev) =>
        prev
          ? {
              ...prev,
              completedChapters: [1, 2, 3, 4, 5, 6, 7, 8],
              currentChapter: 8,
              assignedChapter: 8,
              completedLettersCount: 28,
            }
          : null
      );
    }
    // Also unlock global teacher state
    onUpdateCompletedChapters([1, 2, 3, 4, 5, 6, 7, 8]);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Controls */}
      <div className="bg-gradient-to-r from-[#551421] via-[#6B1B2A] to-[#8C2337] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-8 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Teacher Classroom Hub
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
                {students.length} Students Enrolled
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-amber-100 font-serif">
              Classroom & Student Management
            </h1>
            <p className="text-amber-200/80 text-xs sm:text-sm max-w-2xl">
              Track student Tajweed progress across all 8 chapters, assign target lessons, award official completion badges, and issue certificates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={onOpenPresentation}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-burgundy-950 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <Video className="w-4 h-4" />
              Live Presentation Mode
            </button>
            <button
              onClick={() => setShowAddStudent(true)}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Add Student
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Student List (Left) + Student Detail Dashboard (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Student Roster (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-amber-900/10 p-4 shadow-sm flex flex-col h-fit">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-700" />
              <h2 className="font-bold text-slate-900 text-base">Class Roster</h2>
            </div>
            <span className="text-xs font-mono bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full font-bold">
              {filteredStudents.length} Active
            </span>
          </div>

          {/* Search Box */}
          <div className="relative mt-3 mb-2">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search student by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
            />
          </div>

          {/* Student Cards List */}
          <div className="space-y-2 mt-2 max-h-[520px] overflow-y-auto pr-1">
            {filteredStudents.map((std) => {
              const isSelected = selectedStudent?.id === std.id;
              const progressPct = Math.round((std.completedChapters.length / 8) * 100);

              return (
                <button
                  key={std.id}
                  onClick={() => setSelectedStudent(std)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3 relative overflow-hidden ${
                    isSelected
                      ? 'bg-amber-50/80 border-amber-400 shadow-xs'
                      : 'bg-white border-slate-100 hover:border-amber-200 hover:bg-amber-50/30'
                  }`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 border border-amber-300/50 flex items-center justify-center text-xl shadow-2xs shrink-0">
                    {std.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                        {std.name}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-100/60 px-1.5 py-0.5 rounded">
                        Ch {std.currentChapter}/8
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                      <span>{std.completedLettersCount}/28 Letters</span>
                      <span className="font-semibold text-emerald-700">{progressPct}% Done</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Student Detail Workspace (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {selectedStudent ? (
            <div className="bg-white rounded-3xl border border-amber-900/10 p-5 sm:p-6 shadow-sm space-y-6">
              
              {/* Student Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-400 border-2 border-amber-500/30 flex items-center justify-center text-3xl shadow-md">
                    {selectedStudent.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-black text-slate-900 font-serif">
                        {selectedStudent.name}
                      </h2>
                      <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                        🔥 {selectedStudent.streakDays} Day Streak
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Last active: <span className="font-semibold text-slate-700">{selectedStudent.lastActive}</span> • Enrolled Student
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setShowCertificateModal(true)}
                    className="px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                  >
                    <Award className="w-4 h-4" />
                    Issue Certificate
                  </button>
                  <button
                    onClick={() => handleUnlockAllForStudent(selectedStudent.id)}
                    className="px-3 py-2 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 font-bold text-xs rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
                    title="Teacher override: Unlock all chapters for student"
                  >
                    <Unlock className="w-3.5 h-3.5 text-amber-600" />
                    Unlock All Chapters
                  </button>
                </div>
              </div>

              {/* 1. Chapter Progress Grid & Assignment */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    Curriculum Chapter Assignments & Status
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    Assigned Chapter: <strong className="text-amber-800 font-bold">Ch {selectedStudent.assignedChapter}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {QURAN_CURRICULUM_CHAPTERS.map((chap) => {
                    const isCompleted = selectedStudent.completedChapters.includes(chap.number);
                    const isAssigned = selectedStudent.assignedChapter === chap.number;

                    return (
                      <div
                        key={chap.id}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isCompleted
                            ? 'bg-emerald-50/60 border-emerald-200'
                            : isAssigned
                            ? 'bg-amber-50/90 border-amber-400 ring-2 ring-amber-400/30'
                            : 'bg-slate-50/70 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                              isCompleted
                                ? 'bg-emerald-500 text-white'
                                : isAssigned
                                ? 'bg-amber-500 text-slate-950 font-black'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : `Ch ${chap.number}`}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-xs text-slate-900 truncate">
                              {chap.title}
                            </h4>
                            <p className="text-[10px] text-slate-500 truncate font-arabic dir-rtl">
                              {chap.arabicTitle}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1.5">
                          {isCompleted ? (
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                              Completed
                            </span>
                          ) : (
                            <button
                              onClick={() => handleAssignChapter(selectedStudent.id, chap.number)}
                              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                                isAssigned
                                  ? 'bg-amber-500 text-slate-950 shadow-2xs font-black'
                                  : 'bg-white hover:bg-amber-100 text-slate-700 border border-slate-200'
                              }`}
                            >
                              {isAssigned ? 'Assigned' : 'Assign'}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Badge Management & Honors */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-700" />
                    Award Badges & Honors
                  </h3>
                  <span className="text-xs text-slate-500">
                    {selectedStudent.badges.length} Badges Awarded
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_BADGES.map((b) => {
                    const isAwarded = selectedStudent.badges.includes(b.name);

                    return (
                      <button
                        key={b.id}
                        onClick={() => handleToggleBadge(selectedStudent.id, b.name)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isAwarded
                            ? `${b.color} shadow-2xs ring-1 ring-amber-400/40 scale-105`
                            : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60 hover:opacity-100 hover:bg-slate-100'
                        }`}
                      >
                        <span>{b.icon}</span>
                        <span>{b.name}</span>
                        {isAwarded ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Teacher Feedback & Voice/Text Note */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-700" />
                  Teacher Feedback & Notes
                </h3>

                {selectedStudent.teacherNote && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 font-medium">
                    <strong className="block text-amber-900 font-bold mb-1">Current Note:</strong>
                    "{selectedStudent.teacherNote}"
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a feedback note for student (e.g. Practicing Noon Saakin rules)..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  />
                  <button
                    onClick={() => handleSaveNote(selectedStudent.id)}
                    className="px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" /> Save Note
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-amber-900/10 p-12 text-center text-slate-500 space-y-3">
              <Users className="w-12 h-12 text-amber-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No Student Selected</h3>
              <p className="text-xs">Click on any student from the left roster to manage their progress.</p>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificateModal && selectedStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border-4 border-amber-400 p-6 sm:p-10 max-w-2xl w-full text-center relative shadow-2xl space-y-6 bg-[radial-gradient(#FFFBEB_1px,transparent_1px)] [background-size:16px_16px]">
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800 mb-2">
                <Award className="w-10 h-10 text-amber-600" />
              </div>
              <p className="text-xs font-black tracking-widest uppercase text-amber-800 font-serif">
                Official Tajweed Excellence Certificate
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-burgundy-950 font-serif">
                Certificate of Completion
              </h2>
            </div>

            <div className="space-y-2 py-4 border-y border-amber-200">
              <p className="text-xs text-slate-600">This certifies that student</p>
              <h3 className="text-2xl font-black text-amber-700 font-serif tracking-wide">
                {selectedStudent.name}
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                has successfully completed all 8 chapters of the <strong>Quran Tajweed & Makhraj Articulation Curriculum</strong>, demonstrating proficiency in letter articulation, rules of Madd, Noon Saakin, and Surah Al-Fatiha recitation.
              </p>
            </div>

            {/* Badges preview */}
            <div className="flex flex-wrap justify-center gap-2">
              {selectedStudent.badges.map((b, i) => (
                <span key={i} className="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 text-left text-xs text-slate-500 border-t border-slate-100">
              <div>
                <p className="font-bold text-slate-800">{appSettings.academy}</p>
                <p className="text-[10px]">Issued by Instructor: {appSettings.author}</p>
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-burgundy-950 font-black text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {showAddStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl border border-amber-900/10">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900">Enroll New Student</h3>
              <button onClick={() => setShowAddStudent(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter full student name..."
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowAddStudent(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleAddStudent}
                className="px-5 py-2 text-xs font-bold bg-amber-800 hover:bg-amber-900 text-white rounded-xl shadow-2xs"
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
