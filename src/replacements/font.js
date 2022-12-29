const replaceFontFamily = (data) => {
  data = data.replaceAll(/--font-family-primary/g, "--gl-font-family-base");

  return data;
};

const replaceFontSize = (data) => {
  data = data.replaceAll(/--font-size-xxxs/g, "--gl-font-size-xxxs");
  data = data.replaceAll(/--font-size-xxs/g, "--gl-font-size-xxs");
  data = data.replaceAll(/--font-size-xs/g, "--gl-font-size-xs");
  data = data.replaceAll(/--font-size-sm/g, "--gl-font-size-sm");
  data = data.replaceAll(/--font-size-md/g, "--gl-font-size-md");
  data = data.replaceAll(/--font-size-lg/g, "--gl-font-size-lg");
  data = data.replaceAll(/--font-size-xl/g, "--gl-font-size-xl");
  data = data.replaceAll(/--font-size-xxl/g, "--gl-font-size-xxl");
  data = data.replaceAll(/--font-size-xxxl/g, "--gl-font-size-xxxl");
  data = data.replaceAll(/--font-size-display/g, "--gl-font-size-dmd");
  data = data.replaceAll(/--font-size-xx-small/g, "--gl-font-size-xxxs");
  data = data.replaceAll(/--font-size-x-small/g, "--gl-font-size-xxxs");
  // data = data.replaceAll(/--font-size-small/g, "--gl-font-size-xxs");
  data = data.replaceAll(/--font-size-medium/g, "--gl-font-size-xs");
  data = data.replaceAll(/--font-size-large/g, "--gl-font-size-md");
  data = data.replaceAll(/--font-size-x-large/g, "--gl-font-size-xl");
  data = data.replaceAll(/--font-size-xx-large/g, "--gl-font-size-xxl");
  data = data.replaceAll(/--font-size-xxx-large/g, "--gl-font-size-xxxl");
  data = data.replaceAll(/--font-size-bulky/g, "--gl-font-size-dmd");

  return data;
};

const replaceFontWeight = (data) => {
  data = data.replaceAll(/--font-weight-thin/g, "--gl-font-weight-light");
  data = data.replaceAll(/--font-weight-light/g, "--gl-font-weight-light");
  data = data.replaceAll(/--font-weight-regular/g, "--gl-font-weight-regular");
  data = data.replaceAll(/--font-weight-medium/g, "--gl-font-weight-medium");
  data = data.replaceAll(
    /--font-weight-semi-bold/g,
    "--gl-font-weight-semibold"
  );
  data = data.replaceAll(
    /--font-weight-semibold/g,
    "--gl-font-weight-semibold"
  );
  return data;
};

const replaceLineHeight = (data) => {
  data = data.replaceAll(/--line-height-xxs/g, "--gl-line-height-xxs");
  data = data.replaceAll(/--line-height-xs/g, "--gl-line-height-xs");
  data = data.replaceAll(/--line-height-sm/g, "--gl-line-height-sm");
  data = data.replaceAll(/--line-height-md/g, "--gl-line-height-md");
  data = data.replaceAll(/--line-height-lg/g, "--gl-line-height-lg");
  data = data.replaceAll(/--line-height-xl/g, "--gl-line-height-xxl");
  return data;
};

const replaceLetterSpacing = (data) => {
  data = data.replaceAll(
    /--letter-spacing-default/g,
    "--gl-letter-spacing-rule-01"
  );
  data = data.replaceAll(
    /--letter-spacing-small/g,
    "--gl-letter-spacing-rule-02"
  );
  data = data.replaceAll(
    /--letter-spacing-medium/g,
    " --gl-letter-spacing-rule-03"
  );
  return data;
};

const replaceTextTransform = (data) => {
  data = data.replaceAll(/var(--text-transform-uppercase)/g, "uppercase");
  data = data.replaceAll(/var(--text-transform-lowercase)/g, "lowercase");
  return data;
};

module.exports = {
  replaceFontFamily,
  replaceFontSize,
  replaceFontWeight,
  replaceLineHeight,
  replaceLetterSpacing,
  replaceTextTransform,
};
