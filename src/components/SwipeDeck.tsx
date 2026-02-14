'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  categoryLabels,
  categoryColors,
  type CardData,
  type Category,
} from '@/data/types';
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
  const [allCards, setAllCards] = useState<CardData[]>([]);
  const [cardsLoading, setCardsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [seenCards, setSeenCards] = useState<Set<string>>(new Set());
  const [showAllCards, setShowAllCards] = useState(false);
  const [streak, setStreak] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showHint, setShowHint] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const markedSeenRef = useRef<Set<string>>(new Set());

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
      .catch(() => {})
      .finally(() => setCardsLoading(false));
  }, []);

  // Fetch progress when logged in
  useEffect(() => {
    if (!user) {
      setSeenCards(new Set());
      setBookmarked(new Set());
      markedSeenRef.current = new Set();
      return;
    }
    fetch('/api/progress')
      .then((r) => {
        if (!r.ok) throw new Error('API error');
        return r.json();
      })
      .then((data: Record<string, ProgressEntry>) => {
        const bm = new Set<string>();
        const seen = new Set<string>();
        for (const [cardId, entry] of Object.entries(data)) {
          if (entry.bookmarked) bm.add(cardId);
          if (entry.times_seen > 0 && !entry.bookmarked) seen.add(cardId);
        }
        setBookmarked(bm);
        setSeenCards(seen);
        // Pre-populate markedSeenRef so we don't re-mark already-seen cards
        markedSeenRef.current = new Set(Array.from(bm).concat(Array.from(seen)));
      })
      .catch(() => {});
  }, [user]);

  // Filter cards: by category, then by seen status for signed-in users
  let filteredCards = selectedCategory
    ? allCards.filter((c) => c.category === selectedCategory)
    : allCards;
  if (user && !showAllCards) {
    filteredCards = filteredCards.filter((c) => !seenCards.has(c.id));
  }

  // Mark a card as seen (debounced, no duplicates)
  const markSeen = useCallback(
    (cardId: string) => {
      if (!user) return;
      if (markedSeenRef.current.has(cardId)) return;
      markedSeenRef.current.add(cardId);

      fetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId, seen: true }),
      }).catch(() => {});
    },
    [user]
  );

  // Intersection Observer for active card tracking + auto-mark seen
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
              // Auto-mark as seen
              const cardId = entry.target.getAttribute('data-card-id');
              if (cardId) markSeen(cardId);
            }
          }
        });
      },
      { threshold: 0.5, root: container }
    );

    const slides = container.querySelectorAll('.card-slide');
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [filteredCards, showHint, markSeen]);

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

        // If bookmarking, remove from seenCards so it stays visible
        if (!isBookmarked) {
          setSeenCards((prevSeen) => {
            const nextSeen = new Set(prevSeen);
            nextSeen.delete(id);
            return nextSeen;
          });
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

  // All cards seen state
  if (user && filteredCards.length === 0 && !showAllCards) {
    return (
      <>
        {/* Header */}
        <div className="app-header">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }} />
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

        {/* Action bar with user menu */}
        <div className="action-bar">
          <div style={{ position: 'relative' }}>
            <motion.button
              className="action-btn user-action-btn"
              whileTap={{ scale: 0.8 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-label="User menu"
            >
              {user.name.charAt(0).toUpperCase()}
            </motion.button>
            {showUserMenu && (
              <div className="user-dropdown user-dropdown--up">
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
        </div>

        <div className="all-seen-screen">
          <div className="all-seen-icon">&#x2705;</div>
          <h2 className="all-seen-title">
            {selectedCategory ? `All ${categoryLabels[selectedCategory]} cards reviewed!` : "You've reviewed all cards!"}
          </h2>
          <p className="all-seen-subtitle">
            Great work! You can review them again or switch categories.
          </p>
          <button
            className="all-seen-btn"
            onClick={() => setShowAllCards(true)}
          >
            Review Again
          </button>
        </div>
      </>
    );
  }

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

        {/* User menu in action bar */}
        {user ? (
          <div style={{ position: 'relative' }}>
            <motion.button
              className="action-btn user-action-btn"
              whileTap={{ scale: 0.8 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-label="User menu"
            >
              {user.name.charAt(0).toUpperCase()}
            </motion.button>
            {showUserMenu && (
              <div className="user-dropdown user-dropdown--up">
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
            <motion.button
              className="action-btn"
              whileTap={{ scale: 0.8 }}
              aria-label="Sign in"
              title="Sign in"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </motion.button>
          </Link>
        )}
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
            data-card-id={card.id}
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
