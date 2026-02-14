import { NextResponse } from 'next/server';
import { allStacks } from '@/data/stacks';

export async function GET() {
  const metas = allStacks.map((s) => ({
    ...s.meta,
    cardCount: s.cards.length,
  }));
  return NextResponse.json(metas);
}
