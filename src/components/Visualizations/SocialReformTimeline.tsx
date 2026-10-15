import React, { useState } from 'react';
import { Scale, CheckCircle2, ShieldCheck, Landmark, FileText, ChevronRight, Calendar } from 'lucide-react';

interface Milestone {
  year: string;
  titleEn: string;
  titleTa: string;
  keyActors: string;
  significanceEn: string;
  significanceTa: string;
  constitutionalBasis: string;
}

const REFORM_MILESTONES: Milestone[] = [
  {
    year: '1916',
    titleEn: 'Justice Party & Non-Brahmin Manifesto',
    titleTa: 'நீதிக்கட்சி தோற்றம் & பிராமணரல்லாதார் அறிக்கை',
    keyActors: 'Dr. C. Natesa Mudaliar, Sir P. Theagaraya Chetty, Dr. T.M. Nair',
    significanceEn: 'Exposed the near-monopoly of administration (over 90% posts held by 3% minority) and demanded proportional democratic representation.',
    significanceTa: 'அரசு நிர்வாகத்தில் நிலவிய ஒரு குறிப்பிட்ட பிரிவினரின் ஆதிக்கத்தை புள்ளிவிவரங்களுடன் வெளிப்படுத்தி, மக்கள் தொகை விகிதாச்சாரத்திற்கு ஏற்ப பிரதிநிதித்துவம் கோரிய வரலாற்று அறிக்கை.',
    constitutionalBasis: 'Pre-Constitutional foundation of Social Justice'
  },
  {
    year: '1921 & 1928',
    titleEn: 'Communal Government Orders (Communal G.O.)',
    titleTa: 'வகுப்புவாரி பிரதிநிதித்துவ அரசாணை (Communal G.O.)',
    keyActors: 'Justice Party Ministry & Minister S. Muthiah Mudaliar',
    significanceEn: 'First statutory reservation in British India. Communal G.O. No. 613 (1921) and 1928 classified public appointments across Non-Brahmin Hindus, Muslims, Christians, and Depressed Classes.',
    significanceTa: 'இந்தியாவிலேயே முதன்முறையாக அரசுப் பணிகளில் அனைத்து சமூகங்களுக்கும் குறிப்பிட்ட விழுக்காடு இடங்களை ஒதுக்கிய வரலாற்றுச் சிறப்புமிக்க அரசாணை.',
    constitutionalBasis: 'Pre-cursor to Articles 15(4) and 16(4)'
  },
  {
    year: '1925',
    titleEn: 'Self-Respect Movement (சுயமரியாதை இயக்கம்)',
    titleTa: 'தந்தை பெரியாரின் சுயமரியாதை இயக்கம்',
    keyActors: 'Thanthai Periyar E.V. Ramasamy',
    significanceEn: 'Radical cultural movement rejecting ritual hierarchy, championing caste annihilation, women’s bodily autonomy, self-respect marriages, and rationalism.',
    significanceTa: 'சடங்குகள் அற்ற சுயமரியாதைத் திருமணங்கள், பெண்களுக்கான சொத்துரிமை, மற்றும் ஜாதி ஒழிப்பை முன்னிறுத்தி தமிழகத்தில் சமூக புரட்சியை ஏற்படுத்திய இயக்கம்.',
    constitutionalBasis: 'Fundamental bedrock of TN social democracy'
  },
  {
    year: '1951',
    titleEn: 'First Constitutional Amendment Act (Article 15(4))',
    titleTa: 'முதலாவது அரசியலமைப்பு திருத்தச் சட்டம் (1951)',
    keyActors: 'Periyar, C.N. Annadurai, Jawaharlal Nehru, Dr. B.R. Ambedkar',
    significanceEn: 'Supreme Court struck down TN Communal G.O. in State of Madras v. Champakam Dorairajan. Massive protests in TN led Parliament to enact the 1st Amendment, adding Article 15(4) enabling affirmative action for socially and educationally backward classes.',
    significanceTa: 'செண்பகம் துரைராஜன் வழக்கின் தீர்ப்பை முறியடிக்க தமிழகத்தில் வெடித்த மக்கள் போராட்டத்தால், இந்திய அரசியலமைப்பின் 15(4) உறுப்பு முதலாவது திருத்தத்தின் மூலம் சேர்க்கப்பட்டது.',
    constitutionalBasis: 'Article 15(4) · Special provisions for SEBC/SC/ST'
  },
  {
    year: '1989',
    titleEn: 'MBC 20% Quota & Women’s Equal Property Rights',
    titleTa: '20% மிகவும் பிற்படுத்தப்பட்டோர் இடஒதுக்கீடு & பெண்கள் சொத்துரிமைச் சட்டம்',
    keyActors: 'M. Karunanidhi Ministry & Social Reform Activists',
    significanceEn: 'Carved 20% exclusive reservation for Most Backward Classes (MBC) and Denotified Communities (DNC). Also enacted the Hindu Succession (Tamil Nadu Amendment) Act 1989, making TN the first state in India to grant equal coparcenary rights to daughters in ancestral property.',
    significanceTa: 'பிற்படுத்தப்பட்டோர் ஒதுக்கீட்டிலிருந்து மிகவும் பிற்படுத்தப்பட்டோருக்கு (MBC) 20% தனி இடஒதுக்கீடும், பெண்களுக்கு மூதாதையர் சொத்தில் சம உரிமை வழங்கும் வரலாற்றுச் சட்டமும் இயற்றப்பட்டது.',
    constitutionalBasis: 'Model later adopted nationally in Hindu Succession Act 2005'
  },
  {
    year: '1994',
    titleEn: '69% Reservation Act & Ninth Schedule Shield',
    titleTa: '69% இடஒதுக்கீட்டுச் சட்டம் & 9-வது அட்டவணை பாதுகாப்பு',
    keyActors: 'J. Jayalalithaa Ministry & Union Government (P.V. Narasimha Rao)',
    significanceEn: 'To protect TN’s 69% quota following Supreme Court’s 50% cap in Indra Sawhney (1992), Tamil Nadu Assembly unanimously passed TN Act 45 of 1994. The 76th Constitutional Amendment Act placed it in the Ninth Schedule under Article 31B, conferring immunity from judicial challenge.',
    significanceTa: 'இந்திரா சஹானி வழக்கின் 50% உச்சவரம்பிலிருந்து தமிழகத்தின் 69% இடஒதுக்கீட்டைப் பாதுகாக்க தமிழ்நாடு சட்டமன்றத்தில் தனிச்சட்டம் இயற்றப்பட்டு, 76-வது அரசியலமைப்பு திருத்தம் மூலம் 9-வது அட்டவணையில் சேர்க்கப்பட்டது.',
    constitutionalBasis: '76th Constitutional Amendment Act 1994 / Article 31B'
  },
  {
    year: '2009',
    titleEn: '3% Arunthathiyar Internal Reservation',
    titleTa: '3% அருந்ததியர் உள் இடஒதுக்கீடு',
    keyActors: 'Justice M.S. Janarthanam Commission & GoTN',
    significanceEn: 'Enacted Tamil Nadu Act 4 of 2009 granting 3% internal preferential reservation to Arunthathiyars within the 18% Scheduled Castes quota in education and public employment.',
    significanceTa: 'பட்டியலினத்தவருக்கு ஒதுக்கப்பட்ட 18% இடங்களில் அருந்ததியர் சமூகத்தினருக்கு 3% முன்னுரிமை உள் ஒதுக்கீடு வழங்கப்பட்டது.',
    constitutionalBasis: 'Affirmed by 7-Judge Supreme Court Bench in 2024'
  },
  {
    year: '2020-21',
    titleEn: '7.5% Horizontal Quota for Government School Students',
    titleTa: 'அரசுப் பள்ளி மாணவர்களுக்கான 7.5% முன்னுரிமை உள்ஒதுக்கீடு',
    keyActors: 'Justice P. Kalaiyarasan Commission & GoTN',
    significanceEn: 'Provided 7.5% preferential reservation across medical, dental, and professional college seats for students educated in government schools from classes 6 to 12, bridging the rural coaching inequality divide.',
    significanceTa: 'அரசுப் பள்ளிகளில் பயிலும் ஏழை எளிய மாணவர்களுக்கு மருத்துவம், பொறியியல் மற்றும் தொழிற்கல்வி சேர்க்கையில் 7.5% முன்னுரிமை உள் ஒதுக்கீடு வழங்கப்பட்டது.',
    constitutionalBasis: 'Article 15(4) Affirmative Action for structural equity'
  }
];

export const SocialReformTimeline: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(5); // Default to 1994 (69% reservation)
  const milestone = REFORM_MILESTONES[selectedIndex];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>Evolution of Social Justice & 69% Reservation Architecture</span>
            <span className="text-xs text-amber-400 font-normal">| சமூக நீதி மற்றும் 69% இடஒதுக்கீட்டின் வரலாறு</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Key milestones from the 1916 Justice Party manifesto to the 76th Constitutional Amendment 9th Schedule protection.
          </p>
        </div>
      </div>

      {/* Horizontal Milestone Nav Scroller */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-[720px] p-1 bg-slate-950 rounded-lg border border-slate-800">
          {REFORM_MILESTONES.map((m, idx) => (
            <button
              key={m.year}
              onClick={() => setSelectedIndex(idx)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedIndex === idx
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {m.year}
            </button>
          ))}
        </div>
      </div>

      {/* Milestone Detail Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Year {milestone.year}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-normal">{milestone.constitutionalBasis}</span>
            </div>
            <h5 className="text-lg font-bold text-slate-100">{milestone.titleEn}</h5>
            <p className="text-xs text-amber-300/90 font-medium mt-0.5">{milestone.titleTa}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300">
            <span className="text-[10px] text-slate-500 block">Catalyst / Leadership:</span>
            <span className="font-semibold text-slate-200">{milestone.keyActors}</span>
          </div>
        </div>

        <div className="space-y-3 text-xs leading-relaxed">
          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
            <span className="text-slate-400 block font-semibold text-[11px] mb-1">Historical Significance:</span>
            <p>{milestone.significanceEn}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-amber-200/90">
            <span className="text-amber-400 block font-semibold text-[11px] mb-1">தமிழ் விளக்க உரை:</span>
            <p>{milestone.significanceTa}</p>
          </div>
        </div>

        {/* 69% Breakout Ledger Visual */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-200">Current 69% Reservation Quota Structure (TN Act 45 of 1994):</span>
            <span className="font-mono text-emerald-400 font-bold">Total: 69%</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
            <div className="bg-slate-950 border border-slate-800 p-2 rounded">
              <span className="font-bold text-amber-400 font-mono text-sm block">26.5%</span>
              <span className="text-slate-200 text-[11px]">BC (General)</span>
              <span className="text-[10px] text-slate-500 block">பிற்படுத்தப்பட்டோர்</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2 rounded">
              <span className="font-bold text-amber-400 font-mono text-sm block">3.5%</span>
              <span className="text-slate-200 text-[11px]">BC (Muslims)</span>
              <span className="text-[10px] text-slate-500 block">இஸ்லாமியர்</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2 rounded">
              <span className="font-bold text-sky-400 font-mono text-sm block">20.0%</span>
              <span className="text-slate-200 text-[11px]">MBC & DNC</span>
              <span className="text-[10px] text-slate-500 block">மிகவும் பிற்படுத்தப்பட்டோர்</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2 rounded">
              <span className="font-bold text-emerald-400 font-mono text-sm block">15.0%</span>
              <span className="text-slate-200 text-[11px]">SC (General)</span>
              <span className="text-[10px] text-slate-500 block">பட்டியலினத்தவர்</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2 rounded">
              <span className="font-bold text-emerald-400 font-mono text-sm block">3.0%</span>
              <span className="text-slate-200 text-[11px]">SC (Arunthathiyar)</span>
              <span className="text-[10px] text-slate-500 block">அருந்ததியர்</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2 rounded">
              <span className="font-bold text-purple-400 font-mono text-sm block">1.0%</span>
              <span className="text-slate-200 text-[11px]">ST (Tribal)</span>
              <span className="text-[10px] text-slate-500 block">பழங்குடியினர்</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 pt-1 text-center">
            Remaining 31% is Open Competition (OC) merit quota open to all candidates without caste discrimination.
          </div>
        </div>
      </div>
    </div>
  );
};
