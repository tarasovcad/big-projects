import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className='logo__wrapper'>
      <div className="logo">
        <img src="./../../../src/assets/logo.svg" alt="" width={228} height={91} />
      </div>
    </div>
  );
};
