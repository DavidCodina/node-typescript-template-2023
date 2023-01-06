import type { JestConfigWithTsJest } from 'ts-jest'

// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    //'^.+\\.tsx?$': ['ts-jest', { useESM: true }] // To process only ts files.
    '^.+\\.[tj]sx?$': ['ts-jest', { useESM: true }] // To process js/ts with `ts-jest`
  },
  testEnvironment: 'node',
  // In addition to this, we want to prevent Typescript from
  // adding *.test.*, *.spec.*, and anything within a __tests__
  // That said, in some cases, we may want to add the tests.
  // In tsconfig.json do this: "exclude": ["node_modules", "**/*.test.*", "**/*.spec.*", "__tests__"]
  // We may also need to tell just to ignore that file when it comes to coverage.
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  // Setting the root will also effectively exclude the dist folder.
  roots: ['<rootDir>/src'],
  // collectCoverage: true,
  coverageDirectory: 'coverage'
}

export default jestConfig
