import React from 'react';
import { Landmark, Compass, Globe, Sparkles } from 'lucide-react';
import { ModuleId } from '../../types/curriculum';

interface Props {
  activeModuleId: ModuleId | 'overview' | 'museum-3d';
  onNavigate: (target: ModuleId | 'overview' | 'museum-3d') => void;
  lang: 'ta' | 'en';
  onToggleLang: () => void;
}

export const TopNavbar: React.FC<Props> = ({
  activeModuleId,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1324]/95 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('overview')}
          className="text-lg font-bold tracking-tight text-slate-100 whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors cursor-pointer font-display flex items-center gap-2"
        >
          <span className="text-amber-400">NambiLearn</span>
          <span className="text-slate-500 font-normal">|</span>
          <span className="text-xs text-slate-300 font-medium tracking-normal">TNPSC Unit V</span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <button
            onClick={() => onNavigate('overview')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors cursor-pointer ${
              activeModuleId === 'overview' ? 'text-amber-400 font-bold border-b border-amber-400 pb-0.5' : ''
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('module-1')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors cursor-pointer ${
              activeModuleId === 'module-1' ? 'text-amber-400 font-bold border-b border-amber-400 pb-0.5' : ''
            }`}
          >
            Indian Economy
          </button>
          <button
            onClick={() => onNavigate('module-2')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors cursor-pointer ${
              activeModuleId === 'module-2' ? 'text-amber-400 font-bold border-b border-amber-400 pb-0.5' : ''
            }`}
          >
            Agri & Industry
          </button>
          <button
            onClick={() => onNavigate('module-3')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors cursor-pointer ${
              activeModuleId === 'module-3' ? 'text-amber-400 font-bold border-b border-amber-400 pb-0.5' : ''
            }`}
          >
            Social Dev & HDI
          </button>
          <button
            onClick={() => onNavigate('module-4')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors cursor-pointer ${
              activeModuleId === 'module-4' ? 'text-amber-400 font-bold border-b border-amber-400 pb-0.5' : ''
            }`}
          >
            Social Justice
          </button>
          <button
            onClick={() => onNavigate('module-6')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors cursor-pointer ${
              activeModuleId === 'module-6' ? 'text-amber-400 font-bold border-b border-amber-400 pb-0.5' : ''
            }`}
          >
            e-Governance
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:text-white hover:border-slate-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title="Toggle Language Focus"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ta' ? 'தமிழ்' : 'English'}</span>
          </button>

          <button
            onClick={() => onNavigate('museum-3d')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeModuleId === 'museum-3d'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Digital Museum</span>
          </button>
        </div>

      </div>
    </header>
  );
};
