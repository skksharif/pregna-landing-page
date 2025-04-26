/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6A1B9A',
          light: '#8E24AA',
          dark: '#4A148C',
        },
        secondary: {
          DEFAULT: '#F48FB1',
          light: '#F8BBD0',
          dark: '#EC407A',
        },
        background: {
          DEFAULT: '#FAF1EB',
          light: '#FFF5E6',
          dark: '#F5E6D8',
        },
        accent: {
          yellow: '#FFC107',
          orange: '#FF7043',
          teal: '#4DD0E1',
          green: '#9CCC65',
          red: '#E53935',
        },
        text: {
          dark: '#000000',
          gray: '#333333',
          light: '#666666',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'slide-down': 'slideDown 0.8s ease-in-out',
        'slide-left': 'slideLeft 0.8s ease-in-out',
        'slide-right': 'slideRight 0.8s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};