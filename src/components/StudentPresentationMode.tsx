import React, { useState } from 'react';
import type { LessonData, BookSettings } from '../types';
import { MasterTemplatePage } from './MasterTemplatePage';
import { VideoCallOverlay } from './VideoCallOverlay';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Volume2, 
  Share2, 
  Check
} from 'lucide-react';
import { playArabicAudio } from '../utils/audioHelper';

interface StudentPresentationModeProps {
  lesson: LessonData;
  bookSettings: BookSettings;
  onClose: () => void;
}

export const StudentPresentationMode: React.FC<StudentPresentationModeProps> = ({
  lesson,
  bookSettings,
  onClose,
}) => {
  const [deviceView, setDeviceView] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [pageNum, setPageNum] = useState<1 | 2>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white overflow-y-auto flex flex-col justify-between p-3 sm:p-6">
      
      {/* Top Controls Bar */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-amber-200 transition-colors"
          >
            ← Exit Classroom
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white">Live Student Screen View</span>
            <span className="text-[10px] text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded font-mono">
              Lesson {String(lesson.lessonNumber).padStart(2, '0')}: {lesson.arabicLetter} ({lesson.name})
            </span>
          </div>
        </div>

        {/* Device View Selector for Teacher Simulation */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 hidden sm:inline font-medium">Student Device Simulation:</span>
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setDeviceView('mobile')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${deviceView === 'mobile' ? 'bg-burgundy-900 text-amber-300 shadow-2xs' : 'text-slate-400 hover:text-white'}`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Mobile Phone
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${deviceView === 'tablet' ? 'bg-burgundy-900 text-amber-300 shadow-2xs' : 'text-slate-400 hover:text-white'}`}
            >
              <Tablet className="w-3.5 h-3.5" /> Tablet (iPad)
            </button>
            <button
              onClick={() => setDeviceView('desktop')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${deviceView === 'desktop' ? 'bg-burgundy-900 text-amber-300 shadow-2xs' : 'text-slate-400 hover:text-white'}`}
            >
              <Monitor className="w-3.5 h-3.5" /> Smartboard
            </button>
          </div>

          {/* Share Link */}
          <button
            onClick={handleShareLink}
            className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-burgundy-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            {copiedLink ? 'Link Copied!' : 'Share Student Link'}
          </button>
        </div>
      </div>

      {/* Page Selector */}
      <div className="flex items-center justify-center gap-3 my-3">
        <button
          onClick={() => setPageNum(1)}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${pageNum === 1 ? 'bg-amber-400 text-burgundy-950 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
        >
          Page 1: Pronunciation & Makhraj
        </button>
        <button
          onClick={() => setPageNum(2)}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${pageNum === 2 ? 'bg-amber-400 text-burgundy-950 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
        >
          Page 2: Forms & Interactive Game
        </button>
      </div>

      {/* Simulated Device Frame Container */}
      <div className="flex-1 flex items-center justify-center my-2">
        <div className={`
          transition-all duration-300 origin-center overflow-y-auto max-h-[80vh] rounded-2xl shadow-2xl border border-slate-700 bg-white text-slate-900 p-2 sm:p-4
          ${deviceView === 'mobile' ? 'w-[375px] ring-8 ring-slate-800' : deviceView === 'tablet' ? 'w-[768px] ring-8 ring-slate-800' : 'w-full max-w-5xl'}
        `}>
          
          {/* Touch Audio Helper for Mobile Phone */}
          <div className="bg-amber-100 text-amber-950 p-2.5 rounded-xl mb-3 border border-amber-300 text-xs font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-amber-700" />
              <span>Tap any letter or word on your phone to hear Arabic audio</span>
            </span>
            <button
              onClick={() => playArabicAudio(lesson.arabicLetter)}
              className="px-2.5 py-1 rounded-lg bg-burgundy-900 text-white font-bold text-[11px]"
            >
              Play Letter {lesson.arabicLetter}
            </button>
          </div>

          <MasterTemplatePage
            lesson={lesson}
            bookSettings={bookSettings}
            pageNumber={pageNum}
          />
        </div>
      </div>

      {/* Embedded Live Video Call Floating Widget */}
      <VideoCallOverlay role="teacher" />

    </div>
  );
};
