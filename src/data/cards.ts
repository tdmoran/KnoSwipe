export type {
  Category,
  Difficulty,
  AnimatedTextLine,
  QuizOption,
  SurgicalStep,
  AnatomyStructure,
  AnimatedTextCardData,
  QuizCardData,
  FlashCardData,
  SurgicalStepsCardData,
  FillBlankCardData,
  AnatomyCardData,
  ImageQuizCardData,
  CardData,
} from './types';
export { categoryLabels, categoryColors, difficultyColors } from './types';

// Re-export flattened card array from stacks for backward compatibility
export { allCards as cards } from './stacks';
