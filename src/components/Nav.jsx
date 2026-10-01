import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const links = [
  { id: 'dendo', label: 'Dendo' },
  { id: 'work', label: 'Work' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'about', label: 'About' },
  { id: 'hello', label: 'Say hello' },
];

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-page items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-[15px] text-soft transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-[15px] text-soft transition-colors hover:text-accent md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-rule bg-paper px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-soft transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Nav;
