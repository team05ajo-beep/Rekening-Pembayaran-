
import React, { useState, useRef, useEffect } from 'react';
import { PaymentData } from './types';
import { INITIAL_DATA, THEME_PRESETS } from './constants';
import PaymentCard from './components/PaymentCard';

const App: React.FC = () => {
  const [data, setData] = useState<PaymentData>(INITIAL_DATA);
  const [zoomScale, setZoomScale] = useState(0.55);
  const [showSettings, setShowSettings] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFocusMode(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const applyTheme = (idx: number) => {
    const preset = THEME_PRESETS[idx];
    setData(prev => ({
      ...prev,
      theme: { ...prev.theme, ...preset.theme }
    }));
  };

  const handleDataChange = (field: keyof PaymentData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const appBgImage = "https://assets-us-01.kc-usercontent.com/9e9a95c0-1d15-00d5-e878-50f070203f13/0a0bb423-a9b0-43e1-8a28-b4fc771cceb0/gucci-logo.jpg";

  return (
    <div className={`h-screen w-full flex flex-col bg-[#0f0f0f] overflow-hidden relative transition-all duration-1000 ${isFocusMode ? 'cursor-none' : ''}`}>
      
      {/* Background Ambience */}
      <div 
        className={`absolute inset-0 opacity-5 grayscale transition-opacity duration-1000 ${isFocusMode ? 'opacity-0' : 'opacity-10'}`}
        style={{ 
          backgroundImage: `url(${appBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(120px) contrast(1.2)'
        }}
      ></div>

      {/* Header */}
      <header className={`absolute top-10 left-0 w-full flex flex-col items-center z-50 transition-all duration-700 ${isFocusMode ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100'}`}>
          <h1 className="font-luxury text-[32px] font-black text-white/80 tracking-[0.4em]">GUCCI</h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[7px] text-white/30 tracking-[1em] font-black uppercase">Private Settlement Terminal</span>
          </div>
      </header>

      {/* Main Preview Area */}
      <main 
        className="flex-1 flex flex-col items-center justify-center p-10 relative z-10"
        onClick={() => isFocusMode && setIsFocusMode(false)}
      >
        <div 
          style={{ transform: `scale(${zoomScale})`, transformOrigin: 'center center' }}
          className="relative transition-transform duration-700 ease-out"
        >
          <div ref={cardRef}>
            <PaymentCard data={data} onChange={handleDataChange} />
          </div>
          
          <div className={`mt-12 text-center transition-opacity duration-700 ${isFocusMode ? 'opacity-0' : 'opacity-40'}`}>
            <p className="text-white/30 text-[8px] font-black uppercase tracking-[0.8em]">
              Silver Glossy Resolution: 1175 x 632 Pixels
            </p>
          </div>
        </div>

        {/* Focus Mode Exit Hint */}
        {isFocusMode && (
          <div className="absolute bottom-10 text-white/20 text-[10px] uppercase tracking-[0.5em] animate-pulse">
            Click anywhere or press ESC to exit focus
          </div>
        )}
      </main>

      {/* Footer Tools */}
      <div className={`absolute bottom-10 w-full flex items-center justify-center gap-4 z-[100] transition-all duration-700 px-4 ${isFocusMode ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100'}`}>
          
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl">
              <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">Scaling</span>
              <input 
                type="range" min="0.3" max="2.0" step="0.01" 
                value={zoomScale} 
                onChange={(e) => setZoomScale(parseFloat(e.target.value))}
                className="w-32 h-1 bg-white/10 rounded-full appearance-none accent-white cursor-pointer"
              />
              <span className="text-[9px] font-card text-white/40 w-10 text-right">{Math.round(zoomScale * 100)}%</span>
          </div>

          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="bg-white/5 backdrop-blur-3xl border border-white/10 px-6 py-3 rounded-full text-[8px] font-black text-white uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Material
          </button>

          <button 
            onClick={() => {
              setZoomScale(1.0);
              setIsFocusMode(true);
            }}
            className="bg-white/5 backdrop-blur-3xl border border-white/10 px-6 py-3 rounded-full text-[8px] font-black text-white uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-2"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Screenshot Mode (100%)
          </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-3xl z-[1000] flex items-center justify-center p-10 animate-in fade-in duration-500">
          <div className="max-w-4xl w-full bg-[#111] border border-white/10 p-12 rounded-[48px] shadow-2xl">
            <div className="flex justify-between items-center mb-12">
               <div>
                  <h2 className="text-white font-heritage text-2xl tracking-[0.3em] uppercase">Material Collection</h2>
               </div>
               <button onClick={() => setShowSettings(false)} className="w-12 h-12 rounded-full flex items-center justify-center text-white/30 hover:text-white border border-white/10">✕</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto custom-scrollbar pr-6">
               {THEME_PRESETS.map((preset, idx) => (
                 <div 
                   key={idx} 
                   onClick={() => { applyTheme(idx); setShowSettings(false); }}
                   className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl cursor-pointer hover:border-white/20 transition-all flex items-center justify-between"
                 >
                   <span className="text-white/60 group-hover:text-white font-bold tracking-[0.25em] text-[10px] uppercase">{preset.name}</span>
                   <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: preset.theme.cardBg }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* Status Footer */}
      <footer className={`absolute bottom-6 w-full flex items-center justify-center gap-10 transition-all duration-700 ${isFocusMode ? 'opacity-0 translate-y-5 pointer-events-none' : 'opacity-20 z-20'}`}>
          <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-white rounded-full"></div>
             <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white">Authorized Terminal #99238</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-white rounded-full"></div>
             <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white">OJK & BI Verified</span>
          </div>
      </footer>
    </div>
  );
};

export default App;
