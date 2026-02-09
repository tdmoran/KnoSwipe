import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get('category');

    let rows;
    if (category) {
      rows = await query('SELECT data FROM cards WHERE category = $1 ORDER BY id', [category]);
    } else {
      rows = await query('SELECT data FROM cards ORDER BY id');
    }

    const cards = rows.map((r) => r.data);
    return NextResponse.json(cards);
  } catch (error) {
    console.error('Cards fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
  }
}
