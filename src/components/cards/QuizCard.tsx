'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type QuizCardData, categoryColors, difficultyColors } from '@/data/cards';

interface Props {
  card: QuizCardData;
  isActive: boolean;
  onCorrectAnswer: () => void;
}

export default function QuizCard({ card, isActive, onCorrectAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const color = categoryColors[card.category];
  const answered = selected !== null;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    if (index === card.correctIndex) onCorrectAnswer();
    setTimeout(() => setShowExplanation(true), 500);
  };

  const optionClass = (i: number) => {
    if (!answered) return 'quiz-option';
    if (i === card.correctIndex) return 'quiz-option correct';
    if (i === selected) return 'quiz-option incorrect';
    return 'quiz-option dimmed';
  };

  return (
    <div className="card-inner quiz-card">
      <div className="card-meta">
        <span className="card-category-badge" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
          {card.category}
        </span>
        <span className="card-difficulty-badge" style={{ background: `${difficultyColors[card.difficulty]}18`, color: difficultyColors[card.difficulty], border: `1px solid ${difficultyColors[card.difficulty]}30` }}>
          {card.difficulty}
        </span>
        <span className="card-type-label">Quiz</span>
      </div>

      <motion.div
        className="quiz-icon"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ delay: 0.15, type: 'spring' }}
      >
        ?
      </motion.div>

      <motion.p
        className="quiz-stem"
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {card.stem}
      </motion.p>

      <div className="quiz-options">
        {card.options.map((opt, i) => (
          <motion.button
            key={i}
            className={optionClass(i)}
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.35 + i * 0.08, type: 'spring', stiffness: 120 }}
            whileTap={!answered ? { scale: 0.97 } : undefined}
            onClick={() => handleSelect(i)}
          >
            <span className="option-label">{opt.label}</span>
            <span className="option-text">{opt.text}</span>
            {answered && i === card.correctIndex && (
              <motion.span
                className="correct-indicator"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ color: 'var(--accent-teal)' }}
              >
                &#10003;
              </motion.span>
            )}
            {answered && i === selected && i !== card.correctIndex && (
              <motion.span
                className="correct-indicator"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ color: 'var(--accent-coral)' }}
              >
                &#10007;
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showExplanation && (
          <motion.div
            className="quiz-explanation"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className="quiz-explanation-label">Explanation</div>
            <p>{card.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
