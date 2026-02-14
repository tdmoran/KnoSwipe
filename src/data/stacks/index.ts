import type { CardData } from '../types';
import { meta as euroManualHnMeta, cards as euroManualHnCards } from './euro-manual-hn';
import { meta as masterclassMeta, cards as masterclassCards } from './masterclass';

export interface StackMeta {
  slug: string;
  name: string;
  description: string;
  color: string;
}

export interface Stack {
  meta: StackMeta;
  cards: CardData[];
}

export const allStacks: Stack[] = [
  { meta: euroManualHnMeta, cards: euroManualHnCards },
  { meta: masterclassMeta, cards: masterclassCards },
];

export function getStack(slug: string): Stack | undefined {
  return allStacks.find((s) => s.meta.slug === slug);
}

/** Flat array of every card across all stacks (for seeding) */
export const allCards: CardData[] = allStacks.flatMap((s) => s.cards);
