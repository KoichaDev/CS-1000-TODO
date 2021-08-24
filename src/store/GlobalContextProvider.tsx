import React from 'react';
import GlobalContext from './global-context';
import DarkThemeContext from './Themes/dark-theme';

const GlobalContextProvider: React.FC = ({ children }) => {
  const globalContext = {
    themes: {
      darkTheme: DarkThemeContext,
    },
  };

  return <GlobalContext.Provider value={globalContext}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
