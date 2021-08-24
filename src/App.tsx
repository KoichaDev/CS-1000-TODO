import React, { useState, useContext } from 'react';
import Todos from './components/Todos/Todos';
import Header from './components/UI/Header';
import GlobalContext from './store/global-context';

const App = () => {
  const [style, setStyle] = useState<object>({});

  const darkThemeCtx = useContext(GlobalContext);

  const headerHandler = () => {
    setStyle(darkThemeCtx.themes.darkTheme);
  };

  return (
    <>
      <Header
        header={{
          style: style,
          onClick: headerHandler,
        }}>
        asdsad
      </Header>
      <Todos />
    </>
  );
};

export default App;
