import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">

        <div className="footer__main">
          <div className="main__left">
            <img src="./images/logo_white.svg" alt="Uber Eats" />
            <div>Language</div>
          </div>

          <div className="footer__modile-apps">
            <a href="/#" className="footer__modile-app">
              <img
                src="./images/google_play.png"
                alt="Google play"
              />
            </a>

            <a href="/#" className="footer__modile-app">
              <img
                src="./images/app_store.png"
                alt="App store"
                className="footer__modile-app"
              />
            </a>
          </div>
        </div>

        <div className="footer__top-links links">
          <a href="/#" className="links__link links__link--intended">
            About UberEats
          </a>
          <a href="/#" className="links__link">
            Read our blog
          </a>
          <a href="/#" className="links__link">
            Sing up to deliver
          </a>
          <a href="/#" className="links__link">
            Add your restaurant
          </a>
        </div>

        <div className="footer__top-links">
          <a href="/#" className="links__link links__link--intended">
            Get help
          </a>
          <a href="/#" className="links__link">
            Read FAQs
          </a>
          <a href="/#" className="links__link">
            Views all cities
          </a>
        </div>

      </div>
      <div className="footer__bottom-part">
        <p className="footer__copyright">
          &#9400; 2019 Uber Technologies Inc.
        </p>

        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a href="/#" className="links__link">
              Privacy policy
            </a>
            <a href="/#" className="links__link">
              Terms of use
            </a>
            <a href="/#" className="links__link">
              Pricing
            </a>
          </div>
        </div>

        <div className="footer__social social">
          <a href="/#" className="social__link">
            <img src="./images/facebook.svg" alt="Facebook" />
          </a>
          <a href="/#" className="social__link">
            <img src="./images/twitter.svg" alt="Twitter" />
          </a>
          <a href="/#" className="social__link">
            <img src="./images/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
