import React from 'react';
import { 
  LayoutDashboard, 
  Map,
  Video, 
  Settings,
  GraduationCap,
  Presentation,
  Sparkles,
  BookOpen
} from 'lucide-react';
import type { NavTab, AppMode } from '../types';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  mode: AppMode;
  onToggleMode: (mode: AppMode) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  mode,
  onToggleMode,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'journey', label: 'Curriculum Path', icon: <Map className="w-5 h-5" />, badge: '8 Ch' },
    { id: 'life-mastery', label: 'Seerah Journey (سيرة)', icon: <BookOpen className="w-5 h-5" />, badge: '30 Ch' },
    { id: 'landing', label: 'Adult Masterclass 🎯', icon: <Sparkles className="w-5 h-5 text-amber-300" />, badge: 'PRO' },
    { id: 'classroom', label: 'Live Classroom', icon: <Video className="w-5 h-5" /> },
    { id: 'settings', label: 'App Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#551421] text-amber-50 flex flex-col justify-between
        transition-transform duration-300 ease-in-out border-r border-amber-900/40 shadow-2xl
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand Header */}
        <div>
          <div className="p-6 border-b border-amber-900/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-burgundy-950 flex items-center justify-center font-arabic font-bold text-2xl shadow-lg border border-amber-300/40">
              ت
            </div>
            <div>
              <h1 className="font-bold text-base leading-tight text-white tracking-wide">Tajweed Master</h1>
              <p className="text-xs text-amber-200/80 font-medium tracking-wider uppercase">Learning Portal</p>
            </div>
          </div>

          {/* Mode Switch Button (Student vs Teacher) */}
          <div className="p-4 border-b border-amber-900/40">
            <div className="bg-burgundy-950/80 p-1 rounded-xl border border-amber-500/20 flex items-center gap-1">
              <button
                onClick={() => onToggleMode('student')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  mode === 'student'
                    ? 'bg-amber-400 text-burgundy-950 shadow-md'
                    : 'text-amber-200/70 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Student</span>
              </button>
              <button
                onClick={() => onToggleMode('teacher')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  mode === 'teacher'
                    ? 'bg-amber-400 text-burgundy-950 shadow-md'
                    : 'text-amber-200/70 hover:text-white'
                }`}
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>Teacher</span>
              </button>
            </div>
          </div>

          {/* Nav List */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150
                    ${isActive 
                      ? 'bg-amber-500/20 text-white font-semibold border border-amber-400/30 shadow-xs' 
                      : 'text-amber-100/70 hover:bg-amber-900/30 hover:text-white'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-amber-300' : 'text-amber-200/60'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-amber-400 text-burgundy-950' : 'bg-amber-950/60 text-amber-300'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mode Footer */}
        <div className="p-4 m-3 rounded-2xl bg-burgundy-950/60 border border-amber-500/20 text-xs">
          <div className="flex items-center justify-between text-amber-200 font-semibold mb-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {mode === 'teacher' ? 'Teacher Mode Active' : 'Student Mode Active'}
            </span>
          </div>
          <p className="text-amber-200/60 text-[11px] leading-relaxed">
            {mode === 'teacher'
              ? 'Includes teaching tips, pedagogy insights & classroom controls.'
              : 'Distraction-free learning with audio, makhraj & practice.'}
          </p>
        </div>
      </aside>

      {/* ── Mobile Bottom Navigation Bar ────────────────────────────────── */}
      {/* Always visible on phones so students never have to hunt for tabs   */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#551421] border-t border-amber-900/40 shadow-2xl flex items-stretch">
        {[
          { id: 'dashboard' as NavTab, label: 'Home', icon: <LayoutDashboard className="w-5 h-5" /> },
          { id: 'journey' as NavTab, label: 'Curriculum', icon: <Map className="w-5 h-5" />, highlight: true },
          { id: 'life-mastery' as NavTab, label: 'Seerah', icon: <BookOpen className="w-5 h-5" /> },
          { id: 'classroom' as NavTab, label: 'Classroom', icon: <Video className="w-5 h-5" /> },
        ].map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setIsMobileOpen(false);
              }}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-all relative ${
                isActive
                  ? 'text-amber-300'
                  : item.highlight
                  ? 'text-amber-400/90'
                  : 'text-amber-100/50'
              }`}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-amber-400 rounded-full" />
              )}
              {/* Highlighted Curriculum button gets a special pill bg */}
              <span className={`${item.highlight && !isActive ? 'bg-amber-500/20 rounded-xl p-1' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold ${isActive ? 'text-amber-300' : item.highlight ? 'text-amber-400' : 'text-amber-100/50'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
