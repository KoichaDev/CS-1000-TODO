import { useState, useEffect, useContext } from 'react';
import Header from '../UI/Header';
import Input from '../UI/Input';
import LightTheme from './../../store/global-context';
import classes from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<object>();

  const lightThemeCtx = useContext(LightTheme);

  const {
    primary: lightBackgroundPrimary,
    secondary: lightBackgroundSecondary,
    tertiary: lightBackgroundTertiary,
    quaternary: lightBackgroundQuaternary,
  } = lightThemeCtx.themes.light.color.primary;

  const {
    primary: lightColorPrimary,
    secondary: lightColorSecondary,
    tertiary: lightColorTertiary,
    quaternary: lightColorQuaternary,
  } = lightThemeCtx.themes.light.color.secondary;

  const style = {
    background: lightBackgroundSecondary,
    color: lightColorPrimary,
  };

  return (
    <Header>
      <nav className={classes.navbar} style={style}>
        <a href='/' aria-label='Go to your todo homepage' className={classes['navbar__brand']} style={style}>
          ToDo
        </a>
        <Input
          label={'search-field'}
          input={{
            type: 'text',
            id: 'search-field',
            className: classes['navbar__input'],
            placeholder: 'Search something...',
          }}
        />
        <p>Khoi Hoang</p>
      </nav>
    </Header>
  );
};

export default NavBar;
