'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  cards as allCards,
  categoryLabels,
  categoryColors,
  type Category,
} from '@/data/cards';
import CardRenderer from './CardRenderer';

export default function SwipeDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showHint, setShowHint] = useState(true);

  const filteredCards = selectedCategory
    ? allCards.filter((c) => c.category === selectedCategory)
    : allCards;

  // Intersection Observer for active card tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(idx)) {
              setActiveIndex(idx);
              if (showHint) setShowHint(false);
            }
          }
        });
      },
      { threshold: 0.5, root: container }
    );

    const slides = container.querySelectorAll('.card-slide');
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [filteredCards, showHint]);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const addStreak = useCallback(() => {
    setStreak((prev) => prev + 1);
  }, []);

  const currentCard = filteredCards[activeIndex];
  const categories = Object.keys(categoryLabels) as Category[];

  return (
    <>
      {/* Header */}
      <div className="app-header">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((activeIndex + 1) / filteredCards.length) * 100}%`,
            }}
          />
        </div>
        <div className="category-pills">
          <button
            className={`pill ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              style={
                selectedCategory === cat
                  ? {
                      background: `${categoryColors[cat]}15`,
                      borderColor: `${categoryColors[cat]}40`,
                      color: categoryColors[cat],
                    }
                  : undefined
              }
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Streak counter */}
      <AnimatePresence>
        {streak > 0 && (
          <motion.div
            className="streak-counter"
            initial={{ opacity: 0, scale: 0.5, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <span style={{ fontSize: 16 }}>&#x1F525;</span> {streak}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action bar */}
      <div className="action-bar">
        <motion.button
          className={`action-btn ${currentCard && bookmarked.has(currentCard.id) ? 'bookmarked' : ''}`}
          whileTap={{ scale: 0.8 }}
          onClick={() => currentCard && toggleBookmark(currentCard.id)}
          aria-label="Bookmark"
        >
          {currentCard && bookmarked.has(currentCard.id) ? '\u2665' : '\u2661'}
        </motion.button>
        <motion.button
          className="action-btn"
          whileTap={{ scale: 0.8 }}
          aria-label="Share"
        >
          &#x2197;
        </motion.button>
      </div>

      {/* Card counter */}
      <div className="card-counter">
        {activeIndex + 1} / {filteredCards.length}
      </div>

      {/* Swipe hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            className="swipe-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="swipe-chevron"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
            <span>Swipe up</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll container */}
      <div ref={containerRef} className="swipe-container">
        {filteredCards.map((card, index) => (
          <div
            key={card.id}
            className={`card-slide card-slide--${card.type}`}
            data-index={index}
          >
            <CardRenderer
              card={card}
              isActive={index === activeIndex}
              onCorrectAnswer={addStreak}
            />
          </div>
        ))}
      </div>
    </>
  );
}
