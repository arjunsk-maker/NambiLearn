import React, { useState } from 'react';
import { ModuleData, ModuleId } from '../../types/curriculum';
import { DiagramRenderer } from '../Visualizations/DiagramRenderer';
import { ArrowLeft, BookOpen, FileCheck, ExternalLink, Award, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

interface Props {
  module: ModuleData;
  onBackToOverview: () => void;
  onNavigateModule: (id: ModuleId) => void;
  lang: 'ta' | 'en';
}

export const ModuleView: React.FC<Props> = ({
  module,
  onBackToOverview,
  onNavigateModule,
  lang,
}) => {
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const lesson = module.lessons[activeLessonIndex] || module.lessons[0];

  const totalLessons = module.lessons.length;
  const hasNextLesson = activeLessonIndex < totalLessons - 1;
  const hasPrevLesson = activeLessonIndex > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb Navigation & Back Affordance */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToOverview}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All 6 Modules / முகப்புக்குத் திரும்பு</span>
        </button>

        <div className="text-xs text-slate-400">
          <span>TNPSC Group 1 / 2 / 2A / 4</span>
          <span className="mx-1.5">·</span>
          <span className="text-amber-400 font-semibold">Unit V (20 Questions)</span>
        </div>
      </div>

      {/* Module Title Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
          <span>Module 0{module.number}</span>
          <span className="text-slate-600">·</span>
          <span>பாடப்பிரிவு 0{module.number}</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-display">
          {module.titleEn}
        </h1>
        <p className="text-base sm:text-lg font-semibold text-amber-400">
          {module.titleTa}
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-4xl leading-relaxed pt-1">
          {lang === 'ta' ? module.descriptionTa : module.descriptionEn}
        </p>
      </div>

      {/* Lesson Tabs Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {module.lessons.map((les, idx) => {
          const isCurrent = idx === activeLessonIndex;
          return (
            <button
              key={les.id}
              onClick={() => setActiveLessonIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                isCurrent
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="opacity-70 font-mono">0{idx + 1}.</span>
              <span>{les.titleEn}</span>
            </button>
          );
        })}
      </div>

      {/* Active Lesson Content Container */}
      <div className="space-y-8">
        
        {/* Lesson Overview Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>{lesson.kicker}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            {lesson.titleEn}
          </h2>
          <div className="text-sm font-semibold text-amber-300">
            {lesson.titleTa}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-3 border-t border-slate-800 text-xs sm:text-sm leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400 text-xs uppercase block">
                எளிய தமிழ் விளக்கம் (Tamil First Concept):
              </span>
              <p className="text-slate-200">{lesson.summaryTa}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="font-bold text-slate-300 text-xs uppercase block">
                English Economic Synthesis:
              </span>
              <p className="text-slate-300">{lesson.summaryEn}</p>
            </div>
          </div>
        </div>

        {/* Interactive Visualization / Infographic Component */}
        {lesson.diagramType && (
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Concept Simulation & Diagrammatic Model</span>
            </div>
            <DiagramRenderer diagramType={lesson.diagramType} />
          </div>
        )}

        {/* English Economic Terminology Cards (Glossary for TNPSC) */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Key Economic Terminology & Definitions · கலைச்சொற்கள் & வரைவிலக்கணம்
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {lesson.keyTerminology.map((term, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                <div>
                  <h6 className="font-bold text-slate-100 text-sm">{term.english}</h6>
                  <span className="text-amber-400 font-medium text-xs block mt-0.5">{term.tamil}</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Facts & Exam Relationships */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Verified Statistical Facts & Exam Relationships · முக்கியத் தரவுகள்
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {lesson.keyFacts.map((fact, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">{fact.labelEn}</span>
                  <span className="text-amber-300/90 text-[11px] block">{fact.labelTa}</span>
                </div>
                <div className="font-mono text-base font-bold text-amber-400 py-1">
                  {fact.value}
                </div>
                <p className="text-slate-400 text-[11px]">
                  {fact.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Case Studies (Tamil Nadu Focus) */}
        {lesson.caseStudies && lesson.caseStudies.length > 0 && (
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Real-World Policy Case Studies · நடைமுறை ஆய்வுக் களங்கள்
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.caseStudies.map((cs, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-slate-100 text-sm">{cs.title}</h5>
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded text-[10px] font-semibold">
                      {cs.stateOrUnion}
                    </span>
                  </div>
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p className="text-amber-200/90 bg-amber-950/20 p-2.5 rounded border border-amber-900/40">
                      {cs.detailTa}
                    </p>
                    <p className="text-slate-300">
                      {cs.detailEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Source Citations with Year and Report Name */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-slate-300 text-xs">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Government Source Citations & References (தரவு மூலங்கள்):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            {lesson.citations.map((cite, i) => (
              <div key={i} className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-0.5">
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span>{cite.source}</span>
                  <span className="font-mono text-amber-400">{cite.year}</span>
                </div>
                <div className="text-slate-400 italic">{cite.reportName}</div>
                <div className="text-slate-500 text-[10px]">Relevance: {cite.relevance}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Pagination Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          {hasPrevLesson ? (
            <button
              onClick={() => setActiveLessonIndex(activeLessonIndex - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Lesson</span>
            </button>
          ) : <div />}

          {hasNextLesson ? (
            <button
              onClick={() => setActiveLessonIndex(activeLessonIndex + 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors cursor-pointer"
            >
              <span>Next Lesson: {module.lessons[activeLessonIndex + 1].titleEn.split(' ')[0]}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onBackToOverview}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              <span>Explore Next Module in Classroom</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
