import React, { useState } from 'react';
import { ViewState, Book } from './types';
import AuroraBackground from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchPage from './pages/Search';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import BookDetails from './pages/BookDetails';
import ReadingMode from './pages/ReadingMode';
import ForAurora from './pages/ForAurora';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
    setCurrentView('book-details');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onSelectBook={handleSelectBook} onChangeView={setCurrentView} />;
      case 'search':
        return <SearchPage onSelectBook={handleSelectBook} />;
      case 'categories':
        return <Categories />;
      case 'favorites':
        // Reusing categories structure for simplicity in this prompt demo
        return (
            <div className="pt-8 md:pt-16 px-4 text-center animate-fade-in">
                <h2 className="text-white font-serif text-3xl md:text-4xl mb-4">Your Favorites</h2>
                <p className="text-slate-400 italic text-lg">"To collect books is to collect happiness."</p>
                <div className="mt-12 opacity-20 text-9xl animate-float-slow">📚</div>
                <p className="mt-8 text-slate-500">Your collection is currently empty.</p>
                <button 
                    onClick={() => setCurrentView('search')}
                    className="mt-6 px-6 py-2 rounded-full border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 transition-colors"
                >
                    Browse Library
                </button>
            </div>
        );
      case 'profile':
        return <Profile onChangeView={setCurrentView} />;
      case 'book-details':
        return selectedBook ? (
            <BookDetails 
                book={selectedBook} 
                onBack={() => setCurrentView('home')} 
                onRead={() => setCurrentView('reading')}
            />
        ) : <Home onSelectBook={handleSelectBook} onChangeView={setCurrentView} />;
      case 'reading':
        return selectedBook ? (
            <ReadingMode 
                book={selectedBook} 
                onBack={() => setCurrentView('book-details')} 
            />
        ) : null;
      case 'for-aurora':
        return <ForAurora onBack={() => setCurrentView('profile')} />;
      default:
        return <Home onSelectBook={handleSelectBook} onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-100 overflow-x-hidden">
      {currentView !== 'reading' && <AuroraBackground />}
      
      {/* Main Layout Container */}
      {/* Removed max-w-md restriction. Using w-full with responsive paddings */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
          <main className="flex-1">
            {renderView()}
          </main>
      </div>

      <Navbar currentView={currentView} onChangeView={setCurrentView} />
    </div>
  );
};

export default App;