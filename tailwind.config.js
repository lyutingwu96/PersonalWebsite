/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Expletus Sans", "Arial"],
        content: ["Raleway", "Arial"]
      },
      fontSize: {
        md:"16px",
        lg:"24px",
        xl: "28px"
      },
      colors: {
        "green": "#38adc2",
        "pink": "#f08080",
        "dark": "#272727"
      },
      animation: {
        fade: 'fadeIn 5400ms ease-in-out',
        fadeText: 'fadeInText 2000ms ease-in-out',
      },

      // that is actual animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '45%': { opacity: 1000 },
          '60%': { opacity: 100 },
          '95%': { opacity: 0 },
          '100%': { opacity: 0 },
        },
        fadeInText: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
}