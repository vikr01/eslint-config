import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
  rootDir: __dirname,

  testEnvironment: require.resolve('jest-environment-jsdom'),
  preset: 'ts-jest/presets/js-with-babel',
  // path.join(
  //   require.resolve('ts-jest/package.json'),
  //   '../presets/js-with-babel'
  // ),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  extensionsToTreatAsEsm: [],
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': [
      'ts-jest',
      // require.resolve('ts-jest'),
      {
        tsconfig: require.resolve('./tsconfig.jest.json'),
        babelConfig: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 20,
                },
              },
            ],
          ],
          plugins: ['babel-plugin-dynamic-import-node'],
          babelrc: false,
          configFile: false,
        },
      },
    ],
    // '^.+\\.js$': require.resolve('./scripts/transformDynamicImports.babel'),
  },
  testPathIgnorePatterns: [
    '/node_modules/(?!eslint)/',
    // '/node_modules/(?!(eslint)/)',
    // '/dist/',
  ],
  testMatch: [
    '**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)', // Match only .test.ts/.test.tsx/.test.js/.test.jsx files in __tests__ folders
  ],

  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/.*',
    '!**/.*/**',
    '!**/*.config.{js,ts}',
    '!packages/*/dist/**',
    '!scripts/**',
    '!coverage/**',
  ],

  // moduleNameMapper: {
  //   "nanoid/non-secure": require.resolve("mock-nanoid/non-secure"),
  // },

  coverageDirectory: './coverage/',
};

export default config;
