const fs = require("fs");
const { argv } = require("process");
const { join } = require("path");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const { declareEmits } = require("./replacements");

const filesExtension = [".vue"];

/**
 * Get all Vue paths from files in given directory
 * @param {String} dir - the project directory
 * @returns Array with paths
 */
const readdirRecursive = async (dir) => {
  const files = await readdir(dir, { withFileTypes: true });

  const paths = files.map(async (file) => {
    const path = join(dir, file.name);

    if (file.isDirectory()) return await readdirRecursive(path);

    return pathReplaceble(path);
  });
  return (await Promise.all(paths)).flat(Infinity).filter(Boolean);
};

/**
 * Replace in all vue files the old tokens for new one
 * Create a file with all paths found
 * @param {String} dir - root dir of project
 */
const replaceInFile = async (dir) => {
  const files = await readdirRecursive(dir);
  fs.writeFile("files.txt", String(files.join("\n")), "utf8", function (err) {
    if (err) return console.log(err);
  });
  for (const file of files) {
    console.log("file ==>", file);
    fs.readFile(file, "utf8", async function (err, data) {
      if (err) {
        return console.log(err);
      }
      const result = declareEmits(data);

      fs.writeFile(file, result, "utf8", function (err) {
        if (err) return console.log(file, err);
      });
    });
  }
};

const pathReplaceble = (path) => {
  for (const ext of filesExtension) {
    if (path.includes(ext)) {
      return path;
    }
  }
  return null;
};

if (!argv[2]) {
  console.log("Faltou o caminho do diretório do projeto");
  return;
}
replaceInFile(argv[2]);
