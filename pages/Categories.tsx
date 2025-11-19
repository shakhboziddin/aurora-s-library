import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <div className="pb-24 md:pb-32 pt-8 px-4 md:px-8 animate-fade-in max-w-6xl mx-auto">
      <div className="mb-8">
          <h2 className="font-serif text-3xl md:text-5xl text-white text-glow mb-2">The Collection</h2>
          <p className="text-slate-400 text-sm md:text-base">Browse by genre and find your realm.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {CATEGORIES.map((cat, idx) => (
            <div 
                key={cat.id}
                className={`
                    group aspect-[4/3] md:aspect-square rounded-3xl p-6 
                    flex flex-col justify-end 
                    bg-gradient-to-br ${cat.gradient} 
                    relative overflow-hidden cursor-pointer 
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20
                `}
                style={{ animationDelay: `${idx * 0.05}s` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Decorative Blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <h3 className="relative z-10 text-white font-serif text-xl md:text-2xl font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    {cat.name}
                </h3>
                <div className="relative z-10 h-1 w-8 bg-white/50 mt-2 rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;