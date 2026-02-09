'use client';
import { motion } from 'framer-motion';
import { type AnimatedTextCardData, categoryColors, difficultyColors } from '@/data/cards';

interface Props {
  card: AnimatedTextCardData;
  isActive: boolean;
}

export default function AnimatedTextCard({ card, isActive }: Props) {
  const color = categoryColors[card.category];

  return (
    <div className="card-inner animated-text-card">
      <div className="card-meta">
        <span className="card-category-badge" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
          {card.category}
        </span>
        <span className="card-difficulty-badge" style={{ background: `${difficultyColors[card.difficulty]}18`, color: difficultyColors[card.difficulty], border: `1px solid ${difficultyColors[card.difficulty]}30` }}>
          {card.difficulty}
        </span>
        <span className="card-type-label">Key Facts</span>
      </div>

      {card.subtitle && (
        <motion.p
          className="card-subtitle"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.15 }}
        >
          {card.subtitle}
        </motion.p>
      )}

      <motion.h2
        className="card-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
      >
        {card.title}
      </motion.h2>

      <div className="text-lines">
        {card.lines.map((line, i) => (
          <motion.div
            key={i}
            className={`text-line ${line.highlight ? 'text-line--highlight' : ''}`}
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 80 }}
          >
            <span
              className="text-line-bullet"
              style={{ background: line.highlight ? color : 'var(--text-tertiary)' }}
            />
            <span style={line.highlight ? { color } : undefined}>
              {line.text}
            </span>
          </motion.div>
        ))}
      </div>

      {card.footnote && (
        <motion.p
          className="card-footnote"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.4 + card.lines.length * 0.12 + 0.2 }}
        >
          {card.footnote}
        </motion.p>
      )}
    </div>
  );
}
