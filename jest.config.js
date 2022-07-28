module.exports = {
  preset: "ts-jest",

  /**
   * The Jest docs indicate that we should either
   *
   * 1. Disable code transforms https://jestjs.io/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
   * 2. Otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS)
   *
   * This appear to be optional for some reason however. I ran the tests about 10x with
   * this disabled and didn't get a segfault.
   *
   * https://jestjs.io/docs/ecmascript-modules
   */
  // transform: {},

  /**
   * Since our test files are written as ES modules that don't match the Node conventions
   * of `.mjs` or `"type": "module"` in in package.json) we need to tell Jest about that.
   *
   * https://jestjs.io/docs/ecmascript-modules
   */
  extensionsToTreatAsEsm: [".ts"],

  /**
   * This enables ES module support in TS jest
   *
   * https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/
   */
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
