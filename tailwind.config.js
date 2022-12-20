/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      margin: {
        1.5: '1.5px',
      },
      outlineWidth: {
        3: '3px',
      },
      boxShadow: {
        xs: '0 1px 1.5px 0 rgba(19, 23, 27, 0.03)',
        sm: '0 1px 0px -1px rgba(19, 23, 27,  0.3), 0 1px 3px -1px rgba(19, 23, 27,  0.2)',
        DEFAULT: '0 1px 1px -1px rgba(19, 23, 27,  0.3), 0 1px 5px -1px rgba(19, 23, 27,  0.2)',
        md: '0 2px 1px -1px rgba(19, 23, 27,  0.07), 0 2px 6px -1px rgba(19, 23, 27,  0.2)',
        lg: '0 2px 1px -1px rgba(19, 23, 27,  0.1), 0 2px 7px -1px rgba(19, 23, 27,  0.15)',
      },
      fontSize: {
        '3xs': '0.625rem',
        '2xs': '0.688rem',
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
      colors: {
        default: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#9BA7B9',
          500: '#6F7A8B',
          600: '#4D5868',
          700: '#424952',
          800: '#2A2D34',
          850: '#13171B',
          900: '#111417',
          950: '#0A0B0C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
}
