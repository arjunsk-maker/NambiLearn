import React from 'react';
import { MODULES_DATA } from '../../data/modulesData';
import { ModuleId } from '../../types/curriculum';
import { EconomyMonumentScene } from '../ThreeD/EconomyMonumentScene';
import { Landmark, Factory, Users, Scale, MapPin, Network, Sparkles, ArrowRight, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  onSelectModule: (id: ModuleId) => void;
  onOpenMuseum3D: () => void;
  lang: 'ta' | 'en';
}

export const LandingOverview: React.FC<Props> = ({
  onSelectModule,
  onOpenMuseum3D,
  lang,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-5 h-5 text-amber-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-emerald-400" />;
      case 'Users': return <Users className="w-5 h-5 text-sky-400" />;
      case 'Scale': return <Scale className="w-5 h-5 text-purple-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-teal-400" />;
      case 'Network': return <Network className="w-5 h-5 text-amber-500" />;
      default: return <BookOpen className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Main Hero Header Prose */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>TNPSC Unit V · Interactive Visual Classroom</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">20 Questions Focus</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight font-display text-balance">
              Indian Economy & Tamil Nadu Development Administration
            </h1>

            <p className="text-lg sm:text-xl font-medium text-amber-300/95">
              இந்தியப் பொருளாதாரம் மற்றும் தமிழக வளர்ச்சி நிர்வாகம் — காட்சிசார் டிஜிட்டல் அருங்காட்சியகம்
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
              Master the entire TNPSC Unit V syllabus through visual storytelling, interactive 3D simulations, real-world macroeconomic conduits, and Tamil-first conceptual clarity.
            </p>
          </div>

          {/* Three.js 3D Interactive Monument Showcase (Hero Embed) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Interactive 3D Kinetic Exhibit</span>
                <span>·</span>
                <span>National Wealth Apex & Tamil Nadu Beacon</span>
              </div>
              <button
                onClick={onOpenMuseum3D}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Full-Screen Museum View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <EconomyMonumentScene 
              onSelectFeature={(feature) => {
                if (feature === 'monument') onSelectModule('module-1');
                else if (feature === 'agriculture' || feature === 'industry') onSelectModule('module-2');
                else if (feature === 'services') onSelectModule('module-3');
                else if (feature === 'tamilnadu') onSelectModule('module-5');
              }}
            />
          </div>

          {/* Unboxed Metadata Stats Strip (Zero Pills) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block">Syllabus Scope</span>
              <span className="text-slate-100 font-bold text-sm">6 Core Thematic Modules</span>
              <span className="text-slate-500 block text-[11px]">Full Unit V Coverage</span>
            </div>
            <div>
              <span className="text-slate-400 block">Exam Weightage</span>
              <span className="text-amber-400 font-bold text-sm font-mono">20 Questions</span>
              <span className="text-slate-500 block text-[11px]">TNPSC Group 1, 2, 2A & 4</span>
            </div>
            <div>
              <span className="text-slate-400 block">Language Architecture</span>
              <span className="text-slate-100 font-bold text-sm">Tamil-First + English Terms</span>
              <span className="text-slate-500 block text-[11px]">Bilingual Aspirant Design</span>
            </div>
            <div>
              <span className="text-slate-400 block">Data Accuracy</span>
              <span className="text-emerald-400 font-bold text-sm">100% Official Sources</span>
              <span className="text-slate-500 block text-[11px]">Dated Government Citations</span>
            </div>
          </div>

        </div>
      </section>

      {/* Six Clickable Learning Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Curated Learning Modules · 6 பாடப்பிரிவுகள்
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-display">
            Select a Visual Classroom Module
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Each module contains interactive infographics, historical timelines, mathematical equilibrium graphs, and verified Tamil Nadu case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className="group bg-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Module Header Strip */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getIcon(module.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-amber-400 transition-colors">
                    Module 0{module.number}
                  </span>
                </div>

                {/* Module Titles */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {module.titleEn}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400 mt-1">
                    {module.titleTa}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'ta' ? module.descriptionTa : module.descriptionEn}
                </p>

                {/* Module Lessons Count and Visual Highlights */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{module.lessons.length} Deep Visual Lessons</span>
                  <span className="text-slate-400 group-hover:text-slate-200">Interactive Models Included</span>
                </div>
              </div>

              {/* Action Button Strip */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  <span>Enter Module Classroom</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TNPSC Unit V Syllabus Matrix & Digital Museum Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">
              Visual Museum Standards & Pedagogical Architecture
            </h3>
            <p className="text-xs text-slate-400">
              Built strictly for TNPSC aspirants following the official syllabus documents without distractions or superficial quizzes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="font-bold text-amber-400">1. Interactive Mechanical Visuals</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Rather than static images, lessons employ working mathematical models: supply/demand tax wedges, CRR/SLR liquidity transmission pumps, and 15th Finance Commission devolution waterfalls.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="font-bold text-emerald-400">2. Tamil-First & Technical English</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Clear conceptual Tamil (எளிய தமிழ் விளக்க உரை) accompanies English economic terminology, enabling aspirants to master both language nuances required for Group 1 Mains essays and Prelims.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="font-bold text-sky-400">3. Verified Official Citations</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All data points are timestamped and cited directly from official Union & Tamil Nadu government sources (RBI Annual Reports, Union Budget 2024-25, GoTN Policy Notes, NITI Aayog MPI, and SRS Bulletins).
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
