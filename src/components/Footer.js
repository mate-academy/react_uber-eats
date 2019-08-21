import React from 'react';

const Footer = () => (
  <footer class="footer">
    <section class="footer__section">
    <div class="footer__logo">
      <a href="#">
        <img src="images/icons/white-logo.svg" alt="logo" />
      </a>
    </div>
    <hr class="hr" />

    <div class="footer__nav">
      <div class="footer__column">
        <form class="footer__nav-lang">
          <select class="footer__nav-lang-input">
            <option class="footer__nav-lang-input" value="РУССКИЙ">РУССКИЙ</option>
            <option class="footer__nav-lang-input" selected value="ENGLISH">ENGLISH</option>
            <option class="footer__nav-lang-input" value="УКРАЇНСЬКА">УКРАЇНСЬКА</option>
          </select>
        </form>

        <p class="footer__nav-name">
          <span class="footer__nav-name-hash">#</span>
          <span class="footer__nav-name-name">UberEats</span>
        </p>

        <div class="footer__social">
          <a href="#">
            <img src="images/icons/facebook.svg" alt="facebook-icon" />
          </a>
          <a class="footer__social--twitter" href="#">
            <img src="images/icons/twitter.svg" alt="twitter-icon" />
          </a>
          <a class="footer__social--instagram" href="#">
            <img src="images/icons/instagram.svg" alt="instagram-icon" />
          </a>
        </div>
      </div>

      <div class="footer__column">
        <a href="#/">About UberEats</a>
        <a href="#/">Become a Delivery Partner</a>
        <a href="#/">Become a Restaurant Partner</a>
      </div>

      <div class="footer__column">
        <a href="#/">See all cities</a>
        <a href="#/">Pricing</a>
        <a href="#/">Help</a>
        <a href="#/">FAQs</a>
      </div>
    </div>
    <hr class="hr" />

    <div class="footer__app">
      <a class="appstore" href="#/" target="_blank">
        <img src="images/download_apple.png" alt="appstore-icon" />
      </a>

      <a class="gplay" href="#/" target="_blank">
        <img src="images/google_play.png" alt="googleplay-icon" />
      </a>
    </div>
    <hr class="hr"/>

    <div class="footer__rights">
      <p>© 2019 Uber Technologies Inc.</p>
      <a class="link" href="#/">Privacy</a>
      <a class="link" href="#/">Terms</a>
    </div>

    <a href="#" class="arrow-to-top">
    </a>
    </section>
  </footer>
)

export default Footer;
