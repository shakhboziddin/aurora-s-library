import React from 'react';
import { Home, Search, BookOpen, Heart, User } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'categories', icon: BookOpen, label: 'Library' },
    { id: 'favorites', icon: Heart, label: 'Loved' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  // Hide navbar in reading mode
  if (currentView === 'reading') return null;

  return (
    <>
      {/* Mobile Bottom Bar Spacer */}
      <div className="h-20 md:h-0" />

      <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe md:pb-6 md:left-1/2 md:right-auto md:-translate-x-1/2">
        {/* Container */}
        <div className="
          bg-slate-900/80 md:bg-slate-900/60 
          backdrop-blur-xl md:backdrop-blur-2xl 
          border-t md:border border-white/10 
          md:rounded-full md:shadow-[0_0_40px_rgba(0,0,0,0.5)]
          px-2 md:px-6 
          h-16 md:h-16 
          flex justify-around md:gap-8 items-center 
          min-w-full md:min-w-[400px]
          transition-all duration-300
        ">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id as ViewState)}
                className={`
                  group flex flex-col md:flex-row items-center justify-center 
                  w-full md:w-auto h-full md:h-10 md:px-4 md:rounded-full 
                  transition-all duration-300
                  ${isActive ? 'text-teal-300' : 'text-slate-400 hover:text-slate-200'}
                  ${isActive && 'md:bg-white/10'}
                `}
              >
                <item.icon
                  size={24}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={`transition-transform duration-300 ${isActive ? '-translate-y-1 md:translate-y-0 md:scale-110' : 'group-hover:scale-110'}`}
                />
                <span className={`
                  text-[10px] md:text-sm md:ml-2 mt-1 md:mt-0 font-medium 
                  transition-all duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0 md:hidden'}
                `}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;