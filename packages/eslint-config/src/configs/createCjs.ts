import type { Config, ConfigWithExtends } from "@eslint/config-helpers";
import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";
import { node as nodeGlobals } from "globals";
import createTsLanguageOptions from "./helpers/createTsLanguageOptions";

type Params = Readonly<{
  jsConfig?: ConfigWithExtends;
  tsConfigPath: string | undefined;
}>;

const createConfig = ({
  jsConfig,
  tsConfigPath,
}: Params): ConfigWithExtends => ({
  // commonjs files only
  files: ["**/*.cjs"],
  languageOptions: {
    ...createTsLanguageOptions({ tsConfigPath }),
    globals: {
      ...nodeGlobals,
    },
    sourceType: "commonjs",
  },
  extends: [
    ...(tseslint.configs.recommended as Config[]),
    ...(jsConfig?.extends ?? []),
  ],
  plugins: {
    jsdoc,
  },
  rules: {
    // Make sure we override anything specified by the js config
    ...(jsConfig?.rules ?? {}),

    // Don't error for requires
    "@typescript-eslint/no-var-requires": "off",

    // Disallow all TS* syntax (explicit + blanket)
    "@typescript-eslint/no-restricted-syntax": [
      "error",
      {
        selector: "TSTypeAnnotation",
        message: "Use JSDoc for type annotations, not TypeScript syntax.",
      },
      {
        selector: "TSTypeParameterInstantiation",
        message: "Use JSDoc generics instead of TypeScript type parameters.",
      },
      {
        selector: "TSTypeAliasDeclaration",
        message: "Use @typedef in JSDoc instead of TypeScript type aliases.",
      },
      {
        selector: "TSInterfaceDeclaration",
        message: "Use @typedef in JSDoc instead of TypeScript interfaces.",
      },
      {
        selector: "[type=/^TS/]",
        message:
          "TypeScript syntax is not allowed in .cjs files; use JSDoc instead.",
      },
    ],

    // Disallow ES module import syntax
    "no-restricted-syntax": [
      "error",
      {
        selector: "ImportDeclaration",
        message: "Use require() instead of import in CommonJS .cjs files.",
      },
      {
        selector: "ImportExpression",
        message: "Dynamic import() is not allowed; use require() instead.",
      },
      {
        selector: "ExportNamedDeclaration",
        message: "Use module.exports instead of export in .cjs files.",
      },
      {
        selector: "ExportDefaultDeclaration",
        message: "Use module.exports instead of export default in .cjs files.",
      },
    ],

    // Disallow exports.* in favor of module.exports
    "no-restricted-properties": [
      "error",
      {
        object: "exports",
        property: "*",
        message:
          "Use module.exports instead of exports.* in CommonJS .cjs files.",
      },
    ],

    // Type-aware TS-ESLint rules on JS
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/await-thenable": "warn",

    // JSDoc enforcement
    "jsdoc/require-param": "warn",
    "jsdoc/require-returns": "warn",
    "jsdoc/check-tag-names": "warn",
    "jsdoc/valid-types": "warn",
  },
});

export default createConfig;
