import React from 'react';
import { Heart } from 'lucide-react';

const ForAurora: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center relative overflow-hidden animate-fade-in">
      <button onClick={onBack} className="absolute top-8 left-8 text-white/50 hover:text-white">
          Back
      </button>

      <div className="relative z-10 space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-500/20 text-pink-300 animate-pulse-slow mb-4">
            <Heart size={40} fill="currentColor" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-teal-300">
            For My Aurora
        </h1>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
            <p className="text-lg text-slate-200 font-serif italic leading-relaxed">
            "Every story in this universe is yours to explore. Just like the northern lights, you bring color to my darkest skies."
            </p>
            <div className="mt-6 flex justify-center">
                 <div className="h-px w-12 bg-teal-500/50"></div>
            </div>
            <p className="mt-6 text-sm text-slate-400 uppercase tracking-widest">
                From someone who loves you
            </p>
        </div>
      </div>
    </div>
  );
};

export default ForAurora;
