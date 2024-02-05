import { getHomeDir } from "./os.js";

export const upDirectory = (directory) => {
  if (directory === getHomeDir()) {
    return directory;
  }
};
