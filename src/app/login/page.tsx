'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { login, register } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const err = mode === 'login'
      ? await login(email, password)
      : await register(email, password, name);

    setSubmitting(false);

    if (err) {
      setError(err);
    } else {
      router.push('/');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.logo}>KnoSwipe</h1>
        <p className={styles.tagline}>ENT Learning, One Swipe at a Time</p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${mode === 'login' ? styles.tabActive : ''}`}
            onClick={() => { setMode('login'); setError(''); }}
          >
            Sign In
          </button>
          <button
            className={`${styles.tab} ${mode === 'register' ? styles.tabActive : ''}`}
            onClick={() => { setMode('register'); setError(''); }}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {mode === 'register' && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
            minLength={6}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <button className={styles.skip} onClick={() => router.push('/')}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
