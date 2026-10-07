import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  Maximize2, 
  Minimize2, 
  Radio, 
  Smartphone
} from 'lucide-react';

interface VideoCallOverlayProps {
  role: 'teacher' | 'student';
  onCloseCall?: () => void;
}

export const VideoCallOverlay: React.FC<VideoCallOverlayProps> = ({
  role = 'teacher',
  onCloseCall,
}) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  const localVideoRef = useRef<HTMLVideoElement>(null);

  // Request browser webcam access for authentic WebRTC stream
  useEffect(() => {
    let stream: MediaStream | null = null;
    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (err) {
        console.warn('Webcam permission not granted or device unavailable:', err);
        setHasCameraPermission(false);
      }
    }

    if (isVideoOn) {
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isVideoOn]);

  return (
    <div className={`
      fixed z-50 transition-all duration-300 shadow-2xl rounded-2xl overflow-hidden border border-amber-400/30 bg-slate-950 text-white
      ${isMinimized 
        ? 'bottom-4 right-4 w-48 h-16 p-2 flex items-center justify-between bg-burgundy-950/90 backdrop-blur-md' 
        : 'bottom-4 right-4 w-80 sm:w-96 sm:bottom-6 sm:right-6'}
    `}>
      {/* Header bar */}
      <div className="bg-burgundy-950/90 px-3.5 py-2 flex items-center justify-between border-b border-white/10 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-amber-200">Live Classroom Call</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-bold uppercase">
            {role}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/10 rounded text-slate-300 hover:text-white"
            title={isMinimized ? 'Expand Call' : 'Minimize Call'}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          {onCloseCall && (
            <button
              onClick={onCloseCall}
              className="p-1 hover:bg-rose-500/20 text-rose-300 hover:text-rose-100 rounded"
              title="End Call"
            >
              <PhoneOff className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Dual Camera Video Grid */}
          <div className="grid grid-cols-2 gap-1.5 p-2 bg-slate-900 aspect-video relative">
            {/* Main Stream (Teacher Stream) */}
            <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
              {isVideoOn && hasCameraPermission ? (
                <video
                  ref={localVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transform -scale-x-100"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-3 text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-burgundy-900 text-amber-300 flex items-center justify-center font-bold text-sm">
                    {role === 'teacher' ? 'Ustadh' : 'Student'}
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {isVideoOn ? 'Camera Starting...' : 'Camera Off'}
                  </span>
                </div>
              )}
              <span className="absolute bottom-1.5 left-1.5 text-[9px] bg-black/60 px-1.5 py-0.5 rounded text-amber-200 font-semibold backdrop-blur-xs">
                {role === 'teacher' ? 'Teacher (You)' : 'Teacher Stream'}
              </span>
            </div>

            {/* Peer Stream (Student / Receiver) */}
            <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center p-3 text-center space-y-1">
                <div className="w-10 h-10 rounded-full bg-sky-900 text-sky-200 flex items-center justify-center font-bold text-sm">
                  {role === 'teacher' ? 'Student' : 'Ustadh'}
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 animate-ping" /> Connected
                </span>
              </div>
              <span className="absolute bottom-1.5 left-1.5 text-[9px] bg-black/60 px-1.5 py-0.5 rounded text-sky-200 font-semibold backdrop-blur-xs">
                {role === 'teacher' ? 'Student (Mobile Phone)' : 'Student (You)'}
              </span>
            </div>
          </div>

          {/* Control Buttons Footer */}
          <div className="p-2.5 bg-slate-950 border-t border-white/10 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-2.5 rounded-full transition-colors ${isMicOn ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-rose-600 text-white'}`}
              title={isMicOn ? 'Mute Mic' : 'Unmute Mic'}
            >
              {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-2.5 rounded-full transition-colors ${isVideoOn ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-rose-600 text-white'}`}
              title={isVideoOn ? 'Turn Off Camera' : 'Turn On Camera'}
            >
              {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </button>

            <div className="h-4 w-px bg-white/20 mx-1" />

            <div className="text-[10px] text-amber-200/80 flex items-center gap-1">
              <Smartphone className="w-3 h-3 text-amber-400" />
              <span>Mobile Phone Ready</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
