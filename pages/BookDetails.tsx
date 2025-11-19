import React from 'react';
import { Book } from '../types';
import { ArrowLeft, Heart, BookOpen, Share2 } from 'lucide-react';

interface BookDetailsProps {
  book: Book;
  onBack: () => void;
  onRead: (book: Book) => void;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book, onBack, onRead }) => {
  return (
    <div className="animate-slide-up relative z-20 min-h-screen bg-slate-950 md:bg-transparent md:flex md:items-center md:justify-center md:p-8 md:pb-24">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-30 bg-gradient-to-b from-black/80 to-transparent">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-3">
             <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-pink-300 hover:bg-pink-500/20 transition-colors">
                <Heart size={20} />
            </button>
        </div>
      </div>

      {/* Desktop Backdrop Overlay */}
      <div 
        className="hidden md:block fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" 
        onClick={onBack}
      />

      {/* Main Content Card */}
      <div className="w-full md:max-w-5xl bg-slate-900 md:bg-slate-900/80 md:backdrop-blur-2xl md:rounded-3xl md:border md:border-white/10 md:shadow-2xl md:overflow-hidden flex flex-col md:flex-row min-h-screen md:min-h-[600px]">
        
        {/* Left Side: Visual */}
        <div className="relative md:w-5/12 lg:w-4/12">
            {/* Desktop Back Button */}
            <button 
                onClick={onBack}
                className="hidden md:flex absolute top-6 left-6 z-30 w-10 h-10 rounded-full bg-black/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
                <ArrowLeft size={20} />
            </button>

            {/* Background Image (Blurred) */}
            <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={book.cover} 
                    alt="Backdrop" 
                    className="w-full h-full object-cover opacity-40 blur-xl scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 md:bg-gradient-to-r md:via-slate-900/20 md:to-slate-900/90" />
            </div>
            
            {/* Main Cover */}
            <div className="relative z-10 h-[50vh] md:h-full flex flex-col items-center justify-end md:justify-center pb-8 px-6 md:p-10">
                <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-40 md:w-56 shadow-2xl shadow-black/50 rounded-xl mb-6 transform hover:scale-105 transition-transform duration-500 border border-white/10"
                />
            </div>
        </div>

        {/* Right Side: Info */}
        <div className="flex-1 px-6 md:px-10 md:py-10 -mt-4 md:mt-0 relative z-10 bg-slate-900 md:bg-transparent rounded-t-3xl md:rounded-none">
            {/* Decorative Line */}
            <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-6 md:hidden" />

            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h1 className="text-3xl md:text-4xl text-white font-serif leading-tight">{book.title}</h1>
                        <div className="hidden md:flex gap-2">
                            <button className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                                <Share2 size={20} />
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/10 text-pink-400 hover:text-pink-300 transition-colors">
                                <Heart size={20} fill="currentColor" className="opacity-50 hover:opacity-100" />
                            </button>
                        </div>
                    </div>
                    
                    <p className="text-teal-300 text-lg font-light mb-6">{book.author}</p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 py-6 mb-6 border-y border-white/5">
                        <div className="text-center">
                            <span className="block text-white font-serif text-xl">{book.year}</span>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Released</span>
                        </div>
                        <div className="text-center border-l border-white/5">
                            <span className="block text-white font-serif text-xl">{book.rating} <span className="text-yellow-500 text-sm">★</span></span>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Rating</span>
                        </div>
                        <div className="text-center border-l border-white/5">
                            <span className="block text-white font-serif text-xl">245</span>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Pages</span>
                        </div>
                    </div>

                    <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wide opacity-80">Synopsis</h3>
                    <p className="text-slate-300 leading-relaxed font-light text-sm md:text-base mb-8 opacity-90 text-justify">
                        {book.description}
                    </p>
                </div>

                <div className="pb-8 md:pb-0">
                    <button 
                        onClick={() => onRead(book)}
                        className="w-full py-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl text-white font-semibold tracking-wide shadow-lg shadow-teal-900/30 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all transform hover:-translate-y-1"
                    >
                        <BookOpen size={20} />
                        Start Reading
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        Available offline • Last read yesterday
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;