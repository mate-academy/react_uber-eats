import React from 'react';
import './Footer.scss';
import { Select } from '../Select';

export const Footer = props => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              src="./images/footerLogo.svg"
              alt="UberEats"
              className="footer__logo"
            />
            <Select
              name="language"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukranian' },
              ]}
              value="en"
              iconUrl="./images/languageIcon.svg"
            />
          </div>
          <div className="footer__mobile-apps">
            <a href="##" className="footer__mobile-app">
              <img
                src="./images/appStoreIcon.png"
                alt="App Store"
              />
            </a>
            <a href="##" className="footer__mobile-app">
              <img
                src="./images/GooglePlayIcon.png"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
        <div className="footer__top-links links">
          <a
            href="##"
            className="links__link links__link--highlighted"
          >
            About UberEats

          </a>
          <a
            href="##"
            className="links__link"
          >
            Read our blog

          </a>
          <a
            href="##"
            className="links__link"
          >
            Sign up to deliver

          </a>
          <a
            href="##"
            className="links__link"
          >
            Add your restaurant

          </a>
        </div>
        <div className="footer__top-links">
          <a
            href="##"
            className="links__link links__link--highlighted"
          >
            Get help
          </a>
          <a
            href="##"
            className="links__link"
          >
            Read FAQs
          </a>
          <a
            href="##"
            className="links__link"
          >
            View all cities
          </a>
        </div>
      </div>
      <div className="footer__bottom-part">
        <p className="footer__copyright">
        © 2019 Uber Technologies Inc.
        </p>

        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a
              href="##"
              className="links__link links__link--highlighted"
            >
            Privacy policy
            </a>
            <a
              href="##"
              className="links__link"
            >
            Terms of  use
            </a>
            <a
              href="##"
              className="links__link"
            >
            Pricing
            </a>
          </div>
          <div className="footer__social social">
            <a
              href="https://www.facebook.com/UberEats/"
              alt="Facebook link"
              className="social__link"
            >
              <img src="./images/facebookIcon.svg" alt="facebook" />
            </a>
            <a
              href="https://twitter.com/ubereats"
              alt="Twitter link"
              className="social__link"
            >
              <img src="./images/twitterIcon.svg" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/ubereats"
              alt="Instagram link"
              className="social__link"
            >
              <img src="./images/instagramIcon.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
