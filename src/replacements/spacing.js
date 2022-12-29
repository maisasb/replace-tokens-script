const replaceSpacing = (data) => {
  data = data.replaceAll(/--spacing-base-xx-small/g, "--gl-spacing-01");
  data = data.replaceAll(/--spacing-base-x-small/g, "--gl-spacing-02");
  data = data.replaceAll(/--spacing-base-small/g, "--gl-spacing-03");
  data = data.replaceAll(/--spacing-base/g, "--gl-spacing-04");
  data = data.replaceAll(/--spacing-base-large/g, "--gl-spacing-06");
  data = data.replaceAll(/--spacing-medium-small/g, "--gl-spacing-08");
  data = data.replaceAll(/--spacing-medium/g, "--gl-spacing-10");
  data = data.replaceAll(/--spacing-medium-large/g, "--gl-spacing-12");
  data = data.replaceAll(/--spacing-wide-small/g, "--gl-spacing-16");
  data = data.replaceAll(/--spacing-wide/g, "--gl-spacing-16");
  data = data.replaceAll(/--spacing-wide-large/g, "--gl-spacing-20");
  data = data.replaceAll(/--spacing-wide-x-large/g, "--gl-spacing-20");

  // data = data.replaceAll(//g, "");

  return data;
};

module.exports = { replaceSpacing };
