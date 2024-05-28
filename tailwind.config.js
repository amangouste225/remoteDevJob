/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Poppins",
        "pt-sans": "PT Sans",
      },
      screens: {
        lg: "1024px",
      },
      backgroundImage: {
        header:
          "linear-gradient(to top, blue, rgba(255, 255, 255, 0.9)),url('./assets/bg.jpg')",
      },
      colors: {
        gray: "#808080",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "956px",
          xl: "1296px",
        },
      },
    },
  },
  plugins: [],
};
