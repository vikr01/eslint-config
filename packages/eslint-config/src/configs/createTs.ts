import type { Config } from "@eslint/config-helpers";

type Params = Readonly<{ tsConfigPath: string | undefined }>;

const createConfig = ({ tsConfigPath }: Params): Config => ({
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parserOptions: {
      projectService: {
        project: tsConfigPath != null ? [tsConfigPath] : tsConfigPath,
      },
    },
  },
});

export default createConfig;
