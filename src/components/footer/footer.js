import React from 'react';
import {
  logoFooter,
  firstLetter,
  secondLetter,
  facebook,
  twitter, instagramm,
} from '../../icons';
import './footer.scss';

import LanguageDropdown from '../languageDropdown/languageDropdown';
import { arrowScrollToTop } from '../../img/icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div>
        <div
          className="footer__logo-language"
        >
          {logoFooter}
          <LanguageDropdown />
        </div>
        <div>
          <div className="applications footer__applications">
            <a href="/#">
              <div className="appStore" />
            </a>
            <a href="/#">
              <div className="googlePlay" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__info">
        <ul className="footer__about">
          <li className="footer__item">
            <a className="link" href="/#">
            About UberEats
            </a>
          </li>
          <li className="footer__item">
            <a className="link" href="/#">
              Read our blog
            </a>
          </li>
          <li className="footer__item">
            <a className="link" href="/#">
              Sign up to deliver
            </a>
          </li>
          <li className="footer__item">
            <a className="link" href="/#">
              Add your restaurant
            </a>
          </li>
        </ul>

        <ul className="footer__help">
          <li className="footer__item">
            <a className="link" href="/#">
              Get help
            </a>
          </li>
          <li className="footer__item">
            <a className="link" href="/#">
              Read FAQs
            </a>
          </li>
          <li className="footer__item">
            <a className="link" href="/#">
              View all cities
            </a>
          </li>
          <li className="footer__item">
            <a className="link" href="/#">

              {firstLetter}

              {secondLetter}

              English
            </a>
          </li>
        </ul>

      </div>
    </div>
    <div className="footer__container">
      <p className="footer__rights">
        © 2019 Uber Technologies Inc.
      </p>
      <div className="footer__privacy_socials">
        <ul className="footer__privacy privacy">
          <li className="privacy__item">
            <a
              className="privacy__link"
              href="/#"
            >
            Privacy policy
            </a>
          </li>
          <li className="privacy__item">
            <a
              className="privacy__link"
              href="/#"
            >
              Terms of  use
            </a>
          </li>
          <li className="privacy__item">
            <a
              className="privacy__link"
              href="/#"
            >
              Pricing
            </a>
          </li>
        </ul>
        <div
          className="scroll_to_top"
          onKeyDown={() => window.scrollTo(
            {
              top: 0,
              behavior: 'smooth',
            }
          )}
          role="button"
          tabIndex="0"
          onClick={() => window.scrollTo(
            {
              top: 0,
              behavior: 'smooth',
            }
          )}
        >
          {arrowScrollToTop}
        </div>
        <div>
          <ul className="footer__networks privacy social">
            <li className="social__item">
              <a href="/#" className="social__link">
                {facebook}
              </a>
            </li>
            <li className="social__item">
              <a href="/#" className="social__link">
                {twitter}
              </a>
            </li>
            <li
              className="social__item"
            >
              <a href="/#" className="social__link">
                {instagramm}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
