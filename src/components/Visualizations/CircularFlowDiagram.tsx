import React, { useState } from 'react';
import { ArrowRight, DollarSign, Building2, User, Landmark, Globe } from 'lucide-react';

export const CircularFlowDiagram: React.FC = () => {
  const [govtSpending, setGovtSpending] = useState(35); // in % scale
  const [taxRate, setTaxRate] = useState(25);
  const [includeExternal, setIncludeExternal] = useState(true);

  // Dynamic calculations
  const netInjection = govtSpending - taxRate;
  const flowVelocity = Math.max(1, (govtSpending + 50) / 30);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Circular Flow of Income & National Accounts</span>
            <span className="text-xs text-amber-400 font-normal">| வருமான வட்ட ஓட்ட வரைபடம்</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Real factors of production loop (inner) and monetary compensation loop (outer) with fiscal injections.
          </p>
        </div>
        
        {/* Interactive parameter toggles */}
        <div className="flex items-center gap-4 text-xs">
          <label className="flex items-center gap-1.5 text-slate-300">
            <input
              type="checkbox"
              checked={includeExternal}
              onChange={(e) => setIncludeExternal(e.target.checked)}
              className="accent-emerald-500 rounded cursor-pointer"
            />
            <span>Include Foreign Sector (Exports/Imports)</span>
          </label>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 text-xs">
        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>Government Public Expenditure (Injections / அரசுச் செலவு):</span>
            <span className="font-mono text-emerald-400 tabular-nums">{govtSpending}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value={govtSpending}
            onChange={(e) => setGovtSpending(parseInt(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>Direct & Indirect Tax Leakage (வரி வருவாய்):</span>
            <span className="font-mono text-amber-400 tabular-nums">{taxRate}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            value={taxRate}
            onChange={(e) => setTaxRate(parseInt(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>
      </div>

      {/* SVG Canvas for Circular Flow */}
      <div className="relative w-full h-[360px] bg-slate-950/80 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 680 340" className="w-full h-full">
          <defs>
            <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
            </marker>
            <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
            <marker id="arrow-sky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
          </defs>

          {/* Central Connecting Injections (Government & Financial System) */}
          <g transform="translate(340, 170)">
            <rect x="-85" y="-45" width="170" height="90" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
            <text x="0" y="-18" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="600">GOVERNMENT & TREASURY</text>
            <text x="0" y="-2" textAnchor="middle" fill="#94a3b8" fontSize="10">அரசு & நிதித்துறை</text>
            <text x="0" y="16" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
              Net Impact: {netInjection >= 0 ? `+${netInjection}% Stimulus` : `${netInjection}% Contraction`}
            </text>
          </g>

          {/* Left Node: Households (Consumers & Factors) */}
          <g transform="translate(110, 170)">
            <rect x="-80" y="-55" width="160" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="0" cy="-24" r="16" fill="#10b981" fillOpacity="0.2" />
            <text x="0" y="-20" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">HOUSEHOLDS</text>
            <text x="0" y="2" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">குடும்பங்கள்</text>
            <text x="0" y="20" textAnchor="middle" fill="#94a3b8" fontSize="9">Supply: Land, Labor, Capital</text>
            <text x="0" y="34" textAnchor="middle" fill="#94a3b8" fontSize="9">Receive: Wages, Rent, Profit</text>
          </g>

          {/* Right Node: Businesses & Producers */}
          <g transform="translate(570, 170)">
            <rect x="-80" y="-55" width="160" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="0" cy="-24" r="16" fill="#f59e0b" fillOpacity="0.2" />
            <text x="0" y="-20" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">PRODUCERS</text>
            <text x="0" y="2" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">உற்பத்தி நிறுவனங்கள்</text>
            <text x="0" y="20" textAnchor="middle" fill="#94a3b8" fontSize="9">Supply: Goods & Services</text>
            <text x="0" y="34" textAnchor="middle" fill="#94a3b8" fontSize="9">Pay: Factors of Production</text>
          </g>

          {/* Top Outer Arch: Goods & Services / Consumption Spending */}
          <path
            d="M 170 135 C 240 50, 440 50, 510 135"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeDasharray="6,4"
            markerEnd="url(#arrow-gold)"
          />
          <text x="340" y="45" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">
            CONSUMPTION EXPENDITURE (C) · நுகர்வுச் செலவு
          </text>

          {/* Bottom Outer Arch: Factor Markets (Wages, Interest, Rent) */}
          <path
            d="M 510 205 C 440 290, 240 290, 170 205"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="6,4"
            markerEnd="url(#arrow-emerald)"
          />
          <text x="340" y="295" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">
            FACTOR PAYMENTS (Wages, Rent, Profit) · காரணிக் கொடுப்பனவுகள்
          </text>

          {/* Government Inflows & Outflows */}
          {/* Tax from Households */}
          <path d="M 180 160 L 255 160" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-gold)" />
          <text x="217" y="150" textAnchor="middle" fill="#cbd5e1" fontSize="9">Taxes ({taxRate}%)</text>

          {/* Govt transfers to Households */}
          <path d="M 255 180 L 180 180" stroke="#10b981" strokeWidth="1.8" markerEnd="url(#arrow-emerald)" />
          <text x="217" y="196" textAnchor="middle" fill="#10b981" fontSize="9">Welfare/Subsidies</text>

          {/* Taxes from Firms */}
          <path d="M 500 160 L 425 160" stroke="#f59e0b" strokeWidth="1.8" markerEnd="url(#arrow-gold)" />
          <text x="462" y="150" textAnchor="middle" fill="#cbd5e1" fontSize="9">Corporate Tax</text>

          {/* Govt procurement from Firms */}
          <path d="M 425 180 L 500 180" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrow-sky)" />
          <text x="462" y="196" textAnchor="middle" fill="#38bdf8" fontSize="9">Govt Purchases ({govtSpending}%)</text>

          {/* External Sector if toggled */}
          {includeExternal && (
            <g transform="translate(340, 20)">
              <rect x="-65" y="-14" width="130" height="28" rx="4" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="600">
                EXPORTS (X) - IMPORTS (M)
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* TNPSC Concept Explanatory Pill-Free Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-slate-800 text-xs text-slate-300">
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">National Income Identity:</span>
          <span className="font-mono text-slate-400">Y = C + I + G + (X - M)</span>
          <p className="text-[11px] text-slate-400 mt-1">
            GDP combines Household Consumption (C), Private Investment (I), Government Purchases (G), and Net Exports (X - M).
          </p>
        </div>
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">Leakages vs Injections:</span>
          <p className="text-[11px] text-slate-400">
            Leakages = Savings (S) + Taxes (T) + Imports (M). Injections = Investment (I) + Government Spending (G) + Exports (X). Equilibrium occurs when Leakages = Injections.
          </p>
        </div>
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">Tamil Nadu Fiscal Dynamic:</span>
          <p className="text-[11px] text-slate-400">
            Tamil Nadu recycles tax revenue heavily into human capital transfers (Pudhumai Penn, Breakfast scheme), multiplying household purchasing power.
          </p>
        </div>
      </div>
    </div>
  );
};
