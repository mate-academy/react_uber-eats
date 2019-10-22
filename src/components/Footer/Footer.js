import React from 'react';
import './Footer.scss';
import Select from '../Select';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              src="./images/f-logo.svg"
              alt="Uber Eats"
              className="footer__logo"
            />
            <Select
              name="language"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukrainian' },
              ]}
              value="en"
              iconUrl="./images/world-icon.svg"
            />
          </div>
          <div className="footer__mobile-apps">
            <a href="#/" className="footer__mobile-app">
              <img
                alt="download ios"
                src="./images/dl-ios.png"
              />
            </a>
            <a href="#/" className="footer__mobile-app">
              <img
                alt="download android"
                src="./images/dl-android.png"
              />
            </a>

          </div>
        </div>

        <div className="footer__top-links links">
          <a className="links__link links__link--intended" href="#/">
            About UberEats
          </a>
          <a className="links__link" href="#/">
            Read our blog
          </a>
          <a className="links__link" href="#/">
            Sign up to deliver
          </a>
          <a className="links__link" href="#/">
            Add your restaurant
          </a>
        </div>
        <div className="footer__top-links links">
          <a className="links__link links__link--intended" href="#/">
            Get help
          </a>
          <a className="links__link" href="#/">
            Read FAQs
          </a>
          <a className="links__link" href="#/">
            View all cities
          </a>
          <a className="links__link" href="#/">
            <img alt="language" src="./images/lang-icon.svg" />
            English
          </a>
        </div>
      </div>

      <div className="footer__bottom-part">
        <p className="footer__copyright">© 2019 Uber Technologies Inc.</p>
        <div className="footer__bottom-misc">
          <div className="footer__bottom-links links">
            <a className="links__link" href="#/">
              Privacy policy
            </a>
            <a className="links__link" href="#/">
              Terms of use
            </a>
            <a className="links__link" href="#/">
              Pricing
            </a>
          </div>

          <div className="footer__bottom-social social">
            <a className="social__link" href="#/">
              <img alt="facebook" src="./images/fb-icon.svg" />
            </a>
            <a className="social__link" href="#/">
              <img alt="twitter" src="./images/tw-icon.svg" />
            </a>
            <a className="social__link" href="#/">
              <img alt="instagram" src="./images/inst-icon.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
