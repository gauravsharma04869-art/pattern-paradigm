/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#131318',
        'surface-container-low': '#1b1b20',
        'surface-container': '#16161D',
        'surface-container-high': '#2a292f',
        'on-surface': '#F5F0E8',
        'on-surface-variant': '#d5c3b8',
        secondary: '#cac6be',
        primary: '#C9956B',
        'on-primary': '#4a2807',
        background: '#0D0D12',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['EB Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
