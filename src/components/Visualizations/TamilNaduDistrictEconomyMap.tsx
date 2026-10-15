import React, { useState } from 'react';
import { MapPin, Factory, Cpu, Anchor, Wind, Wheat, Sparkles } from 'lucide-react';

interface ClusterInfo {
  id: string;
  name: string;
  nameTa: string;
  category: 'auto' | 'textile' | 'agro' | 'ports' | 'energy' | 'hardware';
  districts: string[];
  keySpeciality: string;
  tnpscSignificance: string;
  metrics: string;
  cx: number;
  cy: number;
}

const CLUSTERS: ClusterInfo[] = [
  {
    id: 'chennai-auto-it',
    name: 'Chennai-Sriperumbudur Mega Corridor',
    nameTa: 'சென்னை-ஸ்ரீபெரும்புதூர் தொழில் பெருவழித்தடம்',
    category: 'auto',
    districts: ['Chennai', 'Kanchipuram', 'Tiruvallur', 'Chengalpattu'],
    keySpeciality: 'Automotive & Electronics Assembly (Detroit of South Asia)',
    tnpscSignificance: 'Accounts for >35% of India’s four-wheelers and ~33% of India’s electronics exports. Major hubs: Hyundai, BMW, Foxconn, Pegatron, Renault-Nissan.',
    metrics: 'Rank 1 in India Electronics Exports ($7.37B in 2023-24)',
    cx: 410,
    cy: 70
  },
  {
    id: 'hosur-ev',
    name: 'Hosur-Krishnagiri EV & Aerospace Valley',
    nameTa: 'ஓசூர்-கிருஷ்ணகிரி மின்சார வாகன மண்டலம்',
    category: 'hardware',
    districts: ['Krishnagiri', 'Dharmapuri'],
    keySpeciality: 'Electric Vehicles (EV) & Precision Engineering',
    tnpscSignificance: 'Global hub for Electric Two-Wheelers (Ola Electric Mega Factory, Ather Energy, TVS Motor). Part of Tamil Nadu Defence Industrial Corridor.',
    metrics: '>65% of India’s electric 2-wheelers manufactured in TN',
    cx: 260,
    cy: 90
  },
  {
    id: 'coimbatore-pumps',
    name: 'Coimbatore-Tiruppur Textile & Engineering Hub',
    nameTa: 'கோயம்புத்தூர்-திருப்பூர் ஜவுளி மற்றும் பொறியியல் மண்டலம்',
    category: 'textile',
    districts: ['Coimbatore', 'Tiruppur', 'Erode', 'Karur'],
    keySpeciality: 'Knitwear Cotton Textiles (Dollar City) & Water Pumps',
    tnpscSignificance: 'Tiruppur exports >50% of India’s knitwear garments. Coimbatore produces >45% of India’s agricultural pumps and motors (Manchester of South India / Pump City).',
    metrics: '₹35,000+ Crore annual export turnover from Tiruppur',
    cx: 170,
    cy: 220
  },
  {
    id: 'cauvery-delta',
    name: 'Cauvery Delta Agrarian Rice Bowl',
    nameTa: 'காவிரி டெல்டா நெற்களஞ்சியம்',
    category: 'agro',
    districts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam', 'Mayiladuthurai'],
    keySpeciality: 'Paddy Rice Cultivation & Food Security',
    tnpscSignificance: 'Intensive Kuruvai (short duration) and Samba/Thaladi paddy seasons irrigated by Grand Anicut (Kallanai built by Karikalan) and Mettur Dam network.',
    metrics: 'Granary of South India; crucial contributor to TN Universal PDS',
    cx: 350,
    cy: 240
  },
  {
    id: 'thoothukudi-ports',
    name: 'Thoothukudi-V.O.C Maritime & Green Hydrogen Hub',
    nameTa: 'தூத்துக்குடி-வ.உ.சி துறைமுகம் & பசுமை ஹைட்ரஜன் மையம்',
    category: 'ports',
    districts: ['Thoothukudi', 'Tirunelveli', 'Ramanathapuram'],
    keySpeciality: 'Deep Sea Port Logistics, Petrochemicals & Heavy Industry',
    tnpscSignificance: 'V.O. Chidambaranar Port is an all-weather major seaport on the Gulf of Mannar. Being developed as India’s first Green Hydrogen Port Hub.',
    metrics: 'Handles >38 Million Tonnes of maritime cargo annually',
    cx: 250,
    cy: 410
  },
  {
    id: 'muppandal-wind',
    name: 'Muppandal Wind Energy Gap',
    nameTa: 'முப்பந்தல் காற்றாலை புதுப்பிக்கத்தக்க எரிசக்தி மையம்',
    category: 'energy',
    districts: ['Kanyakumari', 'Tirunelveli'],
    keySpeciality: 'Onshore Renewable Wind Power Generation',
    tnpscSignificance: 'Funnel effect through Palghat and Aralvaimozhi gaps in the Western Ghats powers one of the world’s largest operational onshore wind farms.',
    metrics: 'Tamil Nadu holds ~10,200 MW wind capacity (~24% of India total)',
    cx: 210,
    cy: 460
  },
  {
    id: 'sivakasi-print',
    name: 'Sivakasi-Virudhunagar Industrial Cluster',
    nameTa: 'சிவகாசி அச்சு மற்றும் பட்டாசு தொழில் தொகுதி',
    category: 'hardware',
    districts: ['Virudhunagar'],
    keySpeciality: 'Printing, Packaging, Safety Matches & Pyrotechnics',
    tnpscSignificance: 'Jawaharlal Nehru titled Sivakasi as "Kutti Japan" (Little Japan) due to the industrious spirit of its workforce. Supplies >80% of India’s safety matches and fireworks.',
    metrics: '>60% of India’s offset printing capacity',
    cx: 230,
    cy: 350
  }
];

export const TamilNaduDistrictEconomyMap: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<ClusterInfo>(CLUSTERS[0]);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredClusters = filterCategory === 'all' 
    ? CLUSTERS 
    : CLUSTERS.filter(c => c.category === filterCategory);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Tamil Nadu Economic Geography & Industrial Clusters</span>
            <span className="text-xs text-amber-400 font-normal">| தமிழக பொருளாதார புவியியல் & தொழில் மண்டலங்கள்</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Click on interactive map beacons to explore district specialisations, port corridors, and TNPSC exam markers.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filterCategory === 'all' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Clusters
          </button>
          <button
            onClick={() => setFilterCategory('auto')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filterCategory === 'auto' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Auto / EV
          </button>
          <button
            onClick={() => setFilterCategory('textile')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filterCategory === 'textile' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Textiles
          </button>
          <button
            onClick={() => setFilterCategory('agro')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filterCategory === 'agro' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Cauvery Delta
          </button>
          <button
            onClick={() => setFilterCategory('ports')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filterCategory === 'ports' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Ports & Wind
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Interactive SVG Vector Map of Tamil Nadu (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-xl border border-slate-800 p-4 relative flex items-center justify-center">
          <svg viewBox="0 0 500 520" className="w-full h-[460px] max-h-[500px]">
            <defs>
              <linearGradient id="tn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* Tamil Nadu Stylized Geographic Coastline & Landmass Path */}
            <path
              d="M 230 40 
                 L 320 45 
                 L 410 65 
                 L 435 90 
                 L 415 130 
                 L 390 180 
                 L 380 230 
                 L 410 260 
                 L 360 280 
                 L 320 310 
                 L 330 350 
                 L 300 400 
                 L 260 450 
                 L 220 480 
                 L 190 495 
                 L 180 470 
                 L 195 440 
                 L 170 390 
                 L 150 330 
                 L 130 270 
                 L 140 220 
                 L 170 170 
                 L 220 120 
                 Z"
              fill="url(#tn-gradient)"
              stroke="#334155"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Maritime Ocean Indicators */}
            <text x="410" y="210" fill="#38bdf8" fillOpacity="0.4" fontSize="12" fontWeight="bold" letterSpacing="2">
              BAY OF BENGAL
            </text>
            <text x="410" y="226" fill="#38bdf8" fillOpacity="0.3" fontSize="9">
              வங்காள விரிகுடா
            </text>
            <text x="260" y="490" fill="#38bdf8" fillOpacity="0.4" fontSize="11" fontWeight="bold">
              INDIAN OCEAN
            </text>
            <text x="120" y="470" fill="#38bdf8" fillOpacity="0.4" fontSize="10">
              Arabian Sea
            </text>

            {/* Cauvery River Network Path */}
            <path
              d="M 180 180 Q 260 210, 310 220 T 380 235"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="4,2"
            />
            <text x="250" y="200" fill="#38bdf8" fontSize="9" fontStyle="italic">
              Cauvery River (காவிரி)
            </text>

            {/* Western Ghats Mountain Range Graphic Indicator */}
            <path
              d="M 140 200 L 160 300 L 175 420"
              fill="none"
              stroke="#059669"
              strokeWidth="3"
              strokeDasharray="6,4"
            />
            <text x="110" y="320" fill="#10b981" fontSize="9" transform="rotate(-75, 110, 320)">
              Western Ghats (மேற்குத் தொடர்ச்சி மலை)
            </text>

            {/* Interactive Cluster Pin Nodes */}
            {filteredClusters.map((cluster) => {
              const isSelected = selectedCluster.id === cluster.id;
              return (
                <g
                  key={cluster.id}
                  transform={`translate(${cluster.cx}, ${cluster.cy})`}
                  className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  onClick={() => setSelectedCluster(cluster)}
                >
                  {/* Outer ripple ring when selected */}
                  {isSelected && (
                    <circle cx="0" cy="0" r="14" fill="#f59e0b" fillOpacity="0.3" />
                  )}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? '8' : '6'}
                    fill={
                      cluster.category === 'auto' ? '#f59e0b' :
                      cluster.category === 'textile' ? '#38bdf8' :
                      cluster.category === 'agro' ? '#10b981' :
                      cluster.category === 'ports' ? '#818cf8' : '#eab308'
                    }
                    stroke="#020617"
                    strokeWidth="1.5"
                  />
                  <text
                    x="10"
                    y="4"
                    fill={isSelected ? '#fbbf24' : '#e2e8f0'}
                    fontSize={isSelected ? '11' : '10'}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    className="select-none pointer-events-none drop-shadow"
                  >
                    {cluster.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Map Helper Badge */}
          <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-700/60 rounded px-2.5 py-1 text-[11px] text-slate-400">
            Total Coastline: <span className="text-amber-400 font-bold font-mono">1,076 km</span> (2nd Longest in India)
          </div>
        </div>

        {/* Cluster Detail Inspector Panel (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-5 space-y-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-amber-400 font-semibold uppercase tracking-wider">
              {selectedCluster.category} Cluster
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Selected Node</span>
          </div>

          <div>
            <h5 className="text-lg font-bold text-slate-100">{selectedCluster.name}</h5>
            <p className="text-xs text-amber-300/90 font-medium mt-0.5">{selectedCluster.nameTa}</p>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2 text-xs">
            <div className="text-slate-400">Districts Covered:</div>
            <div className="flex flex-wrap gap-1.5">
              {selectedCluster.districts.map((d) => (
                <span key={d} className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[11px]">
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block text-[11px]">Core Economic Specialisation:</span>
              <span className="font-semibold text-slate-100">{selectedCluster.keySpeciality}</span>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50">
              <span className="text-emerald-400 block font-semibold text-[11px] mb-0.5">TNPSC Exam Fact:</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {selectedCluster.tnpscSignificance}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40">
              <span className="text-amber-400 block font-semibold text-[11px] mb-0.5">Verified Data Metric:</span>
              <p className="text-[11px] text-slate-300 font-mono">
                {selectedCluster.metrics}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
