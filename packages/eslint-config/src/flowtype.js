// @flow
import type { RuleDictionary } from './types';

const rules: RuleDictionary = {
  'flowtype/boolean-style': ['error', 'boolean'],
  'flowtype/define-flow-type': 'warn',
  'flowtype/delimiter-dangle': ['error', 'never'],
  'flowtype/generic-spacing': ['error', 'never'],
  'flowtype/no-primitive-constructor-types': 'error',
  'flowtype/no-weak-types': 'warn',
  'flowtype/object-type-delimiter': ['error', 'comma'],
  'flowtype/semi': ['error', 'always'],
  'flowtype/space-after-type-colon': ['error', 'always'],
  'flowtype/space-before-generic-bracket': ['error', 'never'],
  'flowtype/space-before-type-colon': ['error', 'never'],
  'flowtype/union-intersection-spacing': ['error', 'always'],
  'flowtype/use-flow-type': 'error',
  'flowtype/valid-syntax': 'error',
};

export default rules;
