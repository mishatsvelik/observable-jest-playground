/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    resources: "usable",
    url: 'https://observablehq.com/d/5ef68b6d8020c0c7', //if deleted the base url will just revert to localhost
  },
  transform: {
    "\\.[jt]sx?$": "babel-jest"
    },
  transformIgnorePatterns: [
    "node_modules/(!@observablehq)"
  ],
  globals: {
    "ts-jest": {
       tsConfigFile: "tsconfig.json"
     },
     TextEncoder: require("util").TextEncoder,
     TextDecoder: require("util").TextDecoder
  }
  //, setupFilesAfterEnv: ["jest-fetch-mock"] //will need this if intending mock files files referenced in notebook
};