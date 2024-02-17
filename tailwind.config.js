/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        custom: {
          base: 'var(--text-color-base)',
          secondary: 'var(--text-color-secondary)',
          inverted: 'var(--text-color-inverted)'
        }
      },
      backgroundColor: {
        custom: {
          base: 'var(--bg-color-base)',
          primary: 'var(--bg-color-primary)',
          secondary: 'var(--bg-color-secondary)',
          // glass: 'var(--bg-color-glass)'
        }
      },
      boxShadow: {
        "custom-right": '4px 4px 2px 0px #FF5B24'
      },
      borderColor:{
        "custom-primary":"var(--primary-color)",
        "custom-secondary":"var(--secondary-color)"
      }

    },
  },
  plugins: [],
}

