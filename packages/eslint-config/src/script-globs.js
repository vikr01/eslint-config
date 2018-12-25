// @flow
import { defaults as jestDefaults } from 'jest-config';

const commonjs = [
  '.*', // dotfiles
  '*.config.js', // config files
  'packages/*/*.js', // root-level scripts,
  '{bin,lib}/**/*.js', // bin, lib scripts
];

const browser = [
  '**/src/components/**/*.{js,jsx}',
  '**/{src,app}/{components,containers,reducers,store}/**/*.{js,jsx}',
];

const test = [...jestDefaults.testMatch];

const testHelpers = ['**/test/**/*.js?(x)'];

const jsx = [...browser, ...test];

const webpackConfig = ['**/webpack.config.*'];

const markdown = ['**/*.md'];

const scriptGlobs: { [string]: Array<string> } = {
  commonjs,
  browser,
  markdown,
  test,
  testHelpers,
  jsx,
  webpackConfig,
};

export default scriptGlobs;
