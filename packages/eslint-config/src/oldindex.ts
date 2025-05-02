// @flow
import { defineConfig, globalIgnores } from "eslint/config";
import flowtypeRules from './flowtype';
import importRules from './import';
import overrides from './overrides';
import type { ESLintFullConfig } from './types';

const config: ESLintFullConfig = {
  env: {
    browser: false,
    node: true,
  },
  parser: require.resolve('babel-eslint'),
  plugins: ['import', 'flowtype', 'jest', 'markdown', 'promise'],
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    'plugin:promise/recommended',
  ],
  rules: {
    ...flowtypeRules,
    ...importRules,
  },
  overrides,
};

export default config;
