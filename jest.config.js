module.exports = {
  reporters: [
    'default',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  cacheDirectory: '.jestcache',
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'cobertura', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
