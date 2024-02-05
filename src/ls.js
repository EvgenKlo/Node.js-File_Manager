import { readdir } from "node:fs/promises";

export const getList = async (directory) => {
  const result = [];
  try {
    const files = await readdir(directory, { withFileTypes: true });

    for (const file of files) {
      result.push({
        name: file.name,
        type: file.isFile() ? "file" : "directory",
      });
    }
    result.sort().sort((a, b) => {
      if (a.type < b.type) return -1;
    });
    console.table(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
