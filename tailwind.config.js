// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "976px",
      md: "786px",
      sm: "520px",
    },
    extend: {
      colors: {
        reddish: "rgb(228, 18, 46)",
      },
    },
  },
  plugins: [],
};
