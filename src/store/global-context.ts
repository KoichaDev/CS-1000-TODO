import React from 'react';
import DarkTheme from './Themes/dark-theme';

const GlobalContext = React.createContext({
  themes: {
    darkTheme: DarkTheme,
  },
});

export default GlobalContext;
