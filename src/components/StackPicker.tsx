'use client';
import { motion } from 'framer-motion';

export interface StackMetaWithCount {
  slug: string;
  name: string;
  description: string;
  color: string;
  cardCount: number;
}

interface StackPickerProps {
  stacks: StackMetaWithCount[];
  onSelect: (slug: string) => void;
}

export default function StackPicker({ stacks, onSelect }: StackPickerProps) {
  return (
    <div className="stack-picker">
      <div className="stack-picker-header">
        <h1 className="stack-picker-title">Choose a Stack</h1>
        <p className="stack-picker-subtitle">Pick a card pack to study</p>
      </div>
      <div className="stack-picker-grid">
        {stacks.map((stack, i) => (
          <motion.button
            key={stack.slug}
            className="stack-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            onClick={() => onSelect(stack.slug)}
            style={{ '--stack-color': stack.color } as React.CSSProperties}
          >
            <div className="stack-card-dot" style={{ background: stack.color }} />
            <h2 className="stack-card-name">{stack.name}</h2>
            <p className="stack-card-desc">{stack.description}</p>
            <span className="stack-card-count">{stack.cardCount} cards</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
