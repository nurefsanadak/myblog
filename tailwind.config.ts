import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9F8FBF',
          50: '#F5F2F9',
          100: '#EBE5F3',
          200: '#D7CBE7',
          300: '#C3B1DB',
          400: '#AF97CF',
          500: '#9F8FBF',
          600: '#8573A6',
          700: '#6B5C8D',
          800: '#514674',
          900: '#37305B',
        },
        secondary: {
          DEFAULT: '#FDF8F3',
          50: '#FEFEFE',
          100: '#FDF8F3',
          200: '#FBF1E7',
          300: '#F9EADB',
          400: '#F7E3CF',
          500: '#F5DCC3',
        },
        accent: {
          DEFAULT: '#D4A5A5',
          50: '#F9F0F0',
          100: '#F3E1E1',
          200: '#E7C3C3',
          300: '#DBA5A5',
          400: '#D4A5A5',
          500: '#C88787',
          600: '#BC6969',
          700: '#A05252',
          800: '#7A3E3E',
          900: '#542B2B',
        },
        warm: {
          charcoal: '#3D3D3D',
          cream: '#FDF8F3',
          white: '#FEFEFE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
