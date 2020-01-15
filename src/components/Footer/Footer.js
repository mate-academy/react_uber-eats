import React from 'react';
import './Footer.scss';
import { Select } from '../Select';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="./images/logo-white.svg"
              alt="Uber Eats"
            />

            <Select
              name="language"
              options={[
                {
                  value: 'en', label: 'English',
                },
                {
                  value: 'ua', label: 'Ukrainian',
                },
              ]}
              value="en"
              iconUrl="./images/world.svg"
            />
          </div>
          <div className="footer__mobile-apps">
            <a
              className="footer__mobile-apps"
              href="https://www.apple.com/ios/app-store/"
            >
              <img
                src="./images/app-store.png"
                alt="App Store"
                className="footer__mobile-app"
              />
            </a>
            <a
              className="footer__mobile-apps"
              href="https://play.google.com/store"
            >
              <img
                src="./images/google-play.png"
                alt="Google Play"
                className="footer__mobile-app"
              />
            </a>
          </div>
        </div>

        <div className="footer__top-links links">
          <a href="#/" className="links__link links__link--intended">
            About Uber Eats
          </a>
          <a href="#/" className="links__link">
             Read our blog
          </a>
          <a href="#/" className="links__link">
            Sign up to deliver
          </a>
          <a href="#/" className="links__link">
            Add your restaurant
          </a>
        </div>

        <div className="footer__top-links links">
          <a href="#/" className="links__link links__link--intended">
            Get help
          </a>
          <a href="#/" className="links__link">
            Read FAQs
          </a>
          <a href="#/" className="links__link">
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
            <a href="#/" className="links__link">
              Privacy policy
            </a>
            <a href="#/" className="links__link">
              Terms of  use
            </a>
            <a href="#/" className="links__link">
              Pricing
            </a>
          </div>

          <div className="footer__social social">
            <a href="#/" className="social">
              <img src="./images/fb.svg" alt="facebook" />
            </a>
            <a href="#/" className="social">
              <img src="./images/tw.svg" alt="twitter" />
            </a>
            <a href="#/" className="social">
              <img src="./images/ig.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
