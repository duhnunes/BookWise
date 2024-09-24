import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      default: 'Nunito, sans-serif',
    },
    extend: {
      space: {
        px: '1px',
        1: '0.25rem' /* 4px */,
        2: '0.5rem' /* 8px */,
        3: '0.75rem' /* 12px */,
        4: '1rem' /* 16px */,
        5: '1.25rem' /* 20px */,
        6: '1.5rem' /* 24px */,
        7: '1.75rem' /* 28px */,
        8: '2rem' /* 32px */,
        10: '2.5rem' /* 40px */,
      },

      fontSize: {
        xs: '0.75rem' /* 12px */,
        sm: '0.875rem' /* 14px */,
        md: '1rem' /* 16px */,
        lg: '1.125rem' /* 18px */,
        xl: '1.25rem' /* 20px */,
        '2xl': '1.5rem' /* 24px */,
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },

      lineHeight: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%',
      },

      colors: {
        white: '#FFFFFF',
        black: '#000000',

        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },

        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },

        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
        from: '#7FD1CC',
        to: '#9694F5',
      },
      borderRadius: {
        xs: '2.5px',
        sm: '5px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        '2xl': '20px',
        full: '99999px',
      },
    },
  },
  plugins: [],
}
export default config
