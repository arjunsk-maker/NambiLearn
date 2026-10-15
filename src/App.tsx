import React, { useState, useEffect } from 'react';
import { MODULES_DATA } from './data/modulesData';
import { ModuleId } from './types/curriculum';
import { TopNavbar } from './components/Navigation/TopNavbar';
import { LandingOverview } from './components/Home/LandingOverview';
import { ModuleView } from './components/Modules/ModuleView';
import { MuseumExhibitView } from './components/ThreeD/MuseumExhibitView';
import { Footer } from './components/Navigation/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<ModuleId | 'overview' | 'museum-3d'>('overview');
  const [lang, setLang] = useState<'ta' | 'en'>('ta');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const activeModule = MODULES_DATA.find((m) => m.id === activeView);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1324] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navbar Contract */}
      <TopNavbar
        activeModuleId={activeView}
        onNavigate={(target) => setActiveView(target)}
        lang={lang}
        onToggleLang={() => setLang(lang === 'ta' ? 'en' : 'ta')}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeView === 'overview' && (
          <LandingOverview
            onSelectModule={(id) => setActiveView(id)}
            onOpenMuseum3D={() => setActiveView('museum-3d')}
            lang={lang}
          />
        )}

        {activeView === 'museum-3d' && (
          <MuseumExhibitView
            onBackToClassroom={() => setActiveView('overview')}
            onJumpToModule={(id) => setActiveView(id)}
          />
        )}

        {activeModule && (
          <ModuleView
            module={activeModule}
            onBackToOverview={() => setActiveView('overview')}
            onNavigateModule={(id) => setActiveView(id)}
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(target) => setActiveView(target)} />
    </div>
  );
}
