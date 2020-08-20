import React from 'react';
import logo from '../../assets/logo-green-2x.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by Ayan Paul. <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quam
            sapiente, neque architecto a pariatur corporis aperiam deleniti
            adipisci rerum asperiores ad perferendis natus facilis molestiae
            odio ratione deserunt? Magnam!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
