import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      // screens: {
      //   lg: '1360px',
      // },
      padding: {
        DEFAULT: '1.5rem',
        lg: '2.5rem',
      },
    },
    colors: {
      gray: {
        100: '#FFFFFF',
        200: '#F5F5F5',
        300: '#D9D9D9',
        400: '#BDBDBD',
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
        100: '#FDF5BC',
        200: '#FBF094',
        300: '#FAEA6D',
        400: '#F8E545',
        500: '#F7DF1E',
        600: '#D5BF08',
      },
      red: {
        100: '#F3B3B3',
        200: '#ED8F8F',
        300: '#E76C6C',
        400: '#E24949',
        500: '#DC2626',
        600: '#AE1C1C',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      heading: ['var(--font-archivo)', 'sans-serif'],
    },
  },
};
export default config;
