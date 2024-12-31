/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Montserrat Alternates", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "home-bg": "url('./src/assets/dine-rate-bg.png')",
        "gradient-1":
          "linear-gradient(90deg, #716815, #AC8830, #A18257, #A85F11)",
        "gradient-2":
          "linear-gradient(90deg, #A35F30 100%, #D1822F 100%, #F3A518 100%, #5C1000 100%)",
        "gradient-3":
          "linear-gradient(90deg, #A35F30 100%, #D1822F 100%, #F2A518 100%, #5C1000 100%)",
        "restaurant-bg":
          "#F5F5F5 url('./src/assets/rOwner-top.jpeg') no-repeat",
      }),
    },
  },
  plugins: [],
};
