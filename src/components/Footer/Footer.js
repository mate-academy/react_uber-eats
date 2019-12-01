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
              className="footer__logo"
              src="./images/fb.svg"
              alt="Uber Eats"
            />

            <Select
              name="language"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukranian' },
              ]}
              value="en"
              iconUrl="./images/world.svg"
            />
          </div>

          <div className="footer__mobile-apps">
            <a
              href="https://play.google.com/store/apps/details?id=com
                .ubercab.eats&referrer=mat_click_id%3D7056afe65227473
                9b3ef74d2aa740491-20191103-7336%26link_click_id%3D719
                550996128553076&mat_click_id=7056afe652274739b3ef74d2
                aa740491-20191103-7336
              "
              className="footer__mobile-app"
            >
              <img
                src="./images/Google.svg"
                alt="App Store"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com
                .ubercab.eats&referrer=mat_click_id%3D7056afe65227473
                9b3ef74d2aa740491-20191103-7336%26link_click_id%3D719
                550996128553076&mat_click_id=7056afe652274739b3ef74d2
                aa740491-20191103-7336
              "
              className="footer__mobile-app"
            >
              <img
                src="./images/Apple.svg"
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
          <div className="footer__bottom-links links">
            <a href="#" className="links__link">
              Privacy policy
            </a>
            <a href="#" className="links__link">
              Terms of  use
            </a>
            <a href="#" className="links__link">
              Pricing
            </a>
          </div>

          <div className="footer__social social">
            <a href="#" className="social__link">
              <img src="./images/twitter.svg" alt="facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/instagram.svg" alt="twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/Group (4).svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
