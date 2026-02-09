'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { type FlashCardData, categoryColors, difficultyColors } from '@/data/cards';

interface Props {
  card: FlashCardData;
  isActive: boolean;
}

export default function FlashCard({ card, isActive }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const color = categoryColors[card.category];

  return (
    <div className="card-inner flashcard-card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className="card-meta">
        <span className="card-category-badge" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
          {card.category}
        </span>
        <span className="card-difficulty-badge" style={{ background: `${difficultyColors[card.difficulty]}18`, color: difficultyColors[card.difficulty], border: `1px solid ${difficultyColors[card.difficulty]}30` }}>
          {card.difficulty}
        </span>
        <span className="card-type-label">Flashcard</span>
      </div>

      <motion.p
        className="flashcard-hint"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {isFlipped ? 'Tap to see question' : 'Tap to reveal answer'}
      </motion.p>

      <motion.div
        className="flashcard-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <motion.div
          className="flashcard-flipper"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <div className="flashcard-face flashcard-front">
            <div className="flashcard-face-label">Question</div>
            <h3>{card.front}</h3>
          </div>

          <div className="flashcard-face flashcard-back">
            <div className="flashcard-face-label" style={{ color }}>Answer</div>
            <h3>{card.back}</h3>
            {card.bonus && <p className="flashcard-bonus">{card.bonus}</p>}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
