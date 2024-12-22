/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        success: "#0070f3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
