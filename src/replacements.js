const {
  replaceBorderRadius,
  replaceBorderWidth,
} = require("./replacements/border");
const { replaceOldColorTokens } = require("./replacements/colors");
const { replaceCoreCss } = require("./replacements/core");
const {
  replaceFontFamily,
  replaceTextTransform,
  replaceLetterSpacing,
  replaceLineHeight,
  replaceFontWeight,
  replaceFontSize,
} = require("./replacements/font");
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
  data = replaceFontFamily(data);
  data = replaceTextTransform(data);
  data = replaceLetterSpacing(data);
  data = replaceLineHeight(data);
  data = replaceFontWeight(data);
  data = replaceFontSize(data);
  data = replaceCoreCss(data);

  return data;
};

/**
 * Find all $emit() on vue file and create emits prop with found events
 * @param {*} data
 * @returns
 */
const declareEmits = (data) => {
  if (data.includes("emits:")) {
    return data;
  }
  const regex = /\$emit\('(.*?)'/g;
  const result = findMatches(regex, data);
  if (result?.length) {
    const events = result.map((match) => {
      return `'${match[1]}'`;
    });
    const uniqueEvents = new Set(events);
    data = data.replace(
      "export default {",
      `export default { \n emits: [${new Array(...uniqueEvents).join(",")}],`
    );
  }

  return data;
};

function findMatches(regex, str, matches = []) {
  const res = regex.exec(str);
  res && matches.push(res) && findMatches(regex, str, matches);
  return matches;
}

module.exports = { replaceToken, declareEmits };
