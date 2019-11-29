import React from 'react';
import './footer.scss';
import { Select } from '../Select';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              src="./images/footer-logo.svg"
              alt="Uber Eats"
              className="footer__logo"
            />

            <Select
              name="language"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukrainian' },
                { value: 'ru', label: 'Russian' },
              ]}
              value="en"
              iconUrl="./images/planet.svg"
            />
          </div>

          <div className="footer__mobile-apps">
            <a
              href="https://www.apple.com/retail/"
              className="footer__mobile-app"
            >
              <img
                src="./images/apple-store.png"
                alt="Apple Store"
              />
            </a>

            <a
              href="https://play.google.com/store"
              className="footer__mobile-app"
            >
              <img
                src="./images/google-play.png"
                alt="Google Play"
              />
            </a>

          </div>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            About UberEats
          </a>
          <a href="#" className="links__link">
            Read our blog
          </a>
          <a href="#" className="links__link">
            Sign up to deliver
          </a>
          <a href="#" className="links__link">
            Add your restaurant
          </a>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link  links__link--intended">
            Get help
          </a>
          <a href="#" className="links__link">
            Read FAQs
          </a>
          <a href="#" className="links__link">
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
            <a href="#" className="links__link">
              Privacy policy
            </a>
            <a href="#" className="links__link">
              Terms of use
            </a>
            <a href="#" className="links__link">
              Pricing
            </a>
          </div>

          <div className="footer__social social">
            <a href="#" className="social__link">
              <img src="./images/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/instagram.svg" alt="Instagram" />
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
