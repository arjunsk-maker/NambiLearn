import { ModuleData } from '../types/curriculum';

export const MODULES_DATA: ModuleData[] = [
  {
    id: 'module-1',
    number: 1,
    titleEn: 'Indian Economy & Macroeconomic Architecture',
    titleTa: 'இந்தியப் பொருளாதாரம் மற்றும் பேரியல் கட்டமைப்பு',
    descriptionEn: 'Mixed economy nature, Five-Year Plans & NITI Aayog, Reserve Bank of India, Fiscal & Monetary policies, Finance Commission horizontal devolution, and GST architecture.',
    descriptionTa: 'கலப்புப் பொருளாதாரத் தன்மை, ஐந்தாண்டுத் திட்டங்கள் மற்றும் நிதி ஆயோக், இந்திய ரிசர்வ் வங்கி, நிதிக் கொள்கை, நிதிக்குழு மற்றும் ஜி.எஸ்.டி கட்டமைப்பு.',
    colorTheme: 'from-amber-500/20 via-emerald-500/10 to-transparent',
    iconName: 'Landmark',
    lessons: [
      {
        id: 'nature-of-indian-economy',
        titleEn: 'Nature of Indian Economy & Circular Flow',
        titleTa: 'இந்தியப் பொருளாதாரத்தின் இயல்பு மற்றும் பண சுழற்சி',
        kicker: 'TNPSC Core Concept · Macro Foundations',
        summaryTa: 'இந்தியா ஒரு வளரும் கலப்புப் பொருளாதாரம் (Mixed Economy). இதில் பொதுத்துறை (Public Sector) மற்றும் தனியார் துறை (Private Sector) இரண்டும் இணைந்து சமூக நலனையும் பொருளாதார வளர்ச்சியையும் முன்னெடுக்கின்றன. இந்தியப் பொருளாதாரம் வேளாண்மை ஆதிக்கத்திலிருந்து சேவைத்துறை நோக்கிய தனித்துவமான கட்டமைப்பு மாற்றத்தை எட்டியுள்ளது.',
        summaryEn: 'India operates as a developing mixed economy where public welfare-oriented state enterprises and market-driven private enterprises coexist. Notably, India witnessed a unique direct leap from primary agriculture to tertiary service dominance, skipping the traditional prolonged manufacturing phase.',
        keyTerminology: [
          {
            english: 'Mixed Economy',
            tamil: 'கலப்புப் பொருளாதாரம்',
            definition: 'Economic system combining private capitalism and state planning to prevent inequality while driving investment.'
          },
          {
            english: 'Gross Domestic Product (GDP)',
            tamil: 'மொத்த உள்நாட்டு உற்பத்தி',
            definition: 'Monetary value of all finished goods and services produced within a country’s territory in a financial year.'
          },
          {
            english: 'Circular Flow of Income',
            tamil: 'வருமான வட்ட ஓட்டம்',
            definition: 'Continuous cycle of money flow between households (factors of production) and firms/government (goods & services).'
          },
          {
            english: 'Economic Dualism',
            tamil: 'பொருளாதார இரட்டைத் தன்மை',
            definition: 'Simultaneous coexistence of modern urban capital-intensive sectors alongside traditional rural subsistence agriculture.'
          }
        ],
        diagramType: 'circular-flow',
        keyFacts: [
          {
            labelEn: 'Economic Classification',
            labelTa: 'பொருளாதார வகைப்பாடு',
            value: '5th Largest in the World by Nominal GDP (~$3.9 Trillion, 2024)',
            context: '3rd largest by Purchasing Power Parity (PPP).'
          },
          {
            labelEn: 'Sectoral GVA Contribution',
            labelTa: 'துறைவாரி பங்களிப்பு (2023-24)',
            value: 'Agriculture: ~17.7% | Industry: ~28.3% | Services: ~54.0%',
            context: 'Economic Survey of India 2023-24.'
          },
          {
            labelEn: 'Workforce Distribution',
            labelTa: 'தொழிலாளர் பகிர்வு (PLFS 2023)',
            value: 'Agriculture employs ~45.8% of India workforce',
            context: 'Demonstrating structural disparity: 18% GVA supports 46% workforce.'
          }
        ],
        caseStudies: [
          {
            title: 'Tamil Nadu Mixed-Model Trajectory',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'தமிழ்நாடு இந்தியாவின் 2-வது பெரிய மாநிலப் பொருளாதாரம் (GSDP ~₹27.5 லட்சம் கோடி, 2023-24). பிற மாநிலங்கள் போல் அல்லாமல், தமிழ்நாடு வலுவான தொழில்துறை (Secondary sector ~33%) மற்றும் சேவைத்துறை இரண்டையும் சமநிலையில் வளர்த்துள்ளது.',
            detailEn: 'Tamil Nadu ranks as India’s 2nd largest state economy (GSDP ~₹27.5 Lakh Crore). Unlike states that bypassed manufacturing, Tamil Nadu successfully cultivated an industrial base (Automobiles, Textiles, Hardware) alongside IT services.'
          }
        ],
        citations: [
          {
            source: 'Ministry of Statistics and Programme Implementation (MoSPI)',
            year: '2024',
            reportName: 'National Accounts Statistics 2024',
            relevance: 'Official sectoral share of Gross Value Added (GVA).'
          },
          {
            source: 'Reserve Bank of India',
            year: '2023-24',
            reportName: 'Handbook of Statistics on Indian Economy',
            relevance: 'Nominal GDP and Purchasing Power Parity assessments.'
          }
        ]
      },
      {
        id: 'five-year-plans-niti-aayog',
        titleEn: 'Five-Year Plans & NITI Aayog Paradigm',
        titleTa: 'ஐந்தாண்டுத் திட்டங்கள் மற்றும் நிதி ஆயோக் கட்டமைப்பு',
        kicker: 'Planning History · Institutional Evolution',
        summaryTa: '1950 மார்ச் 15-ல் அமைக்கப்பட்ட திட்டக்குழு (Planning Commission), ரஷ்ய சோவியத் மாதிரியிலிருந்து ஈர்க்கப்பட்டு 12 ஐந்தாண்டுத் திட்டங்களை நடைமுறைப்படுத்தியது. பின்னர் 2015 ஜனவரி 1 அன்று NITI Aayog (National Institution for Transforming India) கொண்டுவரப்பட்டு கீழ்மட்டத்திலிருந்து மேல்நோக்கிய திட்டமிடல் (Bottom-Up Approach) அறிமுகமானது.',
        summaryEn: 'India’s planning architecture evolved from the centralised top-down Planning Commission (1950–2014) to NITI Aayog (effective Jan 1, 2015), pivoting towards Cooperative Federalism, strategic policy think-tank orientation, and bottom-up district governance.',
        keyTerminology: [
          {
            english: 'Planning Commission',
            tamil: 'திட்டக்குழு (1950)',
            definition: 'Extra-constitutional advisory body established by cabinet resolution; allocated plan funds to states.'
          },
          {
            english: 'NITI Aayog',
            tamil: 'நிதி ஆயோக் (2015)',
            definition: 'Think-tank policy institution fostering cooperative & competitive federalism with no fund-allocation powers.'
          },
          {
            english: 'Harrod-Domar Model',
            tamil: 'ஹேரட்-டோமர் மாதிரி',
            definition: 'Economic growth model emphasizing capital accumulation and savings; foundation of the First Five-Year Plan (1951-56).'
          },
          {
            english: 'Mahalanobis Model',
            tamil: 'மகலனோபிஸ் மாதிரி',
            definition: 'Heavy-industry and capital goods investment strategy that drove the Second Five-Year Plan (1956-61).'
          }
        ],
        diagramType: 'five-year-plans',
        keyFacts: [
          {
            labelEn: 'First Plan (1951-56)',
            labelTa: 'முதலாம் திட்டம் (1951-56)',
            value: 'Target: 2.1% | Achieved: 3.6%',
            context: 'Primary focus on Agriculture, Irrigation (Bhakra Nangal, Damodar Valley), and price stability.'
          },
          {
            labelEn: 'Second Plan (1956-61)',
            labelTa: 'இரண்டாம் திட்டம் (1956-61)',
            value: 'Target: 4.5% | Achieved: 4.27%',
            context: 'P.C. Mahalanobis Model: Heavy industries (Bhilai, Rourkela, Durgapur steel plants).'
          },
          {
            labelEn: 'Plan Holidays',
            labelTa: 'திட்ட விடுமுறை காலம்',
            value: '1966-69 (Annual Plans) & 1978-80 (Rolling Plan)',
            context: 'Triggered by Indo-Pak War (1965), drought, and subsequent currency devaluation.'
          },
          {
            labelEn: 'NITI Aayog Governance',
            labelTa: 'நிதி ஆயோக் ஆளுகை',
            value: 'Chaired by Prime Minister; Governing Council includes all Chief Ministers',
            context: 'Formed on 1st January 2015, replacing the 65-year-old Planning Commission.'
          }
        ],
        caseStudies: [
          {
            title: 'Tamil Nadu State Planning Commission',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'தமிழ்நாடு மாநிலத் திட்டக் குழுவானது மாநில வளர்ச்சி கொள்கைக் குழுவாக (State Development Policy Council - SDPC) மாற்றியமைக்கப்பட்டு, கல்வி, சுகாதாரம் மற்றும் பெண்களுக்கான சமத்துவத் திட்டங்களை மதிப்பீடு செய்கிறது.',
            detailEn: 'Tamil Nadu revitalized its State Planning Commission into the State Development Policy Council (SDPC), working alongside top global economists on the Chief Minister’s Economic Advisory Council.'
          }
        ],
        citations: [
          {
            source: 'Planning Commission Archives / NITI Aayog',
            year: '2017',
            reportName: 'Evaluation Report on Twelve Five Year Plans (1951-2017)',
            relevance: 'Target vs Achieved GDP growth metrics.'
          },
          {
            source: 'Cabinet Secretariat Resolution',
            year: '2015',
            reportName: 'Cabinet Resolution No. 511/2/1/2015-Cab (NITI Aayog Notification)',
            relevance: 'Constitutional basis and mandate of NITI Aayog.'
          }
        ]
      },
      {
        id: 'rbi-and-monetary-policy',
        titleEn: 'Reserve Bank of India & Monetary Policy Transmission',
        titleTa: 'இந்திய ரிசர்வ் வங்கி மற்றும் பணவியல் கொள்கை',
        kicker: 'Central Banking · Price Stability & Liquidity',
        summaryTa: 'ஹில்டன் யங் ஆணையத்தின் (Hilton Young Commission) பரிந்துரையால் 1935 ஏப்ரல் 1 அன்று தொடங்கப்பட்டு, 1949 ஜனவரி 1-ல் நாட்டுடைமையாக்கப்பட்ட இந்திய ரிசர்வ் வங்கி (RBI) நாட்டின் மத்திய வங்கியாகும். 2016-ல் அமைக்கப்பட்ட 6 உறுப்பினர்களைக் கொண்ட பணவியல் கொள்கைக் குழு (MPC), நுகர்வோர் விலைக் குறியீட்டு பணவீக்கத்தை 4% (±2%) என்ற வரம்பிற்குள் வைக்க வட்டி விகிதங்களை தீர்மானிக்கிறது.',
        summaryEn: 'Established under the RBI Act 1934 on the Hilton Young Commission’s recommendation, the RBI functions as the apex monetary authority, currency issuer, and lender of last resort. Through the 6-member Monetary Policy Committee (MPC), it targets inflation at 4% ± 2% using policy rates like Repo, Reverse Repo/SDF, CRR, and SLR.',
        keyTerminology: [
          {
            english: 'Repo Rate',
            tamil: 'ரெப்போ விகிதம்',
            definition: 'Interest rate at which the RBI lends short-term liquidity to commercial banks against government securities collateral.'
          },
          {
            english: 'Cash Reserve Ratio (CRR)',
            tamil: 'ரொக்க இருப்பு விகிதம்',
            definition: 'Mandatory percentage of Net Demand and Time Liabilities (NDTL) that commercial banks must park as cash with RBI.'
          },
          {
            english: 'Statutory Liquidity Ratio (SLR)',
            tamil: 'சட்டரீதியான நீர்மை விகிதம்',
            definition: 'Percentage of deposits banks must maintain in liquid assets like Gold, Cash, or approved Government Securities.'
          },
          {
            english: 'Monetary Policy Committee (MPC)',
            tamil: 'பணவியல் கொள்கைக் குழு',
            definition: 'Statutory 6-member committee (3 from RBI, 3 nominated by Central Govt) that fixes policy rates under Urjit Patel framework.'
          }
        ],
        diagramType: 'rbi-banking',
        keyFacts: [
          {
            labelEn: 'Inception & Nationalisation',
            labelTa: 'தொடக்கம் & நாட்டுடைமை',
            value: 'April 1, 1935 (Kolkata) -> Jan 1, 1949 Nationalized',
            context: 'Headquarters shifted permanently to Mumbai in 1937.'
          },
          {
            labelEn: 'Inflation Targeting Mandate',
            labelTa: 'பணவீக்க இலக்கு வரம்பு',
            value: 'Headline CPI Inflation at 4% with tolerance band of ±2% (2% to 6%)',
            context: 'Section 45ZA of RBI Act 1934 (amended in 2016).'
          },
          {
            labelEn: 'Current Indicative Stance',
            labelTa: 'கொள்கை அளவீடுகள் (2024)',
            value: 'Repo: 6.50% | CRR: 4.50% | SLR: 18.00% | SDF: 6.25%',
            context: 'RBI Monetary Policy Resolution.'
          }
        ],
        caseStudies: [
          {
            title: 'Credit Flow to Tamil Nadu Priority Sectors',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'தமிழ்நாட்டில் மாநில அளவிலான வங்கியாளர்கள் குழு (SLBC) மூலம் விவசாயம், குறு-சிறு நிறுவனங்கள் (MSME) மற்றும் சுயஉதவிக் குழுக்களுக்கு (SHGs) முன்னுரிமைக் கடன் பகிர்வு உறுதி செய்யப்படுகிறது. மகளிர் சுயஉதவிக் குழுக்களின் கடன் திருப்பிச் செலுத்தும் விகிதம் 98% க்கும் அதிகமாக உள்ளது.',
            detailEn: 'Tamil Nadu consistently leads India in SHG bank-linkage lending under NABARD and SLBC, recording >98% repayment rates and directing credit into priority rural micro-enterprises.'
          }
        ],
        citations: [
          {
            source: 'Reserve Bank of India',
            year: '1934 / 2016',
            reportName: 'Reserve Bank of India Act, 1934 (as amended by Finance Act 2016)',
            relevance: 'Statutory basis of MPC and quantitative credit controls.'
          },
          {
            source: 'State Level Bankers’ Committee (SLBC) Tamil Nadu',
            year: '2023-24',
            reportName: 'Annual Credit Plan Review 2023-24',
            relevance: 'Priority sector lending achievement in Tamil Nadu.'
          }
        ]
      },
      {
        id: 'fiscal-policy-and-deficits',
        titleEn: 'Fiscal Policy, FRBM Act & Macroeconomic Balances',
        titleTa: 'நிதிக் கொள்கை, FRBM சட்டம் மற்றும் பற்றாக்குறைகள்',
        kicker: 'Public Finance · Revenue & Expenditure Management',
        summaryTa: 'அரசின் வரி விதிப்பு, பொதுக் கடன் மற்றும் பொதுச் செலவினங்களை நிர்வகிக்கும் நடைமுறை நிதிக் கொள்கை (Fiscal Policy) எனப்படும். 2003-ல் இயற்றப்பட்ட நிதி பொறுப்புணர்வு மற்றும் பட்ஜெட் மேலாண்மைச் சட்டம் (FRBM Act 2003), நிதிப் பற்றாக்குறையை மொத்த உள்நாட்டு உற்பத்தியில் 3% ஆகக் கட்டுப்படுத்த வழிகாட்டுகிறது.',
        summaryEn: 'Fiscal policy orchestrates government revenue collection, public debt, and expenditure to maintain macroeconomic stability and equitable growth. The Fiscal Responsibility and Budget Management (FRBM) Act 2003 mandates targets to rein in Fiscal Deficit, Revenue Deficit, and Debt-to-GDP ratios.',
        keyTerminology: [
          {
            english: 'Fiscal Deficit',
            tamil: 'நிதிப் பற்றாக்குறை',
            definition: 'Excess of total government expenditure over total non-borrowed receipts: Total Exp - (Revenue Receipts + Non-debt Capital Receipts).'
          },
          {
            english: 'Revenue Deficit',
            tamil: 'வருவாய்ப் பற்றாக்குறை',
            definition: 'Excess of government revenue expenditure over revenue receipts, signifying consumption borrowing.'
          },
          {
            english: 'Primary Deficit',
            tamil: 'முதன்மைப் பற்றாக்குறை',
            definition: 'Fiscal Deficit minus Interest Payments on previous accumulated public debt.'
          },
          {
            english: 'FRBM Act 2003',
            tamil: 'FRBM சட்டம் 2003',
            definition: 'Statutory framework to ensure intergenerational equity in fiscal management and eliminate revenue deficit.'
          }
        ],
        diagramType: 'supply-demand',
        keyFacts: [
          {
            labelEn: 'Union Fiscal Deficit Target',
            labelTa: 'மத்திய நிதிப் பற்றாக்குறை இலக்கு',
            value: '4.9% of GDP for FY 2024-25 (Budget Estimates)',
            context: 'Gliding path towards below 4.5% by FY 2025-26.'
          },
          {
            labelEn: 'Capital Expenditure (Capex) Push',
            labelTa: 'மூலதனச் செலவினம் (Capex)',
            value: '₹11.11 Lakh Crore (~3.4% of GDP, 2024-25 BE)',
            context: 'Productive infrastructure building multiplier effect.'
          },
          {
            labelEn: 'State Borrowing Limit',
            labelTa: 'மாநில கடன் வரம்பு',
            value: '3.0% of GSDP under FRBM (+ 0.5% linked to Power Sector Reforms)',
            context: 'Enforced under Article 293(3) of the Indian Constitution.'
          }
        ],
        caseStudies: [
          {
            title: 'Tamil Nadu Fiscal Consolidation & Revenue Drive',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'தமிழ்நாடு நிதிநிலை அறிக்கை 2024-25-ல், சொந்த வரி வருவாயை (SOTR - State Own Tax Revenue) ஜி.எஸ்.டி, பத்திரப் பதிவு மற்றும் மோட்டார் வாகன வரி மூலம் உயர்த்தி, நிதிப் பற்றாக்குறையை ஜி.எஸ்.டி.பி-யில் 3.44% என்ற நிலைக்குள் பராமரிக்கிறது.',
            detailEn: 'Tamil Nadu manages high social welfare investments by leveraging its own robust State Own Tax Revenue (SOTR: commercial taxes, stamps & registration, motor vehicles), keeping its fiscal deficit within FRBM norms (~3.44% GSDP).'
          }
        ],
        citations: [
          {
            source: 'Ministry of Finance, Government of India',
            year: '2024',
            reportName: 'Union Budget 2024-2025 · Budget at a Glance',
            relevance: 'Official figures for Revenue, Capital, and Deficit ratios.'
          },
          {
            source: 'Finance Department, Government of Tamil Nadu',
            year: '2024',
            reportName: 'Tamil Nadu Budget Highlights 2024-2025',
            relevance: 'SOTR and fiscal deficit indicators.'
          }
        ]
      },
      {
        id: 'finance-commission-and-gst',
        titleEn: 'Finance Commission Devolution & GST Architecture',
        titleTa: 'நிதிக்குழு நிதிப்பகிர்வு மற்றும் சரக்கு மற்றும் சேவை வரி (GST)',
        kicker: 'Fiscal Federalism · Constitutional Architecture',
        summaryTa: 'இந்திய அரசியலமைப்புச் சட்டம் உறுப்பு 280-ன் கீழ் குடியரசுத் தலைவரால் ஒவ்வொரு 5 ஆண்டுகளுக்கும் ஒருமுறை நிதிக்குழு அமைக்கப்படுகிறது. 15-வது நிதிக்குழு (தலைவர்: N.K. சிங்) மத்திய வரி வருவாயில் 41%-ஐ மாநிலங்களுக்குப் பகிர்ந்தளிக்கப் பரிந்துரைத்தது. மேலும் 101-வது அரசியலமைப்புத் திருத்தச் சட்டம் (2016) மூலம் உருவான ஜி.எஸ்.டி ஒரு முனைவரி முறையாகும்.',
        summaryEn: 'Constituted under Article 280, the Finance Commission determines vertical devolution (Centre to States) and horizontal sharing formula across States. The 15th FC (N.K. Singh) recommended a 41% devolution pool. Concurrently, the 101st Amendment Act (2016) established GST under Article 279A, pooling sovereignty under the GST Council.',
        keyTerminology: [
          {
            english: 'Article 280',
            tamil: 'அரசியலமைப்பு உறுப்பு 280',
            definition: 'Constitutional provision empowering the President to constitute a Finance Commission every 5 years.'
          },
          {
            english: 'Vertical Devolution',
            tamil: 'செங்குத்துப் பகிர்வு',
            definition: 'Percentage share of the Net Divisible Pool of Central Taxes allocated to the States (currently 41%).'
          },
          {
            english: 'Horizontal Devolution Formula',
            tamil: 'கிடைமட்டப் பகிர்வு சூத்திரம்',
            definition: 'Weightage criteria (Income distance, 2011 population, Area, Forest/Ecology, Demographic performance, Tax effort) to divide funds among states.'
          },
          {
            english: 'GST Council (Article 279A)',
            tamil: 'ஜி.எஸ்.டி கவுன்சில்',
            definition: 'Joint federal forum chaired by Union Finance Minister; States hold 2/3 voting weight and Centre holds 1/3.'
          }
        ],
        diagramType: 'gst-sharing',
        keyFacts: [
          {
            labelEn: '15th Finance Commission Allocation',
            labelTa: '15-வது நிதிக்குழு பகிர்வு விகிதம்',
            value: '41% of Divisible Pool (1% adjusted for J&K and Ladakh UTs)',
            context: 'Period: 2021-22 to 2025-26, headed by N.K. Singh.'
          },
          {
            labelEn: 'Horizontal Sharing Formula Criteria',
            labelTa: 'கிடைமட்ட பகிர்வு அளவுகோல்கள்',
            value: 'Income Distance: 45% | 2011 Population: 15% | Area: 15% | Forest: 10% | Demographic Performance: 12.5% | Tax Effort: 2.5%',
            context: 'Demographic performance rewards states with lower fertility rates.'
          },
          {
            labelEn: 'Tamil Nadu Share in Devolution',
            labelTa: 'தமிழ்நாட்டின் பகிர்வு பங்கு',
            value: '4.079% of the horizontal pool',
            context: 'Declined from 5.305% in the 12th Finance Commission.'
          },
          {
            labelEn: 'GST Amendment Act',
            labelTa: 'ஜி.எஸ்.டி திருத்தச் சட்டம்',
            value: '101st Amendment Act 2016, effective from July 1, 2017',
            context: 'Dual GST model: CGST, SGST, IGST, UTGST.'
          }
        ],
        caseStudies: [
          {
            title: 'Tamil Nadu’s Fiscal Position in Federal Transfers',
            stateOrUnion: 'Tamil Nadu',
            detailTa: '1971 மக்கள் தொகைக்குப் பதிலாக 2011 மக்கள் தொகையைப் பயன்படுத்தியதால் தமிழ்நாட்டின் நிதிப்பகிர்வு விகிதம் குறைந்த போதிலும், மக்கள் தொகைக் கட்டுப்பாட்டு சாதனைக்காக வழங்கப்பட்ட 12.5% அளவுகோல் தமிழ்நாட்டிற்கு ஓரளவு பாதுகாப்பளித்தது. 16-வது நிதிக்குழு (அரவிந்த் பனகாரியா) முன் தமிழ்நாடு நியாயமான நிதிப்பகிர்வை வலியுறுத்தியுள்ளது.',
            detailEn: 'While the transition to 2011 census penalised demographic achievers, the 12.5% weightage for Demographic Performance partially protected Tamil Nadu. Tamil Nadu’s memorandum to the 16th Finance Commission (chaired by Dr. Arvind Panagariya) seeks greater weight for economic contribution and GSDP performance.'
          }
        ],
        citations: [
          {
            source: 'Fifteenth Finance Commission of India',
            year: '2020',
            reportName: 'Finance Commission in COVID Times: Report for 2021-26',
            relevance: 'Devolution formula weights and state-wise share coefficients.'
          },
          {
            source: 'Goods and Services Tax Network (GSTN)',
            year: '2024',
            reportName: 'Monthly GST Revenue Collections Dashboard',
            relevance: 'CGST, SGST, IGST inter-state settlements.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    number: 2,
    titleEn: 'Agriculture, Industry & Employment in Tamil Nadu & India',
    titleTa: 'வேளாண்மை, தொழிற்துறை மற்றும் வேலைவாய்ப்பு',
    descriptionEn: 'Economic structural shifts, land reforms, Green Revolution, S&T in precision agriculture, MSME & industrial corridors, and rural livelihood programmes.',
    descriptionTa: 'கட்டமைப்பு மாற்றம், நிலச்சீர்திருத்தங்கள், பசுமைப் புரட்சி, துல்லிய வேளாண்மையில் அறிவியல் தொழில்நுட்பம், தொழில் மண்டலங்கள் மற்றும் ஊரக வாழ்வாதாரத் திட்டங்கள்.',
    colorTheme: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconName: 'Factory',
    lessons: [
      {
        id: 'structural-transformation',
        titleEn: 'Structural Transformation & Sectoral Transition',
        titleTa: 'பொருளாதார கட்டமைப்பு மாற்றம் மற்றும் துறைப் பகிர்வு',
        kicker: 'Structural Economics · Employment Dynamics',
        summaryTa: 'பொருளாதார வளர்ச்சியில் வழக்கமாக வேளாண்மை -> உற்பத்தி -> சேவை என்ற வரிசையில் மாற்றங்கள் நிகழும் (Colin Clark-Fisher hypothesis). ஆனால் இந்தியாவில் உற்பத்தித் துறை முழு வளர்ச்சி அடைவதற்கு முன்பே சேவைத்துறை வேகமாக வளர்ந்தது. தமிழ்நாடு மட்டுமே வலுவான தொழிற்துறை உற்பத்தியை தக்கவைத்து தனித்து நிற்கிறது.',
        summaryEn: 'Classical structural transformation moves workers from low-productivity agriculture to high-productivity manufacturing, and then to services. India exhibited a leapfrogging pattern to services, while Tamil Nadu stands out for maintaining a diversified industrial manufacturing backbone.',
        keyTerminology: [
          {
            english: 'Structural Shift',
            tamil: 'கட்டமைப்பு மாற்றம்',
            definition: 'Reallocation of economic activity and labor across agriculture, industry, and service sectors.'
          },
          {
            english: 'Disguised Unemployment',
            tamil: 'மறைமுக வேலையின்மை',
            definition: 'Situation where more laborers work in agriculture than required; marginal productivity of excess labor is zero.'
          },
          {
            english: 'Jobless Growth',
            tamil: 'வேலைவாய்ப்பற்ற வளர்ச்சி',
            definition: 'Economic expansion propelled by capital-intensive technology without proportional expansion in employment opportunities.'
          }
        ],
        diagramType: 'structural-shift',
        keyFacts: [
          {
            labelEn: 'TN Factory Density',
            labelTa: 'தொழிற்சாலைகள் எண்ணிக்கை',
            value: 'Rank 1 in India: ~38,837 operating factories (~15.8% of India)',
            context: 'Annual Survey of Industries (ASI) 2021-22.'
          },
          {
            labelEn: 'Women in Manufacturing',
            labelTa: 'உற்பத்தித் துறையில் பெண் தொழிலாளர்கள்',
            value: 'Tamil Nadu employs ~42% of all women factory workers in India',
            context: 'Driven by electronics assembly, textiles, and auto-components.'
          }
        ],
        caseStudies: [
          {
            title: 'Tiruppur Knitwear & Hosur EV Hubs',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'திருப்பூர் இந்தியாவின் பின்னலாடை ஏற்றுமதியில் 50% க்கும் மேல் பங்களிக்கிறது (டாலர் சிட்டி). ஓசூர் இந்தியாவின் முன்னணி மின்சார வாகன (EV) உற்பத்தி மையமாக (ஓலா, ஏத்தர்) உருவெடுத்துள்ளது.',
            detailEn: 'Tiruppur contributes over 50% of India’s knitwear textile exports, earning the moniker Dollar City. Hosur has transformed into South Asia’s prominent Electric Vehicle (EV) manufacturing hub (Ola Electric, Ather Energy).'
          }
        ],
        citations: [
          {
            source: 'Ministry of Statistics & Programme Implementation',
            year: '2023',
            reportName: 'Annual Survey of Industries (ASI) 2021-22',
            relevance: 'State-wise factory counts and factory employment.'
          }
        ]
      },
      {
        id: 'agriculture-tech-land-reforms',
        titleEn: 'Land Reforms, Agriculture S&T and Rural Welfare',
        titleTa: 'நிலச் சீர்திருத்தங்கள், வேளாண் அறிவியல் தொழில்நுட்பம் & ஊரக நலம்',
        kicker: 'Agrarian Policy · Food Security & Technology',
        summaryTa: 'ஜமீன்தாரி முறை ஒழிப்பு, 1961 தமிழ்நாடு நில உச்சவரம்புச் சட்டம், மற்றும் எம்.எஸ். சுவாமிநாதன் வழிநடத்திய பசுமைப் புரட்சி ஆகியவை தமிழக விவசாயத்தை நவீனப்படுத்தின. தற்போது உழவன் செயலி (Uzhavan App), துல்லிய பண்ணையம் (Precision Farming), சொட்டு நீர் பாசனம் மூலம் தொழில்நுட்பப் புரட்சி நிகழ்கிறது.',
        summaryEn: 'Agrarian transformation in Tamil Nadu combined statutory land ceiling reforms (1961 Land Ceiling Act: 15 standard acres) with Dr. M.S. Swaminathan’s Green Revolution high-yielding varieties. Today, Tamil Nadu leads in micro-irrigation and digital agro-services via Uzhavan App.',
        keyTerminology: [
          {
            english: 'Land Ceiling Act',
            tamil: 'நில உச்சவரம்புச் சட்டம் (1961)',
            definition: 'Legislative cap on individual land ownership to redistribute surplus land to landless agricultural laborers.'
          },
          {
            english: 'Minimum Support Price (MSP)',
            tamil: 'குறைந்தபட்ச ஆதரவு விலை',
            definition: 'Guaranteed floor price recommended by CACP based on A2+FL and C2 production costs to protect farmers from price crashes.'
          },
          {
            english: 'Precision Agriculture',
            tamil: 'துல்லிய வேளாண்மை',
            definition: 'Utilisation of IoT sensors, drip fertigation, and drone tech to optimize water, seed, and nutrient efficiency.'
          }
        ],
        diagramType: 'tn-map',
        keyFacts: [
          {
            labelEn: 'Cauvery Delta Rice Bowl',
            labelTa: 'காவிரி டெல்டா நெற்களஞ்சியம்',
            value: 'Thanjavur, Tiruvarur, Nagapattinam, Mayiladuthurai',
            context: 'Kuruvai and Thaladi paddy seasons.'
          },
          {
            labelEn: 'Uzhavan App Services',
            labelTa: 'உழவன் செயலி சேவைகள்',
            value: '22+ digital services including seed subsidies, farm machinery booking, weather',
            context: 'Tamil Nadu Agriculture Department digital platform.'
          }
        ],
        caseStudies: [
          {
            title: 'Kudimaramathu Participatory Irrigation Scheme',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'பாரம்பரிய குடிமராமத்து திட்டத்தின் கீழ் விவசாயிகள் மற்றும் கிராமப் பொதுமக்களின் பங்களிப்புடன் ஏரிகள், குளங்கள் தூர்வாரப்பட்டு நிலத்தடி நீர்மட்டம் உயர்த்தப்படுகிறது.',
            detailEn: 'Revival of the ancient Kudimaramathu community tank desilting initiative restores traditional village water bodies through farmer collective participation.'
          }
        ],
        citations: [
          {
            source: 'Department of Agriculture & Farmers Welfare, GoTN',
            year: '2024',
            reportName: 'Agriculture Policy Note 2024-25',
            relevance: 'Crop production data, MSP procurement, and micro-irrigation coverage.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    number: 3,
    titleEn: 'Social & Human Development Indicators',
    titleTa: 'சமூக மற்றும் மனித மேம்பாட்டுக் குறியீடுகள்',
    descriptionEn: 'Demographic transition, healthcare indicators (IMR, MMR), educational attainment (GER), multidimensional poverty (MPI), and comparative inter-state index analysis.',
    descriptionTa: 'மக்கள் தொகையியல் மாற்றம், நல்வாழ்வுக் குறியீடுகள் (IMR, MMR), உயர்கல்வி சேர்க்கை விகிதம் (GER), பலபரிமாண வறுமைக் குறியீடு (MPI) மற்றும் மாநிலங்களுக்கிடையேயான ஒப்பீடு.',
    colorTheme: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    iconName: 'Users',
    lessons: [
      {
        id: 'demographics-and-hdi',
        titleEn: 'Demographic Transition & Tamil Nadu HDI Superiority',
        titleTa: 'மக்கள் தொகையியல் மாற்றம் மற்றும் தமிழக மனித மேம்பாடு',
        kicker: 'Human Development · Vital Statistics',
        summaryTa: 'தமிழ்நாடு இந்தியாவின் மக்கள் தொகையியல் மாற்றத்தில் முன்னணி மாநிலமாகும். தமிழகத்தின் மொத்தக் கருவுறுதல் விகிதம் (TFR) 1.4 ஆக குறைந்துள்ளது (பதிலீட்டு விகிதமான 2.1-ஐ விட குறைவு). கல்வி, மருத்துவக் கட்டமைப்பு மற்றும் பெண்களின் சுதந்திரம் காரணமாக தமிழ்நாட்டின் மனித மேம்பாட்டுக் குறியீடு (HDI ~0.708) அகில இந்திய சராசரியை விட மிகவும் அதிகம்.',
        summaryEn: 'Tamil Nadu is in the advanced phase of demographic transition with a Total Fertility Rate (TFR) of ~1.4, well below the replacement rate of 2.1. Its robust rural health infrastructure, high female literacy, and universal social security place its HDI (~0.708) among India’s top tier.',
        keyTerminology: [
          {
            english: 'Human Development Index (HDI)',
            tamil: 'மனித மேம்பாட்டுக் குறியீடு',
            definition: 'Composite index measuring life expectancy, mean/expected years of schooling, and Gross National Income per capita.'
          },
          {
            english: 'Infant Mortality Rate (IMR)',
            tamil: 'குழந்தை இறப்பு விகிதம்',
            definition: 'Number of infant deaths under 1 year of age per 1,000 live births.'
          },
          {
            english: 'Maternal Mortality Ratio (MMR)',
            tamil: 'தாய்மார் இறப்பு விகிதம்',
            definition: 'Number of maternal deaths per 100,000 live births due to pregnancy or childbirth complications.'
          },
          {
            english: 'Gross Enrolment Ratio (GER)',
            tamil: 'மொத்த சேர்க்கை விகிதம்',
            definition: 'Percentage of population in the 18–23 age group enrolled in tertiary/higher educational institutions.'
          }
        ],
        diagramType: 'hdi-compare',
        keyFacts: [
          {
            labelEn: 'Infant Mortality Rate (IMR)',
            labelTa: 'குழந்தை இறப்பு விகிதம் (SRS 2023)',
            value: 'Tamil Nadu: 13 | All-India Average: 28 per 1,000 births',
            context: 'Tamil Nadu has already surpassed the UN Sustainable Development Goal (SDG) target.'
          },
          {
            labelEn: 'Maternal Mortality Ratio (MMR)',
            labelTa: 'தாய்மார் இறப்பு விகிதம் (SRS 2023)',
            value: 'Tamil Nadu: 54 | All-India Average: 97 per 1 Lakh births',
            context: 'Target of reaching below 40 by 2030.'
          },
          {
            labelEn: 'Higher Education GER',
            labelTa: 'உயர்கல்வி மொத்த சேர்க்கை (AISHE)',
            value: 'Tamil Nadu: ~51.3% | National Average: ~28.4%',
            context: 'Nearly double the national average; higher than many developed nations.'
          },
          {
            labelEn: 'Multidimensional Poverty Index (MPI)',
            labelTa: 'பலபரிமாண வறுமை குறியீடு (2023)',
            value: 'Tamil Nadu: 1.43% population in poverty (4th lowest in India)',
            context: 'NITI Aayog National MPI Report 2023.'
          }
        ],
        caseStudies: [
          {
            title: 'Makkalai Thedi Maruthuvam & Doorstep Healthcare',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'மக்களைத் தேடி மருத்துவம் திட்டம் மூலம் உயர் இரத்த அழுத்தம், சர்க்கரை நோய் போன்ற தொற்றா நோய்களுக்கான (NCDs) மருந்துகள் மற்றும் பரிசோதனைகள் ஏழை எளிய மக்களின் வீடுகளுக்கே நேரடியாக கொண்டு சேர்க்கப்படுகின்றன.',
            detailEn: 'Makkalai Thedi Maruthuvam delivers doorstep screening and free medications for non-communicable diseases (hypertension, diabetes), reaching over 1 Crore beneficiaries.'
          }
        ],
        citations: [
          {
            source: 'Registrar General of India',
            year: '2023',
            reportName: 'Sample Registration System (SRS) Statistical Report 2023',
            relevance: 'Official vital statistics: IMR, MMR, TFR, and Sex Ratio.'
          },
          {
            source: 'Ministry of Education, Government of India',
            year: '2023',
            reportName: 'All India Survey on Higher Education (AISHE) 2021-22',
            relevance: 'Gross Enrolment Ratio across states.'
          },
          {
            source: 'NITI Aayog',
            year: '2023',
            reportName: 'India: National Multidimensional Poverty Index Baseline Report 2023',
            relevance: 'State-wise multidimensional poverty headcount ratios.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    number: 4,
    titleEn: 'Social Justice & Tamil Nadu Welfare Architecture',
    titleTa: 'சமூக நீதி மற்றும் தமிழக நலத்திட்டங்களின் கட்டமைப்பு',
    descriptionEn: 'Impact of social reform movements (Justice Party, Self-Respect Movement), affirmative action & 69% reservation, affirmative state capacity, and comprehensive lifecycle welfare architecture.',
    descriptionTa: 'நீதிக்கட்சி மற்றும் சுயமரியாதை இயக்கத்தின் சமூக சீர்திருத்த தாக்கம், 69% இடஒதுக்கீட்டின் சமூகநீதி அடிப்படை மற்றும் முழுமையான வாழ்க்கை சுழற்சி நலத்திட்டங்கள்.',
    colorTheme: 'from-purple-500/20 via-pink-500/10 to-transparent',
    iconName: 'Scale',
    lessons: [
      {
        id: 'social-justice-and-reservation',
        titleEn: 'Social Reform Movements & 69% Reservation Policy',
        titleTa: 'சமூக சீர்திருத்த இயக்கங்கள் மற்றும் 69% இடஒதுக்கீட்டுக் கொள்கை',
        kicker: 'Affirmative Action · Constitutional Safeguards',
        summaryTa: '1916-ல் நீதிக்கட்சி வெளியிட்ட பிராமணரல்லாதார் அறிக்கை மற்றும் 1921 & 1928-ல் கொண்டுவரப்பட்ட வகுப்புவாரி பிரதிநிதித்துவ அரசாணை (Communal G.O.) சமூகநீதியின் அடித்தளமாகும். பெரியாரின் சுயமரியாதை இயக்கம், அண்ணா, கலைஞர், எம்.ஜி.ஆர் ஆகியோரின் தொடர் நடவடிக்கைகள் மூலம் உருவாக்கப்பட்ட 69% இடஒதுக்கீடு, 76-வது அரசியலமைப்புத் திருத்தச் சட்டம் (1994) மூலம் இந்திய அரசியலமைப்பின் 9-வது அட்டவணையில் சேர்க்கப்பட்டு பாதுகாக்கப்பட்டுள்ளது.',
        summaryEn: 'Tamil Nadu’s social democracy began with the Justice Party’s 1916 Non-Brahmin Manifesto and the pioneering Communal G.O. (1921/1928). Catalysed by Periyar E.V. Ramasamy’s Self-Respect Movement, Tamil Nadu institutionalised a 69% affirmative action reservation quota, shielded from judicial review under the 9th Schedule via the 76th Constitutional Amendment Act 1994.',
        keyTerminology: [
          {
            english: 'Communal G.O. (1921/1928)',
            tamil: 'வகுப்புவாரி அரசாணை',
            definition: 'Historic executive order providing proportionate communal representation in government jobs and education.'
          },
          {
            english: '69% Reservation Policy',
            tamil: '69% இடஒதுக்கீட்டுக் கொள்கை',
            definition: 'Tamil Nadu’s affirmative action quota breakdown: BC 26.5%, BCM 3.5%, MBC/DNC 20%, SC 15%, SC(A) 3%, ST 1%.'
          },
          {
            english: '76th Constitutional Amendment 1994',
            tamil: '76-வது அரசியலமைப்புத் திருத்தம் (1994)',
            definition: 'Inserted the Tamil Nadu Reservation Act into the Ninth Schedule under Article 31B to protect it from judicial invalidation.'
          },
          {
            english: 'Universal PDS',
            tamil: 'அனைவருக்குமான பொது விநியோகத் திட்டம்',
            definition: 'Ration delivery model where subsidized/free food grains are provided to all households without income exclusion criteria.'
          }
        ],
        diagramType: 'social-reform',
        keyFacts: [
          {
            labelEn: 'Reservation Quota Breakdown',
            labelTa: 'இடஒதுக்கீடு விகிதப் பகிர்வு (மொத்தம் 69%)',
            value: 'BC: 26.5% | BC Muslims: 3.5% | MBC/DNC: 20% | SC: 15% | Arunthathiyar: 3% | ST: 1%',
            context: 'Tamil Nadu Act 45 of 1994.'
          },
          {
            labelEn: 'Constitutional Landmark',
            labelTa: 'அரசியலமைப்பு மைல்கல்',
            value: 'First Constitutional Amendment (1951) introduced Article 15(4)',
            context: 'Prompted by State of Madras v. Champakam Dorairajan case.'
          },
          {
            labelEn: '7.5% Horizontal Reservation',
            labelTa: '7.5% உள் ஒதுக்கீடு',
            value: 'Exclusive quota for Government School students in Medical, Engineering & Professional courses',
            context: 'To bridge the rural-urban schooling divide.'
          }
        ],
        caseStudies: [
          {
            title: 'Kalaignar Magalir Urimai Thittam & Vidiyal Payanam',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'கலைஞர் மகளிர் உரிமைத் திட்டத்தின் மூலம் தகுதியான 1.15 கோடி மகளிருக்கு மாதம் ₹1,000 உரிமைத் தொகையும், விடியல் பயணம் திட்டம் மூலம் அரசுப் பேருந்துகளில் மகளிருக்கு கட்டணமில்லா பயணமும் வழங்கப்பட்டு பெண்களின் பொருளாதார சுதந்திரம் உறுதி செய்யப்பட்டுள்ளது.',
            detailEn: 'Kalaignar Magalir Urimai Thittam delivers a monthly basic income guarantee of ₹1,000 to over 1.15 crore women heads of households, paired with the Vidiyal Payanam free bus travel scheme which boosts women’s labor force participation.'
          }
        ],
        citations: [
          {
            source: 'Ministry of Law and Justice, Government of India',
            year: '1994',
            reportName: 'Constitution (Seventy-sixth Amendment) Act, 1994',
            relevance: '9th Schedule inclusion of Tamil Nadu Act 45 of 1994.'
          },
          {
            source: 'Social Welfare & Women Empowerment Department, GoTN',
            year: '2024',
            reportName: 'Welfare Schemes Policy Note 2024-25',
            relevance: 'Beneficiary numbers for Magalir Urimai Thittam and Vidiyal Payanam.'
          }
        ]
      },
      {
        id: 'lifecycle-welfare-architecture',
        titleEn: 'Lifecycle Welfare Schemes & Social Mobility',
        titleTa: 'வாழ்க்கைச் சுழற்சி நலத்திட்டங்கள் மற்றும் சமூக இயக்கம்',
        kicker: 'Welfare Architecture · Cradle-to-Elderly Social Safety',
        summaryTa: 'தமிழ்நாட்டின் நலத்திட்டங்கள் ஒரு குடிமகனின் பிறப்பு முதல் முதியோர் காலம் வரை அனைத்து கட்டங்களையும் உள்ளடக்கியது. கர்ப்பிணி தாய்மார்களுக்கு முத்துலட்சுமி ரெட்டி மகப்பேறு உதவி, குழந்தைகளுக்கு காலை உணவு & சத்துணவு, பள்ளி மாணவிகளுக்கு புதுமைப் பெண் திட்டம், மாணவர்களுக்கு தமிழ் புதல்வன் திட்டம் என முழுமையான வாழ்க்கைச் சுழற்சி பாதுகாப்பு உறுதி செய்யப்படுகிறது.',
        summaryEn: 'Tamil Nadu designed an all-encompassing cradle-to-grave welfare architecture that converts social expenditure into human capital investments: maternal nutrition, free breakfast & midday meals, higher education cash transfers, and universal pension security.',
        keyTerminology: [
          {
            english: 'Pudhumai Penn Scheme',
            tamil: 'புதுமைப் பெண் திட்டம்',
            definition: 'Moovalur Ramamirtham Ammaiyar Higher Education scheme providing ₹1,000/month to government school girls pursuing degrees.'
          },
          {
            english: 'Chief Minister Breakfast Scheme',
            tamil: 'முதலமைச்சரின் காலை உணவுத் திட்டம்',
            definition: 'Provides free hot cooked nutritional breakfast to primary school children (Classes 1–5) in all government schools.'
          },
          {
            english: 'Dr. Muthulakshmi Reddy Maternity Scheme',
            tamil: 'டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவி',
            definition: 'Cash and nutrition kit assistance worth ₹18,000 for poor pregnant mothers to combat infant low-birth-weight.'
          }
        ],
        diagramType: 'welfare-journey',
        keyFacts: [
          {
            labelEn: 'Midday Meal Evolution',
            labelTa: 'சத்துணவுத் திட்ட பரிணாமம்',
            value: '1920 (Justice Party) -> 1955 (Kamarajar) -> 1982 (MGR) -> 2022 (Breakfast Scheme)',
            context: 'First of its kind in India; later mandated nationally by Supreme Court in 2001.'
          },
          {
            labelEn: 'Higher Education Enrolment Boost',
            labelTa: 'புதுமைப் பெண் திட்ட தாக்கம்',
            value: '>34% surge in government school girl enrolment in collegiate education',
            context: 'Higher Education Department impact study.'
          }
        ],
        caseStudies: [
          {
            title: 'Samathuvapuram Equality Villages',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'ஜாதி பாகுபாடுகளைக் களைவதற்காக உருவாக்கப்பட்ட பெரியார் நினைவு சமத்துவபுரங்களில் அனைத்து சமூக மக்களும் ஒரே பகுதியில் வாழும் வீடுகள் கட்டப்பட்டு பொது மயானம் மற்றும் பொது இடங்களுடன் சமூக நல்லிணக்கம் பேணப்படுகிறது.',
            detailEn: 'Periyar Ninaivu Samathuvapurams are integrated model settlements where housing is allocated proportionately across castes to eliminate residential segregation and promote communal fraternity.'
          }
        ],
        citations: [
          {
            source: 'State Development Policy Council (SDPC) Tamil Nadu',
            year: '2023',
            reportName: 'Evaluation Study on Chief Minister’s Breakfast Scheme',
            relevance: 'School attendance surge and nutritional outcomes.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    number: 5,
    titleEn: 'Tamil Nadu Development, Geography & Industrial Corridors',
    titleTa: 'தமிழ்நாடு வளர்ச்சி, புவியியல் மற்றும் தொழில் மண்டலங்கள்',
    descriptionEn: 'Economic geography, coastline and port infrastructure, manufacturing clusters, renewable wind energy dominance, and national sectoral rankings.',
    descriptionTa: 'பொருளாதார புவியியல், கடற்கரை மற்றும் துறைமுக உள்கட்டமைப்பு, தொழில் தொகுப்புகள், புதுப்பிக்கத்தக்க காற்று ஆற்றல் மற்றும் தேசிய சாதனைகள்.',
    colorTheme: 'from-emerald-600/20 via-blue-600/10 to-transparent',
    iconName: 'MapPin',
    lessons: [
      {
        id: 'geography-ports-and-growth',
        titleEn: 'Geography, Ports & Maritime Logistics as Growth Drivers',
        titleTa: 'புவியியல், துறைமுகங்கள் மற்றும் கடல்சார் வர்த்தகம்',
        kicker: 'Economic Geography · Infrastructure Backbone',
        summaryTa: 'தமிழ்நாடு 1,076 கி.மீ நீளமுள்ள கடற்கரையைக் கொண்டு (இந்தியாவின் 2-வது நீண்ட கடற்கரை) 3 முக்கிய துறைமுகங்களையும் (சென்னை, காமராஜர்-எண்ணூர், வ.உ.சிதம்பரனார்-தூத்துக்குடி) பல சிறிய துறைமுகங்களையும் கொண்டுள்ளது. இது தமிழ்நாட்டை உலகளாவிய ஏற்றுமதி மற்றும் கடல்சார் வர்த்தகத்தின் முக்கிய மையமாக மாற்றியுள்ளது.',
        summaryEn: 'With a 1,076 km coastline (India’s 2nd longest) and three major deep-water ports (Chennai, Kamarajar-Ennore, V.O. Chidambaranar-Thoothukudi), Tamil Nadu commands strategic advantages along maritime trade lanes, driving its export competitiveness in automotive, hardware, and chemicals.',
        keyTerminology: [
          {
            english: 'Coromandel Coast',
            tamil: 'சோழமண்டலக் கடற்கரை',
            definition: 'Eastern maritime coastline receiving majority rainfall from North-East Monsoon (Oct-Dec).'
          },
          {
            english: 'Special Economic Zone (SEZ)',
            tamil: 'சிறப்புப் பொருளாதார மண்டலம்',
            definition: 'Duty-free enclave treated as foreign territory for trade operations to attract export manufacturing FDI.'
          },
          {
            english: 'Muppandal Wind Farm',
            tamil: 'முப்பந்தல் காற்றாலை பண்ணை',
            definition: 'One of the world’s largest operational onshore wind power clusters located in Kanyakumari-Tirunelveli gap.'
          }
        ],
        diagramType: 'tn-map',
        keyFacts: [
          {
            labelEn: 'Renewable Wind Energy',
            labelTa: 'புதுப்பிக்கத்தக்க காற்று ஆற்றல்',
            value: 'Tamil Nadu holds ~10,200 MW wind capacity (~24% of India total)',
            context: 'National Institute of Wind Energy (NIWE).'
          },
          {
            labelEn: 'Electronics Export Leadership',
            labelTa: 'மின்னணு சாதனங்கள் ஏற்றுமதி (2023-24)',
            value: 'Rank 1 in India: Exports worth $7.37 Billion (~33% of India total)',
            context: 'Ministry of Commerce & Industry / DGCIS data.'
          },
          {
            labelEn: 'Major Sea Ports',
            labelTa: 'முக்கிய துறைமுகங்கள்',
            value: 'Chennai Port, Kamarajar Port (Ennore), V.O.C Port (Thoothukudi)',
            context: 'Handling container, automotive roll-on/roll-off, and bulk cargo.'
          }
        ],
        caseStudies: [
          {
            title: 'Chennai: The Detroit of South Asia',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'சென்னை-ஸ்ரீபெரும்புதூர்-ஒரகடம் தொழில் மண்டலம் இந்தியாவின் ஆட்டோமொபைல் உற்பத்தியில் 35% க்கும் மேல் பங்களிக்கிறது (ஹூண்டாய், பிஎம்டபிள்யூ, ஃபோர்டு, ராயல் என்பீல்ட்).',
            detailEn: 'The Chennai-Sriperumbudur-Oragadam corridor manufactures >35% of India’s four-wheelers and auto-components, earning it the title Detroit of South Asia.'
          }
        ],
        citations: [
          {
            source: 'Ministry of Commerce and Industry (DGCIS)',
            year: '2024',
            reportName: 'State-wise Export Performance Report FY 2023-24',
            relevance: 'Tamil Nadu electronic and auto export metrics.'
          },
          {
            source: 'Tamil Nadu Industrial Development Corporation (TIDCO)',
            year: '2024',
            reportName: 'Industrial Corridors and Defence Industrial Corridor Map',
            relevance: 'Cluster specialisation in aerospace, EV, and textiles.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    number: 6,
    titleEn: 'Development Administration & e-Governance in Tamil Nadu',
    titleTa: 'வளர்ச்சி நிர்வாகம் மற்றும் மின்னாளுமை',
    descriptionEn: 'e-Governance architecture (TNeGA), citizen service delivery (e-Sevai), biometric PDS reforms, grievance redressal systems, and current socioeconomic policy reforms.',
    descriptionTa: 'மின்னாளுமை கட்டமைப்பு (TNeGA), இ-சேவை மையங்கள், பயோமெட்ரிக் பொது விநியோகம், குறைதீர்ப்பு அமைப்புகள் மற்றும் தற்போதைய சமூக-பொருளாதார கொள்கை மாற்றங்கள்.',
    colorTheme: 'from-amber-600/20 via-emerald-600/10 to-transparent',
    iconName: 'Network',
    lessons: [
      {
        id: 'egovernance-and-public-delivery',
        titleEn: 'e-Governance Architecture (TNeGA) & PDS Reforms',
        titleTa: 'மின்னாளுமை கட்டமைப்பு (TNeGA) & பொது விநியோக சீர்திருத்தங்கள்',
        kicker: 'Administrative Reforms · Digital Service Delivery',
        summaryTa: 'தமிழ்நாடு மின்னாளுமை முகமை (TNeGA) மூலம் இ-சேவை மையங்கள், நம்பிக்கை இணையம் (Nambikkai Inaiyam Blockchain), மற்றும் டிஜிட்டல் சான்றிதழ்கள் வழங்கப்படுகின்றன. தமிழ்நாட்டின் அனைவருக்குமான பொது விநியோகத் திட்டம் (Universal PDS) ஸ்மார்ட் ரேஷன் கார்டுகள் மற்றும் பயோமெட்ரிக் பி.ஓ.எஸ் இயந்திரங்கள் மூலம் 100% கணினிமயமாக்கப்பட்டு கசிவுகள் தடுக்கப்பட்டுள்ளன.',
        summaryEn: 'Tamil Nadu e-Governance Agency (TNeGA) coordinates digital public infrastructure including e-Sevai citizen kiosks, Nambikkai Inaiyam (State Blockchain for verifiable credential issuance), and the TN-GIS spatial portal. In public delivery, Tamil Nadu achieved 100% Aadhaar-enabled biometric Point of Sale (PoS) automation across 35,000+ Fair Price Shops.',
        keyTerminology: [
          {
            english: 'TNeGA',
            tamil: 'தமிழ்நாடு மின்னாளுமை முகமை',
            definition: 'State nodal agency driving e-Governance applications, digital service gateways, and blockchain registries.'
          },
          {
            english: 'Nambikkai Inaiyam',
            tamil: 'நம்பிக்கை இணையம்',
            definition: 'Tamil Nadu State Blockchain Backbone for tamper-proof educational, community, and land certificate issuance.'
          },
          {
            english: 'e-Sevai Centres',
            tamil: 'இ-சேவை மையங்கள்',
            definition: 'Front-end physical and digital single-window access kiosks providing government-to-citizen (G2C) services.'
          },
          {
            english: 'End-to-End PDS Computerisation',
            tamil: 'முழுமையான ரேஷன் கணினிமயமாக்கல்',
            definition: 'Real-time supply chain tracking from godowns to fair price shops via electronic weighbridges and smart cards.'
          }
        ],
        diagramType: 'egovernance-flow',
        keyFacts: [
          {
            labelEn: 'e-Sevai Delivery Scale',
            labelTa: 'இ-சேவை மையங்கள் அளவு',
            value: '>13,000 operational centres offering 250+ G2C certificates',
            context: 'Income, Community, Nativity, and First Graduate certificates.'
          },
          {
            labelEn: 'Universal PDS Coverage',
            labelTa: 'பொது விநியோகத் திட்ட பரப்பு',
            value: 'Over 2.23 Crore Smart Ration Cards served via 35,000+ Fair Price Shops',
            context: 'Department of Food and Consumer Protection.'
          },
          {
            labelEn: 'CM Helpline 1100',
            labelTa: 'முதலமைச்சர் உதவி மையம் 1100',
            value: 'Integrated single helpline portal for grievance registration and time-bound tracking',
            context: 'Makkaludan Mudhalvar initiative.'
          }
        ],
        caseStudies: [
          {
            title: 'Makkaludan Mudhalvar & Ungal Thogaiyil Muthalvar',
            stateOrUnion: 'Tamil Nadu',
            detailTa: 'மக்களுடன் முதல்வர் முகாம்கள் மூலம் வருவாய்த்துறை, மின்துறை, நகராட்சி நிர்வாகம் உள்ளிட்ட 13 துறைகளின் சேவைகள் 30 நாட்களுக்குள் பயனாளிகளுக்கு தீர்வு காணப்படுகின்றன.',
            detailEn: 'Makkaludan Mudhalvar conducts localized outreach camps across municipal and rural wards, resolving public grievances across 13 departments within a statutory 30-day window.'
          }
        ],
        citations: [
          {
            source: 'Information Technology and Digital Services Department, GoTN',
            year: '2024',
            reportName: 'IT & Digital Services Policy Note 2024-25',
            relevance: 'TNeGA services, Blockchain backbone, and e-Sevai volume.'
          },
          {
            source: 'Cooperation, Food and Consumer Protection Department, GoTN',
            year: '2024',
            reportName: 'Food & Consumer Protection Policy Note 2024-25',
            relevance: 'Smart ration card numbers and commodity distribution metrics.'
          }
        ]
      }
    ]
  }
];
