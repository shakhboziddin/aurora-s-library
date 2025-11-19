import React from 'react';
import { ViewState } from '../types';
import { Clock, BookOpen, Star, Gift, Settings, ChevronRight, Shield } from 'lucide-react';

interface ProfileProps {
  onChangeView: (view: ViewState) => void;
}

const Profile: React.FC<ProfileProps> = ({ onChangeView }) => {
  return (
    <div className="pb-24 md:pb-32 pt-8 px-4 md:px-8 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-teal-400 to-purple-600 p-1 shadow-xl shadow-purple-900/40">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/aurorauser/300/300" alt="Avatar" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                </div>
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 md:w-8 md:h-8 bg-slate-900 rounded-full flex items-center justify-center border border-white/20">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
        </div>
        
        <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-1">Aurora</h2>
            <p className="text-teal-400 text-sm md:text-base font-medium mb-2">Book Worm • Level 12</p>
            <p className="text-slate-400 text-xs md:text-sm max-w-xs mx-auto md:mx-0">
                "Reading is dreaming with open eyes."
            </p>
        </div>
        
        <div className="md:ml-auto flex gap-3">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-slate-300">
                <Settings size={20} />
            </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="glass-panel rounded-2xl p-4 text-center hover:bg-white/5 transition-colors">
              <Clock className="mx-auto text-purple-400 mb-2" size={24} />
              <div className="text-xl md:text-2xl font-bold text-white">12h</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Time Read</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center hover:bg-white/5 transition-colors">
              <BookOpen className="mx-auto text-teal-400 mb-2" size={24} />
              <div className="text-xl md:text-2xl font-bold text-white">42</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Books</div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center hover:bg-white/5 transition-colors">
              <Star className="mx-auto text-yellow-400 mb-2" size={24} />
              <div className="text-xl md:text-2xl font-bold text-white">15</div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Reviews</div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Special Section */}
        <button 
            onClick={() => onChangeView('for-aurora')}
            className="w-full bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-pink-900/50 transition-all group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-pink-900/20 relative z-10">
                <Gift size={24} />
            </div>
            <div className="text-left flex-1 relative z-10">
                <h3 className="text-white font-serif text-lg">A Gift for You</h3>
                <p className="text-pink-200/70 text-sm">Tap to open your secret message</p>
            </div>
            <ChevronRight className="text-white/30 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Settings List */}
        <div className="space-y-3">
            <h3 className="text-slate-500 text-xs uppercase tracking-wider ml-1 font-semibold">Preferences</h3>
            <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="p-4 flex justify-between items-center border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Shield size={16} />
                        </div>
                        <span className="text-slate-200 text-sm">Privacy & Security</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-600" />
                </div>
                <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <span className="text-slate-200 text-sm pl-11">Download over Wi-Fi only</span>
                    </div>
                    <div className="w-10 h-6 bg-slate-700 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-all"></div></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;