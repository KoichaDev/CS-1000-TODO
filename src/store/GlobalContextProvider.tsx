import React from 'react';
import GlobalContext from './global-context';
import LightTheme from './Themes/light-theme';
import DarkTheme from './Themes/dark-theme';

const GlobalContextProvider: React.FC = ({ children }) => {
  const globalContext = {
    themes: {
      lightTheme: LightTheme,
      darkTheme: DarkTheme,
    },
  };

  return <GlobalContext.Provider value={globalContext}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
