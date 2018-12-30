'use strict';

const { writeFileSync } = require('fs');
const { promisify } = require('util');
const path = require('path');
const rimrafCallback = require('rimraf');
const prettier = require('prettier');
/* eslint const/no-unresolved: 0 */
const { default: overrides } = require('../dist/overrides');

const pathToOverridesJs = path.join(__dirname, '../dist/overrides');
const pathToOverridesJson = path.join(__dirname, '../dist/overrides.json');

const rimraf = promisify(rimrafCallback);
const overridesJson = prettier.format(JSON.stringify(overrides), {
  parser: 'json',
});

rimraf(pathToOverridesJs).then(() => {
  writeFileSync(pathToOverridesJson, overridesJson, 'utf-8');
});
