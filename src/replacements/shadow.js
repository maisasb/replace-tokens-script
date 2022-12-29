const replaceShadow = (data) => {
  data = data.replaceAll(/--shadow-level-1/g, "--gl-shadow-level-01");
  data = data.replaceAll(/--shadow-level-2/g, "--gl-shadow-level-02");
  data = data.replaceAll(/--shadow-level-3/g, "--gl-shadow-level-03");
  data = data.replaceAll(/--shadow-level-4/g, "--gl-shadow-level-04");

  return data;
};

module.exports = { replaceShadow };
