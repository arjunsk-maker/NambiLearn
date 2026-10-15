import React, { useState } from 'react';
import { Layers, ArrowRight, BarChart3, TrendingUp, Info } from 'lucide-react';

interface EraData {
  period: string;
  yearLabel: string;
  indiaGva: { agri: number; ind: number; serv: number };
  indiaWorkforce: { agri: number; ind: number; serv: number };
  tnGsdp: { agri: number; ind: number; serv: number };
  narrativeTa: string;
  narrativeEn: string;
}

const ERAS: EraData[] = [
  {
    period: '1950-51',
    yearLabel: 'Post-Independence Agrarian Base',
    indiaGva: { agri: 55, ind: 15, serv: 30 },
    indiaWorkforce: { agri: 72, ind: 10, serv: 18 },
    tnGsdp: { agri: 52, ind: 17, serv: 31 },
    narrativeTa: 'விடுதலை பெற்றபோது இந்தியா மற்றும் தமிழ்நாடு இரண்டுமே பெரும்பான்மையாக விவசாயத்தையே நம்பியிருந்தன. 70%க்கும் அதிகமான மக்கள் விவசாயத்தில் ஈடுபட்டிருந்தனர்.',
    narrativeEn: 'At independence, India was overwhelmingly agrarian. Over 72% of the working population was locked in low-yield subsistence farming, generating 55% of national GDP.'
  },
  {
    period: '1990-91',
    yearLabel: 'Pre-LPG Structural Inflexion',
    indiaGva: { agri: 31, ind: 28, serv: 41 },
    indiaWorkforce: { agri: 61, ind: 16, serv: 23 },
    tnGsdp: { agri: 24, ind: 34, serv: 42 },
    narrativeTa: '1991 பொருளாதார சீர்திருத்தங்களுக்கு முன், தமிழ்நாடு தனது வலுவான ஜவுளி, ஆட்டோமொபைல் மற்றும் தோல் தொழிற்சாலைகள் மூலம் தொழில்துறை உற்பத்தியை 34% ஆக உயர்த்தியிருந்தது.',
    narrativeEn: 'Prior to the 1991 LPG reforms, Tamil Nadu had already engineered an early industrial base, expanding manufacturing in textiles, leather, and auto parts to 34% of GSDP.'
  },
  {
    period: '2023-24',
    yearLabel: 'Current Knowledge & Industrial Era',
    indiaGva: { agri: 17.7, ind: 28.3, serv: 54.0 },
    indiaWorkforce: { agri: 45.8, ind: 25.4, serv: 28.8 },
    tnGsdp: { agri: 11.8, ind: 33.2, serv: 55.0 },
    narrativeTa: 'தற்போது தேசிய அளவில் சேவைத்துறை ஆதிக்கம் செலுத்துகிறது. ஆனால் தமிழ்நாட்டில் 33.2% தொழில்துறை உற்பத்தியும் 55% சேவைத்துறையும் இணைந்து சமநிலையான பொருளாதார அடித்தளத்தை வழங்குகின்றன.',
    narrativeEn: 'India bypassed the typical industrial phase straight into a services-driven economy (~54% GVA). However, Tamil Nadu successfully preserved a massive manufacturing base (~33.2% GSDP).'
  }
];

export const StructuralTransformationDiagram: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(2);
  const era = ERAS[selectedEraIndex];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Structural Transformation: Agriculture to Industry to Services</span>
            <span className="text-xs text-amber-400 font-normal">| துறைசார் கட்டமைப்பு மாற்றம்</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Colin Clark-Fisher structural hypothesis vs India’s leapfrogging trajectory and Tamil Nadu’s industrial resilience.
          </p>
        </div>

        {/* Era selector segmented buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
          {ERAS.map((e, idx) => (
            <button
              key={e.period}
              onClick={() => setSelectedEraIndex(idx)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedEraIndex === idx
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {e.period}
            </button>
          ))}
        </div>
      </div>

      {/* Comparative Charts: India vs Tamil Nadu */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* Panel 1: All India GVA vs Workforce */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-200">All India: GVA vs Employment Disparity</span>
            <span className="font-mono text-amber-400">{era.period}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>GVA Output Share (%):</span>
                <span>Agri: {era.indiaGva.agri}% · Ind: {era.indiaGva.ind}% · Serv: {era.indiaGva.serv}%</span>
              </div>
              <div className="flex h-5 rounded-md overflow-hidden font-mono text-[10px] text-slate-950 font-bold text-center">
                <div style={{ width: `${era.indiaGva.agri}%` }} className="bg-emerald-400 flex items-center justify-center">
                  {era.indiaGva.agri > 12 && `${era.indiaGva.agri}%`}
                </div>
                <div style={{ width: `${era.indiaGva.ind}%` }} className="bg-slate-400 flex items-center justify-center">
                  {era.indiaGva.ind > 12 && `${era.indiaGva.ind}%`}
                </div>
                <div style={{ width: `${era.indiaGva.serv}%` }} className="bg-sky-400 flex items-center justify-center">
                  {era.indiaGva.serv > 12 && `${era.indiaGva.serv}%`}
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Workforce Employment Share (%):</span>
                <span>Agri: {era.indiaWorkforce.agri}% · Ind: {era.indiaWorkforce.ind}% · Serv: {era.indiaWorkforce.serv}%</span>
              </div>
              <div className="flex h-5 rounded-md overflow-hidden font-mono text-[10px] text-slate-950 font-bold text-center">
                <div style={{ width: `${era.indiaWorkforce.agri}%` }} className="bg-emerald-500/80 flex items-center justify-center">
                  {era.indiaWorkforce.agri}%
                </div>
                <div style={{ width: `${era.indiaWorkforce.ind}%` }} className="bg-slate-500 flex items-center justify-center">
                  {era.indiaWorkforce.ind}%
                </div>
                <div style={{ width: `${era.indiaWorkforce.serv}%` }} className="bg-sky-500 flex items-center justify-center">
                  {era.indiaWorkforce.serv}%
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-amber-400 font-medium">The Structural Dilemma:</span> In {era.period}, agriculture accounts for merely {era.indiaGva.agri}% of India’s economic output, yet absorbs {era.indiaWorkforce.agri}% of the labor force, causing disguised unemployment and rural low-income traps.
            </div>
          </div>
        </div>

        {/* Panel 2: Tamil Nadu GSDP Composition */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-200">Tamil Nadu: GSDP Industrial Multiplier</span>
            <span className="font-mono text-emerald-400">{era.period}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Tamil Nadu GSDP Sectoral Share (%):</span>
                <span>Agri: {era.tnGsdp.agri}% · Ind: {era.tnGsdp.ind}% · Serv: {era.tnGsdp.serv}%</span>
              </div>
              <div className="flex h-5 rounded-md overflow-hidden font-mono text-[10px] text-slate-950 font-bold text-center">
                <div style={{ width: `${era.tnGsdp.agri}%` }} className="bg-emerald-400 flex items-center justify-center">
                  {era.tnGsdp.agri}%
                </div>
                <div style={{ width: `${era.tnGsdp.ind}%` }} className="bg-amber-400 flex items-center justify-center">
                  {era.tnGsdp.ind}%
                </div>
                <div style={{ width: `${era.tnGsdp.serv}%` }} className="bg-sky-400 flex items-center justify-center">
                  {era.tnGsdp.serv}%
                </div>
              </div>
            </div>

            {/* Sector Color Legend */}
            <div className="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                Primary (Agri)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
                Secondary (Industry)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-sky-400" />
                Tertiary (Services)
              </span>
            </div>

            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-medium">Tamil Nadu’s Unique Model:</span> Tamil Nadu’s secondary industrial sector contributes {era.tnGsdp.ind}% of GSDP, far above the national average. It hosts ~15.8% of India’s operating factories and generates high-productivity wage employment for women.
            </div>
          </div>
        </div>

      </div>

      {/* Narrative Context */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
        <div className="font-semibold text-slate-200">Historical & Economic Context: {era.yearLabel}</div>
        <p className="text-amber-300/90 leading-relaxed text-[11px]">{era.narrativeTa}</p>
        <p className="text-slate-400 leading-relaxed text-[11px]">{era.narrativeEn}</p>
      </div>
    </div>
  );
};
