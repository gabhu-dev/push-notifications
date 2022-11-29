module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "prettier/prettier": [
    //   "error",
    //   {
    //     tabWidth: 2,
    //     semi: true, // punto y coma
    //     singleQuote: false, // comillas simples
    //     endOfLine: "auto",
    //     printWidth: 80, // ancho de cada linea
    //   },
    // ],
  },
};
