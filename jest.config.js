module.exports = {
  "setupFiles": ["./jest.polyfills.js"],
  "transform": {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(msw))",
    "node_modules/(?!(msw/node))"
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
}