const replaceOpacity = (data) => {
  data = data.replaceAll(
    /--opacity-transparent/g,
    "--gl-opacity-semi-transparent"
  );
  data = data.replaceAll(/--opacity-medium/g, "--gl-opacity-medium");
  data = data.replaceAll(/--opacity-intense/g, "--gl-opacity-intense");
  data = data.replaceAll(/--opacity-semi-opaque/g, "--gl-opacity-semi-opaque");

  return data;
};

module.exports = { replaceOpacity };
