import React, { useState } from 'react';
import { Baby, School, GraduationCap, Briefcase, HeartHandshake, ShieldPlus, ChevronRight } from 'lucide-react';

interface LifeStage {
  stageId: string;
  ageSpan: string;
  titleEn: string;
  titleTa: string;
  schemes: Array<{
    nameEn: string;
    nameTa: string;
    benefit: string;
    objective: string;
  }>;
  sdgGoal: string;
}

const LIFECYCLE_STAGES: LifeStage[] = [
  {
    stageId: 'maternal',
    ageSpan: 'Conception to Infancy (0 - 2 Yrs)',
    titleEn: 'Maternal Nutrition & Safe Childbirth',
    titleTa: 'தாய்மை நலம் & பாதுகாப்பான குழந்தை பிறப்பு',
    schemes: [
      {
        nameEn: 'Dr. Muthulakshmi Reddy Maternity Scheme',
        nameTa: 'டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவித் திட்டம்',
        benefit: '₹18,000 cash assistance in 5 instalments + 2 Amma Nutrition Kits',
        objective: 'Replaces wage loss during pregnancy, prevents infant low birth weight, and guarantees institutional delivery.'
      },
      {
        nameEn: 'Kalaignar Baby Care Kit',
        nameTa: 'குழந்தை பராமரிப்பு பெட்டகம்',
        benefit: '16 essential hygiene & healthcare items for newborns',
        objective: 'Ensures postnatal infection control and infant hygiene in government hospitals.'
      }
    ],
    sdgGoal: 'SDG 3: Good Health & Well-being'
  },
  {
    stageId: 'childhood',
    ageSpan: 'Primary School (5 - 10 Yrs)',
    titleEn: 'Early Nutrition & Foundational Literacy',
    titleTa: 'காலை உணவு, சத்துணவு & தொடக்கக் கல்வி',
    schemes: [
      {
        nameEn: 'Chief Minister’s Breakfast Scheme',
        nameTa: 'முதலமைச்சரின் காலை உணவுத் திட்டம்',
        benefit: 'Free hot cooked breakfast (Upma, Pongal, Kichadi) to Classes 1–5',
        objective: 'Pioneering initiative in India addressing morning classroom hunger and boosting primary school attendance by >30%.'
      },
      {
        nameEn: 'Nutritious Midday Meal Scheme',
        nameTa: 'புரட்சித் தலைவர் எம்.ஜி.ஆர் சத்துணவுத் திட்டம்',
        benefit: 'Nutritious lunch with eggs (5 per week) and variety pulses/rice',
        objective: 'Pioneered in 1920 (Justice Party) -> 1955 (Kamarajar) -> 1982 (MGR); eradicates child wasting and malnutrition.'
      },
      {
        nameEn: 'Ennum Ezhuthum Mission',
        nameTa: 'எண்ணும் எழுத்தும் இயக்கம்',
        benefit: 'Targeted foundational reading and arithmetic pedagogy',
        objective: 'Ensures all children under age 8 achieve foundational numeracy and literacy by 2025.'
      }
    ],
    sdgGoal: 'SDG 2: Zero Hunger & SDG 4: Quality Education'
  },
  {
    stageId: 'secondary',
    ageSpan: 'Adolescence & Secondary (11 - 17 Yrs)',
    titleEn: 'Secondary Retention & Digital Skills',
    titleTa: 'இடைநிலைக் கல்வி & நவீன திறன் மேம்பாடு',
    schemes: [
      {
        nameEn: 'Free Laptop Scheme for Students',
        nameTa: 'இலவச மடிக்கணினி திட்டம்',
        benefit: 'High-spec student laptops to Class 11-12 & college students',
        objective: 'Dismantles the digital divide across rural and marginalized communities.'
      },
      {
        nameEn: 'Naan Mudhalvan Skill Revolution',
        nameTa: 'நான் முதல்வன் திட்டம்',
        benefit: 'Industry 4.0 courses (AI, Robotics, Cloud, Languages) across colleges',
        objective: 'Equips 10 lakh youth annually with employability skills matching global multinational demand.'
      },
      {
        nameEn: 'Illam Thedi Kalvi (Education at Doorstep)',
        nameTa: 'இல்லம் தேடி கல்வி',
        benefit: 'Community volunteer tutoring in village settlements',
        objective: 'Bridged COVID-19 pandemic learning gaps through 2 lakh women volunteers.'
      }
    ],
    sdgGoal: 'SDG 4: Quality Education & SDG 8: Decent Work'
  },
  {
    stageId: 'tertiary',
    ageSpan: 'Collegiate & Professional (18 - 23 Yrs)',
    titleEn: 'Higher Education Enrolment Democratisation',
    titleTa: 'உயர்கல்வி சமத்துவம் & தொழில் வாய்ப்பு',
    schemes: [
      {
        nameEn: 'Pudhumai Penn Scheme',
        nameTa: 'புதுமைப் பெண் திட்டம் (மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம்)',
        benefit: '₹1,000/month direct benefit transfer to girls pursuing degrees',
        objective: 'Abolished child marriage; surged girl enrolment from government schools into colleges by 34%.'
      },
      {
        nameEn: 'Tamil Pudhalvan Scheme',
        nameTa: 'தமிழ்ப் புதல்வன் திட்டம்',
        benefit: '₹1,000/month cash assistance to boys from government schools',
        objective: 'Incentivises male students from underprivileged families to complete tertiary education.'
      },
      {
        nameEn: '7.5% Horizontal Government School Quota',
        nameTa: '7.5% அரசுப் பள்ளி மாணவர் உள் ஒதுக்கீடு',
        benefit: 'Exclusive quota with full tuition and hostel fee waiver',
        objective: 'Facilitates hundreds of poor village students entering Medical and Engineering colleges.'
      }
    ],
    sdgGoal: 'SDG 5: Gender Equality & SDG 10: Reduced Inequalities'
  },
  {
    stageId: 'livelihood',
    ageSpan: 'Adulthood & Livelihood (24 - 59 Yrs)',
    titleEn: 'Universal Basic Security & Women Autonomy',
    titleTa: 'மகளிர் பொருளாதார உரிமை & வாழ்வாதார உத்தரவாதம்',
    schemes: [
      {
        nameEn: 'Kalaignar Magalir Urimai Thittam',
        nameTa: 'கலைஞர் மகளிர் உரிமைத் திட்டம்',
        benefit: '₹1,000/month basic income transferred to 1.15 Crore women heads',
        objective: 'Recognises unpaid female domestic labor; India’s largest state-funded universal basic income experiment.'
      },
      {
        nameEn: 'Vidiyal Payanam (Zero-Fare Bus Travel)',
        nameTa: 'விடியல் பயணம் (கட்டணமில்லா பேருந்து பயணம்)',
        benefit: '100% free travel in ordinary town buses for women, trans persons, disabled',
        objective: 'Saves ₹800–₹1,200 monthly per woman worker; directly spurs female labor force participation.'
      },
      {
        nameEn: 'Universal Public Distribution System (PDS)',
        nameTa: 'அனைவருக்குமான பொது விநியோகத் திட்டம்',
        benefit: 'Free rice, subsidized dhal, palm oil, sugar via 35,000 ration shops',
        objective: 'Protects food sovereignty with 0% exclusion error.'
      }
    ],
    sdgGoal: 'SDG 1: No Poverty & SDG 5: Gender Equality'
  },
  {
    stageId: 'senior',
    ageSpan: 'Senior Citizens & Universal Health (60+ Yrs)',
    titleEn: 'Elderly Dignity & Doorstep Healthcare',
    titleTa: 'முதியோர் நலம் & மக்களைத் தேடி மருத்துவம்',
    schemes: [
      {
        nameEn: 'Makkalai Thedi Maruthuvam (Healthcare at Doorstep)',
        nameTa: 'மக்களைத் தேடி மருத்துவம்',
        benefit: 'Free screening, continuous drug delivery for hypertension/diabetes',
        objective: 'Over 1 Crore beneficiaries screened in their homes, slashing out-of-pocket health expenditure.'
      },
      {
        nameEn: 'Innuyir Kaappom - Nammai Kaakkum 48',
        nameTa: 'இன்னுயிர் காப்போம் - நம்மை காக்கும் 48',
        benefit: 'Free emergency trauma medical care up to ₹1 Lakh in first 48 hours',
        objective: 'Cashless golden-hour trauma surgery across private and public hospitals for any road accident victim.'
      },
      {
        nameEn: 'Old Age Pension & Destitute Security',
        nameTa: 'முதியோர் மற்றும் ஆதரவற்றோர் ஓய்வூதியத் திட்டம்',
        benefit: 'Monthly pension of ₹1,000 - ₹1,200 to elderly, widows, destitute women',
        objective: 'Guarantees social dignity and survival in the sunset years.'
      }
    ],
    sdgGoal: 'SDG 3: Good Health & SDG 10: Reduced Inequalities'
  }
];

export const WelfareJourneyDiagram: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('tertiary');
  const stage = LIFECYCLE_STAGES.find(s => s.stageId === activeStageId) || LIFECYCLE_STAGES[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Lifecycle Welfare Architecture: Cradle to Elderly Social Safety Net</span>
            <span className="text-xs text-amber-400 font-normal">| தொட்டில் முதல் முதியோர் வரை முழுமையான சமூக பாதுகாப்பு</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            How Tamil Nadu converts social welfare expenditure into productive human capital investments across human lifecycle phases.
          </p>
        </div>
      </div>

      {/* Lifecycle Stage Steps Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {LIFECYCLE_STAGES.map((s, idx) => {
          const isActive = s.stageId === activeStageId;
          return (
            <button
              key={s.stageId}
              onClick={() => setActiveStageId(s.stageId)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] uppercase font-mono opacity-70">Stage 0{idx + 1}</div>
              <div className="text-xs font-bold mt-0.5 truncate">{s.titleEn.split(' ')[0]}</div>
              <div className="text-[10px] text-slate-500 truncate">{s.ageSpan.split('(')[0]}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Schemes Display */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Phase Focus: {stage.ageSpan}
            </span>
            <h5 className="text-lg font-bold text-slate-100 mt-0.5">{stage.titleEn}</h5>
            <p className="text-xs text-amber-300/90 font-medium">{stage.titleTa}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs text-emerald-400 font-medium">
            {stage.sdgGoal}
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {stage.schemes.map((scheme, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 space-y-2 text-xs">
              <div>
                <h6 className="font-bold text-slate-100">{scheme.nameEn}</h6>
                <div className="text-amber-300/90 text-[11px] font-medium mt-0.5">{scheme.nameTa}</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                <span className="text-[10px] text-emerald-400 font-semibold block uppercase">Core Benefit:</span>
                <span className="text-slate-200 font-mono text-[11px]">{scheme.benefit}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {scheme.objective}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Econometric Rationale Strip */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <span className="font-semibold text-slate-100 block mb-0.5">Dreze-Sen Development Economics Paradigm:</span>
        <p className="text-[11px] text-slate-400">
          Economists Jean Drèze and Amartya Sen note that Tamil Nadu’s model proves social support is not an unproductive "freebie" or fiscal drain. Instead, public investments in health, nutrition, and schooling created an educated, healthy labor force that later enabled Tamil Nadu to become India’s 2nd largest state economy and leading export powerhouse.
        </p>
      </div>
    </div>
  );
};
