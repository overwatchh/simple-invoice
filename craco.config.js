const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.paths.json");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    proxy: "https://sandbox.101digital.io",
  },
  jest: {
    configure: {
      preset: "ts-jest",
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
      }),
      collectCoverage: true,
      collectCoverageFrom: [
        "<rootDir>/src/components/**/*.{ts,tsx}",
        "<rootDir>/src/containers/**/*.{ts,tsx}",
      ],
      coverageDirectory: "./public/test-coverage",
      coverageReporters: ["html"],
    },
  },
};
