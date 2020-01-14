import React from 'react';
import Select from './Select';
import '../styles/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <section className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              src="./images/logo-footer.svg"
              alt="Uber Eats"
              className="footer__logo"
            />
            <Select
              name="language"
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
          <div className="footer__mobile-apps">
            <a className="footer__mobile-app" href="/appstore">
              <img src="./images/appstore.png" alt="App Store" />
            </a>
            <a className="footer__mobile-app" href="/googleplay">
              <img src="./images/google-play.png" alt="Google Play" />
            </a>
          </div>
        </div>
        <div className="footer__top-links links">
          <a href="/about" className="links__link links__link--bold">
            About UberEats
          </a>
          <a href="/readblog" className="links__link">Read our blog</a>
          <a href="/sign-up" className="links__link">Sign up to deliver</a>
          <a href="/addrest" className="links__link">Add your restaurant</a>
        </div>
        <div className="footer__top-links links">
          <a href="/gethelp" className="links__link links__link--bold">
            Get help
          </a>
          <a href="/faqs" className="links__link">Read FAQs</a>
          <a href="/cities" className="links__link">View all cities</a>
        </div>
      </section>
      <section className="footer__bottom-part">
        <p className="footer__copyright">© 2019 Uber Technologies Inc.</p>
        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a href="/privacy" className="links__link">Privacy policy</a>
            <a href="/terms" className="links__link">Terms of  use</a>
            <a href="/pricing" className="links__link">Pricing</a>
          </div>
          <div className="footer__socials social">
            <a href="www.facebook.com" className="social__link">
              <img src="./images/facebook.svg" alt="Facebook" />
            </a>
            <a href="www.twitter.com" className="social__link">
              <img src="./images/twitter.svg" alt="Twitter" />
            </a>
            <a href="www.instagram.com" className="social__link">
              <img src="./images/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
