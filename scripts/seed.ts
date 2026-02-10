import { Pool } from '@neondatabase/serverless';
import { cards } from '../src/data/cards';
import * as fs from 'fs';
import * as path from 'path';

async function seed() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('DATABASE_URL is not set. Create a .env.local file with your Neon connection string.');
    process.exit(1);
  }

  const pool = new Pool({ connectionString: databaseUrl });

  // Run schema
  const schemaPath = path.join(__dirname, 'schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  // Split on semicolons and run each statement
  const statements = schema
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  console.log('Running schema...');
  for (const stmt of statements) {
    await pool.query(stmt);
  }
  console.log('Schema applied.');

  // Seed cards
  console.log(`Seeding ${cards.length} cards...`);
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // Extract a title for the cards table
    let title: string;
    if ('title' in card) {
      title = card.title;
    } else if ('stem' in card) {
      title = card.stem.slice(0, 120);
    } else if ('front' in card) {
      title = card.front.slice(0, 120);
    } else if ('sentence' in card) {
      title = card.sentence.slice(0, 120);
    } else {
      title = card.id;
    }

    await pool.query(
      `INSERT INTO cards (id, type, category, difficulty, title, data, sequence)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (id) DO UPDATE SET
         type = EXCLUDED.type,
         category = EXCLUDED.category,
         difficulty = EXCLUDED.difficulty,
         title = EXCLUDED.title,
         data = EXCLUDED.data,
         sequence = EXCLUDED.sequence`,
      [card.id, card.type, card.category, card.difficulty, title, JSON.stringify(card), i]
    );
    console.log(`  + ${card.id}`);
  }

  await pool.end();
  console.log('Seed complete!');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
