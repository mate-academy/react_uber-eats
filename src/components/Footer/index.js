import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './footer.scss';
import './social.scss';
import logo from './pics/logo-white.svg';
import appStore from './pics/app-store.svg';
import googlePlay from './pics/google-play.svg';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="width width--footer">
      <footer className="footer">
        <section className="footer__top">
          <section className="footer__top-left">
            <section className="footer__logo-select">
              <Link to="/restaurants">
                <img src={logo} alt="Uber Eats logotype" />
              </Link>

              <select className="footer__select" name="" id="">
                <option value="">English</option>
                <option value="">Ukrainian</option>
              </select>
            </section>

            <section className="footer__stores">
              <Link to={pathname}>
                <img
                  src={appStore}
                  alt="Download on the App Store"
                />
              </Link>

              <Link
                to={pathname}
                className="footer__stores--gp"
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                />
              </Link>
            </section>
          </section>

          <nav>
            <ul>
              <li className="footer__nav-li">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  About Uber Eats
                </Link>
              </li>

              <li className="footer__nav-li">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  Read out blog
                </Link>
              </li>

              <li className="footer__nav-li">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  Sign up to deliver
                </Link>
              </li>

              <li className="footer__nav-li footer__nav-li--last">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  Add your restaurant
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__top-right-nav">
            <ul>
              <li className="footer__nav-li">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  Get help
                </Link>
              </li>

              <li className="footer__nav-li">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  Read FAQs
                </Link>
              </li>

              <li className="footer__nav-li footer__nav-li--last">
                <Link
                  to={pathname}
                  className="footer__link"
                >
                  View all cities
                </Link>
              </li>
            </ul>
          </nav>

        </section>

        <hr className="footer__hr" />

        <section className="footer__bottom">
          <section className="footer__copyright-nav">
            <p className="footer__copyright">© 2019 Uber Technologies Inc.</p>
            <section>
              <nav>
                <ul className="footer__bottom-nav">
                  <li className="footer__bottom-nav-li">
                    <Link
                      to={pathname}
                      className="footer__link footer__link--bottom"
                    >
                      Privacy policy
                    </Link>
                  </li>

                  <li className="footer__bottom-nav-li">
                    <Link
                      to={pathname}
                      className="footer__link footer__link--bottom"
                    >
                      Terms of  use
                    </Link>
                  </li>

                  <li className="footer__bottom-nav-li">
                    <Link
                      to={pathname}
                      className="footer__link footer__link--bottom"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>

            <button
              type="button"
              className="footer__totop"
              onClick={() => window.scrollTo(0, 0)}
            />
          </section>

          <section className="social footer__social">
            <Link
              to={pathname}
              className="social__icon social__icon--fb"
            />
            <Link
              to={pathname}
              className="social__icon social__icon--tw"
            />
            <Link
              to={pathname}
              className="social__icon social__icon--inst"
            />
          </section>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
