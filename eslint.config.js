import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { perfectionist },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "perfectionist/sort-objects": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          groups: [
            "type",
            "react",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "side-effect",
            "style",
            "unknown",
          ],
          customGroups: [
            {
              groupName: "type-react",
              elementNamePattern: ["^react$", "^react-.*"],
              selector: "type",
            },
            {
              groupName: "react",
              elementNamePattern: ["^react$", "^react-.*"],
            },
          ],
          newlinesBetween: 1,
        },
      ],
    },
  },
]);
