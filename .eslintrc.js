import { resolve } from "path";

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true,
      },
    ],

    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [["builtin", "external"], "internal", "parent", "sibling"],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["~", resolve(__dirname, "src")]],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
};
