import type { RuleEntry } from "@eslint/config-helpers";
import type {
  ConfigWithExtends as Config,
  Config as ConfigWithoutExtends,
} from "@eslint/config-helpers";
import type { ESLintRules } from "eslint/rules";

import { configs as tsEslintConfigs } from "typescript-eslint";
import nativeRules from "./helpers/nativeRules";
import createTsLanguageOptions from "./helpers/createTsLanguageOptions";

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

  // const project =
  //   tsConfigPath != null ? `./${basename(tsConfigPath)}` : undefined;
  // console.log("project", project);

  return {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ...createTsLanguageOptions({ tsConfigPath }),
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
