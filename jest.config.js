/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./config/jest.setup.ts'],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": ['ts-jest', {
      tsconfig: './tsconfig.jest.json'
    }],
  },
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/components/$1',
    '@/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>']
};
