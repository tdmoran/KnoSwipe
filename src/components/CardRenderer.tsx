'use client';
import { type CardData } from '@/data/cards';
import AnimatedTextCard from './cards/AnimatedTextCard';
import AnatomyCard from './cards/AnatomyCard';
import QuizCard from './cards/QuizCard';
import FlashCard from './cards/FlashCard';
import SurgicalStepsCard from './cards/SurgicalStepsCard';
import FillBlankCard from './cards/FillBlankCard';

interface Props {
  card: CardData;
  isActive: boolean;
  onCorrectAnswer: () => void;
}

export default function CardRenderer({ card, isActive, onCorrectAnswer }: Props) {
  switch (card.type) {
    case 'animated-text':
      return <AnimatedTextCard card={card} isActive={isActive} />;
    case 'anatomy':
      return <AnatomyCard card={card} isActive={isActive} />;
    case 'quiz':
      return <QuizCard card={card} isActive={isActive} onCorrectAnswer={onCorrectAnswer} />;
    case 'flashcard':
      return <FlashCard card={card} isActive={isActive} />;
    case 'surgical-steps':
      return <SurgicalStepsCard card={card} isActive={isActive} />;
    case 'fill-blank':
      return <FillBlankCard card={card} isActive={isActive} onCorrectAnswer={onCorrectAnswer} />;
    default:
      return null;
  }
}
