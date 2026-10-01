import { useState } from 'react';
import { profile } from '../data/content';

const API = import.meta.env.VITE_API_URL ?? 'https://portfolio-mern-ko1u.onrender.com';
const EMPTY = { name: '', email: '', msg: '', website: '' };

function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    setError('');

    try {
      const response = await fetch(`${API}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'That did not go through.');

      setForm(EMPTY);
      setState('sent');
    } catch (err) {
      setError(err.message || 'Could not reach the server.');
      setState('error');
    }
  };

  const field =
    'w-full border border-rule bg-paper px-3.5 py-2.5 text-[16px] text-ink transition-colors placeholder:text-muted focus:border-accent';

  return (
    <section id="hello" className="border-t border-rule py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-page gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Say hello
          </h2>

          <p className="mt-6 max-w-prose text-[17px] leading-[1.7] text-soft">
            Email is the fastest way to reach me. I read everything and I reply to
            anything that isn&apos;t a template.
          </p>

          <div className="mt-8 space-y-2.5 text-[16px]">
            <p>
              <a href={`mailto:${profile.email}`} className="link">
                {profile.email}
              </a>
            </p>
            <p>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="link">
                {profile.phone}
              </a>
            </p>
            <p className="flex gap-5 pt-1">
              <a href={profile.github} target="_blank" rel="noreferrer" className="link">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
              Your name
            </label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" className={field} />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
              Your email
            </label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" className={field} />
          </div>

          <div>
            <label htmlFor="msg" className="mb-1.5 block text-sm text-muted">
              Message
            </label>
            <textarea id="msg" name="msg" rows={5} value={form.msg} onChange={handleChange} required className={`${field} resize-y`} />
          </div>

          {/* Honeypot — hidden from people, catches most bots. */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={state === 'sending'}
            className="bg-accent px-5 py-2.5 text-[15px] font-medium text-paper transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === 'sending' ? 'Sending…' : 'Send it'}
          </button>

          <p aria-live="polite" className="min-h-[1.5rem] text-[15px]">
            {state === 'sending' && (
              <span className="text-muted">
                The server naps when nobody&apos;s around — this can take a minute.
              </span>
            )}
            {state === 'sent' && <span className="text-accent">Got it. I&apos;ll reply soon.</span>}
            {state === 'error' && <span className="text-red-700">{error}</span>}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
