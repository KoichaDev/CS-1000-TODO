import { useState, useContext } from 'react';
import Todos from './components/Todos/Todos';
import GlobalContext from './store/global-context';
import NavBar from './components/UI/NavBar';

const App = () => {
  const [style, setStyle] = useState<object>({});

  const darkThemeCtx = useContext(GlobalContext);

  const headerHandler = () => {
    // setStyle(darkThemeCtx.themes.darkTheme);
  };

  return (
    <>
      <NavBar />
      <Todos />
    </>
  );
};

export default App;
