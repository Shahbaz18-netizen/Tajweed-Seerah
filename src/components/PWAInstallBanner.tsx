import { useState, useEffect } from 'react';
import { Download, WifiOff, CheckCircle2, X } from 'lucide-react';
import { registerSW } from 'virtual:pwa-register';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showOfflineNotice, setShowOfflineNotice] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateSW, setUpdateSW] = useState<((reloadPage?: boolean) => Promise<void>) | null>(null);

  useEffect(() => {
    const updateFn = registerSW({
      onOfflineReady() {
        setOfflineReady(true);
      },
      onNeedRefresh() {
        setNeedRefresh(true);
      },
      onRegisterError(error: unknown) {
        console.error('SW registration error:', error);
      },
    });
    setUpdateSW(() => updateFn);
  }, []);

  // Handle network online/offline events
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowOfflineNotice(false);
    };
    const handleOffline = () => {
      setIsOffline(true);
      setShowOfflineNotice(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle PWA installation prompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallPrompt(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
      {/* Offline Status Warning */}
      {isOffline && showOfflineNotice && (
        <div className="pointer-events-auto bg-amber-900 text-amber-100 p-4 rounded-xl shadow-2xl border border-amber-700/50 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-800 rounded-lg shrink-0">
              <WifiOff className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Offline Mode</p>
              <p className="text-xs text-amber-200/90 mt-0.5">
                Working offline. Tajweed lessons & guides are available!
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowOfflineNotice(false)}
            className="p-1 hover:bg-amber-800 rounded-lg transition-colors text-amber-300 shrink-0"
            aria-label="Close offline notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* SW Offline Ready Notification */}
      {offlineReady && (
        <div className="pointer-events-auto bg-emerald-950 text-emerald-100 p-4 rounded-xl shadow-2xl border border-emerald-700/50 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-900 rounded-lg shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Ready for Offline Use</p>
              <p className="text-xs text-emerald-200/90 mt-0.5">
                Tajweed Studio content is cached for offline learning.
              </p>
            </div>
          </div>
          <button
            onClick={() => setOfflineReady(false)}
            className="p-1 hover:bg-emerald-900 rounded-lg transition-colors text-emerald-300 shrink-0"
            aria-label="Close offline ready prompt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* PWA Update Banner */}
      {needRefresh && (
        <div className="pointer-events-auto bg-[#6A1B29] text-amber-50 p-4 rounded-xl shadow-2xl border border-amber-500/30 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <p className="text-xs font-bold text-amber-300">New Version Available</p>
            <p className="text-xs text-amber-100/80 mt-0.5">Update now to get the latest Tajweed content.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateSW?.(true)}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-sm"
            >
              Update
            </button>
            <button
              onClick={() => setNeedRefresh(false)}
              className="p-1 hover:bg-burgundy-800 rounded-lg transition-colors text-amber-200"
              aria-label="Dismiss update"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* PWA Install App Prompt */}
      {showInstallPrompt && deferredPrompt && (
        <div className="pointer-events-auto bg-gradient-to-r from-[#6A1B29] to-[#802234] text-white p-4 rounded-xl shadow-2xl border border-amber-500/30 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 border border-amber-500/30">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-300">Install Tajweed App</p>
              <p className="text-xs text-amber-100/90 mt-0.5">
                Install on your device for fast, full-screen offline access.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md active:scale-95"
            >
              Install
            </button>
            <button
              onClick={() => setShowInstallPrompt(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors text-amber-200/80 hover:text-white"
              aria-label="Dismiss install prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
