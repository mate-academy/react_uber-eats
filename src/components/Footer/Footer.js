/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';
import Select from '../Select/Select';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="./images/uber_logo_white.svg"
              alt="Uber_Eats"
            />
            <Select
              name="Language"
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
              href="#"
              className="footer__mobile-app"
            >
              <img
                src="./images/app_store.svg"
                alt="app_store"
              />
            </a>
            <a
              href="#"
              className="footer__mobile-app"
            >
              <img
                src="./images/google_play.svg"
                alt="google_play"
              />
            </a>
          </div>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intendent">
            About UberEats
          </a>
          <a href="#" className="links__link links__link--intendent">
            About UberEats
          </a>
          <a href="#" className=" links__link">
            Sign up to deliver
          </a>
          <a href="#" className="links__link">
            Add your restaurant
          </a>
        </div>
        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intendent">
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
            <a href="" className="social__link">
              <img src="./images/facebook.svg" alt="facebook" />
            </a>
            <a href="" className="social__link">
              <img src="./images/twiter.svg" alt="twiter" />
            </a>
            <a href="" className="social__link">
              <img src="./images/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
