// @flow

'use strict';

module.exports = {
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
