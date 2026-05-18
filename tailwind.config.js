/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'site-bg': '#020b18',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'bounce-slow': 'softBounce 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      backdropBlur: {
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
