module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'violet-gradient': 'linear-gradient(to bottom, #4169E1, #87CEEB)',
      },
      textColor: {
        'transparent': 'transparent',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", 'navy-hover': '0 0 10px 3px rgba(0, 0, 128, 0.5)',
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
