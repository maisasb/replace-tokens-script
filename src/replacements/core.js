const replaceCoreCss = (data) => {
  /**
   * Replace root css for data-theme
   * Because the new tokens is only on theme level
   */
  data = data.replaceAll(":root", ":root, [data-theme='on-light']");
  return data;
};

module.exports = { replaceCoreCss };
