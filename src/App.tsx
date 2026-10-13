import { useState, useEffect, lazy, Suspense } from 'react';
import type { NavTab, LessonData, AppSettings, AppMode } from './types';
import { INITIAL_LESSONS, INITIAL_APP_SETTINGS } from './data/initialData';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TeacherAnnotator } from './components/TeacherAnnotator';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { QURAN_CURRICULUM_CHAPTERS } from './data/chaptersData';

// Code-splitting route views via React.lazy for instant load performance
const Dashboard = lazy(() => import('./components/Dashboard').then((m) => ({ default: m.Dashboard })));
const InteractiveLessonView = lazy(() => import('./components/InteractiveLessonView').then((m) => ({ default: m.InteractiveLessonView })));
const SettingsPage = lazy(() => import('./components/SettingsPage').then((m) => ({ default: m.SettingsPage })));
const StudentPresentationMode = lazy(() => import('./components/StudentPresentationMode').then((m) => ({ default: m.StudentPresentationMode })));
const ChapterJourneyView = lazy(() => import('./components/ChapterJourneyView').then((m) => ({ default: m.ChapterJourneyView })));
const ChapterLessonView = lazy(() => import('./components/ChapterLessonView').then((m) => ({ default: m.ChapterLessonView })));
const ClassroomView = lazy(() => import('./components/ClassroomView').then((m) => ({ default: m.ClassroomView })));
const UniversalLifeMasteryView = lazy(() => import('./components/UniversalLifeMasteryView').then((m) => ({ default: m.UniversalLifeMasteryView })));
const AdultLandingPage = lazy(() => import('./components/AdultLandingPage').then((m) => ({ default: m.AdultLandingPage })));
const DailyHabitsView = lazy(() => import('./components/DailyHabitsView').then((m) => ({ default: m.DailyHabitsView })));

const PageLoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center animate-in fade-in duration-300">
    <div className="relative">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#551421] to-[#3B0C16] border-2 border-amber-400/50 flex items-center justify-center shadow-xl animate-pulse">
        <span className="font-arabic font-bold text-3xl text-amber-300">ت</span>
      </div>
      <div className="absolute -inset-2 rounded-3xl border-2 border-amber-400/30 animate-spin border-t-transparent pointer-events-none" />
    </div>
    <div className="mt-4 text-sm font-bold text-burgundy-950 tracking-wide">
      Loading Tajweed Module...
    </div>
    <div className="text-xs text-amber-800/70 mt-1 font-arabic">
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </div>
  </div>
);

const getInitialTab = (): NavTab => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('landing')) return 'landing';
    if (path.includes('dashboard')) return 'dashboard';
    if (path.includes('journey')) return 'journey';
    if (path.includes('daily-habits')) return 'daily-habits';
    if (path.includes('classroom')) return 'classroom';
    if (path.includes('life-mastery')) return 'life-mastery';
    if (path.includes('settings')) return 'settings';
  }
  return 'landing';
};

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>(getInitialTab);
  const [mode, setMode] = useState<AppMode>('student');
  const [activeChapterNumber, setActiveChapterNumber] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  // Sync /landingpage route with landing tab
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('landing')) {
        setCurrentTab('landing');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (currentTab === 'landing') {
        if (window.location.pathname !== '/landingpage') {
          window.history.replaceState(null, '', '/landingpage');
        }
      } else {
        if (window.location.pathname === '/landingpage') {
          window.history.replaceState(null, '', '/');
        }
      }
    }
  }, [currentTab]);

  // LocalStorage Persistence initialization with version sync
  const [lessons, setLessons] = useState<LessonData[]>(() => {
    const DATA_VERSION = 'tajweed_v8_hamzah_29_letters';
    const currentVersion = localStorage.getItem('tajweed_app_data_version');
    const saved = localStorage.getItem('tajweed_app_lessons');

    if (saved && currentVersion === DATA_VERSION) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === INITIAL_LESSONS.length && parsed.some((l) => l.arabicLetter === 'ء')) {
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing stored lessons:', e);
      }
    }

    // Re-initialize with full 29-letter data including Hamzah (ء)
    localStorage.setItem('tajweed_app_data_version', DATA_VERSION);
    localStorage.setItem('tajweed_app_lessons', JSON.stringify(INITIAL_LESSONS));
    localStorage.setItem('tajweed_app_settings', JSON.stringify(INITIAL_APP_SETTINGS));
    return INITIAL_LESSONS;
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

  // Progressive letter unlock level (defaults to letter 4 for guided start)
  const [unlockedLessonNumber, setUnlockedLessonNumber] = useState<number>(() => {
    const saved = localStorage.getItem('tajweed_unlocked_lesson_number');
    return saved ? parseInt(saved, 10) : 4;
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

  useEffect(() => {
    localStorage.setItem('tajweed_unlocked_lesson_number', String(unlockedLessonNumber));
  }, [unlockedLessonNumber]);

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

        {/* View Router with Suspense Lazy Loading */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl w-full mx-auto pb-24 lg:pb-8">
          <Suspense fallback={<PageLoadingFallback />}>
            {currentTab === 'dashboard' && (
              <Dashboard
                lessons={lessons}
                mode={mode}
                onSelectLesson={handleSelectLesson}
                onNavigateTab={setCurrentTab}
                unlockedLessonNumber={unlockedLessonNumber}
                onUpdateUnlockedLesson={setUnlockedLessonNumber}
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

            {currentTab === 'daily-habits' && (
              <DailyHabitsView
                language={appSettings.defaultLanguage || 'hinglish'}
                onNavigateTab={(tab) => setCurrentTab(tab as NavTab)}
              />
            )}

            {currentTab === 'life-mastery' && (
              <UniversalLifeMasteryView
                language={appSettings.defaultLanguage || 'hinglish'}
                mode={mode}
              />
            )}

            {currentTab === 'landing' && (
              <AdultLandingPage
                language={appSettings.defaultLanguage || 'english'}
                onStartLearning={() => setCurrentTab('journey')}
                onSelectTab={(tab) => setCurrentTab(tab as NavTab)}
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
                  selectedBook: '29 Arabic Letters Tajweed',
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
          </Suspense>
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
