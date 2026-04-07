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
       armelix: {
         background: "#03070C",
         surface: "#071321",
         surfaceAlt: "#0A1E2D",
         primary: "#20E3FF",
         secondary: "#1F8BFF",
         accent: "#00C8E8",
         text: "#F5FAFF",
         textSoft: "#A8C3D8",
         border: "#3A4B5C",
       },

      },
      fontFamily: {
        display: ["Red Hat Display", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [forms, containerQueries],
};
