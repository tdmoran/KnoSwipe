export type Category = 'laryngology' | 'rhinology' | 'otology' | 'head-neck';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface AnimatedTextLine {
  text: string;
  highlight?: boolean;
}

export interface QuizOption {
  label: string;
  text: string;
}

export interface SurgicalStep {
  title: string;
  detail: string;
}

export interface AnatomyStructure {
  name: string;
  x: number;
  y: number;
  description?: string;
}

export interface AnimatedTextCardData {
  id: string;
  type: 'animated-text';
  category: Category;
  difficulty: Difficulty;
  title: string;
  subtitle?: string;
  lines: AnimatedTextLine[];
  footnote?: string;
}

export interface QuizCardData {
  id: string;
  type: 'quiz';
  category: Category;
  difficulty: Difficulty;
  stem: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
}

export interface FlashCardData {
  id: string;
  type: 'flashcard';
  category: Category;
  difficulty: Difficulty;
  front: string;
  back: string;
  bonus?: string;
}

export interface SurgicalStepsCardData {
  id: string;
  type: 'surgical-steps';
  category: Category;
  difficulty: Difficulty;
  title: string;
  steps: SurgicalStep[];
}

export interface FillBlankCardData {
  id: string;
  type: 'fill-blank';
  category: Category;
  difficulty: Difficulty;
  sentence: string;
  blankWord: string;
  options: string[];
}

export interface AnatomyCardData {
  id: string;
  type: 'anatomy';
  category: Category;
  difficulty: Difficulty;
  title: string;
  subtitle?: string;
  svgType: 'larynx' | 'sinuses' | 'neck-triangles' | 'neck-fascial';
  structures: AnatomyStructure[];
}

export interface ImageQuizCardData {
  id: string;
  type: 'image-quiz';
  category: Category;
  difficulty: Difficulty;
  imageUrl: string;
  stem: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
  imageCaption?: string;
}

export type CardData =
  | AnimatedTextCardData
  | QuizCardData
  | FlashCardData
  | SurgicalStepsCardData
  | FillBlankCardData
  | AnatomyCardData
  | ImageQuizCardData;

export const categoryLabels: Record<Category, string> = {
  laryngology: 'Laryngology',
  rhinology: 'Rhinology',
  otology: 'Otology',
  'head-neck': 'Head & Neck',
};

export const categoryColors: Record<Category, string> = {
  laryngology: '#00e5a0',
  rhinology: '#4d8eff',
  otology: '#a78bfa',
  'head-neck': '#ff5c72',
};

export const difficultyColors: Record<Difficulty, string> = {
  easy: '#00e5a0',
  medium: '#ffb347',
  hard: '#ff5c72',
};
