import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    colors: {
      gray: {
        100: '#FFFFFF',
        200: '#F5F5F5',
        300: 'D9D9D9',
      },
      black: {
        100: '#686868',
        200: '#535353',
        300: '#3F3F3F',
        400: '#2A2A2A',
        500: '#161616',
        600: '#000000',
      },
      lemon: {
        100: '#FFFFFD',
        200: '#F8FFD4',
        300: '#F1FFAC',
        400: '#EBFF83',
        500: '#E4FF5A',
        600: '#DBFF22',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      heading: ['var(--font-space-grotesk)'],
    },
  },
  plugins: [],
};
export default config;
