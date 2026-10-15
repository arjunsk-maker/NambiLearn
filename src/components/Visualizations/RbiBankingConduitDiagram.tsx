import React, { useState } from 'react';
import { Landmark, ArrowDown, ArrowUp, ShieldCheck, Activity, Coins, Percent } from 'lucide-react';

export const RbiBankingConduitDiagram: React.FC = () => {
  const [repoRate, setRepoRate] = useState(6.5);
  const [crrRate, setCrrRate] = useState(4.5);
  const [slrRate, setSlrRate] = useState(18.0);

  // Derived economic transmission indicators
  const baseLendingRate = repoRate + 2.75; // Approx EBLR/MCLR spread
  const lendableDepositFraction = Math.max(50, 100 - crrRate - slrRate);
  const inflationPressure = Math.max(2.5, 9.5 - repoRate * 0.9);
  const growthMomentum = Math.min(8.5, 4.2 + (8.5 - repoRate) * 0.8);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Reserve Bank of India & Liquidity Transmission Conduit</span>
            <span className="text-xs text-amber-400 font-normal">| இந்திய ரிசர்வ் வங்கி & பணவியல் பரிமாற்றம்</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive monetary policy simulator: How RBI policy rates transmit through Scheduled Commercial Banks into retail credit.
          </p>
        </div>
      </div>

      {/* Interactive Quantitative Monetary Policy Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs">
        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>Repo Rate (ரெப்போ விகிதம்):</span>
            <span className="font-mono text-amber-400 font-bold tabular-nums">{repoRate.toFixed(2)}%</span>
          </div>
          <input
            type="range"
            min="4.0"
            max="8.5"
            step="0.25"
            value={repoRate}
            onChange={(e) => setRepoRate(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <span className="text-[10px] text-slate-500 block">Rate RBI charges commercial banks</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>CRR - Cash Reserve (ரொக்க இருப்பு):</span>
            <span className="font-mono text-emerald-400 font-bold tabular-nums">{crrRate.toFixed(2)}%</span>
          </div>
          <input
            type="range"
            min="3.0"
            max="6.0"
            step="0.25"
            value={crrRate}
            onChange={(e) => setCrrRate(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <span className="text-[10px] text-slate-500 block">Bank deposits parked as unremunerated cash in RBI</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-slate-300">
            <span>SLR - Statutory Liquidity (நீர்மை விகிதம்):</span>
            <span className="font-mono text-sky-400 font-bold tabular-nums">{slrRate.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="15.0"
            max="25.0"
            step="0.5"
            value={slrRate}
            onChange={(e) => setSlrRate(parseFloat(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
          <span className="text-[10px] text-slate-500 block">Maintained in Gold & Govt Securities (G-Secs)</span>
        </div>
      </div>

      {/* Visual Hierarchy Diagram */}
      <div className="relative bg-slate-950/80 rounded-lg border border-slate-800 p-5 space-y-6">
        
        {/* Tier 1: RBI Apex Node */}
        <div className="max-w-md mx-auto bg-slate-900 border-2 border-amber-500/60 rounded-xl p-4 shadow-xl text-center relative">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-amber-500/10 text-amber-400 mb-2">
            <Landmark className="w-5 h-5" />
          </div>
          <h5 className="font-bold text-slate-100 text-sm">RESERVE BANK OF INDIA (மத்திய வங்கி)</h5>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Hilton Young Commission 1926 · RBI Act 1934 · Nationalized 1 Jan 1949
          </div>
          <div className="mt-2 flex items-center justify-center gap-3 text-xs">
            <span className="bg-amber-950/80 text-amber-300 border border-amber-800/60 px-2 py-0.5 rounded font-mono">
              Policy Repo: {repoRate.toFixed(2)}%
            </span>
            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
              Standing Deposit (SDF): {(repoRate - 0.25).toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Transmission Conduit Pipes (Animated Visual Arrows) */}
        <div className="flex justify-center items-center gap-8 text-xs text-slate-400">
          <div className="flex flex-col items-center">
            <div className="h-6 w-0.5 bg-amber-500/50" />
            <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-amber-300">
              Liquidity Adjustment Facility (LAF)
            </div>
            <div className="h-6 w-0.5 bg-amber-500/50" />
          </div>
        </div>

        {/* Tier 2: Scheduled Commercial Banks (Public, Private, Foreign, RRB) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs space-y-2">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Statutory Reserve Vault</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Locked out of credit circulation to safeguard depositor confidence:
            </div>
            <div className="space-y-1 font-mono text-[11px]">
              <div className="flex justify-between text-emerald-400">
                <span>CRR (Cash at RBI):</span>
                <span>{crrRate}%</span>
              </div>
              <div className="flex justify-between text-sky-400">
                <span>SLR (G-Secs/Gold):</span>
                <span>{slrRate}%</span>
              </div>
              <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-1 font-bold">
                <span>Total Pre-emption:</span>
                <span>{(crrRate + slrRate).toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs space-y-2">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>Available Loanable Pool</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Portion of Net Demand and Time Liabilities (NDTL) available for lending:
            </div>
            <div className="font-mono text-lg font-bold text-emerald-400 text-center py-1">
              {lendableDepositFraction.toFixed(1)}% of Deposits
            </div>
            <div className="text-[10px] text-slate-500 text-center">
              40% mandated for Priority Sector Lending (PSL)
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs space-y-2">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-sky-400" />
              <span>Retail Benchmark Rate</span>
            </div>
            <div className="text-[11px] text-slate-400">
              External Benchmark Lending Rate (EBLR) for housing, auto, and MSME loans:
            </div>
            <div className="font-mono text-lg font-bold text-sky-400 text-center py-1">
              ~{baseLendingRate.toFixed(2)}% p.a.
            </div>
            <div className="text-[10px] text-slate-500 text-center">
              Spread = {repoRate.toFixed(2)}% Repo + 2.75% Bank Margin
            </div>
          </div>
        </div>

        {/* Tier 3: Macroeconomic Outcome Gauge */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${repoRate >= 6.5 ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'}`}>
              <Percent className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-400 text-[11px]">Headline CPI Inflation Pressure:</div>
              <div className="font-bold text-slate-200 text-sm font-mono">
                ~{inflationPressure.toFixed(1)}% (Target: 4% ± 2%)
              </div>
              <div className="text-[10px] text-slate-500">
                {repoRate >= 6.5 ? 'Contractionary stance reining in price rises' : 'Accommodative stance with liquidity expansion'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-950 text-sky-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-400 text-[11px]">Real GDP Growth Momentum:</div>
              <div className="font-bold text-slate-200 text-sm font-mono">
                ~{growthMomentum.toFixed(1)}% Projected
              </div>
              <div className="text-[10px] text-slate-500">
                Balanced between credit availability and corporate capital expenditure
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TNPSC Key Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs text-slate-300">
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">Urjit Patel Committee & MPC (2016):</span>
          <p className="text-[11px] text-slate-400">
            Replaced single-governor discretion with a 6-member Monetary Policy Committee (3 RBI members + 3 Govt nominees). Decisions are by majority vote, with Governor holding casting vote in tiebreaks.
          </p>
        </div>
        <div>
          <span className="font-semibold text-slate-100 block mb-0.5">Priority Sector Lending (PSL) in Tamil Nadu:</span>
          <p className="text-[11px] text-slate-400">
            Commercial banks must allocate 40% of Adjusted Net Bank Credit (ANBC) to agriculture, micro-enterprises, and education. Tamil Nadu consistently surpasses PSL targets via its extensive cooperative banking network.
          </p>
        </div>
      </div>
    </div>
  );
};
