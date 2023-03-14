const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.paths.json");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  jest: {
    configure: {
      preset: "ts-jest",
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
      }),
      collectCoverage: true,
      collectCoverageFrom: [
        "src/components/**/*.{ts,tsx}",
        "src/containers/**/*.{ts,tsx}",
      ],
      testPathIgnorePatterns: ["<rootDir>/src/containers/Login"],
      coverageDirectory: "./public/test-coverage",
      coverageReporters: ["html"],
    },
  },
};
