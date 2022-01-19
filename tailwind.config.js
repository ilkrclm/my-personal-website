const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blur: "blur 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        opacity: "opacity 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) linear",
      },
      keyframes: {
        blur: {
            "0%": {
              filter: "blur(15px)",
            },
            "100%": {
              filter: "blur(0px)",
            },
          },
        },
        opacity: {
            "0%": {
              opacity: "0",
            },
            "100%": {
              opacity: "1",
            },
          },
       spacing: {
        '50': '12.4rem',
        '128': '32rem',
        '144': '36rem',
      },
      inset: {
        '-0.2': '-0.125rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      height: {
        '720': '720px',
      },
       fontFamily: {
        sans: [
          'Quicksand',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
