import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    languageOptions: {
      globals: globals.browser,
      parser: "typescript-eslint/parser",
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { 
    rules: {
      semi: "error",
      indent: [ "error", 2 ],
    },
  }
];
