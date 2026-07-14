/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: {
          800: '#1a2e21',
          900: '#112217',
          950: '#004d40',
        },
        gold: {
          50: '#fcfaf7',
          100: '#f7f2e8',
          200: '#efe3cc',
          300: '#e4cdab',
          400: '#d5b182',
          500: '#c9a84c',
          600: '#a7793b',
          700: '#8a5f33',
          800: '#734f2f',
          900: '#5e4228',
          950: '#352214',
        },
        cream: '#fdfbf7',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

// Rebuild trigger
