import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1380ec",
        "background-light": "#F8F9FA",
        "background-dark": "#101922",
        "text-light": "#333333",
        "text-dark": "#F0F4F8",
      },
      fontFamily: {
        display: ["Work Sans", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [forms, containerQueries],
};