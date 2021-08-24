import React from 'react';
import LightTheme from './Themes/light-theme';
import DarkTheme from './Themes/dark-theme';

const GlobalContext = React.createContext({
  themes: {
    lightTheme: LightTheme,
    darkTheme: DarkTheme,
  },
});

export default GlobalContext;
