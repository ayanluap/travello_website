import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <div className="navigation__ham"></div>
      </label>

      <div className="navigation__background"></div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              01 About Travello
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              02 Your Benefits
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              03 Popular Tours
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              04 Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              05 Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
