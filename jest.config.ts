const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // para suportar importações de CSS e SCSS
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
      "src/**/*.{ts,tsx}",
      "!src/app/**/*.{ts,tsx}", 
    ]
}

module.exports = createJestConfig(customJestConfig)
