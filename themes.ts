import { buildLegacyTheme } from 'sanity';
const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--kennis-brand': '#E6E6FA',
  '--my-red': '#FF2400',
  '--my-green': '#98FB98',
  '--my-yellow': '#FFFF00',
  '--my-blue': '#AFDCEC',
  '--my-gray': '#AFDCEC',
};

export const myTheme = buildLegacyTheme({
  '--gray-base': '#666',
  '--component-bg': props['--my-gray'],
  /**Brand */
  '--brand-primary': props['--kennis-brand'],

  /**Default buttons */
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  //**State */
  '--state-info-color': props['--kennis-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /**Navebar */
  '--main-navigation-color--inverted': props['--my-white'],
  '--main-navigation-color': props['--my-black'],

  '--focus-color': props['--kennis-brand'],
});
