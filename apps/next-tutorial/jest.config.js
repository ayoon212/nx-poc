module.exports = {
  name: 'next-tutorial',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/next-tutorial',
  collectCoverageFrom: [
    '**/*.tsx',
    '!**/node_modules/**'
  ],
  // collectCoverage: true // Uncomment line to generate test coverage report
};
