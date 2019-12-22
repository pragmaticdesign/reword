module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    globals: {
      "ts-jest": {
        "tsConfig:": "tsconfig.json"
      },
      window: {},
    },
    moduleFileExtensions: [
      "js",
      "ts",
      "tsx",
    ],
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1"
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: [
        '<rootDir>/configureTestEnvironment.ts',
    ],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: [
      "**/*.test.+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx|js)$": "ts-jest",
    },
};
