import { useState, useContext } from 'react';
import Todos from './components/Todos/Todos';
import Header from './components/UI/Header';
import GlobalContext from './store/global-context';
import Input from './components/UI/Input';

const App = () => {
  const [style, setStyle] = useState<object>({});

  const darkThemeCtx = useContext(GlobalContext);

  const headerHandler = () => {
    // setStyle(darkThemeCtx.themes.darkTheme);
  };

  return (
    <>
      <Todos />
    </>
  );
};

export default App;
