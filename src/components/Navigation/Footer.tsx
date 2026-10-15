import React from 'react';
import { ModuleId } from '../../types/curriculum';

interface Props {
  onNavigate: (target: ModuleId | 'overview' | 'museum-3d') => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="text-base font-bold text-slate-100 font-display flex items-center gap-2">
              <span className="text-amber-400">NambiLearn</span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-400 font-sans font-normal">TNPSC Unit V Visual Classroom</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An interactive visual learning platform and digital museum dedicated to Indian Economy and Development Administration in Tamil Nadu for civil service aspirants.
            </p>
          </div>

          {/* Module Links Col 1 */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Core Macrofoundations
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('module-1')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Module 1: Indian Economy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('module-2')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Module 2: Agriculture & Industry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('module-3')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Module 3: Social & Human Development
                </button>
              </li>
            </ul>
          </div>

          {/* Module Links Col 2 */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Tamil Nadu Administration
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('module-4')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Module 4: Social Justice & Welfare
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('module-5')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Module 5: TN Development & Geography
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('module-6')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Module 6: e-Governance (TNeGA)
                </button>
              </li>
            </ul>
          </div>

          {/* Government Sources Col */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Primary Government Sources
            </span>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Data grounded in Reserve Bank of India Handbooks, 15th Finance Commission Reports, NITI Aayog Multidimensional Poverty Index, Sample Registration System (SRS) Bulletins, and Tamil Nadu State Policy Notes.
            </p>
          </div>
        </div>

        {/* Quiet Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} NambiLearn. Visual Educational Platform for TNPSC Aspirants.
          </div>
          <div className="flex items-center gap-4">
            <span>Concept-Focused Digital Museum</span>
            <span>·</span>
            <span>Zero-Distraction Visual Learning</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
