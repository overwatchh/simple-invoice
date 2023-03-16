module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "https://simple-invoice-93279.web.app",
  },
  testMatch: ["**/specs/*e2e.test.ts"],
  transform: {
    "\\e2e.test.ts$": "react-scripts/config/jest/babelTransform",
  },
  //2 minutes
  testTimeout: 120000,
  verbose: true,
};
