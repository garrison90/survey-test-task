import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      prettier,
    },
    rules: {
      "prettier/prettier": "warn",
      "no-console": "warn",
      "arrow-body-style": [2, "as-needed"],
      "react/button-has-type": "warn",
      "react/jsx-no-useless-fragment": [
        1,
        {
          allowExpressions: true,
        },
      ],
      "prefer-destructuring": [
        1,
        {
          object: true,
          array: false,
        },
      ],
      "react/no-unstable-nested-components": [
        1,
        {
          allowAsProps: true,
        },
      ],

      "unused-imports/no-unused-imports": 1,
      "unused-imports/no-unused-vars": [
        0,
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // ext library & side effect imports
            ["^@?\\w", "^\\u0000"],
            // components
            ["^@/components"],
            // assets
            ["^@/assets"],
            // Lib, hooks, store, providers
            ["^@/lib", "^@/hooks", "^@/store", "^@/providers"],
            // Other imports
            ["^@/"],
            // types
            ["^@/types"],
            // other that didn't fit in
            ["^"],
            // {s}css files
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
    },
  },
];

export default eslintConfig;
