import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, Check, X, RotateCcw, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { LessonData } from '../types';

interface VoiceRecorderModalProps {
  lesson: LessonData;
  isOpen: boolean;
  onClose: () => void;
  onSubmitRecording: (audioUrl: string) => void;
}

export const VoiceRecorderModal: React.FC<VoiceRecorderModalProps> = ({
  lesson,
  isOpen,
  onClose,
  onSubmitRecording,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  if (!isOpen) return null;

  const startRecording = async () => {
    setErrorMsg(null);
    setAudioUrl(null);
    setRecordingTime(0);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start(200);
      setIsRecording(true);

      timerRef.current = window.setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= 30) {
            stopRecording();
            return 30;
          }
          return prev + 1;
        });
      }, 1000);
    } catch {
      setErrorMsg('Microphone access denied or unsupported. Please allow microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const togglePlayback = () => {
    if (!audioPlayerRef.current && audioUrl) {
      audioPlayerRef.current = new Audio(audioUrl);
      audioPlayerRef.current.onended = () => setIsPlaying(false);
    }

    if (audioPlayerRef.current) {
      if (isPlaying) {
        audioPlayerRef.current.pause();
        setIsPlaying(false);
      } else {
        audioPlayerRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleReset = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current = null;
    }
    setAudioUrl(null);
    setIsPlaying(false);
    setRecordingTime(0);
  };

  const handleSubmit = () => {
    if (!audioUrl) return;
    onSubmitRecording(audioUrl);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    onClose();
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-amber-900/20 relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Voice Homework Submission</span>
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Record Recitation: {lesson.name}
          </h3>
          <p className="text-xs text-slate-500">
            Pronounce the letter clearly 3 times. Your Ustadh will review and unlock the next lesson.
          </p>
        </div>

        {/* Big Arabic Letter Reference */}
        <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-amber-900/10 text-center">
          <span className="font-arabic font-extrabold text-6xl text-burgundy-950 block">
            {lesson.arabicLetter}
          </span>
          <span className="text-xs text-amber-900 font-bold mt-1 block">
            Articulation: {lesson.makhraj.zone} ({lesson.makhraj.name})
          </span>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Microphone / Playback Controls */}
        <div className="flex flex-col items-center justify-center space-y-4 py-2">
          {!audioUrl ? (
            <>
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-200 transform active:scale-95
                  ${isRecording 
                    ? 'bg-rose-600 animate-pulse ring-8 ring-rose-200 shadow-rose-300' 
                    : 'bg-gradient-to-tr from-[#551421] to-[#7A1D30] hover:scale-105 shadow-amber-900/20'}
                `}
              >
                {isRecording ? <Square className="w-8 h-8" /> : <Mic className="w-9 h-9" />}
              </button>

              <div className="text-center">
                <span className="text-lg font-black text-slate-800 tracking-wider">
                  {formatTime(recordingTime)}
                </span>
                <p className="text-[11px] text-slate-400 font-medium">
                  {isRecording ? 'Recording... Tap to finish' : 'Tap mic to start recording (max 30s)'}
                </p>
              </div>
            </>
          ) : (
            <div className="w-full space-y-4 bg-amber-50/60 p-4 rounded-2xl border border-amber-200 text-center">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={togglePlayback}
                  className="w-12 h-12 rounded-full bg-burgundy-900 text-white flex items-center justify-center shadow-md hover:bg-burgundy-950 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">Review Your Recording</div>
                  <div className="text-[11px] text-slate-500 font-semibold">{formatTime(recordingTime)} Duration</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 text-xs font-bold flex items-center gap-1 hover:bg-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Re-record
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!audioUrl}
            className={`
              flex-1 py-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all
              ${audioUrl
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer active:scale-95'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'}
            `}
          >
            <Check className="w-4 h-4" />
            <span>Submit to Ustadh</span>
          </button>
        </div>
      </div>
    </div>
  );
};
