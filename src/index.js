import { createInterface } from "node:readline/promises";

import { getHomeDir, getUserName, getCPUSInfo, getEOL, getArch } from "./os.js";
import { upDirectory } from "./nwd.js";
import { getList } from "./ls.js";
import { addFile } from "./fs.js";

const startApp = () => {
  const { stdin: input, stdout: output } = process;

  const rl = createInterface({ input, output });

  const args = process.argv;

  const userName = args.filter((arg) => arg.startsWith("--username="));

  let directory = getHomeDir();

  if (userName.length === 1) {
    console.log(
      `Welcome to the File Manager, ${userName[0].slice(
        11
      )}!\nYou are currently in ${directory}`
    );
    rl.on("line", (line) => {
      if (line === ".exit") {
        rl.close();
        return;
      }
      if (line === "os --homedir") {
        console.log(getHomeDir());
        return;
      }
      if (line === "os --username") {
        console.log(getUserName());
        return;
      }
      if (line === "os --cpus") {
        console.log(getCPUSInfo());
        return;
      }
      if (line === "os --EOL") {
        console.log(getEOL());
        return;
      }
      if (line === "os --architecture") {
        console.log(getArch());
        return;
      }
      if (line === "up") {
        console.log(upDirectory(directory));
        return;
      }
      if (line === "ls") {
        getList(directory);
        return;
      }
      if (line.startsWith("add ")) {
        addFile(directory, line);
        return;
      }
      console.log(`You are currently in ${directory}`);
    });
    rl.on("close", () => {
      console.log(
        `Thank you for using File Manager, ${userName[0].slice(11)}, goodbye!`
      );
    });
  } else {
    console.log(
      "Invalid input. Please enter your username in the formate --username=your_username"
    );
    rl.close();
  }
};

startApp();
