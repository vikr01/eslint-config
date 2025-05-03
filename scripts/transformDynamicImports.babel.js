/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
// /* eslint-disable @typescript-eslint/no-require-imports */
// /* eslint-disable no-undef */
// const babelJest = require('babel-jest');

// module.exports = babelJest.createTransformer({
//   configFile: false,
//   presets: [require.resolve('@babel/preset-env')],
// });

const { transformSync } = require('@babel/core');
console.log('initializing babel builder');

/** @type {import('@babel/core').TransformOptions} */
const babelOptions = {
  presets: ['@babel/preset-env'],
  babelrc: false,
  configFile: false,
};
/**
 * @param {string} src
 * @param {string} filename
 */
function process(src, filename) {
  console.log('[jest-eslint-transformer] Transforming:', filename);
  const result = transformSync(src, { ...babelOptions, filename });
  return result?.code || src;
}

module.exports = { process };
