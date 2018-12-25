// @flow
import { configs as jestEslintConfigs } from 'eslint-plugin-jest';
import scriptGlobs from './script-globs';
import type {
  ESLintFullConfig,
  ESLintConfigOverrides,
  ESLintOverrideConfig,
} from './types';

const omitInvalidProperties = ({
  overrides,
  extends: extendsConfig,
  files,
  ...config
}: ESLintFullConfig & ESLintOverrideConfig): ESLintOverrideConfig => ({
  files,
  ...config,
});

const {
  recommended: jestRecommendedConfig,
}: { [string]: ESLintFullConfig } = jestEslintConfigs;

const overrides: ESLintConfigOverrides = [
  {
    files: [...scriptGlobs.test],
    ...jestRecommendedConfig,
  },
  {
    files: [
      ...scriptGlobs.webpackConfig,
      ...scriptGlobs.commonjs,
      ...scriptGlobs.test,
      ...scriptGlobs.testHelpers,
    ],
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
  {
    files: [...scriptGlobs.commonjs],
    parserOptions: {
      sourceType: 'script',
    },
    rules: {
      'import/no-commonjs': 0,
      'global-require': 0,
    },
  },
  {
    files: [...scriptGlobs.browser],
    env: {
      browser: true,
      node: true,
    },
    rules: {
      'import/dynamic-import-chunkname': 'error',
    },
  },
  {
    files: [...scriptGlobs.markdown],
    parserOptions: {
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
    rules: {
      strict: 0,
      'import/no-commonjs': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
    },
  },
  {
    files: [...scriptGlobs.jsx],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
].map(omitInvalidProperties);

export default overrides;
