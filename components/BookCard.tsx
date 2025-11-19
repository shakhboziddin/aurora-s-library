import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
  variant?: 'portrait' | 'landscape' | 'grid';
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick, variant = 'portrait' }) => {
  if (variant === 'landscape') {
    return (
      <div 
        onClick={() => onClick(book)}
        className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-xl p-3 transition-all duration-300 active:scale-[0.98] cursor-pointer hover:shadow-lg hover:shadow-teal-900/20"
      >
        <div className="overflow-hidden rounded-lg shadow-md w-16 h-24 flex-shrink-0">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg text-white leading-tight mb-1 truncate group-hover:text-teal-200 transition-colors">{book.title}</h3>
          <p className="text-sm text-slate-300 mb-2 truncate">{book.author}</p>
          <div className="flex items-center gap-2">
             <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-200 border border-teal-500/20">
               {book.category}
             </span>
             <span className="text-xs text-yellow-400">★ {book.rating}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
       <div 
        onClick={() => onClick(book)}
        className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-2"
      >
        <div className="relative aspect-[2/3] mb-3 rounded-xl overflow-hidden shadow-lg shadow-black/40 border border-white/5 group-hover:border-teal-500/30 group-hover:shadow-teal-500/20 transition-all">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
             <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-xs font-medium transform scale-90 group-hover:scale-100 transition-transform">Read Now</span>
          </div>
        </div>
        <h3 className="font-serif text-white text-base leading-snug line-clamp-1 group-hover:text-teal-300 transition-colors">{book.title}</h3>
        <p className="text-sm text-slate-400 truncate">{book.author}</p>
      </div>
    );
  }

  // Portrait default (for carousels)
  return (
    <div 
      onClick={() => onClick(book)}
      className="w-32 md:w-40 flex-shrink-0 snap-center cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
    >
      <div className="relative aspect-[2/3] mb-3 rounded-xl overflow-hidden shadow-lg shadow-black/40 border border-white/5 group-hover:shadow-teal-500/20">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="font-serif text-white text-sm leading-tight line-clamp-2 mb-1 group-hover:text-teal-200">{book.title}</h3>
      <p className="text-xs text-slate-400 truncate">{book.author}</p>
    </div>
  );
};

export default BookCard;