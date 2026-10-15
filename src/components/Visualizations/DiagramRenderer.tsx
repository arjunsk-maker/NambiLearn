import React from 'react';
import { CircularFlowDiagram } from './CircularFlowDiagram';
import { SupplyDemandPolicyGraph } from './SupplyDemandPolicyGraph';
import { RbiBankingConduitDiagram } from './RbiBankingConduitDiagram';
import { GstDevolutionFlow } from './GstDevolutionFlow';
import { FiveYearPlansTimeline } from './FiveYearPlansTimeline';
import { StructuralTransformationDiagram } from './StructuralTransformationDiagram';
import { TamilNaduDistrictEconomyMap } from './TamilNaduDistrictEconomyMap';
import { HdiComparativeAssessment } from './HdiComparativeAssessment';
import { SocialReformTimeline } from './SocialReformTimeline';
import { WelfareJourneyDiagram } from './WelfareJourneyDiagram';
import { EGovernanceServiceFlow } from './EGovernanceServiceFlow';

interface Props {
  diagramType?: string;
}

export const DiagramRenderer: React.FC<Props> = ({ diagramType }) => {
  if (!diagramType) return null;

  switch (diagramType) {
    case 'circular-flow':
      return <CircularFlowDiagram />;
    case 'supply-demand':
      return <SupplyDemandPolicyGraph />;
    case 'rbi-banking':
      return <RbiBankingConduitDiagram />;
    case 'gst-sharing':
      return <GstDevolutionFlow />;
    case 'five-year-plans':
      return <FiveYearPlansTimeline />;
    case 'structural-shift':
      return <StructuralTransformationDiagram />;
    case 'tn-map':
      return <TamilNaduDistrictEconomyMap />;
    case 'hdi-compare':
      return <HdiComparativeAssessment />;
    case 'social-reform':
      return <SocialReformTimeline />;
    case 'welfare-journey':
      return <WelfareJourneyDiagram />;
    case 'egovernance-flow':
      return <EGovernanceServiceFlow />;
    default:
      return null;
  }
};
