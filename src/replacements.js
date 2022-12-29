const {
  replaceBorderRadius,
  replaceBorderWidth,
} = require("./replacements/border");
const { replaceOldColorTokens } = require("./replacements/colors");
const { replaceOpacity } = require("./replacements/opacity");
const { replaceShadow } = require("./replacements/shadow");
const { replaceSpacing } = require("./replacements/spacing");
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
  data = replaceSpacing(data);
  data = replaceBorderRadius(data);
  data = replaceBorderWidth(data);
  data = replaceShadow(data);
  data = replaceOpacity(data);

  return data;
};

module.exports = { replaceToken };
