export type ModuleId = 
  | 'module-1' // Indian Economy
  | 'module-2' // Agriculture, Industry and Employment
  | 'module-3' // Social and Human Development
  | 'module-4' // Social Justice and Tamil Nadu Welfare
  | 'module-5' // Tamil Nadu Development
  | 'module-6'; // Development Administration

export interface Citation {
  source: string;
  year: string;
  reportName: string;
  relevance: string;
}

export interface TopicLesson {
  id: string;
  titleEn: string;
  titleTa: string;
  kicker: string;
  summaryTa: string;
  summaryEn: string;
  keyTerminology: Array<{
    english: string;
    tamil: string;
    definition: string;
  }>;
  diagramType?: 
    | 'circular-flow'
    | 'supply-demand'
    | 'rbi-banking'
    | 'fiscal-monetary'
    | 'gst-sharing'
    | 'five-year-plans'
    | 'structural-shift'
    | 'hdi-compare'
    | 'social-reform'
    | 'tn-map'
    | 'welfare-journey'
    | 'egovernance-flow';
  keyFacts: Array<{
    labelEn: string;
    labelTa: string;
    value: string;
    context: string;
  }>;
  caseStudies: Array<{
    title: string;
    stateOrUnion: 'Tamil Nadu' | 'India' | 'Comparative';
    detailTa: string;
    detailEn: string;
  }>;
  citations: Citation[];
}

export interface ModuleData {
  id: ModuleId;
  number: number;
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
  colorTheme: string;
  iconName: string;
  lessons: TopicLesson[];
}
