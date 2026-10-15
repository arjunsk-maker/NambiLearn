import React, { useState } from 'react';
import { HeartPulse, GraduationCap, TrendingDown, Users, Award, FileText } from 'lucide-react';

interface MetricComparison {
  key: string;
  nameEn: string;
  nameTa: string;
  unit: string;
  direction: 'lower-is-better' | 'higher-is-better';
  source: string;
  year: string;
  data: Array<{ state: string; value: number; highlight?: boolean }>;
  insightTa: string;
  insightEn: string;
}

const COMPARISONS: MetricComparison[] = [
  {
    key: 'imr',
    nameEn: 'Infant Mortality Rate (IMR)',
    nameTa: 'குழந்தை இறப்பு விகிதம் (1,000 பிறப்புகளுக்கு)',
    unit: 'deaths per 1,000 live births',
    direction: 'lower-is-better',
    source: 'Registrar General of India · Sample Registration System (SRS)',
    year: '2023',
    data: [
      { state: 'Kerala', value: 6 },
      { state: 'Tamil Nadu', value: 13, highlight: true },
      { state: 'Maharashtra', value: 16 },
      { state: 'Gujarat', value: 23 },
      { state: 'All India Avg', value: 28 },
      { state: 'Uttar Pradesh', value: 38 },
      { state: 'Madhya Pradesh', value: 43 }
    ],
    insightTa: 'தமிழ்நாட்டின் குழந்தை இறப்பு விகிதம் 13 ஆகக் குறைந்து ஐக்கிய நாடுகள் சபையின் நிலையான வளர்ச்சி இலக்கை (SDG Target: 12) ஏற்கனவே எட்டிப்பிடித்துள்ளது. விரிவான ஆரம்ப சுகாதார நிலையங்கள் (PHCs) மற்றும் சிசு தீவிர சிகிச்சைப் பிரிவுகள் (NICUs) இதற்கு முக்கியக் காரணமாகும்.',
    insightEn: 'Tamil Nadu’s IMR (13) is less than half the national average (28), achieved through a 24x7 primary health centre network, universal institutional delivery (99.9%), and specialized newborn care units.'
  },
  {
    key: 'mmr',
    nameEn: 'Maternal Mortality Ratio (MMR)',
    nameTa: 'தாய்மார் இறப்பு விகிதம் (1 லட்சம் பிரசவங்களுக்கு)',
    unit: 'deaths per 100,000 live births',
    direction: 'lower-is-better',
    source: 'Sample Registration System (SRS) Special Bulletin on MMR',
    year: '2023',
    data: [
      { state: 'Kerala', value: 19 },
      { state: 'Tamil Nadu', value: 54, highlight: true },
      { state: 'Maharashtra', value: 33 },
      { state: 'Gujarat', value: 57 },
      { state: 'All India Avg', value: 97 },
      { state: 'Madhya Pradesh', value: 173 },
      { state: 'Assam', value: 195 }
    ],
    insightTa: 'டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவித் திட்டம் (₹18,000 மற்றும் ஊட்டச்சத்து பெட்டகம்) மூலம் ஏழை தாய்மார்களின் ஊட்டச்சத்து உறுதி செய்யப்பட்டு தாய்மார் இறப்பு விகிதம் 54 ஆகக் குறைக்கப்பட்டுள்ளது.',
    insightEn: 'Tamil Nadu’s MMR stands at 54, well below the national mark of 97. Targeted antenatal interventions and conditional cash transfers under the Dr. Muthulakshmi Reddy Maternity Scheme play a vital role.'
  },
  {
    key: 'ger',
    nameEn: 'Higher Education Gross Enrolment Ratio (GER)',
    nameTa: 'உயர்கல்வி மொத்த சேர்க்கை விகிதம் (GER %)',
    unit: '% of youth aged 18-23 enrolled',
    direction: 'higher-is-better',
    source: 'Ministry of Education · AISHE Report',
    year: '2021-22',
    data: [
      { state: 'Tamil Nadu', value: 51.3, highlight: true },
      { state: 'Kerala', value: 41.3 },
      { state: 'Maharashtra', value: 34.6 },
      { state: 'All India Avg', value: 28.4 },
      { state: 'Gujarat', value: 24.2 },
      { state: 'Uttar Pradesh', value: 24.1 },
      { state: 'Bihar', value: 15.9 }
    ],
    insightTa: 'தமிழ்நாடு உயர்கல்வி சேர்க்கையில் 51.3% பெற்று இந்தியாவின் முதன்மை மாநிலமாக உள்ளது. புதுமைப் பெண் திட்டம், 7.5% அரசுப் பள்ளி மாணவர் உள்ஒதுக்கீடு மற்றும் பெருமளவிலான அரசு கலை & அறிவியல் கல்லூரிகள் காரணமாக பெண்கள் மற்றும் ஏழை மாணவர்கள் பெருமளவில் கல்லூரிகளில் சேர்கின்றனர்.',
    insightEn: 'Tamil Nadu is the undisputed national leader with a 51.3% Higher Education GER, almost double the national average (28.4%). Schemes like Pudhumai Penn (₹1,000/mo cash transfer for girls) and 7.5% quota for government school students power this democratization.'
  },
  {
    key: 'mpi',
    nameEn: 'Multidimensional Poverty Index (MPI)',
    nameTa: 'பலபரிமாண வறுமைக் குறியீடு (மக்கள் தொகை %)',
    unit: '% of population in multidimensional poverty',
    direction: 'lower-is-better',
    source: 'NITI Aayog · National MPI Baseline Report',
    year: '2023',
    data: [
      { state: 'Kerala', value: 0.55 },
      { state: 'Goa', value: 0.84 },
      { state: 'Tamil Nadu', value: 1.43, highlight: true },
      { state: 'Punjab', value: 4.75 },
      { state: 'Maharashtra', value: 7.81 },
      { state: 'Gujarat', value: 11.66 },
      { state: 'All India Avg', value: 14.96 },
      { state: 'Bihar', value: 33.76 }
    ],
    insightTa: 'நிதி ஆயோக்கின் பலபரிமாண வறுமைக் குறியீட்டின்படி தமிழ்நாட்டில் வெறும் 1.43% மக்கள் மட்டுமே வறுமையில் உள்ளனர். தமிழ்நாட்டின் அனைவருக்குமான இலவச அரிசி வழங்கும் ரேஷன் முறை (Universal PDS) ஊட்டச்சத்து வறுமையை பெருமளவில் ஒழித்துள்ளது.',
    insightEn: 'NITI Aayog’s MPI reveals only 1.43% of Tamil Nadu’s population is multidimensionally poor (4th lowest in India). The state’s Universal PDS (free rice to all cardholders) eliminated severe caloric starvation.'
  }
];

export const HdiComparativeAssessment: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('imr');
  const metric = COMPARISONS.find(c => c.key === selectedKey) || COMPARISONS[0];

  const maxValue = Math.max(...metric.data.map(d => d.value));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Human Development Indicators: Tamil Nadu vs India Benchmark</span>
            <span className="text-xs text-amber-400 font-normal">| மனித வள மேம்பாட்டுக் குறியீடுகள் ஒப்பீடு</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Comparative state indicators from verified government sources: Sample Registration System, AISHE, and NITI Aayog.
          </p>
        </div>

        {/* Metric Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          {COMPARISONS.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedKey(c.key)}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedKey === c.key
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {c.key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Active Metric Description Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
        <div>
          <span className="font-bold text-slate-100 text-sm">{metric.nameEn}</span>
          <span className="text-amber-300/90 block text-[11px]">{metric.nameTa}</span>
        </div>
        <div className="text-[11px] text-slate-400">
          Source: <span className="text-slate-300 font-medium">{metric.source} ({metric.year})</span>
        </div>
      </div>

      {/* Comparative Horizontal Bar Chart */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        {metric.data.map((item) => {
          const barWidthPercent = (item.value / maxValue) * 100;
          const isTN = item.highlight;
          const isNational = item.state === 'All India Avg';

          return (
            <div key={item.state} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className={`font-medium ${isTN ? 'text-amber-400 font-bold' : isNational ? 'text-sky-400 font-bold' : 'text-slate-300'}`}>
                  {item.state} {isTN && '(Tamil Nadu)'}
                </span>
                <span className="font-mono text-xs tabular-nums text-slate-200">
                  {item.value} {metric.unit.includes('%') ? '%' : ''}
                </span>
              </div>
              <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isTN 
                      ? 'bg-amber-500' 
                      : isNational 
                      ? 'bg-sky-500' 
                      : 'bg-slate-600'
                  }`}
                  style={{ width: `${Math.max(4, barWidthPercent)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Qualitative TNPSC Insight Strip */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
          <Award className="w-4 h-4" />
          <span>TNPSC Syllabus Analytical Context:</span>
        </div>
        <p className="text-amber-300/90 leading-relaxed text-[11px]">{metric.insightTa}</p>
        <p className="text-slate-400 leading-relaxed text-[11px]">{metric.insightEn}</p>
      </div>
    </div>
  );
};
