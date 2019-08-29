import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ IMG_URL }) => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="footer__above-line-info">
        <div className="footer__logo-download">
          <a
            href="#$"
          >
            <img
              alt="UberEats logo"
              src={`${IMG_URL}/12c47a69e1022b581a7e823e9bd45466.svg`}
              className="footer__logo"
            />
          </a>
          <div className="footer__download">
            <a href="#$">
              <img
                alt="AppStore download"
                src={`${IMG_URL}/d0558d91063038236b60e3ef71fdc1fd.svg`}
                className="footer__download-icon"
              />
            </a>
            <a href="#$">
              <img
                alt="GooglePlay download"
                src={`${IMG_URL}/cf6dad406fdfdcd290fd40de9008ae50.png`}
                className="footer__download-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer__about-help">
          <div className="footer__about">
            <a className="footer__link" href="#$">About Uber Eats</a>
            <a className="footer__link" href="#$">Read our blog</a>
            <a className="footer__link" href="#$">Buy gift cards</a>
            <a className="footer__link" href="/#$">Sign up to deliver</a>
            <a className="footer__link" href="/#$">Add your restaurant</a>
          </div>
          <div className="footer__help">
            <a className="footer__link" href="#$">Get Help</a>
            <a className="footer__link" href="#$">Read FAQs</a>
            <a className="footer__link" href="#$">View all cities</a>
            <form>
              <select className="footer__language">
                <img
                  alt="language icon"
                  src={`${IMG_URL}/2601cb43facfcd27a8d88d727dce9bb5.svg`}
                  className="footer__icon"
                />
                <option className="footer__language-option" selected>
                  English
                </option>
                <option className="footer__language-option">
                  Русский
                </option>
                <option className="footer__language-option">
                  Українська
                </option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <hr className="footer__line" />
      <div className="footer__under-line-info">
        <div>
          <span className="footer__trade-mark">
            © 2019 Uber Technologies Inc.
          </span>
        </div>
        <div className="footer__policy-subscribe">
          <div className="footer__policy">
            <a className="footer__link-policy" href="#$">
              Privacy Policy
            </a>
            <a className="footer__link-policy" href="#$">Terms of Use</a>
            <a className="footer__link-policy" href="#$">Pricing</a>
          </div>
          <div className="footer__subscribe">
            <a href="#$">
              <img
                src={`${IMG_URL}/ccfc8856107f17665b7c82df307d35ee.svg`}
                alt="facebook logo"
                className="footer__icon footer__social-icon"
              />
            </a>
            <a href="#$">
              <img
                src={`${IMG_URL}/db07894edae0a7dde4b9f7477489eb3f.svg`}
                alt="twitter logo"
                className="footer__icon footer__social-icon"
              />
            </a>
            <a href="#$">
              <img
                src={`${IMG_URL}/8c75d9d92274d2f1df48a02f35a7b1f0.svg`}
                alt="instagramm logo"
                className="footer__icon footer__social-icon"
              />
            </a>
            <a href="#top" className="footer__top-button">
              <img
                alt="button to top of page"
                className="footer__top-button-arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  IMG_URL: PropTypes.string,
}.isRequired;

export default Footer;
