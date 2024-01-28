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
        content: ["Poppins"]
      },
      fontSize: {
        sm:["12px"],
        md:["16px", "18px"],
        lg:"24px",
        xl: "28px"
      },
      colors: {
        "green": "#38adc2",
        "pink": "#f08080",
        "dark": "#272727",
        "light": "#CCCCCC"
      },
      animation: {
        fadeIn: 'fadeIn 2000ms ease-in-out',
      },

      // that is actual animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
}