import React, { useState } from 'react';
import { EconomyMonumentScene } from './EconomyMonumentScene';
import { ModuleId } from '../../types/curriculum';
import { ArrowLeft, Sparkles, BookOpen, Layers, Info, ChevronRight } from 'lucide-react';

interface Props {
  onBackToClassroom: () => void;
  onJumpToModule: (id: ModuleId) => void;
}

export const MuseumExhibitView: React.FC<Props> = ({ onBackToClassroom, onJumpToModule }) => {
  const [selectedExhibit, setSelectedExhibit] = useState<string>('monument');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Header Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onBackToClassroom}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Museum · Return to Classroom Modules</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-slate-100">National Wealth & TN Development 3D Digital Museum</span>
        </div>
      </div>

      {/* Main 3D Kinetic Scene (Height 600px) */}
      <div className="relative">
        <EconomyMonumentScene 
          fullScreen={true}
          onSelectFeature={(feat) => setSelectedExhibit(feat)}
        />
      </div>

      {/* Exhibit Explanatory Gallery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-amber-400 flex items-center justify-between">
            <span>The Apex Monetary Pillar</span>
            <span className="font-mono text-[10px] text-slate-500">Centerpiece</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Procedural 7-part Ashoka capital and golden Rupee disc representing the Reserve Bank of India (RBI) and Central Treasury regulating liquidity, price stability, and fiscal sharing.
          </p>
          <button
            onClick={() => onJumpToModule('module-1')}
            className="text-amber-400 hover:text-amber-300 font-semibold text-[11px] flex items-center gap-1 pt-1 cursor-pointer"
          >
            <span>Study Module 1: Indian Economy</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-emerald-400 flex items-center justify-between">
            <span>Primary, Secondary & Tertiary Orbits</span>
            <span className="font-mono text-[10px] text-slate-500">Tri-Sector System</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Orbiting composite models of Agriculture (green terraced rings), Industry (brushed steel gear spires), and Services (sapphire crystal obelisk) demonstrating macroeconomic structural shifts.
          </p>
          <button
            onClick={() => onJumpToModule('module-2')}
            className="text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] flex items-center gap-1 pt-1 cursor-pointer"
          >
            <span>Study Module 2: Agriculture & Industry</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-sky-400 flex items-center justify-between">
            <span>Tamil Nadu Development Beacon</span>
            <span className="font-mono text-[10px] text-slate-500">Southwest Sector</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Composite Dravidian Gopuram plinth paired with a rotating renewable wind turbine celebrating Tamil Nadu’s cultural heritage and leadership in green energy (~10,200 MW wind capacity).
          </p>
          <button
            onClick={() => onJumpToModule('module-5')}
            className="text-sky-400 hover:text-sky-300 font-semibold text-[11px] flex items-center gap-1 pt-1 cursor-pointer"
          >
            <span>Study Module 5: Tamil Nadu Development</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
