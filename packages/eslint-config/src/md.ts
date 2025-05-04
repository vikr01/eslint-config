import type { Config } from "@eslint/config-helpers";
import markdown from "@eslint/markdown";

const config: Config = {
  files: ["**/*.md"],
  plugins: {
    markdown,
  },
  language: "markdown/commonmark",
  rules: {
    "markdown/no-html": "error",
  },
};

export default config;
