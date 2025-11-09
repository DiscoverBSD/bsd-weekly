/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Variable-driven semantic brand palette
        'brand-accent': 'var(--brand-accent)',
        'brand-accent-hover': 'var(--brand-accent-hover)',
        'brand-accent-soft': 'var(--brand-accent-soft)',
        'brand-maroon': 'var(--brand-maroon)',
        'brand-maroon-soft': 'var(--brand-maroon-soft)',
        'brand-ink': 'var(--brand-ink)',
        'brand-ink-muted': 'var(--brand-ink-muted)',
        'brand-border': 'var(--brand-border)',
        'brand-surface': 'var(--brand-surface)',
        'brand-surface-alt': 'var(--brand-surface-alt)',
        'brand-focus-ring': 'var(--brand-focus-ring)'
      }
    },
  },
  plugins: [],
}
