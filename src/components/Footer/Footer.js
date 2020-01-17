/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top--part">
        <div className="footer__main">
          <div className="footer__logo--container">
            <img
              src="./images/uber-white.svg"
              alt="uber-eats"
              className="footer__logo"
            />
            <div>Language</div>
          </div>
          <div className="footer__mobile-apps">
            <a
              href="#"
              className="footer__mobile-app"
            >
              <img
                src="./images/app-store.svg"
                alt="app-store"
              />
            </a>
            <a
              href="#"
              className="footer__mobile-app"
            >
              <img
                src="./images/google-play.svg"
                alt="google-play"
              />
            </a>
          </div>
        </div>
        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--bold">
              About UberEats
          </a>
          <a href="#" className="links__link">
              Read our blog
          </a>
          <a href="#" className="links__link">
              Sing up to deliver
          </a>
          <a href="#" className="links__link">
              Add your reataurant
          </a>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--bold">
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
      <div className="footer__bottom--part">
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
              <img src="./images/fb.svg" alt="facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/twit.svg" alt="twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
