import React, { useState } from 'react';
import { TrendingUp, Percent, Tag, ShieldAlert } from 'lucide-react';

export const SupplyDemandPolicyGraph: React.FC = () => {
  const [taxRate, setTaxRate] = useState(18); // GST % rate
  const [subsidy, setSubsidy] = useState(0); // Agrarian subsidy %
  const [demandShift, setDemandShift] = useState(0); // Demand shock

  // Equilibrium mathematics
  // Base Demand: P = 100 - Q + demandShift
  // Base Supply: P = 20 + Q + taxRate - subsidy
  // Equilibrium without intervention: 100 - Q = 20 + Q => 2Q = 80 => Q = 40, P = 60
  // With tax & subsidy: 100 - Q + demandShift = 20 + Q + (taxRate - subsidy)
  // 2Q = 80 + demandShift - (taxRate - subsidy)
  const netTaxSpread = taxRate - subsidy;
  const qEquilibrium = Math.max(10, Math.min(80, (80 + demandShift - netTaxSpread) / 2));
  const pBuyer = 100 - qEquilibrium + demandShift;
  const pSeller = pBuyer - netTaxSpread;

  // Coordinate scales for SVG (viewBox 0 0 500 320)
  // Origin (60, 260), Width 400, Height 220
  const scaleX = (q: number) => 60 + (q / 100) * 400;
  const scaleY = (p: number) => 260 - (p / 120) * 220;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Fiscal Incidence & Market Equilibrium Graph</span>
            <span className="text-xs text-amber-400 font-normal">| சந்தை சமநிலை & வரிவிதிப்பு தாக்கம்</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive microeconomic mechanics: GST tax wedge, farm input subsidies, and consumer surplus shifts.
          </p>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs">
        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>GST Slab Rate (சரக்கு சேவை வரி):</span>
            <span className="font-mono text-amber-400 tabular-nums">{taxRate}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="28"
            step="1"
            value={taxRate}
            onChange={(e) => setTaxRate(parseInt(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>0% (Exempt)</span>
            <span>5%</span>
            <span>12%</span>
            <span>18%</span>
            <span>28% (Luxury)</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>Agro/Fertilizer Subsidy (மானியம்):</span>
            <span className="font-mono text-emerald-400 tabular-nums">{subsidy}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={subsidy}
            onChange={(e) => setSubsidy(parseInt(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>No Subsidy</span>
            <span>10% Power Subsidy</span>
            <span>20% Direct Benefit</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>Consumer Demand Shift (வாங்கு திறன்):</span>
            <span className="font-mono text-sky-400 tabular-nums">{demandShift > 0 ? `+${demandShift}` : demandShift}</span>
          </div>
          <input
            type="range"
            min="-15"
            max="15"
            step="1"
            value={demandShift}
            onChange={(e) => setDemandShift(parseInt(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Contraction</span>
            <span>Baseline</span>
            <span>Stimulus Expansion</span>
          </div>
        </div>
      </div>

      {/* Interactive SVG Chart */}
      <div className="relative w-full h-[340px] bg-slate-950/90 rounded-lg border border-slate-800 flex items-center justify-center">
        <svg viewBox="0 0 520 300" className="w-full h-full">
          {/* Grid lines */}
          <line x1="60" y1="260" x2="480" y2="260" stroke="#334155" strokeWidth="1.5" />
          <line x1="60" y1="20" x2="60" y2="260" stroke="#334155" strokeWidth="1.5" />

          {/* Axis Labels */}
          <text x="475" y="280" fill="#94a3b8" fontSize="11" textAnchor="end">Quantity (Q) · உற்பத்தி அளவு</text>
          <text x="50" y="30" fill="#94a3b8" fontSize="11" textAnchor="end" transform="rotate(-90, 50, 30)">
            Price (P) · விலை
          </text>

          {/* Baseline Supply Curve (dashed) */}
          <line
            x1={scaleX(0)}
            y1={scaleY(20)}
            x2={scaleX(80)}
            y2={scaleY(100)}
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x={scaleX(80) + 5} y={scaleY(100)} fill="#64748b" fontSize="10">S₀ (Base Supply)</text>

          {/* Active Supply Curve (shifted by Tax - Subsidy) */}
          <line
            x1={scaleX(0)}
            y1={scaleY(20 + netTaxSpread)}
            x2={scaleX(80)}
            y2={scaleY(100 + netTaxSpread)}
            stroke="#10b981"
            strokeWidth="2.5"
          />
          <text x={scaleX(80) + 5} y={scaleY(100 + netTaxSpread)} fill="#10b981" fontSize="11" fontWeight="bold">
            S₁ (Supply + Tax/Subsidy)
          </text>

          {/* Active Demand Curve */}
          <line
            x1={scaleX(10)}
            y1={scaleY(90 + demandShift)}
            x2={scaleX(85)}
            y2={scaleY(15 + demandShift)}
            stroke="#38bdf8"
            strokeWidth="2.5"
          />
          <text x={scaleX(85) + 5} y={scaleY(15 + demandShift)} fill="#38bdf8" fontSize="11" fontWeight="bold">
            D (Market Demand)
          </text>

          {/* Equilibrium Projections */}
          <line
            x1={scaleX(qEquilibrium)}
            y1={scaleY(pBuyer)}
            x2={scaleX(qEquilibrium)}
            y2="260"
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeDasharray="3,3"
          />
          <line
            x1="60"
            y1={scaleY(pBuyer)}
            x2={scaleX(qEquilibrium)}
            y2={scaleY(pBuyer)}
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeDasharray="3,3"
          />

          {/* Equilibrium Point Marker */}
          <circle cx={scaleX(qEquilibrium)} cy={scaleY(pBuyer)} r="6" fill="#f59e0b" />
          <circle cx={scaleX(qEquilibrium)} cy={scaleY(pBuyer)} r="10" fill="#f59e0b" fillOpacity="0.25" />

          {/* Tax Wedge Area */}
          {taxRate > 0 && (
            <rect
              x={scaleX(qEquilibrium) - 3}
              y={scaleY(pBuyer)}
              width="6"
              height={Math.max(2, scaleY(pSeller) - scaleY(pBuyer))}
              fill="#f59e0b"
              fillOpacity="0.8"
            />
          )}

          {/* Values on Axes */}
          <text x="50" y={scaleY(pBuyer) + 4} fill="#f59e0b" fontSize="10" textAnchor="end" fontFamily="monospace">
            P*={pBuyer.toFixed(1)}
          </text>
          <text x={scaleX(qEquilibrium)} y="275" fill="#f59e0b" fontSize="10" textAnchor="middle" fontFamily="monospace">
            Q*={qEquilibrium.toFixed(1)}
          </text>
        </svg>

        {/* Live Metrics Floating Overlay */}
        <div className="absolute top-3 right-3 bg-slate-900/90 border border-slate-700/70 rounded-lg p-2.5 text-[11px] space-y-1 shadow-xl">
          <div className="text-slate-400">Market Equilibrium:</div>
          <div className="flex justify-between gap-4 font-mono">
            <span className="text-slate-300">Consumer Price:</span>
            <span className="text-amber-400 font-bold">₹{pBuyer.toFixed(1)}</span>
          </div>
          <div className="flex justify-between gap-4 font-mono">
            <span className="text-slate-300">Producer Net:</span>
            <span className="text-emerald-400 font-bold">₹{pSeller.toFixed(1)}</span>
          </div>
          <div className="flex justify-between gap-4 font-mono">
            <span className="text-slate-300">Tax Wedge:</span>
            <span className="text-slate-200">₹{netTaxSpread}</span>
          </div>
        </div>
      </div>

      {/* TNPSC Syllabus Insight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs text-slate-300">
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">Tax Incidence on Inelastic Goods:</span>
          <p className="text-[11px] text-slate-400">
            For essential goods (fuel, electricity, grain) with inelastic demand, consumers bear the major burden of indirect taxes. This is why food grains and essential farm inputs in Tamil Nadu are exempted under GST (0% slab).
          </p>
        </div>
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">Free Power & Farm Subsidies in TN:</span>
          <p className="text-[11px] text-slate-400">
            Tamil Nadu pioneers free agricultural electricity to over 23 lakh farm connections, shifting the farmer supply curve rightward and preventing rural agrarian distress.
          </p>
        </div>
      </div>
    </div>
  );
};
