'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  cards as staticCards,
  categoryLabels,
  categoryColors,
  type CardData,
  type Category,
} from '@/data/cards';
import { useAuth } from './AuthProvider';
import CardRenderer from './CardRenderer';
import Link from 'next/link';

interface ProgressEntry {
  card_id: string;
  bookmarked: boolean;
  completed: boolean;
  difficulty_rating: number | null;
  times_seen: number;
  last_seen_at: string;
}

export default function SwipeDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { user, loading: authLoading, logout } = useAuth();
  const [allCards, setAllCards] = useState<CardData[]>(staticCards);
  const [cardsLoading, setCardsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showHint, setShowHint] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Fetch cards from API, fallback to static
  useEffect(() => {
    fetch('/api/cards')
      .then((r) => {
        if (!r.ok) throw new Error('API error');
        return r.json();
      })
      .then((data: CardData[]) => {
        if (data.length > 0) setAllCards(data);
      })
      .catch(() => {
        // Keep static cards as fallback
      })
      .finally(() => setCardsLoading(false));
  }, []);

  // Fetch progress when logged in
  useEffect(() => {
    if (!user) return;
    fetch('/api/progress')
      .then((r) => {
        if (!r.ok) throw new Error('API error');
        return r.json();
      })
      .then((data: Record<string, ProgressEntry>) => {
        const bm = new Set<string>();
        for (const [cardId, entry] of Object.entries(data)) {
          if (entry.bookmarked) bm.add(cardId);
        }
        setBookmarked(bm);
      })
      .catch(() => {});
  }, [user]);

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

  const toggleBookmark = useCallback(
    (id: string) => {
      setBookmarked((prev) => {
        const next = new Set(prev);
        const isBookmarked = next.has(id);
        isBookmarked ? next.delete(id) : next.add(id);

        // Sync to server if logged in
        if (user) {
          fetch('/api/progress', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cardId: id, bookmarked: !isBookmarked }),
          }).catch(() => {});
        }

        return next;
      });
    },
    [user]
  );

  const addStreak = useCallback(() => {
    setStreak((prev) => prev + 1);
  }, []);

  const currentCard = filteredCards[activeIndex];
  const categories = Object.keys(categoryLabels) as Category[];

  if (cardsLoading || authLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <>
      {/* User menu */}
      <div className="user-menu">
        {user ? (
          <div style={{ position: 'relative' }}>
            <button
              className="user-avatar"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              {user.name.charAt(0).toUpperCase()}
            </button>
            {showUserMenu && (
              <div className="user-dropdown">
                <div className="user-dropdown-name">{user.name}</div>
                <div className="user-dropdown-email">{user.email}</div>
                <button
                  onClick={() => {
                    logout();
                    setShowUserMenu(false);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button className="sign-in-btn">Sign In</button>
          </Link>
        )}
      </div>

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

      {/* Card counter with progress ring */}
      <div className="card-counter">
        <svg className="progress-ring" viewBox="0 0 28 28">
          <circle className="progress-ring-bg" cx="14" cy="14" r="11" />
          <circle
            className="progress-ring-fill"
            cx="14" cy="14" r="11"
            strokeDasharray={`${2 * Math.PI * 11}`}
            strokeDashoffset={`${2 * Math.PI * 11 * (1 - (activeIndex + 1) / filteredCards.length)}`}
          />
        </svg>
        <span>{activeIndex + 1}/{filteredCards.length}</span>
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
