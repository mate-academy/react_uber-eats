import React from 'react';
import './Footer.scss';
import Select from '../select/Select';

const Footer = () => (
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
              name="Language"
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
          <div className="footer__apps">
            <a href="#/app-store" className="footer__app">
              <img
                src="./images/app-store.png"
                alt="app store"
              />
            </a>
            <a href="#/google-play" className="footer__app">
              <img
                src="./images/google-play.png"
                alt="google play"
              />
            </a>
          </div>
        </div>

        <div className="footer__top-links links">
          <a href="#/about" className="links__link links__link--bold">
              About UberEats
          </a>
          <a href="#/blog" className="links__link">
              Read our blog
          </a>
          <a href="#/deliver" className="links__link">
              Sign up to deliver
          </a>
          <a href="#/add-restaurant" className="links__link">
              Add your restaurant
          </a>
        </div>
        <div className="footer__top-links links">
          <a href="#/help" className="links__link links__link--bold">
              Get help
          </a>
          <a href="#/FAQ" className="links__link">
              Read FAQs
          </a>
          <a href="#/view-all" className="links__link">
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
            <a href="#/privacy" className="links__link">
                Privacy policy
            </a>
            <a href="#/terms-of-use" className="links__link">
                Terms of use
            </a>
            <a href="#/pricing" className="links__link">
                Pricing
            </a>
          </div>
          <div className="footer__social social">
            <a href="#/fb" className="social__link">
              <img src="./images/facebook.svg" alt="facebook" />
            </a>
            <a href="#/twitter" className="social__link">
              <img src="./images/twitter.svg" alt="twitter" />
            </a>
            <a href="#/instagram" className="social__link">
              <img src="./images/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
