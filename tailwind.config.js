module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "1rem",
    },

    extend: {
      height: {
        halfScreen: "50vh",
      },
      boxShadow: {
        custom:
          "  0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.04);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
