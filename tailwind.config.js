/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          brand: '#2ecc71',
          dark: '#0d1a13',
        },
        amber: {
          brand: '#f5a623',
          dark: '#110e00',
        },
        pink: {
          brand: '#e056a0',
          dark: '#120010',
        },
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}

