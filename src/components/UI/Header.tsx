import React from 'react';

const Header: React.FC<{ header?: object }> = ({ header, children }) => {
  return <header {...header}>{children}</header>;
};

export default Header;
