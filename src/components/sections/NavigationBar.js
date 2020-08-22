import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__ham"></span>
      </label>

      <div className="navigation__background"></div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              to="#"
              activeClassName="active"
              className="navigation__link"
            >
              01 About Travello
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              02 Your Benefits
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              03 Popular Tours
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              04 Stories
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              05 Book Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
