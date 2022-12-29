/**
 * Replacement function
 * Replace the old tokens for new one
 * @param {String} data - the file string
 * @returns String - file
 */
const replaceToken = (data) => {
  // data = data.replace(/--color-shade-medium/g, "--gl-color-shades-gray-20");

  // wonderland
  // OLD 1.4.3 v1 latest                                  # NEW v2.2.0
  data = data.replace(
    /--gl-font-letter-spacing-rule-/g,
    "--gl-letter-spacing-rule-"
  );
  data = data.replace(/--gl-font-line-height-/g, "--gl-line-height-");
  data = data.replace(/--gl-font-weight-thin/g, "--gl-font-weight-light");
  data = data.replace(/--gl-font-family-secondary/g, "--gl-font-family-base");
  data = data.replace(/--gl-font-family-primary/g, "--gl-font-family-base");
  data = data.replace(/var(--gl-border-radius-circle)/g, "100%");

  return data;
};

module.exports = { replaceToken };
