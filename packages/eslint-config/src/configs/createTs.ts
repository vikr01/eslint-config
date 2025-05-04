import type { RuleEntry } from "@eslint/config-helpers";
import type {
  ConfigWithExtends as Config,
  Config as ConfigWithoutExtends,
} from "@eslint/config-helpers";
import { configs as tsEslintConfigs } from "typescript-eslint";
import type { ESLintRules } from "eslint/rules";
import nativeRules from "./helpers/nativeRules";

type ESLintRule = keyof ESLintRules;
type TSEslintRules = `@typescript-eslint/${ESLintRule}`;

const tsRules: Record<TSEslintRules, RuleEntry> = Object.fromEntries(
  Object.entries(nativeRules).map(([key, val]) => [
    `@typescript-eslint/${key}`,
    val,
  ]),
);

type Params = Readonly<{ jsConfig?: Config; tsConfigPath: string | undefined }>;

const createConfig = ({ jsConfig, tsConfigPath }: Params): Config => {
  const { extends: jsExtends = [], ...jsWithoutExtends } = jsConfig ?? {};

  return {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: {
          project: tsConfigPath != null ? [tsConfigPath] : tsConfigPath,
        },
      },
    },
    extends: [
      ...jsExtends,
      jsWithoutExtends as ConfigWithoutExtends,
      tsEslintConfigs.recommended as Config,
    ],
    rules: {
      ...tsRules,
    },
  };
};

export default createConfig;
