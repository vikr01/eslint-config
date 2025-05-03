import { defineConfig, globalIgnores } from 'eslint/config';
import './scripts/tsnode.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { createConfig } = require('./packages/eslint-config/src/index.ts');

const tsConfigPath = require.resolve('./tsconfig.json');

export default defineConfig(
  createConfig({ tsConfigPath }),
  globalIgnores(['packages/*/dist'])
);
