import type { ThemeDefinition } from 'vuetify';

export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#DDDCDC',
    surface: '#FFFFFF',
    primary: '#42D392',
    'surface-light': '#C7C7C7',
    'primary-light': '#42D3924D',
  },
  variables: {
    'theme-on-primary': '255,255,255',
    'medium-emphasis-opacity': 1,
    'theme-primary-light': '66, 211, 146, 0.3',
  },
};

export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#090a0a',
    surface: '#323236',
    primary: '#4f99da',
    'surface-light': '#4d4d54',
    'primary-light': '#4f99da4D',
  },
  variables: {
    'theme-on-primary': '255,255,255',
    'medium-emphasis-opacity': 1,
    'theme-primary-light': '79, 153, 218, 0.3',
  },
};

