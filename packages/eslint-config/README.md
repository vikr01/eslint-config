# @vikr01/eslint-config

This is my shared eslint config. It exports a function that returns a valid eslint config.

## Usage

```zsh
npm install --save-dev @vikr01/eslint-config
```

```js
// eslint.config.mjs
import { createConfig } from '@vikr01/eslint-config';
import { defineConfig } from "eslint/config";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const tsConfigPath = require.resolve('./tsconfig.json');

export default defineConfig(
  createConfig({
    // Browser file configuration for things like window globals, react hook linters, etc.
    browser: './src/components',
    react: true,

    // Using typescript rules based off your tsconfig
    typescript: true,
    tsConfigPath,
  }),
  // ... your other configs here
);
```
