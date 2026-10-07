import React from 'react';
import { Menu, Video, GraduationCap, Presentation, Map, LayoutDashboard, BookOpen, Sparkles } from 'lucide-react';
import type { AppSettings, AppMode, NavTab } from '../types';

interface HeaderProps {
  onToggleMobileNav: () => void;
  appSettings: AppSettings;
  mode: AppMode;
  onToggleMode: (mode: AppMode) => void;
  currentTab?: NavTab;
  onSelectTab?: (tab: NavTab) => void;
  onOpenClassroom?: () => void;
  onChangeLanguage?: (lang: 'english' | 'hinglish' | 'urdu') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleMobileNav,
  appSettings,
  mode,
  onToggleMode,
  currentTab,
  onSelectTab,
  onOpenClassroom,
  onChangeLanguage,
}) => {
  const currentLang = appSettings.defaultLanguage || 'english';

  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-900/10 px-4 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2 shadow-xs">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileNav}
          className="p-2 rounded-xl text-slate-700 hover:bg-amber-900/5 lg:hidden"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Quick Nav Links (Hidden on mobile, accessible via hamburger menu) */}
        {onSelectTab && (
          <div className="hidden md:flex items-center gap-1.5 bg-white p-1 rounded-xl border border-amber-900/10 shadow-2xs">
            <button
              onClick={() => onSelectTab('dashboard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentTab === 'dashboard'
                  ? 'bg-amber-400 text-burgundy-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>

            <button
              onClick={() => onSelectTab('journey')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                currentTab === 'journey'
                  ? 'bg-amber-400 text-burgundy-950 shadow-xs'
                  : 'text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/60'
              }`}
            >
              <Map className="w-3.5 h-3.5 text-amber-700" />
              <span>Curriculum Path</span>
            </button>

            <button
              onClick={() => onSelectTab('life-mastery')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentTab === 'life-mastery'
                  ? 'bg-amber-400 text-burgundy-950 shadow-xs'
                  : 'text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-700" />
              <span className="hidden sm:inline">Seerah Journey</span>
            </button>

            <button
              onClick={() => onSelectTab('landing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'landing'
                  ? 'bg-amber-400 text-burgundy-950 shadow-xs'
                  : 'text-amber-900 bg-amber-100/80 hover:bg-amber-200 border border-amber-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Adult Masterclass 🎯</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Trilingual Language Selector (English | Hinglish | Urdu) */}
        {onChangeLanguage && (
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-amber-300 shadow-xs">
            <button
              onClick={() => onChangeLanguage('english')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                currentLang === 'english' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="English Explanation"
            >
              <span>🇬🇧</span>
              <span className="hidden md:inline">English</span>
            </button>
            <button
              onClick={() => onChangeLanguage('hinglish')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                currentLang === 'hinglish' ? 'bg-amber-500 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Roman English / Hinglish Explanation"
            >
              <span>💬</span>
              <span>Hinglish</span>
            </button>
            <button
              onClick={() => onChangeLanguage('urdu')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                currentLang === 'urdu' ? 'bg-amber-500 text-burgundy-950 shadow-xs font-arabic' : 'text-slate-600 hover:text-slate-900 font-arabic'
              }`}
              title="اردو وضاحت (Urdu Explanation)"
            >
              <span>🇵🇰</span>
              <span>اردو</span>
            </button>
          </div>
        )}

        {/* Mode Switcher Toggle in Header */}
        <div className="hidden sm:flex items-center gap-1 bg-white p-1 rounded-xl border border-amber-200 shadow-xs">
          <button
            onClick={() => onToggleMode('student')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
              mode === 'student' ? 'bg-amber-400 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Student
          </button>
          <button
            onClick={() => onToggleMode('teacher')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
              mode === 'teacher' ? 'bg-amber-400 text-burgundy-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" /> Teacher
          </button>
        </div>

        {/* Live Classroom Presentation Button */}
        {onOpenClassroom && (
          <button
            onClick={onOpenClassroom}
            className="px-3 py-1.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-amber-200 font-bold text-xs transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Classroom</span>
          </button>
        )}
      </div>
    </header>
  );
};

