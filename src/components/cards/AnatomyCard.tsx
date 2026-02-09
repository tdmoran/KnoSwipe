'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type AnatomyCardData, categoryColors, difficultyColors } from '@/data/cards';

interface Props {
  card: AnatomyCardData;
  isActive: boolean;
}

function LarynxSVG() {
  return (
    <svg viewBox="0 0 200 320" fill="none" className="anatomy-svg">
      {/* Grid lines for blueprint feel */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,229,160,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="320" fill="url(#grid)" />

      {/* Epiglottis */}
      <path d="M85,45 Q100,15 115,45" stroke="rgba(0,229,160,0.5)" strokeWidth="2" fill="rgba(0,229,160,0.05)" />
      {/* Hyoid */}
      <path d="M60,68 L140,68" stroke="rgba(0,229,160,0.6)" strokeWidth="2.5" />
      <path d="M60,68 Q52,58 56,48" stroke="rgba(0,229,160,0.4)" strokeWidth="1.5" fill="none" />
      <path d="M140,68 Q148,58 144,48" stroke="rgba(0,229,160,0.4)" strokeWidth="1.5" fill="none" />
      {/* Thyrohyoid membrane */}
      <line x1="70" y1="75" x2="70" y2="95" stroke="rgba(0,229,160,0.2)" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="130" y1="75" x2="130" y2="95" stroke="rgba(0,229,160,0.2)" strokeWidth="1" strokeDasharray="3,3" />
      {/* Thyroid cartilage */}
      <path d="M58,100 L100,130 L142,100 L142,170 Q100,185 58,170 Z" stroke="rgba(0,229,160,0.5)" strokeWidth="2" fill="rgba(0,229,160,0.04)" />
      {/* Laryngeal prominence */}
      <path d="M92,105 L100,95 L108,105" stroke="rgba(0,229,160,0.6)" strokeWidth="1.5" fill="none" />
      {/* Cricothyroid membrane */}
      <rect x="72" y="185" width="56" height="12" stroke="rgba(77,142,255,0.4)" strokeWidth="1.5" strokeDasharray="4,3" fill="rgba(77,142,255,0.05)" rx="2" />
      {/* Cricoid cartilage */}
      <ellipse cx="100" cy="215" rx="48" ry="16" stroke="rgba(0,229,160,0.5)" strokeWidth="2.5" fill="rgba(0,229,160,0.04)" />
      {/* Tracheal rings */}
      <ellipse cx="100" cy="248" rx="32" ry="10" stroke="rgba(0,229,160,0.3)" strokeWidth="1.5" fill="none" />
      <ellipse cx="100" cy="270" rx="32" ry="10" stroke="rgba(0,229,160,0.25)" strokeWidth="1.5" fill="none" />
      <ellipse cx="100" cy="292" rx="32" ry="10" stroke="rgba(0,229,160,0.2)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function SinusesSVG() {
  return (
    <svg viewBox="0 0 200 280" fill="none" className="anatomy-svg">
      <defs>
        <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(77,142,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="280" fill="url(#grid2)" />

      {/* Skull outline (coronal) */}
      <path d="M30,120 Q30,20 100,15 Q170,20 170,120 L170,250 Q100,260 30,250 Z" stroke="rgba(77,142,255,0.15)" strokeWidth="1" fill="none" />
      {/* Nasal septum */}
      <line x1="100" y1="80" x2="100" y2="240" stroke="rgba(77,142,255,0.4)" strokeWidth="1.5" />
      {/* Frontal sinuses */}
      <ellipse cx="80" cy="55" rx="18" ry="22" stroke="rgba(77,142,255,0.5)" strokeWidth="2" fill="rgba(77,142,255,0.06)" />
      <ellipse cx="120" cy="55" rx="18" ry="22" stroke="rgba(77,142,255,0.5)" strokeWidth="2" fill="rgba(77,142,255,0.06)" />
      {/* Ethmoid air cells */}
      <rect x="82" y="90" width="14" height="40" rx="4" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" fill="rgba(167,139,250,0.06)" />
      <rect x="104" y="90" width="14" height="40" rx="4" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" fill="rgba(167,139,250,0.06)" />
      {/* Maxillary sinuses */}
      <ellipse cx="62" cy="170" rx="28" ry="38" stroke="rgba(77,142,255,0.5)" strokeWidth="2" fill="rgba(77,142,255,0.06)" />
      <ellipse cx="138" cy="170" rx="28" ry="38" stroke="rgba(77,142,255,0.5)" strokeWidth="2" fill="rgba(77,142,255,0.06)" />
      {/* Middle turbinate */}
      <path d="M88,110 Q75,130 88,150" stroke="rgba(0,229,160,0.4)" strokeWidth="1.5" fill="none" />
      <path d="M112,110 Q125,130 112,150" stroke="rgba(0,229,160,0.4)" strokeWidth="1.5" fill="none" />
      {/* Inferior turbinate */}
      <path d="M85,165 Q68,185 85,210" stroke="rgba(0,229,160,0.3)" strokeWidth="1.5" fill="none" />
      <path d="M115,165 Q132,185 115,210" stroke="rgba(0,229,160,0.3)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function AnatomyCard({ card, isActive }: Props) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const color = categoryColors[card.category];

  const toggleStructure = (index: number) => {
    setRevealed(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="card-inner anatomy-card">
      <div className="card-meta">
        <span className="card-category-badge" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
          {card.category}
        </span>
        <span className="card-difficulty-badge" style={{ background: `${difficultyColors[card.difficulty]}18`, color: difficultyColors[card.difficulty], border: `1px solid ${difficultyColors[card.difficulty]}30` }}>
          {card.difficulty}
        </span>
        <span className="card-type-label">Anatomy</span>
      </div>

      <motion.h2
        className="card-title"
        initial={{ opacity: 0, y: 15 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {card.title}
      </motion.h2>

      {card.subtitle && (
        <motion.p
          className="card-subtitle"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ delay: 0.25 }}
        >
          {card.subtitle}
        </motion.p>
      )}

      <motion.div
        className="anatomy-svg-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        {card.svgType === 'larynx' ? <LarynxSVG /> : <SinusesSVG />}

        {/* Hotspot dots */}
        {card.structures.map((s, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: revealed.has(i) ? 20 : 5,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.4 + i * 0.06, type: 'spring' }}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); toggleStructure(i); }}
              style={{
                width: revealed.has(i) ? 14 : 18,
                height: revealed.has(i) ? 14 : 18,
                borderRadius: '50%',
                border: `2px solid ${color}`,
                background: revealed.has(i) ? color : `${color}30`,
                cursor: 'pointer',
                display: 'block',
                padding: 0,
              }}
              animate={!revealed.has(i) ? {
                boxShadow: [`0 0 0 0 ${color}40`, `0 0 0 8px ${color}00`],
              } : {}}
              transition={!revealed.has(i) ? { duration: 1.5, repeat: Infinity } : {}}
            />

            <AnimatePresence>
              {revealed.has(i) && (
                <motion.div
                  className="anatomy-label"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{
                    left: '50%',
                    bottom: '100%',
                    borderColor: `${color}30`,
                  }}
                >
                  <span style={{ color }}>{s.name}</span>
                  {s.description && <p>{s.description}</p>}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="anatomy-score"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6 }}
      >
        Found <span>{revealed.size}</span> / {card.structures.length}
      </motion.p>
    </div>
  );
}
