import React from 'react';

import './Footer.scss';
import { Select } from '../Select/Select';

export const Footer = () => {

  return(
    <footer className="footer">
      <div className="content">
        <div className="footer__top-part">
          <div className="footer__main">
            <div className="footer__logo-container">
              <img src="./images/ubereats.svg" alt="ubereats" className="footer__logo"/>
              <Select
                name="Language"
                options={[
                  { value: 'en', label: 'English'},
                  { value: 'ua', label: 'Ukrainian'},
                ]}
                value="en"
                iconURL="./images/earth.svg"
              />
            </div>
            <div className="footer__mobile-apps">
              <a href="#" className="footer__mobile-app">
                <img
                  src="./images/googleplay.png"
                  alt="googleplay"
                />
              </a>
              <a href="#" className="footer__mobile-app">
                <img
                  src="./images/appstore.png"
                  alt="appstore"
                />
              </a>
            </div>
          </div>
          <div className="footer__top-links links">
            <a href="#" className="links__link links__link-bold">
              About Uber Eats
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
            <a href="#" className="links__link links__link-bold">
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
                Privacy Policy
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
                <img src="./images/fb.svg" alt="facebook"/>
              </a>
              <a href="#" className="social__link">
                <img src="./images/tw.svg" alt="twitter"/>
              </a>
              <a href="#" className="social__link">
                <img src="./images/in.svg" alt="instagram"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
