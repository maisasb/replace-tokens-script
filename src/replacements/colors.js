const replaceOldColorTokens = (data) => {
  //Replace global colors DS 1.0 for DS 2.2
  data = data.replaceAll(/--color-shades-/g, "--gl-color-shades-");

  //Brand colors
  data = data.replaceAll(
    /--color-brand-primary-default/g,
    "--gl-color-shades-magenta-60"
  );
  data = data.replaceAll(
    /--color-brand-primary-light/g,
    "--gl-color-shades-magenta-00"
  );
  data = data.replaceAll(
    /--color-brand-primary-medium/g,
    "--gl-color-shades-magenta-40"
  );
  data = data.replaceAll(
    /--color-brand-primary-dark/g,
    "--gl-color-shades-magenta-80"
  );

  //Text colors
  data = data.replaceAll(
    /--color-text-primary-onlight/g,
    "--sys-color-content-primary"
  );
  data = data.replaceAll(
    /--color-text-secondary-onlight/g,
    "--sys-color-content-secondary"
  );
  data = data.replaceAll(
    /--color-text-tertiary-onlight/g,
    "--sys-color-content-tertiary"
  );
  data = data.replaceAll(
    /--color-text-placeholder-onlight/g,
    "--sys-color-content-placeholder"
  );
  data = data.replaceAll(
    /--color-text-highligh-onlight/g,
    "--sys-color-content-active"
  );
  data = data.replaceAll(
    /--color-text-alternative-ondark/g,
    "--sys-color-content-onbrand"
  );
  data = data.replaceAll(
    /--color-text-primary-ondark/g,
    "--sys-color-content-primary"
  );
  data = data.replaceAll(
    /--color-text-secondary-ondark/g,
    "--sys-color-content-secondary"
  );
  data = data.replaceAll(
    /--color-text-tertiary-ondark/g,
    "--sys-color-content-tertiary"
  );
  data = data.replaceAll(
    /--color-text-placeholder-ondark/g,
    "--sys-color-content-placeholder"
  );

  //Icon colors
  data = data.replaceAll(/--color-icon-light/g, "--sys-color-content-onbrand");
  data = data.replaceAll(/--color-icon-dark/g, "--sys-color-content-primary");
  data = data.replaceAll(
    /--color-icon-alternative/g,
    "--sys-color-content-active"
  );

  //Illustration colors
  data = data.replaceAll(
    /--color-illustration-brand/g,
    "--gl-color-shades-magenta-60"
  );
  data = data.replaceAll(
    /--color-illustration-light/g,
    "--gl-color-shades-white"
  );
  data = data.replaceAll(
    /--color-illustration-medium/g,
    "--gl-color-shades-gray-00"
  );
  data = data.replaceAll(
    /--color-illustration-dark/g,
    "--gl-color-shades-gray-100"
  );

  //Support colors
  data = data.replaceAll(
    /--color-support-neutral-high/g,
    "--gl-color-shades-white"
  );
  data = data.replaceAll(
    /--color-support-neutral-low/g,
    "--gl-color-shades-gray-100"
  );
  data = data.replaceAll(
    /--color-support-alert-onlight/g,
    "--gl-color-shades-yellow-60"
  );
  data = data.replaceAll(
    /--color-support-error-onlight/g,
    "--sys-color-surface-container-error"
  );
  data = data.replaceAll(
    /--color-support-info-onlight/g,
    "--gl-color-shades-blue-50"
  );
  data = data.replaceAll(
    /--color-support-success-onlight/g,
    "--sys-color-surface-container-success"
  );
  data = data.replaceAll(
    /--color-support-alert-ondark/g,
    "--gl-color-shades-yellow-50"
  );
  data = data.replaceAll(
    /--color-support-error-ondark/g,
    "--sys-color-surface-container-error"
  );
  data = data.replaceAll(
    /--color-support-info-ondark/g,
    "--gl-color-shades-blue-40"
  );
  data = data.replaceAll(
    /--color-support-success-ondark/g,
    "--sys-color-surface-container-success"
  );

  //Very Old
  data = data.replaceAll(/--color-shade-white/g, "--gl-color-shades-white");
  data = data.replaceAll(
    /--color-shade-lightest/g,
    "--gl-color-shades-gray-00"
  );
  data = data.replaceAll(/--color-shade-light/g, "--gl-color-shades-gray-10");
  data = data.replaceAll(/--color-shade-medium/g, "--gl-color-shades-gray-20");
  data = data.replaceAll(
    /--color-shade-semi-dark/g,
    "--gl-color-shades-gray-40"
  );
  data = data.replaceAll(/--color-shade-dark/g, "--gl-color-shades-gray-60");
  data = data.replaceAll(/--color-shade-darkest/g, "--gl-color-shades-gray-90");
  data = data.replaceAll(/--color-shade-black/g, "--gl-color-shades-gray-100");

  //Surface colors
  data = data.replaceAll(
    /--color-surface-background-default/g,
    "--sys-color-surface-background-light"
  );
  data = data.replaceAll(
    /--color-surface-background-medium/g,
    "--sys-color-surface-background-medium"
  );
  data = data.replaceAll(
    /--color-surface-background-dark/g,
    "--sys-color-surface-background-dark"
  );
  data = data.replaceAll(
    /--color-surface-background-alternative/g,
    "--sys-color-surface-background-brand"
  );
  data = data.replaceAll(
    /--color-surface-background-overlay/g,
    "--sys-color-surface-background-overlay"
  );
  data = data.replaceAll(
    /--color-surface-action-hover/g,
    "--sys-color-surface-container-hover"
  );
  data = data.replaceAll(
    /--color-surface-action-primary/g,
    "--sys-color-surface-container-active-variant"
  );
  data = data.replaceAll(
    /--color-surface-action-secondary/g,
    "--gl-color-shades-gray-100"
  );
  data = data.replaceAll(
    /--color-surface-action-disabled/g,
    "--sys-color-surface-container-disabled-dark"
  );
  data = data.replaceAll(
    /--color-surface-stroke-default/g,
    "--sys-color-stroke-idle"
  );
  data = data.replaceAll(
    /--color-surface-stroke-light/g,
    "--sys-color-stroke-active"
  );
  data = data.replaceAll(
    /--color-surface-stroke-dark/g,
    "--gl-color-shades-gray-100"
  );
  data = data.replaceAll(
    /--color-surface-stroke-alternative/g,
    "--sys-color-stroke-active-variant"
  );

  // data = data.replaceAll(//g, "");

  return data;
};

module.exports = { replaceOldColorTokens };
