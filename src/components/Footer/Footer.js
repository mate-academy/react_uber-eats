import React from 'react';
import './Footer.scss';
import { Select } from '../Select/Select';

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
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukrainian' },
              ]}
              value="en"
              iconUrl="./images/world.svg"
            />
          </div>
          <div className="footer__mobile-apps">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://1qt-1.tlnk.io/serve?action=click&site_id=113033&url_ios=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fuber-eats-food-delivery%2Fid1058959277&url_web=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.ubercab.eats&%243p=a_custom_47734&my_keyword=ubereatscom_iOScta_footer&ref_id=647110554.1574264537&sub1=8abcf256-cc3f-4cb5-828e-ecdbee658769&sub_campaign=web&my_placement=web"
              className="footer__mobile-app"
            >
              <img
                src="./images/app-store.svg"
                alt="App Store"
              />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://1qt-1.tlnk.io/serve?action=click&site_id=113033&url_ios=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fuber-eats-food-delivery%2Fid1058959277&url_web=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.ubercab.eats&%243p=a_custom_47734&my_keyword=ubereatscom_androidcta_footer&ref_id=647110554.1574264537&sub1=8abcf256-cc3f-4cb5-828e-ecdbee658769&sub_campaign=web&my_placement=web"
              className="footer__mobile-app"
            >
              <img
                src="./images/google-play.svg"
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
              Terms of use
            </a>
            <a href="#" className="links__link">
              Pricing
            </a>
          </div>
          <div className="footer__social social">
            <a
              href="https://www.facebook.com/ubereats"
              className="social__link"
            >
              <img src="./images/fb.svg" alt="facebook" />
            </a>
            <a
              href="https://www.twitter.com/ubereats"
              className="social__link"
            >
              <img src="./images/tw.svg" alt="twitter" />
            </a>
            <a
              href="https://www.instagram.com/ubereats"
              className="social__link"
            >
              <img src="./images/ig.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
