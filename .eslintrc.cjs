module.exports = {
  root: true,
  settings: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
  },
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}", "*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
    {
      files: [".eslintrc.{js,cjs}", "*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
