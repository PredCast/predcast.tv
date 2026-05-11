import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",

      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_",
        },
      ],

      // Garde la source de vérité pour les status sets dans le package domain.
      // Évite la régression du doublon `LIVE_STATUSES` (le set local oubliait
      // déjà `HT`, ce qui a motivé la refonte no-live-betting).
      "no-restricted-imports": ["error", {
        "patterns": [{
          "group": ["**/discover/domain/helpers", "*/discover/domain/helpers"],
          "importNames": ["LIVE_STATUSES", "FINISHED_STATUSES", "BLOCKED_STATUSES", "UPCOMING_STATUSES"],
          "message": "Import status sets from @chiliztv/domain/matches/policies/BettablePolicy",
        }],
      }],
    },
  },
];

export default eslintConfig;
