import React from 'react';
import type { AppSettings } from '../types';
import { 
  Palette, 
  Database, 
  Layers
} from 'lucide-react';

interface SettingsPageProps {
  appSettings: AppSettings;
  onUpdateSettings: (settings: AppSettings) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  appSettings,
  onUpdateSettings,
}) => {
  const booksRoadmap = [
    { title: 'Level 1 — 28 Arabic Letters', status: 'Active Curriculum', count: '28 Lessons' },
    { title: 'Level 2 — Connecting Letters', status: 'Planned Expansion', count: '20 Lessons' },
    { title: 'Level 3 — Harakat (Vowels)', status: 'Planned Expansion', count: '16 Lessons' },
    { title: 'Level 4 — Sukoon & Shaddah', status: 'Planned Expansion', count: '18 Lessons' },
    { title: 'Level 5 — Tanween & Mad', status: 'Planned Expansion', count: '12 Lessons' },
    { title: 'Level 6 — Qur\'an Reading Basics', status: 'Planned Expansion', count: '24 Lessons' },
    { title: 'Level 7 — Essential Tajweed Rules', status: 'Planned Expansion', count: '30 Lessons' },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-amber-900/10 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">App & Studio Settings</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Configure curriculum title, instructor preferences, and language options.
          </p>
        </div>
      </div>

      {/* GENERAL APP SETTINGS FORM */}
      <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-extrabold text-slate-900">Curriculum & Branding Info</h2>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-200">
            Active Digital Platform
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Curriculum Title</label>
            <input
              type="text"
              value={appSettings.title}
              onChange={(e) => onUpdateSettings({ ...appSettings, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Subtitle / Tagline</label>
            <input
              type="text"
              value={appSettings.subtitle}
              onChange={(e) => onUpdateSettings({ ...appSettings, subtitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Author / Lead Instructor</label>
            <input
              type="text"
              value={appSettings.author}
              onChange={(e) => onUpdateSettings({ ...appSettings, author: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Academy / Institution</label>
            <input
              type="text"
              value={appSettings.academy}
              onChange={(e) => onUpdateSettings({ ...appSettings, academy: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>



      {/* MULTI-BOOK / LEVEL ROADMAP */}
      <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-burgundy-900" />
          Tajweed Series Curriculum Levels
        </h2>

        <div className="space-y-3">
          {booksRoadmap.map((book, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border flex items-center justify-between text-xs font-semibold ${idx === 0 ? 'bg-amber-50/80 border-amber-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${idx === 0 ? 'bg-burgundy-900 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {idx + 1}
                </span>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">{book.title}</span>
                  <span className="text-[11px] text-slate-500">{book.count}</span>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${idx === 0 ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-200 text-slate-600'}`}>
                {book.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DATABASE ARCHITECTURE */}
      <div className="bg-white rounded-2xl p-6 border border-amber-900/10 shadow-xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Database className="w-5 h-5 text-sky-700" />
          Database & Storage Schema (Supabase Ready)
        </h2>

        <p className="text-xs text-slate-600">
          Structured PostgreSQL schema definitions for cloud synchronization and teacher presentation workflows:
        </p>

        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto space-y-1">
          <div><span className="text-amber-400">letters</span> (id, lesson_number, arabic_letter, name, pronunciation, english_description, hinglish_description, urdu_description)</div>
          <div><span className="text-amber-400">letter_forms</span> (letter_id, isolated, beginning, middle, ending)</div>
          <div><span className="text-amber-400">vocabulary</span> (lesson_id, position, arabic_word, transliteration, meaning, image_url)</div>
          <div><span className="text-amber-400">practice_questions</span> (lesson_id, say_text, write_text, join_text, read_text, find_letter_text)</div>
        </div>
      </div>
    </div>
  );
};
