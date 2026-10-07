import { useState, useEffect } from 'react';
import type { NavTab, LessonData, AppSettings, AppMode } from './types';
import { INITIAL_LESSONS, INITIAL_APP_SETTINGS } from './data/initialData';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LetterLibrary } from './components/LetterLibrary';
import { InteractiveLessonView } from './components/InteractiveLessonView';
import { SettingsPage } from './components/SettingsPage';
import { StudentPresentationMode } from './components/StudentPresentationMode';
import { ChapterJourneyView } from './components/ChapterJourneyView';
import { ChapterLessonView } from './components/ChapterLessonView';
import { ClassroomView } from './components/ClassroomView';
import { TeacherAnnotator } from './components/TeacherAnnotator';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { UniversalLifeMasteryView } from './components/UniversalLifeMasteryView';
import { QURAN_CURRICULUM_CHAPTERS } from './data/chaptersData';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [mode, setMode] = useState<AppMode>('student');
  const [activeChapterNumber, setActiveChapterNumber] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  // LocalStorage Persistence initialization with version sync
  const [lessons, setLessons] = useState<LessonData[]>(() => {
    const DATA_VERSION = 'tajweed_v5_trilingual';
    const currentVersion = localStorage.getItem('tajweed_app_data_version');
    if (currentVersion !== DATA_VERSION) {
      localStorage.setItem('tajweed_app_data_version', DATA_VERSION);
      localStorage.setItem('tajweed_app_lessons', JSON.stringify(INITIAL_LESSONS));
      localStorage.setItem('tajweed_app_settings', JSON.stringify(INITIAL_APP_SETTINGS));
      return INITIAL_LESSONS;
    }
    const saved = localStorage.getItem('tajweed_app_lessons');
    return saved ? JSON.parse(saved) : INITIAL_LESSONS;
  });

  const [appSettings, setAppSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('tajweed_app_settings');
    return saved ? JSON.parse(saved) : INITIAL_APP_SETTINGS;
  });

  // Chapter completion tracking (chapters 2-8)
  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    const saved = localStorage.getItem('tajweed_completed_chapters');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedLessonNumber, setSelectedLessonNumber] = useState<number>(3); // Letter Taa by default

  // Save changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('tajweed_app_lessons', JSON.stringify(lessons));
  }, [lessons]);

  useEffect(() => {
    localStorage.setItem('tajweed_app_settings', JSON.stringify(appSettings));
  }, [appSettings]);

  useEffect(() => {
    localStorage.setItem('tajweed_completed_chapters', JSON.stringify(completedChapters));
  }, [completedChapters]);

  const activeLesson = lessons.find((l) => l.lessonNumber === selectedLessonNumber) || lessons[2];

  const handleSelectLesson = (lessonNumber: number) => {
    setSelectedLessonNumber(lessonNumber);
    setCurrentTab('lesson');
  };

  const handleOpenChapterLesson = (chapterNumber: number) => {
    setActiveChapterNumber(chapterNumber);
    setCurrentTab('chapter-lesson' as NavTab);
  };

  const handleMarkChapterComplete = (chapterNumber: number) => {
    setCompletedChapters((prev) =>
      prev.includes(chapterNumber) ? prev : [...prev, chapterNumber]
    );
  };

  const handleToggleComplete = (lessonId: string) => {
    setLessons((prev) =>
      prev.map((l) => (l.id === lessonId ? { ...l, isCompleted: !l.isCompleted } : l))
    );
  };

  const handleUpdateLessonMakhrajImage = (lessonId: string, newImageUrl: string) => {
    setLessons((prev) =>
      prev.map((l) =>
        l.id === lessonId
          ? {
              ...l,
              makhraj: {
                ...l.makhraj,
                illustrationUrl: newImageUrl,
              },
            }
          : l
      )
    );
  };

  const handleChangeLanguage = (lang: 'english' | 'hinglish' | 'urdu') => {
    setAppSettings((prev) => ({ ...prev, defaultLanguage: lang }));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-slate-800 flex">
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        mode={mode}
        onToggleMode={setMode}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Top Header */}
        <Header
          onToggleMobileNav={() => setIsMobileOpen(!isMobileOpen)}
          appSettings={appSettings}
          mode={mode}
          onToggleMode={setMode}
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          onOpenClassroom={() => setCurrentTab('classroom')}
          onChangeLanguage={handleChangeLanguage}
        />

        {/* View Router */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl w-full mx-auto pb-24 lg:pb-8">
          {currentTab === 'dashboard' && (
            <Dashboard
              lessons={lessons}
              mode={mode}
              onSelectLesson={handleSelectLesson}
              onNavigateTab={setCurrentTab}
            />
          )}

          {currentTab === 'journey' && (
            <ChapterJourneyView
              lessons={lessons}
              mode={mode}
              onSelectLesson={handleSelectLesson}
              onOpenChapterLesson={handleOpenChapterLesson}
              completedChapters={completedChapters}
            />
          )}

          {currentTab === 'life-mastery' && (
            <UniversalLifeMasteryView
              language={appSettings.defaultLanguage || 'hinglish'}
              mode={mode}
            />
          )}

          {currentTab === ('chapter-lesson' as NavTab) && activeChapterNumber && (() => {
            const chap = QURAN_CURRICULUM_CHAPTERS.find((c) => c.number === activeChapterNumber);
            if (!chap) return null;
            return (
              <ChapterLessonView
                chapter={chap}
                mode={mode}
                language={appSettings.defaultLanguage || 'hinglish'}
                onBack={() => setCurrentTab('journey')}
                onMarkComplete={() => handleMarkChapterComplete(activeChapterNumber)}
                isCompleted={completedChapters.includes(activeChapterNumber)}
                onSelectLesson={handleSelectLesson}
              />
            );
          })()}

          {currentTab === 'letters' && (
            <LetterLibrary
              lessons={lessons}
              onSelectLesson={handleSelectLesson}
            />
          )}

          {currentTab === 'lesson' && activeLesson && (
            <InteractiveLessonView
              lesson={activeLesson}
              mode={mode}
              language={appSettings.defaultLanguage || 'hinglish'}
              onChangeLanguage={handleChangeLanguage}
              onSelectLesson={handleSelectLesson}
              onToggleComplete={handleToggleComplete}
              onUpdateLessonMakhrajImage={handleUpdateLessonMakhrajImage}
              totalLessons={lessons.length}
              allLessons={lessons}
            />
          )}

          {currentTab === 'classroom' && !isPresentationOpen && (
            <ClassroomView
              lessons={lessons}
              mode={mode}
              appSettings={appSettings}
              onOpenPresentation={() => setIsPresentationOpen(true)}
              completedChapters={completedChapters}
              onUpdateCompletedChapters={setCompletedChapters}
            />
          )}

          {currentTab === 'classroom' && isPresentationOpen && (
            <StudentPresentationMode
              lesson={activeLesson}
              bookSettings={{
                title: appSettings.title,
                subtitle: appSettings.subtitle,
                author: appSettings.author,
                edition: 'Digital Edition',
                publisher: appSettings.academy,
                coverPattern: 'Islamic Star Geometric',
                primaryColor: '#6A1B29',
                secondaryColor: '#1E293B',
                accentColor: '#D97706',
                isMasterLocked: true,
                selectedBook: '28 Arabic Letters Tajweed',
                templatePreset: 'kids',
              }}
              onClose={() => setIsPresentationOpen(false)}
            />
          )}

          {currentTab === 'settings' && (
            <SettingsPage
              appSettings={appSettings}
              onUpdateSettings={setAppSettings}
            />
          )}
        </main>
      </div>

      {/* Floating Live Classroom Teacher Annotator Toolbar */}
      <TeacherAnnotator isActive={mode === 'teacher'} />

      {/* PWA Offline & Installation Banner */}
      <PWAInstallBanner />
    </div>
  );
}

export default App;
