import React from 'react';

const Header = ({gradient, img, children}) => {
  return (
    <div className="header">
      { children }
    </div>
  );
};

export default Header;
