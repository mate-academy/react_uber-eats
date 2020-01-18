import React from 'react';
import { Select } from '../Select/Select';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              src="./images/logo-white.svg"
              alt="Uber Eats"
              className="footer__logo"
            />
            <Select
              name="language"
              options={[
                {
                  value: 'en', label: 'Engilsh',
                },
              ]}
              value="en"
              iconUrl="./images/world.svg"
            />
          </div>
          <div className="footer__mobile-apps">
            <a
              href="/"
              className="footer__mobile-app"
            >
              <img
                src="./images/app-store.png"
                alt="app store"
              />
            </a>
            <a
              href="/"
              className="footer__mobile-app"
            >
              <img
                src="./images/google-play.svg"
                alt="google play"
                className="footer_mobile-app"
              />
            </a>
          </div>
        </div>
        <div className="footer__top-links links">
          <a href="/" className="links__link links__link--intended">
            About UberEats
          </a>
          <a href="/" className="links__link">
            Read our blog
          </a>
          <a href="/" className="links__link">
            Sign up to deliver
          </a>
          <a href="/" className="links__link">
            Add your restaurant
          </a>
        </div>
        <div className="footer__top-links">
          <a href="/" className="links__link links__link--intended">
            Get help
          </a>
          <a href="/" className="links__link">
            Read FAQs
          </a>
          <a href="/" className="links__link">
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
            <a href="/" className="links__link">
              Privacy policy
            </a>
            <a href="/" className="links__link">
              Terms to use
            </a>
            <a href="/" className="links__link">
              Pricing
            </a>
          </div>
          <div className="footer__social social">
            <a href="/" className="social__link">
              <img src="./images/fb-icon.svg" alt="facebook" />
            </a>
            <a href="/" className="social__link">
              <img src="./images/tw-icon.svg" alt="twitter" />
            </a>
            <a href="/" className="social__link">
              <img src="./images/insta-icon.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
