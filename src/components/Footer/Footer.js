/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.scss';
import { Select } from '../Select/Select';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="./img/footer-logo.svg"
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
              iconUrl="./img/world.svg"
            />
          </div>

          <div className="footer__mobile-apps">
            <a href="#" className="footer__mobile-app">
              <img src="./img/apple-pay.png" alt="apple store" />
            </a>

            <a href="#" className="footer__mobile-app">
              <img src="./img/google-pay.png" alt="google play" />
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
            Sigh up to deliver
          </a>
          <a href="#" className="links__link">
            Add your restaurant
          </a>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
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
          <div className="footer__bottom--links links">
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
              <img src="./img/fb.svg" alt="facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./img/twitter.svg" alt="twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./img/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
);
