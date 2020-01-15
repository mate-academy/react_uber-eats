/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Select } from '../Select';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="./images/footer/logo-footer.svg"
              alt="uber eats"
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
              iconUrl="./images/footer/world.svg"
            />
          </div>

          <div className="footer__mobile-apps">
            <a
              className="footer__mobile-app"
              href="#"
            >
              <img
                src="./images/footer/app-store.png"
                alt="app-store"
              />
            </a>
            <a
              className="footer__mobile-app"
              href="#"
            >
              <img
                src="./images/footer/google-play.png"
                alt="google-play"
                className="footer__mobile-app"
              />
            </a>
          </div>
        </div>
        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            About UberEats
          </a>
          <a href="#" className="links__link ">
            Read our blog
          </a>
          <a href="#" className="links__link ">
            Sign up to deliver
          </a>
          <a href="#" className="links__link ">
            Add your restaurant
          </a>
        </div>
        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            Get help
          </a>
          <a href="#" className="links__link ">
            Read FAQs
          </a>
          <a href="#" className="links__link ">
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
            <a href="#" className="links__link ">
              Privacy policy
            </a>
            <a href="#" className="links__link ">
              Terms of use
            </a>
            <a href="#" className="links__link ">
              Pricing
            </a>
          </div>

          <div className="footer__social social">
            <a href="#" className="social__link">
              <img src="./images/footer/fb-icon.svg" alt="facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/footer/tw-icon.svg" alt="twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/footer/insta-icon.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
