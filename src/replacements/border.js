const replaceBorderRadius = (data) => {
  data = data.replaceAll(/--border-radius-none/g, "--gl-border-radius-none");
  data = data.replaceAll(/--border-radius-x-small/g, "--gl-border-radius-xs");
  data = data.replaceAll(/--border-radius-small/g, "--gl-border-radius-sm");
  data = data.replaceAll(/--border-radius-medium/g, "--gl-border-radius-md");
  data = data.replaceAll(/--border-radius-large/g, "--gl-border-radius-lg");
  data = data.replaceAll(/--border-radius-circle/g, "--gl-border-radius-pill");
  //   data = data.replaceAll(//g, "");

  return data;
};

const replaceBorderWidth = (data) => {
  data = data.replaceAll(/--border-width-none/g, "--gl-border-radius-none");
  data = data.replaceAll(/--border-width-thin/g, "--gl-border-radius-hairline");
  data = data.replaceAll(/--border-width-medium/g, "--gl-border-radius-thin");
  data = data.replaceAll(/--border-width-thick/g, "--gl-border-width-thick");

  return data;
};
module.exports = { replaceBorderRadius, replaceBorderWidth };
