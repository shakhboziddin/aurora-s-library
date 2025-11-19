import React, { useState } from 'react';
import { Book } from '../types';
import { MOCK_BOOKS } from '../constants';
import BookCard from '../components/BookCard';
import { Search as SearchIcon, Sparkles, Loader } from 'lucide-react';
import { getAuroraRecommendation } from '../services/geminiService';

interface SearchProps {
  onSelectBook: (book: Book) => void;
}

const SearchPage: React.FC<SearchProps> = ({ onSelectBook }) => {
  const [query, setQuery] = useState('');
  const [geminiMood, setGeminiMood] = useState('');
  const [geminiResponse, setGeminiResponse] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const filteredBooks = MOCK_BOOKS.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) || 
    b.author.toLowerCase().includes(query.toLowerCase()) ||
    b.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleAskAurora = async () => {
    if (!geminiMood.trim()) return;
    setIsLoadingAI(true);
    const response = await getAuroraRecommendation(geminiMood);
    setGeminiResponse(response);
    setIsLoadingAI(false);
  };

  return (
    <div className="pb-24 md:pb-32 pt-8 px-4 md:px-8 space-y-8 animate-fade-in max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-serif text-3xl md:text-5xl text-white text-glow">Explore</h2>
      </div>

      {/* Search Input */}
      <div className="relative group z-10">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-300 transition-colors">
          <SearchIcon size={20} />
        </div>
        <input
          type="text"
          placeholder="Find your next story (title, author, genre)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/5 border border-white/10 text-white text-base rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 backdrop-blur-xl transition-all shadow-lg"
        />
      </div>

      {/* Gemini "Magic" Section */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8">
        {/* Background Gradient for this card */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-slate-900/40 backdrop-blur-md z-0" />
        
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-teal-200">
            <Sparkles size={18} className="animate-pulse" />
            <h3 className="font-serif text-xl">Ask Aurora</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4 max-w-lg">
                Whisper your mood to the northern lights, and receive a recommendation from the stars.
            </p>
            
            <div className="flex gap-3 max-w-2xl">
            <input 
                type="text" 
                value={geminiMood}
                onChange={(e) => setGeminiMood(e.target.value)}
                placeholder="e.g., I feel like a rainy day in Paris..."
                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleAskAurora()}
            />
            <button 
                onClick={handleAskAurora}
                disabled={isLoadingAI}
                className="bg-teal-600/80 hover:bg-teal-500 text-white rounded-xl px-6 flex items-center justify-center disabled:opacity-50 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-900/30"
            >
                {isLoadingAI ? <Loader size={20} className="animate-spin" /> : 'Reveal'}
            </button>
            </div>

            {geminiResponse && (
            <div className="mt-6 text-base md:text-lg text-slate-100 italic font-serif font-light bg-white/5 border border-white/5 p-6 rounded-xl animate-fade-in leading-relaxed">
                "{geminiResponse}"
            </div>
            )}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-white/5 pb-2">
          {query ? `Results for "${query}"` : 'Library Collection'}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
                <BookCard key={book.id} book={book} onClick={onSelectBook} variant="landscape" />
            ))
            ) : (
            <div className="col-span-full py-12 text-center">
                <p className="text-slate-500 italic">No stars aligned with this search.</p>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;