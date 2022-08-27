export default {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'lib/**/*.ts',
    'lib/**/*.mts',
    '!lib/**/*.d.ts',
    '!lib/**/*.d.mts',
  ],
};
