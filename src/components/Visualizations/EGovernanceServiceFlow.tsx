import React, { useState } from 'react';
import { Network, Laptop, ShieldCheck, ArrowRight, CheckCircle2, Lock, Smartphone, Database } from 'lucide-react';

interface FlowStep {
  step: number;
  labelEn: string;
  labelTa: string;
  agency: string;
  techStack: string;
  descriptionEn: string;
  descriptionTa: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    step: 1,
    labelEn: 'Citizen Initiation',
    labelTa: 'குடிமக்கள் விண்ணப்பம்',
    agency: 'e-Sevai Kiosks & Online e-District Portal',
    techStack: 'Mobile Responsive Portal / Web Kiosk',
    descriptionEn: 'Citizen applies for Community, Income, Nativity or First Graduate certificate through 13,000+ e-Sevai kiosks or directly at home via citizen portal.',
    descriptionTa: 'சாதி, வருமானம், இருப்பிடம் அல்லது முதல் பட்டதாரி சான்றிதழ்களுக்காக 13,000க்கும் மேற்பட்ட இ-சேவை மையங்கள் மூலமாகவோ அல்லது வீட்டில் இருந்தபடியோ இணையத்தில் விண்ணப்பித்தல்.'
  },
  {
    step: 2,
    labelEn: 'TNeGA Central Gateway',
    labelTa: 'TNeGA ஒருங்கிணைந்த நுழைவு வாயில்',
    agency: 'Tamil Nadu e-Governance Agency',
    techStack: 'Single Sign-On (SSO) & REST API Gateway',
    descriptionEn: 'TNeGA routes the application securely, validating identity tokens and sending automated acknowledgement SMS with tracking ID.',
    descriptionTa: 'தமிழ்நாடு மின்னாளுமை முகமையின் மைய நுழைவு வாயில் மூலம் விண்ணப்பம் சரிபார்க்கப்பட்டு குடிமக்களுக்கு குறுஞ்செய்தி வழி கண்காணிப்பு எண் வழங்கப்படுகிறது.'
  },
  {
    step: 3,
    labelEn: 'Automated Inter-Departmental Verification',
    labelTa: 'தானியங்கி துறைசார் தரவு சரிபார்ப்பு',
    agency: 'Civil Supplies, Aadhaar & TN-GIS',
    techStack: 'API Integration with Smart Ration & Land Records',
    descriptionEn: 'Cross-verifies household address with PDS Smart Card database and land parcel boundaries using Tamil Nadu Geographic Information System (TN-GIS).',
    descriptionTa: 'ஸ்மார்ட் ரேஷன் கார்டு தரவுத்தளம் மற்றும் நில வரைபடங்களுக்கான TN-GIS மூலம் தானியங்கி முறையில் முகவரி மற்றும் நில உரிமை சரிபார்க்கப்படுகிறது.'
  },
  {
    step: 4,
    labelEn: 'Revenue Workflow & Digital Signature',
    labelTa: 'வருவாய்த்துறை ஒப்புதல் & டிஜிட்டல் கையொப்பம்',
    agency: 'VAO -> RI -> Tahsildar / Zonal Officer',
    techStack: 'Digital Signature Certificate (DSC) / e-Sign',
    descriptionEn: 'Field verification by Village Administrative Officer (VAO) and Revenue Inspector (RI), followed by digital signature approval by Tahsildar.',
    descriptionTa: 'கிராம நிர்வாக அலுவலர் (VAO) மற்றும் வருவாய் ஆய்வாளர் (RI) கள ஆய்வு மேற்கொண்டு வட்டாட்சியர் டிஜிட்டல் கையொப்பம் இடுகிறார்.'
  },
  {
    step: 5,
    labelEn: 'Nambikkai Inaiyam Blockchain Anchoring',
    labelTa: 'நம்பிக்கை இணையம் பிளாக்செயின் பதிவு',
    agency: 'TN State Blockchain Backbone',
    techStack: 'Permissioned Distributed Ledger & Cryptographic Hash',
    descriptionEn: 'Cryptographic hash of the issued certificate is anchored onto the Nambikkai Inaiyam state blockchain, making it 100% tamper-proof against forgery.',
    descriptionTa: 'போலி சான்றிதழ்களை முற்றிலுமாகத் தடுக்கும் வகையில், சான்றிதழின் மாறா குறியீடு தமிழ்நாடு அரசின் "நம்பிக்கை இணையம்" பிளாக்செயினில் நிரந்தரமாகப் பதியப்படுகிறது.'
  },
  {
    step: 6,
    labelEn: 'Instant Delivery with Verifiable QR Code',
    labelTa: 'QR குறியீட்டுடன் உடனடி சான்றிதழ் விநியோகம்',
    agency: 'Citizen Digilocker / WhatsApp / Portal Download',
    techStack: 'Dynamic QR Code Verification Engine',
    descriptionEn: 'Digitally signed certificate delivered directly to citizen’s phone with an instant verifiable QR code, eliminating any need for paper visits.',
    descriptionTa: 'சரிபார்க்கத்தக்க QR குறியீட்டுடன் கூடிய டிஜிட்டல் சான்றிதழ் நேரடியாக குடிமகனின் கைபேசி அல்லது கணினிக்கு அனுப்பப்பட்டு பதிவிறக்கம் செய்யப்படுகிறது.'
  }
];

export const EGovernanceServiceFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(5); // Default to Blockchain step
  const currentStep = FLOW_STEPS[activeStep - 1];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
            <span>e-Governance Public Service Delivery Architecture</span>
            <span className="text-xs text-amber-400 font-normal">| தமிழ்நாடு மின்னாளுமை சேவை வழங்கல் ஓட்டம்</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            End-to-end citizen service delivery pipeline: From e-Sevai single window to Nambikkai Inaiyam blockchain authentication.
          </p>
        </div>
      </div>

      {/* Interactive Step Navigator Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {FLOW_STEPS.map((s) => {
          const isSelected = s.step === activeStep;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono opacity-70">Step 0{s.step}</span>
                {s.step === 5 && <Lock className="w-3 h-3 text-amber-400" />}
              </div>
              <div className="text-xs font-bold mt-1 truncate">{s.labelEn}</div>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
              Step {currentStep.step} of 6 · {currentStep.agency}
            </div>
            <h5 className="text-lg font-bold text-slate-100 mt-0.5">{currentStep.labelEn}</h5>
            <p className="text-xs text-amber-300/90 font-medium">{currentStep.labelTa}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs text-sky-400 font-mono">
            {currentStep.techStack}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-400 font-semibold block text-[11px] mb-1">Administrative Process:</span>
            <p>{currentStep.descriptionEn}</p>
          </div>
          <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-amber-200/90">
            <span className="text-amber-400 font-semibold block text-[11px] mb-1">தமிழ் விளக்க உரை:</span>
            <p>{currentStep.descriptionTa}</p>
          </div>
        </div>
      </div>

      {/* Sub-System Highlight: End-to-End PDS Computerisation */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
          <Database className="w-4 h-4 text-emerald-400" />
          <span>Case in Point: 100% End-to-End Biometric PDS Supply Chain Automation:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs text-center">
          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
            <span className="font-bold text-slate-200 text-xs block">TNCSC Godown</span>
            <span className="text-[10px] text-slate-400">Electronic weighbridge integration logging grain dispatches.</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
            <span className="font-bold text-slate-200 text-xs block">GPS Fleet Tracking</span>
            <span className="text-[10px] text-slate-400">Prevents transit diversion and black-market leakage.</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
            <span className="font-bold text-slate-200 text-xs block">35,000+ e-PoS Outlets</span>
            <span className="text-[10px] text-slate-400">Aadhaar biometric & Smart Card scan before commodity dispense.</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
            <span className="font-bold text-emerald-400 text-xs block">Instant SMS Receipt</span>
            <span className="text-[10px] text-slate-400">Direct confirmation to beneficiary mobile number.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
