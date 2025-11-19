import React from 'react';
import { Book } from '../types';
import { MOCK_BOOKS } from '../constants';
import BookCard from '../components/BookCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HomeProps {
  onSelectBook: (book: Book) => void;
  onChangeView: (view: any) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectBook, onChangeView }) => {
  const trendingBooks = MOCK_BOOKS.filter(b => b.isTrending);
  
  return (
    <div className="pb-24 md:pb-32 pt-8 px-4 md:px-8 space-y-10 md:space-y-16 animate-fade-in max-w-7xl mx-auto">
      {/* Hero */}
      <div className="relative py-8 md:py-16 flex flex-col md:items-center md:text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium mb-4 animate-fade-in">
           <Sparkles size={12} /> 
           <span>Welcome to your sanctuary</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-purple-100 to-pink-200 mb-4 animate-shimmer leading-tight tracking-tight">
          Aurora's Library
        </h1>
        
        <p className="text-slate-300 text-base md:text-xl font-light tracking-wide italic max-w-2xl opacity-90">
          “A universe of stories, woven from starlight and gathered just for you.”
        </p>
      </div>

      {/* Continue Reading (Mock) */}
      <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex justify-between items-baseline mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-serif text-white">Continue Reading</h2>
        </div>
        <div 
          onClick={() => onSelectBook(MOCK_BOOKS[0])}
          className="group cursor-pointer relative overflow-hidden glass-panel p-4 md:p-6 rounded-2xl md:rounded-3xl flex gap-4 md:gap-8 items-center hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-teal-500/30"
        >
          {/* Background Glow for Card */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors" />
          
          <img 
            src={MOCK_BOOKS[0].cover} 
            alt="Current read" 
            className="relative z-10 w-16 md:w-24 aspect-[2/3] object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10 flex-1">
            <h3 className="text-white font-serif text-lg md:text-2xl mb-1 group-hover:text-teal-200 transition-colors">{MOCK_BOOKS[0].title}</h3>
            <p className="text-xs md:text-sm text-slate-400 mb-4">{MOCK_BOOKS[0].author} • Chapter 4</p>
            
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-full max-w-md bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-purple-400 w-[14%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                </div>
              </div>
              <span className="text-xs text-slate-400 whitespace-nowrap">14%</span>
            </div>
          </div>
          <button 
            className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300 shadow-lg"
          >
            <span className="ml-1">▶</span>
          </button>
        </div>
      </section>

      {/* Trending */}
      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex justify-between items-end mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-serif text-white">Trending Now</h2>
          <button onClick={() => onChangeView('search')} className="text-xs md:text-sm text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors">
            Explore all <ArrowRight size={14} />
          </button>
        </div>
        
        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x md:snap-none">
          {trendingBooks.map(book => (
            <BookCard key={book.id} book={book} onClick={onSelectBook} />
          ))}
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl md:text-2xl font-serif text-white mb-4 md:mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {MOCK_BOOKS.slice().reverse().map(book => (
             <BookCard key={book.id} book={book} onClick={onSelectBook} variant="landscape" />
           ))}
        </div>
      </section>
    </div>
  );
};

export default Home;