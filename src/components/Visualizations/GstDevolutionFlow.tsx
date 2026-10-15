import React, { useState } from 'react';
import { Layers, ArrowDown, PieChart, ShieldCheck, DollarSign, Scale, ExternalLink } from 'lucide-react';

export const GstDevolutionFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'devolution' | 'gst'>('devolution');
  const [simulatedGrossTax, setSimulatedGrossTax] = useState(38.0); // Lakh Crores INR (approx Union Budget level)
  const [cessPercentage, setCessPercentage] = useState(18.0); // % of GTR taken as non-shareable Cess & Surcharges

  // Calculations
  const cessDeduction = (simulatedGrossTax * cessPercentage) / 100;
  const divisiblePool = simulatedGrossTax - cessDeduction;
  const statesPool = divisiblePool * 0.41; // 41% 15th FC vertical devolution
  const tnShare = statesPool * 0.04079; // 4.079% horizontal share for TN

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      {/* Header and Sub-Tab Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Fiscal Federalism: Tax Devolution & GST Framework</span>
            <span className="text-xs text-amber-400 font-normal">| மத்திய-மாநில நிதிப் பகிர்வு & ஜி.எஸ்.டி</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Step-by-step waterfall devolution under Article 280 (15th FC) and dual GST mechanics under Article 279A.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('devolution')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'devolution'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            15th FC Devolution Waterfall
          </button>
          <button
            onClick={() => setActiveTab('gst')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'gst'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            GST Architecture (Dual System)
          </button>
        </div>
      </div>

      {activeTab === 'devolution' ? (
        <div className="space-y-6">
          {/* Interactive Simulation Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/70 p-3.5 rounded-lg border border-slate-800 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>Union Gross Tax Revenue (மொத்த வரி வசூல்):</span>
                <span className="font-mono text-amber-400 font-bold tabular-nums">₹{simulatedGrossTax.toFixed(1)} Lakh Cr</span>
              </div>
              <input
                type="range"
                min="25"
                max="50"
                step="0.5"
                value={simulatedGrossTax}
                onChange={(e) => setSimulatedGrossTax(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Corporation Tax, Income Tax, GST, Customs, Excise</span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>Cesses & Surcharges Share (பகிர்வுக்கு உட்படாத கூடுதல் வரி):</span>
                <span className="font-mono text-rose-400 font-bold tabular-nums">{cessPercentage.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="0.5"
                value={cessPercentage}
                onChange={(e) => setCessPercentage(parseFloat(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Retained 100% by Centre under Article 271</span>
            </div>
          </div>

          {/* Devolution Waterfall Visual Pipeline */}
          <div className="space-y-3">
            {/* Step 1: Gross Tax Revenue */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-slate-400 block">Stage 1 · Sovereign Collection</span>
                <span className="text-sm font-semibold text-slate-100">Union Gross Tax Revenue (GTR)</span>
              </div>
              <div className="font-mono text-base font-bold text-amber-400">
                ₹{simulatedGrossTax.toFixed(2)} Lakh Crore
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 text-slate-600" />
            </div>

            {/* Step 2: Cess & Surcharge Non-Shareable Carve-out */}
            <div className="bg-rose-950/20 border border-rose-900/40 rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-rose-400 block">Deduction (Article 270 & 271)</span>
                <span className="text-sm font-semibold text-slate-100">Cesses & Surcharges (Non-Divisible)</span>
                <p className="text-[11px] text-slate-400">Road Cess, Health & Education Cess, Agri-Infra Cess</p>
              </div>
              <div className="font-mono text-base font-bold text-rose-400">
                - ₹{cessDeduction.toFixed(2)} Lakh Crore ({cessPercentage}%)
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 text-slate-600" />
            </div>

            {/* Step 3: Net Divisible Pool */}
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-sky-400 block">Stage 2 · Constitutional Base</span>
                <span className="text-sm font-semibold text-slate-100">Net Divisible Pool of Central Taxes</span>
              </div>
              <div className="font-mono text-lg font-bold text-sky-400">
                ₹{divisiblePool.toFixed(2)} Lakh Crore
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 text-emerald-500" />
            </div>

            {/* Step 4: Vertical Devolution Split (41% States, 59% Centre) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5">
                <span className="text-[11px] text-slate-400 block">Union Share Retained (59%)</span>
                <span className="text-sm font-semibold text-slate-100">Union Government Functions</span>
                <div className="font-mono text-base font-bold text-slate-300 mt-1">
                  ₹{(divisiblePool * 0.59).toFixed(2)} Lakh Crore
                </div>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-700/60 rounded-lg p-3.5">
                <span className="text-[11px] text-emerald-400 block">Vertical Devolution (Article 280)</span>
                <span className="text-sm font-semibold text-slate-100">All 28 States Combined (41%)</span>
                <div className="font-mono text-base font-bold text-emerald-400 mt-1">
                  ₹{statesPool.toFixed(2)} Lakh Crore
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 text-emerald-500" />
            </div>

            {/* Step 5: Horizontal Devolution: Tamil Nadu's Share */}
            <div className="bg-gradient-to-r from-amber-950/40 via-emerald-950/30 to-slate-950 border border-amber-600/50 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded">
                      15th Finance Commission Weight: 4.079%
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-slate-100 mt-1">
                    Tamil Nadu’s Statutory Devolution Allocation
                  </h5>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Calculated using horizontal formula criteria (Income Distance, Population 2011, Area, Ecology, Demographic Performance).
                  </p>
                </div>
                <div className="text-right sm:text-right font-mono">
                  <div className="text-xs text-slate-400">Estimated Annual Transfer:</div>
                  <div className="text-xl font-bold text-amber-400">
                    ₹{tnShare.toFixed(2)} Lakh Crore
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 15th Finance Commission Horizontal Weights Breakdown */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              15th Finance Commission (N.K. Singh) Horizontal Sharing Criteria Weights:
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <span className="block font-bold text-amber-400 text-sm font-mono">45.0%</span>
                <span className="text-slate-300 text-[11px] font-medium">Income Distance</span>
                <span className="text-[10px] text-slate-500 block">வருமான இடைவெளி</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <span className="block font-bold text-sky-400 text-sm font-mono">15.0%</span>
                <span className="text-slate-300 text-[11px] font-medium">2011 Population</span>
                <span className="text-[10px] text-slate-500 block">மக்கள் தொகை</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <span className="block font-bold text-slate-200 text-sm font-mono">15.0%</span>
                <span className="text-slate-300 text-[11px] font-medium">State Area</span>
                <span className="text-[10px] text-slate-500 block">பரப்பளவு</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <span className="block font-bold text-emerald-400 text-sm font-mono">10.0%</span>
                <span className="text-slate-300 text-[11px] font-medium">Forest & Ecology</span>
                <span className="text-[10px] text-slate-500 block">காடுகள் & சூழலியல்</span>
              </div>
              <div className="bg-slate-900 border border-emerald-800/60 p-2.5 rounded-lg">
                <span className="block font-bold text-emerald-300 text-sm font-mono">12.5%</span>
                <span className="text-slate-200 text-[11px] font-medium">Demographic Effort</span>
                <span className="text-[10px] text-emerald-400 block">TFR சாதனை (TN gain)</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                <span className="block font-bold text-purple-400 text-sm font-mono">2.5%</span>
                <span className="text-slate-300 text-[11px] font-medium">Tax Effort</span>
                <span className="text-[10px] text-slate-500 block">வரி வசூல் முயற்சி</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* GST Dual Architecture Tab */
        <div className="space-y-5">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <h5 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Goods & Services Tax (GST) · 101st Constitutional Amendment Act 2016</span>
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Implemented on 1st July 2017 with the doctrine of "One Nation, One Tax". GST subsumed 17 central and state indirect levies (Central Excise Duty, Service Tax, State VAT, Entry Tax, Luxury Tax). It is a destination-based consumption tax.
            </p>
          </div>

          {/* Dual Tax Flow Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
              <div className="font-bold text-amber-400">Intra-State Transactions (மாநிலத்திற்குள்)</div>
              <p className="text-[11px] text-slate-400">
                Split equally 50:50 between Union and State on transaction value:
              </p>
              <div className="space-y-1 font-mono text-[11px] bg-slate-900 p-2 rounded">
                <div className="flex justify-between text-slate-300">
                  <span>CGST (மத்திய சரக்கு சேவை வரி):</span>
                  <span className="text-amber-400">50%</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>SGST (மாநில சரக்கு சேவை வரி):</span>
                  <span className="text-emerald-400">50%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
              <div className="font-bold text-sky-400">Inter-State Transactions (மாநிலங்களுக்கிடையே)</div>
              <p className="text-[11px] text-slate-400">
                Governed by Article 269A. Integrated GST collected by Centre and apportioned:
              </p>
              <div className="space-y-1 font-mono text-[11px] bg-slate-900 p-2 rounded">
                <div className="flex justify-between text-slate-300">
                  <span>IGST = CGST + SGST:</span>
                  <span className="text-sky-400">100% at Border</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Transferred to destination consumption State (Destination Principle).
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
              <div className="font-bold text-emerald-400">GST Council (Article 279A)</div>
              <p className="text-[11px] text-slate-400">
                Constitutional apex decision-making body with federal voting weights:
              </p>
              <div className="space-y-1 font-mono text-[11px] bg-slate-900 p-2 rounded">
                <div className="flex justify-between text-slate-300">
                  <span>Union Govt Weight:</span>
                  <span className="text-amber-400">1/3 (33.3%)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>States Combined Weight:</span>
                  <span className="text-emerald-400">2/3 (66.7%)</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Decisions require 75% weighted majority approval.
                </div>
              </div>
            </div>
          </div>

          {/* Current 4-Tier Rate Slabs */}
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5">
            <h6 className="font-semibold text-slate-200 text-xs mb-2">Current 4-Tier GST Rate Structure:</h6>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                <span className="font-mono font-bold text-slate-200 text-sm block">5% Slab</span>
                <span className="text-[11px] text-slate-400">Tea, spices, life-saving drugs, economy air travel</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                <span className="font-mono font-bold text-slate-200 text-sm block">12% Slab</span>
                <span className="text-[11px] text-slate-400">Butter, processed food, sewing machines, umbrellas</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                <span className="font-mono font-bold text-slate-200 text-sm block">18% Slab</span>
                <span className="text-[11px] text-slate-400">Capital goods, industrial inputs, telecom, IT services</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                <span className="font-mono font-bold text-slate-200 text-sm block">28% + Cess</span>
                <span className="text-[11px] text-slate-400">Automobiles, pan masala, luxury yachts, sin goods</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TNPSC Key Takeaway Strip */}
      <div className="pt-2 border-t border-slate-800 text-xs text-slate-300">
        <span className="font-semibold text-slate-100 block mb-0.5">Tamil Nadu’s Fiscal Federalism Stand:</span>
        <p className="text-[11px] text-slate-400">
          Tamil Nadu contributes significantly to Central Gross Tax Revenue (over ₹1.2 lakh crore annually in direct taxes and customs). In its submissions to the 16th Finance Commission, Tamil Nadu advocates capping non-shareable cesses/surcharges at 10% of gross revenue and restoring state horizontal share to reflect manufacturing value addition and urban infrastructure strain.
        </p>
      </div>
    </div>
  );
};
