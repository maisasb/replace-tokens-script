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
    "--gl-color-shades-gray-00"
  );
  data = data.replaceAll(
    /--color-text-secondary-ondark/g,
    "--gl-color-shades-gray-20"
  );
  data = data.replaceAll(
    /--color-text-tertiary-ondark/g,
    "--gl-color-shades-gray-30"
  );
  data = data.replaceAll(
    /--color-text-placeholder-ondark/g,
    "--gl-color-shades-gray-70"
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
  data = data.replaceAll(
    "var(--color-shade-dark)",
    "var(--gl-color-shades-gray-60)"
  );
  data = data.replaceAll(
    "var(--color-shade-darkest)",
    "var(--gl-color-shades-gray-90)"
  );
  data = data.replaceAll(/--color-shade-black/g, "--gl-color-shades-gray-100");

  //Surface colors
  data = data.replaceAll(
    /--color-surface-background-default/g,
    "--sys-color-surface-background-light"
  );
  data = data.replaceAll(
    /--color-surface-background-medium/g,
    "--sys-color-surface-background-default"
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
    "--sys-color-stroke-active"
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

  data = data.replaceAll(
    /--color-text-highlight-onlight/g,
    "--sys-color-content-active"
  );
  data = data.replaceAll(
    /--color-support-information/g,
    "--gl-color-shades-blue-40"
  );
  data = data.replaceAll(
    /--color-support-error/g,
    "--sys-color-surface-container-error"
  );
  data = data.replaceAll(
    /--color-support-alert/g,
    "--gl-color-shades-yellow-60"
  );
  data = data.replaceAll(
    /--color-support-success/g,
    "--sys-color-surface-container-success"
  );

  //HP colors

  data = data.replaceAll(/--color-hp-doctor-high/g, "--gl-color-shades-red-60");
  data = data.replaceAll(/--color-hp-doctor-low/g, "--gl-color-shades-red-10");
  data = data.replaceAll(
    /--color-hp-health-high/g,
    "--gl-color-shades-fuchsia-70"
  );
  data = data.replaceAll(
    /--color-hp-health-low/g,
    "--gl-color-shades-fuchsia-10"
  );
  data = data.replaceAll(
    /--color-hp-sleep-high/g,
    "--gl-color-shades-violet-80"
  );
  data = data.replaceAll(
    /--color-hp-sleep-low/g,
    "--gl-color-shades-violet-10"
  );
  data = data.replaceAll(/--color-hp-mind-high/g, "--gl-color-shades-blue-50");
  data = data.replaceAll(/--color-hp-mind-low/g, "--gl-color-shades-blue-10");
  data = data.replaceAll(
    /--color-hp-appointment-high/g,
    "--gl-color-shades-turquoise-80"
  );
  data = data.replaceAll(
    /--color-hp-appointment-low/g,
    "--gl-color-shades-turquoise-10"
  );
  data = data.replaceAll(
    /--color-hp-personal-care-high/g,
    "--gl-color-shades-lime-80"
  );
  data = data.replaceAll(
    /--color-hp-personal-care-low/g,
    "--gl-color-shades-lime-10"
  );
  data = data.replaceAll(
    /--color-hp-sport-high/g,
    "--gl-color-shades-yellow-60"
  );
  data = data.replaceAll(
    /--color-hp-sport-low/g,
    "--gl-color-shades-yellow-10"
  );
  data = data.replaceAll(
    /--color-hp-drugs-high/g,
    "--gl-color-shades-orange-80"
  );
  data = data.replaceAll(
    /--color-hp-drugs-low/g,
    "--gl-color-shades-orange-10"
  );
  data = data.replaceAll(/--color-hp-food-high/g, "--gl-color-shades-green-80");
  data = data.replaceAll(/--color-hp-food-low/g, "--gl-color-shades-green-10");

  data = data.replaceAll(
    "var(--color-surface-chat-message)",
    "var(--gl-color-shades-magenta-70)"
  );

  data = data.replaceAll(
    "var(--color-pillars-active)",
    "var(--gl-color-shades-yellow-40)"
  );

  data = data.replaceAll(
    "var(--color-pillars-food)",
    "var(--sys-color-surface-container-success)"
  );

  data = data.replaceAll(
    "var(--color-pillars-mind)",
    "var(--gl-color-shades-blue-20)"
  );

  return data;
};

module.exports = { replaceOldColorTokens };
