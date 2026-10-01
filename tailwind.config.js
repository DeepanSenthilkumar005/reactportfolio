/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf6f0',
        card: '#f3ebe0',
        rule: '#e6dace',
        ink: '#1c1917',
        soft: '#57534e',
        muted: '#8a817a',
        accent: '#c2571f',
        accentSoft: '#e8845a',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Karla', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '68rem',
        prose: '36rem',
      },
      rotate: {
        1.5: '1.5deg',
      },
      boxShadow: {
        paper: '0 1px 2px rgba(28,25,23,0.04), 0 8px 24px -12px rgba(28,25,23,0.18)',
        lift: '0 2px 4px rgba(28,25,23,0.05), 0 18px 40px -16px rgba(28,25,23,0.25)',
      },
    },
  },
  plugins: [],
}
