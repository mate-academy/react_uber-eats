import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__apps-and-links">
        <div className="footer__logo-and-apps">
          <a
            href="/react_uber-eats"
            className="footer__logo"
          >
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg"
              alt="UberEats"
            />
          </a>

          <ul className="footer__apps">
            <li>
              <a href="/react_uber-eats" target="_blank">
                <img
                  src="img/AppStore.png"
                  alt="appstore logo"
                  className="footer__app-logo footer__appstore-logo"
                />
              </a>
            </li>

            <li>
              <a target="_blank" href="/react_uber-eats">
                <img
                  src="img/google-play.png"
                  alt="google-play logo"
                  className="footer__app-logo"
                />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__additional-info-lists">
          <ul className="footer__additional-info footer__lists">
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                About Uber Eats
              </a>
            </li>
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                Read our blog
              </a>
            </li>
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                Buy gift cards
              </a>
            </li>
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                Sign up to deliver
              </a>
            </li>
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                Add your restaurant
              </a>
            </li>
          </ul>

          <ul className="footer__additional-info footer__lists">
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                Get Help
              </a>
            </li>
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                Read FAQs
              </a>
            </li>
            <li>
              <a href="/react_uber-eats" className="footer__lists-link">
                View all cities
              </a>
            </li>
            <li className="footer__language">
              <a
                href="/react_uber-eats"
                className="footer__lists-link footer__language-link"
              >
                English
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__policy">
        <div className="footer__copyright">
          <p>© 2019 Uber Technologies Inc.</p>
        </div>

        <div className="footer__policy-and-social-networks">
          <ul className="footer__policy-and-terms footer__lists">
            <li className="footer__policy-paragraph">
              <a href="/react_uber-eats" className="footer__lists-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__policy-paragraph">
              <a href="/react_uber-eats" className="footer__lists-link">
                Terms of Use
              </a>
            </li>
            <li className="footer__policy-paragraph">
              <a href="/react_uber-eats" className="footer__lists-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#up" className="up-button">
                <img
                  src="img/arrow.svg"
                  alt="up"
                  className="up-button__arrow"
                />
              </a>
            </li>
          </ul>

          <ul className="footer__social-networks footer__lists">
            <li>
              <a href="/react_uber-eats">
                <img
                  src="img/facebook.svg"
                  alt="link to UberEats' facebook page"
                  className="footer__social-networks-logo"
                />
              </a>
            </li>
            <li>
              <a href="/react_uber-eats">
                <img
                  src="img/twitter.svg"
                  alt="link to UberEats' twitter page"
                  className="footer__social-networks-logo"
                />
              </a>
            </li>
            <li>
              <a href="/react_uber-eats">
                <img
                  src="img/instagram.svg"
                  alt="link to UberEats' instagram page"
                  className="footer__social-networks-logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
