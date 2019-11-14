import React from 'react';
import './Footer.scss';
import Select from '../Select/Select';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top-part">
        <div className="footer__left-part">
          <div className="footer__main main">
            <a
              href="#"
              className="main__link"
            >
              <img
                src="./img/footer-logo.svg"
                alt="Uber Eats"
                className="main__logo"
              />
            </a>
            <Select
              name="langueges"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukrainian' },
                { value: 'ru', label: 'Russian' },
              ]}
              value="en"
              iconUrl="./img/world.svg"
            />
          </div>
          <div className="footer__mobile-apps mobile-apps">
            <img
              src="./img/app-store.png"
              alt="App Store"
              className="mobile-apps__img"
            />
            <img
              src="./img/google-play.png"
              alt="Google Play"
              className="mobile-apps__img"
            />
          </div>
        </div>
        <div className="footer__right-part">
          <ul className="footer__links links">
            <li className="links__list">
              <a href="#" className="links__link medium">
                About UberEats
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Read our blog
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Sign up to deliver
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Add your restaurant
              </a>
            </li>
          </ul>
          <ul className="footer__top-links links">
            <li className="links__list">
              <a href="#" className="links__link medium">
                Get help
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Read FAQs
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                View all cities
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom-part">
        <div className="footer__left-part">
          <p className="footer__copy">
            © 2019 Uber Technologies Inc.
          </p>
        </div>
        <div className="footer__last-part">
          <ul className="footer__bottom-links links">
            <li className="links__list">
              <a href="#" className="links__link links__link--padright">
                Privacy policy
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link links__link--padright">
                Terms of  use
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link links__link--padright">
                Pricing
              </a>
            </li>
          </ul>
          <div className="footer__social-icons">
            <ul className="footer__bottom-links links-social">
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <img src="./img/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <img src="./img/twiter.svg" alt="Twitter" />
                </a>
              </li>
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <img src="./img/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
