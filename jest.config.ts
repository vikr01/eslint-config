import type { Config } from "@jest/types";
import path from "path";

const config: Config.InitialOptions = {
  rootDir: __dirname,

  testEnvironment: require.resolve('jest-environment-jsdom'),
  preset: path.join(require.resolve("ts-jest/package.json"), ".."),
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      require.resolve("ts-jest"),
      {
        tsconfig: require.resolve("./tsconfig.json"),
      },
    ],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)", // Match only .test.ts/.test.tsx/.test.js/.test.jsx files in __tests__ folders
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