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

function NeckTrianglesSVG() {
  return (
    <svg viewBox="0 0 240 340" fill="none" className="anatomy-svg">
      <defs>
        <pattern id="gridNT" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,92,114,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="340" fill="url(#gridNT)" />

      {/* Mandible */}
      <path d="M50,40 Q70,20 120,15 Q170,20 190,40 L180,70 Q160,85 120,90 Q80,85 60,70 Z"
        stroke="rgba(255,92,114,0.5)" strokeWidth="2" fill="rgba(255,92,114,0.04)" />

      {/* Clavicles */}
      <path d="M20,300 Q60,285 120,290 Q180,285 220,300"
        stroke="rgba(255,92,114,0.5)" strokeWidth="2" fill="none" />

      {/* Neck outline */}
      <path d="M60,70 Q45,130 40,200 Q35,260 20,300"
        stroke="rgba(255,92,114,0.2)" strokeWidth="1" fill="none" />
      <path d="M180,70 Q195,130 200,200 Q205,260 220,300"
        stroke="rgba(255,92,114,0.2)" strokeWidth="1" fill="none" />

      {/* SCM muscle - left */}
      <path d="M75,55 Q65,120 55,200 Q45,260 30,295"
        stroke="rgba(255,92,114,0.7)" strokeWidth="3" fill="none" />
      {/* SCM muscle - right */}
      <path d="M165,55 Q175,120 185,200 Q195,260 210,295"
        stroke="rgba(255,92,114,0.7)" strokeWidth="3" fill="none" />

      {/* Midline */}
      <line x1="120" y1="90" x2="120" y2="290" stroke="rgba(255,92,114,0.15)" strokeWidth="1" strokeDasharray="4,4" />

      {/* Hyoid bone */}
      <path d="M85,130 L155,130" stroke="rgba(255,92,114,0.4)" strokeWidth="1.5" strokeDasharray="3,3" />

      {/* Digastric anterior belly lines */}
      <path d="M95,90 Q105,110 120,105 Q135,110 145,90"
        stroke="rgba(255,92,114,0.35)" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />

      {/* Omohyoid line */}
      <path d="M110,165 Q130,175 170,200 Q195,215 210,235"
        stroke="rgba(255,92,114,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
      <path d="M130,165 Q110,175 70,200 Q45,215 30,235"
        stroke="rgba(255,92,114,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />

      {/* Anterior triangle fill */}
      <path d="M75,55 Q65,120 55,200 Q45,260 30,295 L120,290 L120,90 Q95,85 75,55"
        fill="rgba(255,92,114,0.03)" stroke="none" />
      {/* Right posterior triangle fill */}
      <path d="M165,55 Q175,120 185,200 Q195,260 210,295 L220,300 Q200,200 195,130 Q190,80 180,55"
        fill="rgba(77,142,255,0.03)" stroke="none" />

      {/* Labels: Submental */}
      <text x="120" y="102" textAnchor="middle" fill="rgba(255,92,114,0.35)" fontSize="7" fontFamily="monospace">Submental</text>
      {/* Labels: Submandibular */}
      <text x="80" y="108" textAnchor="middle" fill="rgba(255,92,114,0.35)" fontSize="6" fontFamily="monospace">Submand.</text>
      {/* Labels: Carotid */}
      <text x="95" y="165" textAnchor="middle" fill="rgba(255,92,114,0.35)" fontSize="7" fontFamily="monospace">Carotid</text>
      {/* Labels: Muscular */}
      <text x="108" y="220" textAnchor="middle" fill="rgba(255,92,114,0.35)" fontSize="7" fontFamily="monospace">Muscular</text>
      {/* Labels: Occipital */}
      <text x="185" y="165" textAnchor="middle" fill="rgba(77,142,255,0.35)" fontSize="7" fontFamily="monospace">Occipital</text>
      {/* Labels: Supraclavicular */}
      <text x="185" y="260" textAnchor="middle" fill="rgba(77,142,255,0.35)" fontSize="6" fontFamily="monospace">Supraclav.</text>

      {/* SCM label */}
      <text x="58" y="180" textAnchor="middle" fill="rgba(255,92,114,0.5)" fontSize="7" fontFamily="monospace" transform="rotate(-75 58 180)">SCM</text>
    </svg>
  );
}

function NeckFascialSVG() {
  return (
    <svg viewBox="0 0 280 280" fill="none" className="anatomy-svg">
      <defs>
        <pattern id="gridNF" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,92,114,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="280" height="280" fill="url(#gridNF)" />

      {/* Skin / Superficial cervical fascia (outermost) */}
      <ellipse cx="140" cy="140" rx="128" ry="120"
        stroke="rgba(255,92,114,0.3)" strokeWidth="1.5" fill="rgba(255,92,114,0.02)" />

      {/* Investing layer of deep cervical fascia */}
      <ellipse cx="140" cy="140" rx="115" ry="108"
        stroke="rgba(255,92,114,0.5)" strokeWidth="2" fill="rgba(255,92,114,0.04)" />

      {/* SCM muscles - bilateral */}
      {/* Left SCM */}
      <ellipse cx="58" cy="135" rx="18" ry="28"
        stroke="rgba(255,92,114,0.6)" strokeWidth="1.5" fill="rgba(255,92,114,0.08)" transform="rotate(-15 58 135)" />
      {/* Right SCM */}
      <ellipse cx="222" cy="135" rx="18" ry="28"
        stroke="rgba(255,92,114,0.6)" strokeWidth="1.5" fill="rgba(255,92,114,0.08)" transform="rotate(15 222 135)" />

      {/* Visceral fascia (pretracheal/middle layer) */}
      <ellipse cx="140" cy="128" rx="48" ry="44"
        stroke="rgba(77,142,255,0.5)" strokeWidth="2" fill="rgba(77,142,255,0.04)" strokeDasharray="5,3" />

      {/* Trachea (center, anterior) */}
      <circle cx="140" cy="115" r="22"
        stroke="rgba(0,229,160,0.5)" strokeWidth="2" fill="rgba(0,229,160,0.06)" />
      {/* Tracheal lumen */}
      <circle cx="140" cy="115" r="14"
        stroke="rgba(0,229,160,0.3)" strokeWidth="1" fill="rgba(0,229,160,0.02)" />

      {/* Esophagus (behind trachea) */}
      <ellipse cx="140" cy="152" rx="14" ry="10"
        stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" fill="rgba(167,139,250,0.06)" />

      {/* Carotid sheath - left */}
      <ellipse cx="85" cy="130" rx="16" ry="18"
        stroke="rgba(255,92,114,0.6)" strokeWidth="2" fill="rgba(255,92,114,0.06)" />
      {/* ICA dot left */}
      <circle cx="82" cy="125" r="5" stroke="rgba(255,92,114,0.8)" strokeWidth="1" fill="rgba(255,92,114,0.15)" />
      {/* IJV dot left */}
      <circle cx="90" cy="135" r="6" stroke="rgba(77,142,255,0.6)" strokeWidth="1" fill="rgba(77,142,255,0.1)" />

      {/* Carotid sheath - right */}
      <ellipse cx="195" cy="130" rx="16" ry="18"
        stroke="rgba(255,92,114,0.6)" strokeWidth="2" fill="rgba(255,92,114,0.06)" />
      {/* ICA dot right */}
      <circle cx="198" cy="125" r="5" stroke="rgba(255,92,114,0.8)" strokeWidth="1" fill="rgba(255,92,114,0.15)" />
      {/* IJV dot right */}
      <circle cx="190" cy="135" r="6" stroke="rgba(77,142,255,0.6)" strokeWidth="1" fill="rgba(77,142,255,0.1)" />

      {/* Prevertebral fascia */}
      <path d="M70,185 Q140,175 210,185 L210,220 Q140,230 70,220 Z"
        stroke="rgba(167,139,250,0.5)" strokeWidth="2" fill="rgba(167,139,250,0.04)" />

      {/* Vertebral body */}
      <rect x="118" y="190" width="44" height="30" rx="6"
        stroke="rgba(255,92,114,0.4)" strokeWidth="2" fill="rgba(255,92,114,0.06)" />
      {/* Spinal canal */}
      <circle cx="140" cy="205" r="8"
        stroke="rgba(255,92,114,0.3)" strokeWidth="1" fill="rgba(255,92,114,0.03)" />

      {/* Labels */}
      <text x="140" y="22" textAnchor="middle" fill="rgba(255,92,114,0.4)" fontSize="7" fontFamily="monospace">Superficial Fascia</text>
      <text x="140" y="42" textAnchor="middle" fill="rgba(255,92,114,0.5)" fontSize="7" fontFamily="monospace">Investing Layer</text>
      <text x="140" y="86" textAnchor="middle" fill="rgba(77,142,255,0.4)" fontSize="7" fontFamily="monospace">Visceral Fascia</text>
      <text x="140" y="118" textAnchor="middle" fill="rgba(0,229,160,0.5)" fontSize="7" fontFamily="monospace">Trachea</text>
      <text x="140" y="157" textAnchor="middle" fill="rgba(167,139,250,0.5)" fontSize="6" fontFamily="monospace">Esoph.</text>
      <text x="84" y="160" textAnchor="middle" fill="rgba(255,92,114,0.4)" fontSize="6" fontFamily="monospace">Carotid Sh.</text>
      <text x="196" y="160" textAnchor="middle" fill="rgba(255,92,114,0.4)" fontSize="6" fontFamily="monospace">Carotid Sh.</text>
      <text x="140" y="250" textAnchor="middle" fill="rgba(167,139,250,0.4)" fontSize="7" fontFamily="monospace">Prevertebral Fascia</text>
      <text x="57" y="175" textAnchor="middle" fill="rgba(255,92,114,0.5)" fontSize="6" fontFamily="monospace">SCM</text>
      <text x="223" y="175" textAnchor="middle" fill="rgba(255,92,114,0.5)" fontSize="6" fontFamily="monospace">SCM</text>
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
        {card.svgType === 'larynx' && <LarynxSVG />}
        {card.svgType === 'sinuses' && <SinusesSVG />}
        {card.svgType === 'neck-triangles' && <NeckTrianglesSVG />}
        {card.svgType === 'neck-fascial' && <NeckFascialSVG />}

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
