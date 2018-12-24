'use strict';

module.exports = {
  rootDir: __dirname,

  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/.*',
    '!**/.*/**',
    '!**/*.config.js',
    '!packages/*/dist/**',
    '!scripts/**',
    '!coverage/**',
  ],

  coverageDirectory: './coverage/',

  moduleFileExtensions: ['js', 'jsx', 'json'],
};
