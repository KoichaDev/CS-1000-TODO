import React from 'react';
import Header from '../UI/Header';
import Input from '../UI/Input';

const NavBar: React.FC = () => {
  return (
    <Header>
      <nav>
        <a href='#'>Todo</a>
        <Input label={'search-field'} input={{ type: 'text', id: 'search-field', className: '' }} />
        <p>Khoi Hoang</p>
      </nav>
    </Header>
  );
};

export default NavBar;
