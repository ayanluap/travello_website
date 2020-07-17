import React, { Fragment } from 'react';
import Button from './Button';

import logo from '../../assets/logo-white.png';

const Logo = () => {
  return (
    <Fragment>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header__layout">
        <h1 className="primary-heading">
          <span className="primary-heading--main">travello</span>
          <span className="primary-heading--sub">
            make your journey awesome
          </span>
        </h1>

        <Button />
      </div>
    </Fragment>
  );
};

export default Logo;
