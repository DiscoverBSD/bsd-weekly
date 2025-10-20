/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bsd-coral': '#E84855',        // Warmer, more red-leaning coral
        'bsd-maroon': '#3F2534',       // Original maroon from logo
        'bsd-coral-hover': '#D63847',  // Deeper coral for hover
        'bsd-maroon-hover': '#2D1E26', // Deeper maroon for hover
        'bsd-coral-light': '#F2646F',  // Lighter coral for accents
        'bsd-neutral': '#6B7280',      // Sophisticated gray for balance
      }
    },
  },
  plugins: [],
}
