module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/tests/integration',
    '<rootDir>/tests/unit',
    '<rootDir>/tests/acceptance',
  ],
  transform: {
    'ˆ.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__test__/.*|(\\.|/)(tests|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
};
