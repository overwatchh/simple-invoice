module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:3000",
  },
  testMatch: ["**/specs/*.ts"],
  transform: {
    "\\.ts$": "react-scripts/config/jest/babelTransform",
  },
  verbose: true,
};
