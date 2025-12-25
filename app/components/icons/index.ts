/**
 * KOEL Brand Icons
 * Export barrel for all brand-compliant icons
 */

// Benefits & Features Icons
export {
  AllSkinTypesIcon,
  TwentyFourHourIcon,
  EcoFriendlyIcon,
  RefillableSystemIcon,
  NaturalAromasIcon,
  IntelligentDesignIcon,
  NaturalIngredientsIcon,
  DermatologicallyTestedIcon,
  ChemicalFreeIcon,
  SkinFriendlyIcon,
  LongLastingIcon,
  FastDryIcon,
} from './BenefitsIcons';

// Tutorial Icons
export {
  Step1RemoveIcon,
  Step2InsertIcon,
  Step3CloseIcon,
  RotateIcon,
} from './TutorialIcons';

// Types
export type { IconProps, IconComponent } from './types';

// Icon collection for easy access
import * as Benefits from './BenefitsIcons';
import * as Tutorial from './TutorialIcons';

export const KoelIcons = {
  Benefits,
  Tutorial,
};
