import React, { useEffect, useState } from 'react';

const AuroraBackground: React.FC = () => {
  const [stars, setStars] = useState<{id: number, top: number, left: number, delay: number, size: number}[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0f172a] to-[#020617]" />

      {/* Animated Orbs/Auroras */}
      {/* Teal/Green Aurora */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-teal-500/10 rounded-full blur-[120px] animate-aurora-float-slow mix-blend-screen" />
      
      {/* Purple/Pink Aurora */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-purple-600/10 rounded-full blur-[140px] animate-aurora-float-reverse mix-blend-screen" />
      
      {/* Center Glow */}
      <div className="absolute top-[30%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />

      {/* Accent Highlights */}
      <div className="absolute top-[10%] right-[20%] w-[30vw] h-[30vw] bg-pink-500/10 rounded-full blur-[80px] animate-float-random mix-blend-screen" />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Grain Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
};

export default AuroraBackground;