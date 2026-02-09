import { NextResponse } from 'next/server';
import { clearCookie } from '@/lib/auth';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(clearCookie());
  return response;
}
