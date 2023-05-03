/** @type {import('tailwindcss').Config} */

const colors = require('./src/colors.config')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1860px',
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-in-bottom-2': 'slide-in-bottom 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.05s both',
        'slide-in-bottom-3': 'slide-in-bottom 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.08s both',
        'slide-in-bottom-4': 'slide-in-bottom 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.09s both',
        'slide-in-bottom-5': 'slide-in-bottom 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.095s both',
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
      maxWidth: {
        mobile: 'calc(100vw - 48px)',
        pc: 'calc(100vw - 104px)',
      },
      margin: {
        1.5: '1.5px',
      },
      outlineWidth: {
        3: '3px',
      },
      boxShadow: {
        xs: '0 1px 1.5px 0 rgba(19, 23, 27, 0.01)',
        dkxs: '0 1px 3px -1px rgba(0, 0, 0, 0.2)',
        sm: '0 1px 0px -1px rgba(19, 23, 27,  0.3), 0 1px 3px -1px rgba(19, 23, 27,  0.05)',
        dksm: '0 1px 3px -1px rgba(0, 0, 0,  0.3)',
        DEFAULT: '0 1px 1px -1px rgba(19, 23, 27,  0.3), 0 1px 5px -1px rgba(19, 23, 27,  0.1)',
        dk: '0 1px 3px -1px rgba(0, 0, 0,  0.3)',
        md: '0 2px 1px -1px rgba(19, 23, 27,  0.07), 0 2px 6px -1px rgba(19, 23, 27,  0.2)',
        dkmd: '0 1px 3px -1px rgba(0, 0, 0,  0.5)',
        lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
        dklg: '0 4px 20px -1px rgba(0, 0, 0,  0.5)',
        '2xl': '0 8px 40px -1px rgba(0, 0, 0,  0.07)',
        dk2xl: '0 8px 40px -1px rgba(0, 0, 0,  0.5)',
        mini: '0 3px 16px -1px rgba(0, 0, 0,  0.05)',
        dkmini: '0 3px 16px -1px rgba(0, 0, 0,  0.3)',
        tooltip: '0 4px 20px -1px rgba(0, 0, 0,  0.07)',
        dktooltip: '0 4px 20px -1px rgba(0, 0, 0,  0.5)',
      },
      dropShadow: {
        'overlay-text': '0 0 6px rgba(249, 250, 251, 1)',
        'dkoverlay-text': '0 0 6px rgba(9, 14, 30, 1)',
      },
      fontSize: {
        '3xs': '0.625rem',
        '2xs': '0.688rem',
        xs: [
          /* body xsmall */ '0.75rem' /* 12px */,
          {
            lineHeight: '1.5',
            letterSpacing: '-0.025rem',
            fontWeight: '400',
          },
        ],
        sm: [
          /* body small */ '0.8125rem' /* 13px */,
          {
            lineHeight: '1.5',
            letterSpacing: '-0.025rem',
            fontWeight: '400',
          },
        ],
        base: [
          /* body medium */ '0.875rem' /* 14px */,
          {
            lineHeight: '1.5',
            letterSpacing: '-0.025rem',
            fontWeight: '400',
          },
        ],
        md: [
          /* body large */ '1rem' /* 16px */,
          {
            lineHeight: '1.5',
            letterSpacing: '-0.025rem',
            fontWeight: '400',
          },
        ],
        lg: [
          /* small title */ '1.125rem' /* 18px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.025rem',
            fontWeight: '700',
          },
        ],
        '2lg': [
          /* sub title */ '1.25rem' /* 20px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.0125rem',
            fontWeight: '700',
          },
        ],
        '3lg': [
          /* title */ '1.375rem' /* 22px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '700',
          },
        ],
        xl: [
          /* h6 */ '1.625rem' /* 26px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '700',
          },
        ],
        '2xl': [
          /* h5 */ '1.875rem' /* 30px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '700',
          },
        ],
        '3xl': [
          /* h4 */ '2.125rem' /* 34px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '700',
          },
        ],
        '4xl': [
          /* h3 */ '2.375rem' /* 38px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '600',
          },
        ],
        '5xl': [
          /* h2 */ '2.75rem' /* 44px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '600',
          },
        ],
        '6xl': [
          /* h1 */ '3.5rem' /* 56px */,
          {
            lineHeight: '1.25',
            letterSpacing: '-0.03125rem',
            fontWeight: '600',
          },
        ],
      },
      borderWidth: {
        1: '1.5px',
      },
      borderRadius: {
        '2xs': '0.125rem' /* 2px */,
        xs: '0.1875rem' /* 3px */,
        sm: '0.25rem' /* 4px */,
        DEFAULT: '0.3125rem' /* 5px */,
      },
      colors,
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
