import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03045E",
       secondary: "#d8ff00",
       purple: "#6d4aff",
       purpleDark:"#160f35",
       green: "#16803c",
       purpleText: "#372580",

      },
      fontFamily: {
        display: ["Red Hat Display", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [forms, containerQueries],
};