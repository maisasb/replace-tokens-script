/**
 * Replacement function
 * Replace the old tokens for new one
 * @param {String} data - the file string
 * @returns String - file
 */
const replaceToken = (data) => {
  // data = data.replace(/--color-shade-medium/g, "--gl-color-shades-gray-20");

  //Replace global colors DS 1.0 for DS 2.2
  // data = data.replaceAll(/--color-shades-/g, "--gl-color-shades-");

  data = replaceWonderland(data);

  return data;
};

const replaceWonderland = (data) => {
  // wonderland
  // OLD 1.4.3 v1 latest                                  # NEW v2.2.0
  data = data.replaceAll(
    /--gl-font-letter-spacing-rule-/g,
    "--gl-letter-spacing-rule-"
  );
  data = data.replaceAll(/--gl-font-line-height-/g, "--gl-line-height-");
  data = data.replaceAll(/--gl-font-weight-thin/g, "--gl-font-weight-light");
  data = data.replaceAll(
    /--gl-font-family-secondary/g,
    "--gl-font-family-base"
  );
  data = data.replaceAll(/--gl-font-family-primary/g, "--gl-font-family-base");
  data = data.replaceAll("var(--gl-border-radius-circle)", "100%");

  //light
  data = data.replaceAll(
    /--comp-color-button-stroke-secondary-disabled/g,
    "--gl-color-shades-gray-20"
  );
  data = data.replaceAll(
    /--comp-color-button-stroke-secondary-pressed/g,
    "--gl-color-shades-magenta-70"
  );
  data = data.replaceAll(
    /--comp-color-button-stroke-secondary-enabled/g,
    "--gl-color-shades-magenta-60"
  );
  data = data.replaceAll(
    /--comp-color-button-content-tertiary-disabled/g,
    "--gl-color-shades-gray-30"
  );
  data = data.replaceAll(
    /--comp-color-button-content-tertiary-pressed/g,
    "--gl-color-shades-magenta-70"
  );
  data = data.replaceAll(
    /--comp-color-button-content-tertiary-enabled/g,
    "--gl-color-shades-magenta-60"
  );
  data = data.replaceAll(
    /--comp-color-button-content-secondary-disabled/g,
    "--gl-color-shades-gray-30"
  );
  data = data.replaceAll(
    /--comp-color-button-content-secondary-pressed/g,
    "--gl-color-shades-magenta-70"
  );
  data = data.replaceAll(
    /--comp-color-button-content-secondary-enabled/g,
    "--gl-color-shades-magenta-60"
  );
  data = data.replaceAll(
    /--comp-color-button-content-primary-disabled/g,
    "--gl-color-shades-gray-30"
  );
  data = data.replaceAll(
    /--comp-color-button-content-primary-pressed/g,
    "--gl-color-shades-white"
  );
  data = data.replaceAll(
    /--comp-color-button-content-primary-enabled/g,
    "--gl-color-shades-white"
  );
  data = data.replaceAll(
    /--comp-color-button-container-primary-disabled/g,
    "--gl-color-shades-gray-10"
  );
  data = data.replaceAll(
    /--comp-color-button-container-primary-pressed/g,
    "--gl-color-shades-magenta-70"
  );
  data = data.replaceAll(
    /--comp-color-button-container-primary-enabled/g,
    "--gl-color-shades-magenta-60"
  );
  return data;
};

module.exports = { replaceToken };
