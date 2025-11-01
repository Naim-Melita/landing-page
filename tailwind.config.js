import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03045E",
        "background-light": "#caf0f8",
        "background-dark": "#101922",
        "text-light": "#000",
        "text-dark": "#fff",
      },
      fontFamily: {
        display: ["Red Hat Display", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [forms, containerQueries],
};