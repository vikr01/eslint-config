import { defineConfig, globalIgnores } from 'eslint/config';
import './scripts/tsnode.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const eslintConfig = require('./packages/eslint-config/src/index.ts');

export default defineConfig(
  eslintConfig.default,
  globalIgnores(['packages/*/dist'])
);
