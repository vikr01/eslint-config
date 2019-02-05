# @vikr01/eslint-config

My shareable [`eslint`](https://github.com/eslint/eslint) configs.

## Installation

Install the config:

With `npm`:

```bash
npm install --save-dev @vikr01/eslint-config
```

With `yarn`:

```bash
yarn add -D @vikr01/eslint-config
```

You'll also need to install the config's `peerDependencies`:

With `npm`:

```bash
npm install-peerdeps --dev @vikr01/eslint-config
```

With `yarn`:

```bash
npm info "@vikr01/eslint-config@latest" peerDependencies

yarn add -D <dependency-name>
```

Then add `@vikr01` to your "extends" array in your `eslint` config file (i.e. `.eslintrc` or the `eslintConfig` key in your `package.json`):

```json
{
  "extends": ["@vikr01"]
}
```

For more information, see [`eslint`'s documentation on shareable configs](https://eslint.org/docs/developer-guide/shareable-configs).

## Additional Configs

There are some additional configs in this project for use in certain environments (i.e. using JSX with `react`).
