const { replaceOldColorTokens } = require("./replacements/colors");
const { replaceWonderland } = require("./replacements/wonderland");

/**
 * Replacement function
 * Replace the old tokens for new one
 * @param {String} data - the file string
 * @returns String - file
 */
const replaceToken = (data) => {
  data = replaceWonderland(data);

  data = replaceOldColorTokens(data);

  return data;
};

module.exports = { replaceToken };
