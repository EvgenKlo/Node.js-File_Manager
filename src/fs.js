import { log } from "console";
import fs from "fs/promises";

import { join, normalize } from "path";

export const addFile = (directory, name) => {
  const fileName = name.slice(4);
  fs.appendFile(normalize(join(directory, fileName)), "");
  console.log(`You are currently in ${directory}`);
};
