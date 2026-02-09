import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  const userId = request.headers.get('x-user-id');
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const rows = await query(
      'SELECT card_id, bookmarked, completed, difficulty_rating, times_seen, last_seen_at FROM user_progress WHERE user_id = $1',
      [userId]
    );

    const progress: Record<string, typeof rows[0]> = {};
    for (const row of rows) {
      progress[row.card_id] = row;
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error('Progress fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const userId = request.headers.get('x-user-id');
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { cardId, bookmarked, completed, difficultyRating, seen } = await request.json();

    if (!cardId) {
      return NextResponse.json({ error: 'cardId is required' }, { status: 400 });
    }

    if (seen) {
      // Mark as seen only — increment times_seen without touching bookmarked/completed
      await query(
        `INSERT INTO user_progress (user_id, card_id, bookmarked, completed, difficulty_rating, times_seen, last_seen_at)
         VALUES ($1, $2, false, false, null, 1, now())
         ON CONFLICT (user_id, card_id) DO UPDATE SET
           times_seen = user_progress.times_seen + 1,
           last_seen_at = now()`,
        [userId, cardId]
      );
    } else {
      await query(
        `INSERT INTO user_progress (user_id, card_id, bookmarked, completed, difficulty_rating, times_seen, last_seen_at)
         VALUES ($1, $2, $3, $4, $5, 1, now())
         ON CONFLICT (user_id, card_id) DO UPDATE SET
           bookmarked = COALESCE($3, user_progress.bookmarked),
           completed = COALESCE($4, user_progress.completed),
           difficulty_rating = COALESCE($5, user_progress.difficulty_rating),
           times_seen = user_progress.times_seen + 1,
           last_seen_at = now()`,
        [userId, cardId, bookmarked ?? false, completed ?? false, difficultyRating ?? null]
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Progress update error:', error);
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
  }
}
