import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Black
          light: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#4A5568', // Steel Gray
          light: '#718096',
        },
        accent: {
          DEFAULT: '#3B82F6', // Electric Blue
          light: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}

export default config 