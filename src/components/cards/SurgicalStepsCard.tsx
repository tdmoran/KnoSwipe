'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type SurgicalStepsCardData, categoryColors, difficultyColors } from '@/data/cards';

interface Props {
  card: SurgicalStepsCardData;
  isActive: boolean;
}

export default function SurgicalStepsCard({ card, isActive }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const color = categoryColors[card.category];

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveStep(prev => Math.min(prev + 1, card.steps.length - 1));
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="card-inner surgical-card">
      <div className="card-meta">
        <span className="card-category-badge" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
          {card.category}
        </span>
        <span className="card-difficulty-badge" style={{ background: `${difficultyColors[card.difficulty]}18`, color: difficultyColors[card.difficulty], border: `1px solid ${difficultyColors[card.difficulty]}30` }}>
          {card.difficulty}
        </span>
        <span className="card-type-label">Steps</span>
      </div>

      <motion.h2
        className="card-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {card.title}
      </motion.h2>

      <div className="step-progress">
        {card.steps.map((_, i) => (
          <div
            key={i}
            className={`step-dot ${i === activeStep ? 'active' : i < activeStep ? 'completed' : ''}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          className="step-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          <div className="step-number" style={{ color }}>
            {String(activeStep + 1).padStart(2, '0')}
          </div>
          <h3 className="step-title">{card.steps[activeStep].title}</h3>
          <p className="step-detail">{card.steps[activeStep].detail}</p>
        </motion.div>
      </AnimatePresence>

      <div className="step-nav">
        <button onClick={prev} disabled={activeStep === 0}>
          &#8592; Prev
        </button>
        <span>{activeStep + 1} / {card.steps.length}</span>
        <button onClick={next} disabled={activeStep === card.steps.length - 1}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
}
