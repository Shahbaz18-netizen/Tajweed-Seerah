import React, { useState, useEffect, useRef } from 'react';
import { 
  Pencil, 
  Trash2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Maximize2,
  Minimize2,
  Presentation
} from 'lucide-react';

interface TeacherAnnotatorProps {
  isActive: boolean;
}

export const TeacherAnnotator: React.FC<TeacherAnnotatorProps> = ({ isActive }) => {
  const [activeTool, setActiveTool] = useState<'none' | 'laser' | 'pen'>('none');
  const [color, setColor] = useState<string>('#E11D48'); // Default Red for Madd/Laser
  const [brushSize, setBrushSize] = useState<number>(6);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [laserPos, setLaserPos] = useState<{ x: number; y: number } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef<boolean>(false);

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Track Window Resize & Sync Canvas Size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isActive, activeTool]);

  // Track Mouse Movement for Red Laser Pointer
  useEffect(() => {
    if (activeTool !== 'laser') {
      setLaserPos(null);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setLaserPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeTool]);

  // Handle Freehand Pen Drawing
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (activeTool !== 'pen') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    isDrawing.current = true;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = brushSize;
    ctx.globalAlpha = 0.85;

    // Draw immediate dot for single clicks
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fill();

    // Start path for dragging stroke
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || activeTool !== 'pen') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.globalAlpha = 0.85;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  if (!isActive) return null;

  return (
    <>
      {/* FULLSCREEN TRANSPARENT CANVAS OVERLAY FOR DRAWING */}
      <canvas
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className={`fixed inset-0 z-45 ${
          activeTool === 'pen' ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'
        }`}
      />

      {/* GLOWING RED LASER POINTER DOT */}
      {activeTool === 'laser' && laserPos && (
        <div
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${laserPos.x}px`, top: `${laserPos.y}px` }}
        >
          {/* Outer glowing pulsing ring */}
          <div className="w-8 h-8 rounded-full bg-rose-500/40 animate-ping absolute -inset-1" />
          {/* Inner laser core dot */}
          <div className="w-6 h-6 rounded-full bg-rose-600 border-2 border-white shadow-[0_0_15px_rgba(225,29,72,0.9)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
      )}

      {/* TEACHER TOOLBAR DOCKED BELOW APP SETTINGS IN SIDEBAR */}
      <div className="fixed bottom-4 left-4 z-50 transition-all select-none w-[232px] hidden lg:block">
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full p-2.5 bg-burgundy-950/90 hover:bg-burgundy-950 text-amber-300 rounded-2xl shadow-xl border border-amber-400/30 flex items-center justify-between text-xs font-bold transition-all cursor-pointer"
            title="Expand Teacher Tool Box"
          >
            <div className="flex items-center gap-2">
              <Presentation className="w-4 h-4 text-amber-400" />
              <span>Teacher Tool Box</span>
            </div>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div className="bg-gradient-to-b from-burgundy-950 via-[#4A101C] to-burgundy-950 text-white p-3 rounded-2xl border border-amber-400/40 shadow-2xl space-y-2.5">
            {/* Side Toolbar Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Teacher Dock</span>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 cursor-pointer"
                title="Minimize Toolbar"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Vertical Tool Selection */}
            <div className="flex flex-col gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTool(activeTool === 'laser' ? 'none' : 'laser')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeTool === 'laser'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,1)]" />
                  <span className="text-xs">Laser</span>
                </div>
                {activeTool === 'laser' && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-md font-mono">ON</span>}
              </button>

              <button
                onClick={() => setActiveTool(activeTool === 'pen' ? 'none' : 'pen')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeTool === 'pen'
                    ? 'bg-amber-500 text-burgundy-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Pencil className="w-3.5 h-3.5" />
                  <span className="text-xs">Highlighter</span>
                </div>
                {activeTool === 'pen' && <span className="text-[10px] bg-burgundy-950/30 px-1.5 py-0.5 rounded-md font-mono">ON</span>}
              </button>

              <button
                onClick={() => setActiveTool('none')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTool === 'none'
                    ? 'bg-slate-700 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {activeTool === 'none' ? <Eye className="w-3.5 h-3.5 text-emerald-400" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span className="text-xs">Mouse Mode</span>
              </button>
            </div>

            {/* Pen Options */}
            {activeTool === 'pen' && (
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="text-[11px] text-amber-200/90 font-bold">Tajweed Color:</div>
                <div className="grid grid-cols-4 gap-1.5 justify-items-center">
                  {[
                    { hex: '#E11D48', label: 'Red (Madd)' },
                    { hex: '#059669', label: 'Green (Ghunnah)' },
                    { hex: '#0284C7', label: 'Blue (Qalqalah)' },
                    { hex: '#D97706', label: 'Amber (Heavy)' },
                  ].map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setColor(c.hex)}
                      className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                        color === c.hex ? 'border-white scale-110 shadow-lg ring-2 ring-amber-300' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>

                <div className="text-[11px] text-amber-200/90 font-bold pt-1">Stroke Size:</div>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { size: 3, label: 'Thin' },
                    { size: 6, label: 'Med' },
                    { size: 12, label: 'Thick' },
                  ].map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setBrushSize(s.size)}
                      className={`py-1 rounded-lg text-[10px] font-extrabold cursor-pointer transition-colors ${
                        brushSize === s.size ? 'bg-amber-400 text-burgundy-950 shadow-xs' : 'bg-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Clear Screen Action */}
            <button
              onClick={clearCanvas}
              className="w-full py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-rose-500/30 transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Clear Screen</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
