// @flow
export type RuleDictionary = { [string]: 'error' | 'warn' | 0 | Array<any> };

type ESLintConfigSimple = {
  env?: {
    [string]: boolean,
  },
  parser?: string,
  parserOptions?: {
    ecmaFeatures?: {
      experimentalObjectRestSpread?: boolean,
      impliedStrict?: boolean,
      jsx?: boolean,
    },
    sourceType?: 'module' | 'script',
  },
  plugins?: Array<string>,
  rules?: RuleDictionary,
};

export type ESLintOverrideConfig = ESLintConfigSimple & {
  files: Array<string>,
};

export type ESLintConfigOverrides = Array<ESLintOverrideConfig>;

export type ESLintFullConfig = ESLintConfigSimple & {
  extends?: string | Array<string>,
  overrides?: ESLintConfigOverrides,
};
