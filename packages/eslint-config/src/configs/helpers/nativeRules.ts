import type { RuleEntry } from "@eslint/config-helpers";
import type { ESLintRules } from "eslint/rules";

const nativeRules: Record<keyof ESLintRules, RuleEntry> = {
  "no-unused-vars": [
    "error",
    {
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_",
    },
  ],
};

export default nativeRules;
