import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);

const getUserName = () => {
  const { stdin: input, stdout: output } = process;

  const rl = createInterface({ input, output });

  const args = process.argv;

  const userName = args.filter((arg) => arg.startsWith("--username="));

  if (userName.length === 1) {
    console.log(
      `Welcome to the File Manager, ${userName[0].slice(
        11
      )}!\nYou are currently in ${__dirname}`
    );
    rl.on("line", (line) => {
      if (line === ".exit") {
        rl.close();
        return;
      }
      console.log(`You are currently in ${__dirname}`);
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

getUserName();
