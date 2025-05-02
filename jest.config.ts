import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  rootDir: __dirname,

  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/.*',
    '!**/.*/**',
    '!**/*.config.js',
    '!packages/*/dist/**',
    '!packages/*/index.js',
    '!scripts/**',
    '!coverage/**',
  ],

  coverageDirectory: './coverage/',

  moduleFileExtensions: ['js', 'jsx', 'json'],
};


export default config;