import type { CardData } from '../types';
import { meta as euroManualHnMeta, cards as euroManualHnCards } from './euro-manual-hn';
import { meta as masterclassMeta, cards as masterclassCards } from './masterclass';
import { meta as hnMixMeta, cards as hnMixCards } from './hn-mix';
import { meta as ucdThyroidMeta, cards as ucdThyroidCards } from './ucd-thyroid';

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
  { meta: hnMixMeta, cards: hnMixCards },
  { meta: ucdThyroidMeta, cards: ucdThyroidCards },
];

export function getStack(slug: string): Stack | undefined {
  return allStacks.find((s) => s.meta.slug === slug);
}

/** Flat array of every card across all stacks (for seeding) */
export const allCards: CardData[] = allStacks.flatMap((s) => s.cards);
