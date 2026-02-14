'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { type FillBlankCardData, categoryColors, difficultyColors } from '@/data/types';
import styles from './FillBlankCard.module.css';

interface Props {
  card: FillBlankCardData;
  isActive: boolean;
  onCorrectAnswer: () => void;
}

export default function FillBlankCard({ card, isActive, onCorrectAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const color = categoryColors[card.category];
  const answered = selected !== null;
  const isCorrect = selected === card.blankWord;

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    if (option === card.blankWord) onCorrectAnswer();
  };

  const parts = card.sentence.split('___');

  const optionClass = (option: string) => {
    if (!answered) return styles.option;
    if (option === card.blankWord) return `${styles.option} ${styles.correct}`;
    if (option === selected) return `${styles.option} ${styles.incorrect}`;
    return `${styles.option} ${styles.dimmed}`;
  };

  return (
    <div className={`card-inner ${styles.card}`}>
      <div className="card-meta">
        <span className="card-category-badge" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
          {card.category}
        </span>
        <span className="card-difficulty-badge" style={{ background: `${difficultyColors[card.difficulty]}18`, color: difficultyColors[card.difficulty], border: `1px solid ${difficultyColors[card.difficulty]}30` }}>
          {card.difficulty}
        </span>
        <span className="card-type-label">Fill in the Blank</span>
      </div>

      <motion.div
        className={styles.label}
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.15 }}
      >
        Complete the statement
      </motion.div>

      <motion.div
        className={styles.sentence}
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.25 }}
      >
        <span>{parts[0]}</span>
        <motion.span
          className={`${styles.blankSpace} ${answered ? (isCorrect ? styles.blankCorrect : styles.blankIncorrect) : ''}`}
          animate={answered ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {selected || '\u00A0\u00A0\u00A0?\u00A0\u00A0\u00A0'}
        </motion.span>
        <span>{parts[1]}</span>
      </motion.div>

      <div className={styles.options}>
        {card.options.map((option, i) => (
          <motion.button
            key={option}
            className={optionClass(option)}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + i * 0.08, type: 'spring' }}
            whileTap={!answered ? { scale: 0.95 } : undefined}
            onClick={() => handleSelect(option)}
            disabled={answered}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
