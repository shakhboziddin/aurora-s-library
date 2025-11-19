import React, { useState, useEffect } from 'react';
import { Book, ReadingSettings } from '../types';
import { ArrowLeft, Settings, Sun, Moon, AlignLeft } from 'lucide-react';

interface ReadingModeProps {
  book: Book;
  onBack: () => void;
}

const ReadingMode: React.FC<ReadingModeProps> = ({ book, onBack }) => {
  const [settings, setSettings] = useState<ReadingSettings>({
    fontSize: 18,
    theme: 'aurora',
    fontFamily: 'serif'
  });
  const [showControls, setShowControls] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-hide controls on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowControls(false);
      } else {
        setShowControls(true);
      }
      lastScrollY = window.scrollY;

      // Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getThemeClasses = () => {
    switch (settings.theme) {
      case 'light': return 'bg-amber-50 text-slate-900';
      case 'dark': return 'bg-slate-900 text-slate-300';
      case 'aurora': return 'bg-slate-950 text-teal-50';
      default: return 'bg-slate-950 text-teal-50';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${getThemeClasses()}`}>
      {/* Top Controls */}
      <div className={`fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 transition-transform duration-300 z-50 ${showControls ? 'translate-y-0' : '-translate-y-full'} ${settings.theme === 'aurora' ? 'bg-slate-900/80' : 'bg-inherit/90'} backdrop-blur-md`}>
        <button onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <span className="font-serif text-sm opacity-70 truncate max-w-[50%]">{book.title}</span>
        <button onClick={() => setSettings(prev => ({...prev, theme: prev.theme === 'aurora' ? 'light' : (prev.theme === 'light' ? 'dark' : 'aurora')}))}>
            {settings.theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Text Content */}
      <div 
        className={`max-w-2xl mx-auto px-6 py-24 leading-loose transition-all duration-300`}
        style={{ 
          fontSize: `${settings.fontSize}px`,
          fontFamily: settings.fontFamily === 'serif' ? '"Playfair Display", serif' : '"Quicksand", sans-serif'
        }}
      >
        <h1 className="text-3xl font-bold mb-12 text-center">{book.title}</h1>
        <div className="space-y-6 whitespace-pre-line opacity-90">
           {book.content}
           <p className="text-center italic opacity-50 mt-12 text-sm">* End of preview *</p>
        </div>
      </div>

      {/* Bottom Controls (Settings) */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 transition-transform duration-300 z-50 ${showControls ? 'translate-y-0' : 'translate-y-full'} ${settings.theme === 'aurora' ? 'bg-slate-900/80' : 'bg-inherit/90'} backdrop-blur-md border-t border-white/5`}>
        <div className="flex justify-between items-center max-w-md mx-auto">
            <button onClick={() => setSettings(s => ({...s, fontSize: Math.max(12, s.fontSize - 2)}))} className="p-2 opacity-70 hover:opacity-100">A-</button>
            <div className="h-1 bg-white/20 flex-1 mx-4 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500" style={{ width: `${scrollProgress}%` }}></div>
            </div>
            <button onClick={() => setSettings(s => ({...s, fontSize: Math.min(32, s.fontSize + 2)}))} className="p-2 opacity-70 hover:opacity-100 text-xl">A+</button>
        </div>
      </div>
    </div>
  );
};

export default ReadingMode;
