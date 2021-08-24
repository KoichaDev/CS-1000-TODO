import React from 'react';

interface LightTheme {
  color: {
    primary: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    secondary: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
  };
}

const LightThemeContext: LightTheme = {
  color: {
    primary: {
      primary: '#005A9E',
      secondary: '#0078D7',
      tertiary: '#C3DCF7',
      quaternary: '#465EFC',
    },
    secondary: {
      primary: '#EDEDED',
      secondary: '#F4F4F4',
      tertiary: '#FFFAF2',
      quaternary: '#FFFFFF',
    },
  },
};

export default LightThemeContext;
