module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: "**/*.(ts|tsx)",
      options: { parser: "typescript" },
    },
  ],
};
