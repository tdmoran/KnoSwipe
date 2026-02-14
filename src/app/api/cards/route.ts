import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const stack = request.nextUrl.searchParams.get('stack');
    const category = request.nextUrl.searchParams.get('category');

    const conditions: string[] = [];
    const params: string[] = [];

    if (stack) {
      params.push(stack);
      conditions.push(`stack = $${params.length}`);
    }
    if (category) {
      params.push(category);
      conditions.push(`category = $${params.length}`);
    }

    const where = conditions.length > 0 ? ` WHERE ${conditions.join(' AND ')}` : '';
    const rows = await query(`SELECT data FROM cards${where} ORDER BY sequence`, params);

    const cards = rows.map((r) => r.data);
    return NextResponse.json(cards);
  } catch (error) {
    console.error('Cards fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
  }
}
