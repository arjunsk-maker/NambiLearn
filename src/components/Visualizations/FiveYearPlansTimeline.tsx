import React, { useState } from 'react';
import { Calendar, CheckCircle2, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';

interface PlanDetail {
  number: string;
  years: string;
  model: string;
  target: number;
  achieved: number;
  focus: string;
  focusTa: string;
  achievements: string[];
  status: 'Surpassed Target' | 'Met Target' | 'Underperformed' | 'Interim / Transition';
}

const PLANS_DATA: PlanDetail[] = [
  {
    number: '1st Plan',
    years: '1951 - 1956',
    model: 'Harrod-Domar Growth Model',
    target: 2.1,
    achieved: 3.6,
    focus: 'Agriculture, Irrigation & Price Stability',
    focusTa: 'வேளாண்மை, நீர்ப்பாசனம் மற்றும் விலைக் கட்டுப்பாடு',
    achievements: [
      'Bhakra Nangal, Damodar Valley Corporation, and Hirakud multi-purpose river valley dams commissioned.',
      'Five Indian Institutes of Technology (IITs) initiated.',
      'Target exceeded significantly (3.6% vs 2.1%) due to favourable monsoons.'
    ],
    status: 'Surpassed Target'
  },
  {
    number: '2nd Plan',
    years: '1956 - 1961',
    model: 'P.C. Mahalanobis Model',
    target: 4.5,
    achieved: 4.27,
    focus: 'Rapid Heavy Industrialisation & Public Sector',
    focusTa: 'கனரகத் தொழில்துறை மற்றும் பொதுத்துறை வளர்ச்சி',
    achievements: [
      'Bhilai, Durgapur, and Rourkela integrated steel plants established.',
      '1956 Industrial Policy Resolution (IPR 1956) framed as Economic Constitution.',
      'Atomic Energy Commission established under Homi J. Bhabha.'
    ],
    status: 'Met Target'
  },
  {
    number: '3rd Plan',
    years: '1961 - 1966',
    model: 'Gadgil Yojana (John Sandy & Sukhamoy Chakravarty)',
    target: 5.6,
    achieved: 2.84,
    focus: 'Self-Reliant & Self-Generating Economy',
    focusTa: 'தற்சார்பு மற்றும் நீடித்த தன்னிறைவு',
    achievements: [
      'Severe underperformance due to 1962 Sino-Indian War, 1965 Indo-Pak War, and 1965-66 severe drought.',
      'FCI (Food Corporation of India) and Agricultural Prices Commission (now CACP) created in 1965.',
      'Shifted strategic priority to Defence and Food Security.'
    ],
    status: 'Underperformed'
  },
  {
    number: 'Plan Holidays',
    years: '1966 - 1969',
    model: 'Three Annual Plans (Interim Strategy)',
    target: 5.0,
    achieved: 3.8,
    focus: 'Green Revolution & Devaluation Relief',
    focusTa: 'பசுமைப் புரட்சி மற்றும் ரூபாய் மதிப்பு சரிசெய்தல்',
    achievements: [
      'High Yielding Varieties (HYV) of Mexican wheat introduced under Dr. M.S. Swaminathan.',
      'Rupiya devalued by 36.5% in June 1966 to stimulate stagnant exports.',
      'Annual planning substituted while financial stability was regained.'
    ],
    status: 'Interim / Transition'
  },
  {
    number: '4th Plan',
    years: '1969 - 1974',
    model: 'Ashok Rudra & Alok Manne Framework',
    target: 5.7,
    achieved: 3.3,
    focus: 'Growth with Stability & Progressive Self-Reliance',
    focusTa: 'நிலையான வளர்ச்சி மற்றும் தற்சார்பு',
    achievements: [
      '14 Major Commercial Banks nationalised in July 1969.',
      '1971 Indo-Pak War for liberation of Bangladesh and influx of refugees.',
      'Smiling Buddha underground nuclear test conducted at Pokhran (1974).'
    ],
    status: 'Underperformed'
  },
  {
    number: '5th Plan',
    years: '1974 - 1979',
    model: 'D.D. Dhar Draft Plan',
    target: 4.4,
    achieved: 4.8,
    focus: 'Garibi Hatao (Poverty Removal) & Self-Reliance',
    focusTa: 'வறுமை ஒழிப்பு மற்றும் சுயசார்பு',
    achievements: [
      'Twenty-Point Programme (20-Point Programme) launched in 1975.',
      'Minimum Needs Programme (MNP) introduced.',
      'Janata Party government terminated this plan in 1977-78 one year ahead of schedule.'
    ],
    status: 'Surpassed Target'
  },
  {
    number: 'Rolling Plan',
    years: '1978 - 1980',
    model: 'Janata Party (Prof. Gunnar Myrdal Concept)',
    target: 4.7,
    achieved: 3.2,
    focus: 'Employment & Cottage Industries',
    focusTa: 'வேலைவாய்ப்பு மற்றும் குடிசைத் தொழில்கள்',
    achievements: [
      'Three separate plans running concurrently: current budget, 3-5 year plan, 10-15 year perspective.',
      'Terminated when Congress returned to power in 1980.'
    ],
    status: 'Interim / Transition'
  },
  {
    number: '6th Plan',
    years: '1980 - 1985',
    model: 'Investment Planning (Input-Output Model)',
    target: 5.2,
    achieved: 5.7,
    focus: 'Direct Attack on Poverty & Modernisation',
    focusTa: 'நேரடி வறுமை ஒழிப்பு மற்றும் நவீனமயமாக்கல்',
    achievements: [
      'National Bank for Agriculture and Rural Development (NABARD) established on July 12, 1982 (B. Sivaraman Committee).',
      'EXIM Bank established in 1982.',
      'Integrated Rural Development Programme (IRDP) expanded nationwide.'
    ],
    status: 'Surpassed Target'
  },
  {
    number: '7th Plan',
    years: '1985 - 1990',
    model: 'Pranab Mukherjee Strategy (Food, Work, Productivity)',
    target: 5.0,
    achieved: 6.01,
    focus: 'Food Grain Production & Employment Generation',
    focusTa: 'உணவு தானிய உற்பத்தி மற்றும் வேலைவாய்ப்பு',
    achievements: [
      'Jawahar Rozgar Yojana (JRY) launched in 1989.',
      'For the first time, private sector outlay exceeded public sector outlay.',
      'Speedy development of electronics, telecom and computer technology.'
    ],
    status: 'Surpassed Target'
  },
  {
    number: 'Annual Plans',
    years: '1990 - 1992',
    model: 'BOP Crisis Management & LPG Transition',
    target: 5.6,
    achieved: 3.4,
    focus: 'Structural Adjustment & Macroeconomic Stabilisation',
    focusTa: 'கட்டமைப்பு மாற்றம் மற்றும் தாராளமயமாக்கல்',
    achievements: [
      'New Economic Policy (LPG: Liberalisation, Privatisation, Globalisation) unveiled in July 1991.',
      'Rupiya devalued; gold pledged to Bank of England for emergency forex.',
      'Licence Raj dismantled.'
    ],
    status: 'Interim / Transition'
  },
  {
    number: '8th Plan',
    years: '1992 - 1997',
    model: 'Rao-Manmohan Model (Indicative Planning)',
    target: 5.6,
    achieved: 6.8,
    focus: 'Human Resource Development & Indicative Planning',
    focusTa: 'மனிதவள மேம்பாடு மற்றும் தனியார் கூட்டாண்மை',
    achievements: [
      'India joined World Trade Organisation (WTO) on January 1, 1995.',
      'Substantial recovery of Foreign Exchange Reserves and export resurgence.',
      'Transition from state command directives to indicative market facilitation.'
    ],
    status: 'Surpassed Target'
  },
  {
    number: '9th Plan',
    years: '1997 - 2002',
    model: 'Growth with Social Justice & Equity',
    target: 6.5,
    achieved: 5.35,
    focus: 'Quality of Life & Decentralisation',
    focusTa: 'சமூக நீதி மற்றும் சமத்துவத்துடன் கூடிய வளர்ச்சி',
    achievements: [
      'Implemented during 50th year of Indian Independence.',
      'Panchayati Raj Institutions (PRIs) formally integrated into district planning.',
      'Affected by Asian Financial Crisis (1997) and Pokhran II sanctions (1998).'
    ],
    status: 'Underperformed'
  },
  {
    number: '10th Plan',
    years: '2002 - 2007',
    model: 'Monitorable Targets Approach',
    target: 8.0,
    achieved: 7.6,
    focus: 'Doubling Per Capita Income in 10 Years',
    focusTa: '10 ஆண்டுகளில் தனிநபர் வருமானத்தை இரட்டிப்பாக்குதல்',
    achievements: [
      'Set 8 monitorable targets for governance, education, and infant mortality.',
      'Sarva Shiksha Abhiyan (SSA) accelerated nationwide.',
      'National Rural Employment Guarantee Act (NREGA) enacted in 2005.'
    ],
    status: 'Met Target'
  },
  {
    number: '11th Plan',
    years: '2007 - 2012',
    model: 'Dr. C. Rangarajan Steering Committee',
    target: 9.0,
    achieved: 8.0,
    focus: 'Towards Faster and More Inclusive Growth',
    focusTa: 'விரைவான மற்றும் அனைவரையும் உள்ளடக்கிய வளர்ச்சி',
    achievements: [
      'Surpassed previous investment benchmarks despite 2008 Global Financial Crisis.',
      'Right to Education (RTE) Act enacted in 2009.',
      'National Rural Health Mission (NRHM) and Aadhar unique identity rolled out.'
    ],
    status: 'Met Target'
  },
  {
    number: '12th Plan',
    years: '2012 - 2017',
    model: 'Last Five-Year Plan of India',
    target: 8.0,
    achieved: 7.0,
    focus: 'Faster, Sustainable and More Inclusive Growth',
    focusTa: 'விரைவான, நிலையான மற்றும் அனைவரையும் உள்ளடக்கிய வளர்ச்சி',
    achievements: [
      'Focus on environmental sustainability and carbon intensity reduction.',
      'Planning Commission dissolved by Cabinet Resolution in August 2014.',
      'NITI Aayog officially constituted on 1st January 2015, phasing out Five-Year Plans.'
    ],
    status: 'Met Target'
  }
];

export const FiveYearPlansTimeline: React.FC = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);
  const plan = PLANS_DATA[selectedPlanIndex];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Historical Five-Year Plans & Target vs Actual Ledger</span>
            <span className="text-xs text-amber-400 font-normal">| ஐந்தாண்டுத் திட்டங்களின் வரலாறு (1951-2017)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Click any plan to inspect the economic growth model, core architect, targets vs actual growth, and institutional legacy.
          </p>
        </div>
      </div>

      {/* Interactive Horizontal Scroll Timeline Bar */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-[780px] p-1 bg-slate-950 rounded-lg border border-slate-800">
          {PLANS_DATA.map((p, idx) => (
            <button
              key={p.number}
              onClick={() => setSelectedPlanIndex(idx)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedPlanIndex === idx
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {p.number}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Plan Deep Dive Panel */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-5">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span className="text-amber-400 font-bold">{plan.years}</span>
              <span>·</span>
              <span>Model: <strong className="text-slate-200">{plan.model}</strong></span>
            </div>
            <h5 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>{plan.number}: {plan.focus}</span>
            </h5>
            <p className="text-xs text-amber-300/90 mt-0.5">{plan.focusTa}</p>
          </div>

          {/* Performance Pill */}
          <div className="shrink-0">
            <span
              className={`px-3 py-1 rounded text-xs font-semibold ${
                plan.status === 'Surpassed Target'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  : plan.status === 'Met Target'
                  ? 'bg-sky-950 text-sky-300 border border-sky-800'
                  : plan.status === 'Underperformed'
                  ? 'bg-rose-950 text-rose-300 border border-rose-800'
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}
            >
              {plan.status}
            </span>
          </div>
        </div>

        {/* Target vs Achieved Growth Bar Comparison */}
        <div className="space-y-3 bg-slate-900 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-semibold text-slate-300">Annualised Real GDP Growth Rate:</div>
          
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Target Growth Rate (இலக்கு):</span>
                <span className="font-mono text-slate-200">{plan.target}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (plan.target / 10) * 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Achieved Growth Rate (அடைந்தது):</span>
                <span className="font-mono font-bold text-emerald-400">{plan.achieved}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    plan.achieved >= plan.target ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${Math.min(100, (plan.achieved / 10) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Achievements */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Key Institutional Milestones & Historical Context:
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {plan.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NITI Aayog Paradigm Shift Summary */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
        <span className="font-semibold text-slate-100 block">
          Institutional Transition: Planning Commission (1950) vs NITI Aayog (2015):
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-[11px]">
          <div>
            <strong className="text-slate-300">Planning Commission:</strong> Top-down centralized planning; had statutory financial allocation power to award plan assistance to States under Gadgil-Mukherjee formula.
          </div>
          <div>
            <strong className="text-slate-300">NITI Aayog:</strong> Think-tank institution built on Cooperative & Competitive Federalism; no fund allocation authority; Governing Council comprises all Chief Ministers and Lt. Governors.
          </div>
        </div>
      </div>
    </div>
  );
};
