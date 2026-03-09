/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CoderDojo HARUMI Ocean Colors
        primary: {
          50: '#ecfeff',
          100: '#cffafe', 
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Main brand color
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a', 
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Gold accent
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'typing': 'typing 0.6s steps(40, end), blink-cursor 0.75s step-end infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-cursor': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#0891b2' }
        }
      }
    },
  },
  plugins: [],
}