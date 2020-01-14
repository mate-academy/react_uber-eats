import React from 'react';

import './footer.scss';
import './social.scss';
import logo from './pics/logo-white.svg';
import appStore from './pics/app-store.svg';
import googlePlay from './pics/google-play.svg';

const Footer = () => (
  <div className="width width--footer">
    <footer className="footer">
      <section className="footer__top">
        <section className="footer__top-left">
          <section className="footer__logo-select">
            <a href="#/"><img src={logo} alt="Uber Eats logotype" /></a>
            <select className="footer__select" name="" id="">
              <option value="">English</option>
              <option value="">Ukrainian</option>
            </select>
          </section>

          <section>
            <a href="#/">
              <img src={appStore} alt="Download on the App Store" />
            </a>
            <a href="#/">
              <img
                className="footer__store--gp"
                src={googlePlay}
                alt="Get it on Google Plat"
              />
            </a>
          </section>
        </section>

        <nav>
          <ul>
            <li className="footer__nav-li">
              <a
                className="footer__link"
                href="#/"
              >
                About Uber Eats
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                className="footer__link"
                href="#/"
              >
                Read out blog
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                className="footer__link"
                href="#/"
              >
                Sign up to deliver
              </a>
            </li>
            <li className="footer__nav-li footer__nav-li--last">
              <a
                className="footer__link"
                href="#/"
              >
                Add your restaurant
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__top-right-nav">
          <ul>
            <li className="footer__nav-li">
              <a
                className="footer__link"
                href="#/"
              >
                Get help
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                className="footer__link"
                href="#/"
              >
                Read FAQs
              </a>
            </li>
            <li className="footer__nav-li footer__nav-li--last">
              <a
                className="footer__link"
                href="#/"
              >
                View all cities
              </a>
            </li>
          </ul>
        </nav>

      </section>

      <hr className="footer__hr" />

      <section className="footer__bottom">
        <p className="footer__copyright">© 2019 Uber Technologies Inc.</p>
        <section>
          <nav>
            <ul className="footer__bottom-nav">
              <li className="footer__bottom-nav-li">
                <a
                  className="footer__link"
                  href="#/"
                >
                  Privacy policy
                </a>
              </li>
              <li className="footer__bottom-nav-li">
                <a
                  className="footer__link"
                  href="#/"
                >
                  Terms of  use
                </a>
              </li>
              <li className="footer__bottom-nav-li">
                <a
                  className="footer__link"
                  href="#/"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          <section className="social">
            <button
              className="social__icon social__icon--fb"
              type="button"
              // href="#/"
            />
            <button
              className="social__icon social__icon--tw"
              type="button"
              // href="#/"
            />
            <button
              className="social__icon social__icon--inst"
              type="button"
              // href="#/"
            />
          </section>
        </section>
      </section>
      <div className="div" />

    </footer>
  </div>
);

export default Footer;
