import os from "node:os";

export const getHomeDir = () => {
  return os.homedir();
};

export const getUserName = () => {
  return os.userInfo().username;
};

export const getCPUSInfo = () => {
  return os.cpus().map((item, index) => {
    return {
      model: item.model.trim(),
      speed: `${item.speed / 1000} GHz`,
      coreNumber: index + 1,
    };
  });
};

export const getEOL = () => {
  return os.EOL;
};

export const getArch = () => {
  return os.arch();
};
