const replaceSpacing = (data) => {
  data = data.replaceAll(
    "var(--spacing-base-xx-small)",
    "var(--gl-spacing-01)"
  );
  data = data.replaceAll("var(--spacing-base-x-small)", "var(--gl-spacing-02)");
  data = data.replaceAll("var(--spacing-base-small)", "var(--gl-spacing-03)");
  data = data.replaceAll("var(--spacing-base)", "var(--gl-spacing-04)");
  data = data.replaceAll("var(--spacing-base-large)", "var(--gl-spacing-06)");
  data = data.replaceAll("var(--spacing-medium-small)", "var(--gl-spacing-08)");
  data = data.replaceAll("var(--spacing-medium)", "var(--gl-spacing-10)");
  data = data.replaceAll("var(--spacing-medium-large)", "var(--gl-spacing-12)");
  data = data.replaceAll("var(--spacing-wide-small)", "var(--gl-spacing-16)");
  data = data.replaceAll("var(--spacing-wide)", "var(--gl-spacing-16)");
  data = data.replaceAll("var(--spacing-wide-large)", "var(--gl-spacing-20)");
  data = data.replaceAll("var(--spacing-wide-x-large)", "var(--gl-spacing-20)");

  // data = data.replaceAll(//g, "");

  return data;
};

module.exports = { replaceSpacing };
