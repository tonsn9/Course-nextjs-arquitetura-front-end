import type { Config } from "@jest/types";
import path from "path";

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  verbose: true,
  transform: {
    "\\.[jt]sx?$": [
      "babel-jest",
      {
        configfile: path.resolve(__dirname, ".babelrc"),
      },
    ],
  },
};
export default config;
