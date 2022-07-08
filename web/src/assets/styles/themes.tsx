export type ThemeType = {
  'color-background': string;
  'color-primary-lighter': string;
  'color-primary-light': string;
  'color-primary': string;
  'color-primary-dark': string;
  'color-primary-darker': string;
  'color-secondary': string;
  'color-secondary-dark': string;
  'color-title-in-primary': string;
  'color-text-in-primary': string;
  'color-text-title': string;
  'color-text-complement': string;
  'color-text-base': string;
  'color-line-in-white': string;
  'color-input-background': string;
  'color-button-text': string;
  'color-box-base': string;
  'color-box-footer': string;
};

export type ThemesType = {
  themes: {
    light: ThemeType;
    dark: ThemeType;
  };
};

export const themes = {
  light: {
    'color-background': '#f0f0f7',
    'color-primary-lighter': '#9871f5',
    'color-primary-light': '#916bea',
    'color-primary': '#8257e5',
    'color-primary-dark': '#774dd6',
    'color-primary-darker': '#6842c2',
    'color-secondary': '#04d361',
    'color-secondary-dark': '#04bf58',
    'color-title-in-primary': '#ffffff',
    'color-text-in-primary': '#d4c2ff',
    'color-text-title': '#32264d',
    'color-text-complement': '#9c98a6',
    'color-text-base': '#6a6180',
    'color-line-in-white': '#e6e6f0',
    'color-input-background': '#f8f8fc',
    'color-button-text': '#ffffff',
    'color-box-base': '#ffffff',
    'color-box-footer': '#fafafc',
  },
  dark: {
    'color-background': '#181818',
    'color-primary-lighter': '#9871f5',
    'color-primary-light': '#916bea',
    'color-primary': '#8257e5',
    'color-primary-dark': '#774dd6',
    'color-primary-darker': '#6842c2',
    'color-secondary': '#04d361',
    'color-secondary-dark': '#04bf58',
    'color-title-in-primary': '#000000',
    'color-text-in-primary': '#141414',
    'color-text-title': '#ffffff',
    'color-text-complement': '#9c98a6',
    'color-text-base': '#E2E2E2',
    'color-line-in-white': '#0F0F1A',
    'color-input-background': '#141414',
    'color-button-text': '#000000',
    'color-box-base': '#141414',
    'color-box-footer': '#111111',
  },
};
