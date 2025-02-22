/** @type {import('jest').Config} */
const config = {
  verbose: true,
  // config babel preset
  transform: {
    "^.+\\.jsx$": "babel-jest",
  },
  // config test environment
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".jsx"],
};

export default config;
