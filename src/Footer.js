import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div class="footer-content">
      <div class="footer__logo">
        <a href="#" class="logo-uber" aria-hidden="true">
          <img src="image/white-logo.svg" alt="Logo uber eats in footer" />
        </a>
      </div>

      <div class="footer__info">
        <div>
          <select name="" class="footer__info-languages">
            <option value="en">English</option>
            <option value="ua">Українська</option>
            <option value="ru">Русский</option>
          </select>

          <div class="footer__info-socials">
            <div class="tag-ubereats"><span>#</span>UberEats</div>
            <a href="#" class="ico-facebk"></a>
            <a href="#" class="ico-twit"></a>
            <a href="#" class="ico-inst"></a>
          </div>
        </div>

        <ul>
          <li><a href="#">About UberEats</a></li>
          <li><a href="#">Become a Delivery Partner</a></li>
          <li><a href="#">Become a Restaurant Partner</a></li>
        </ul>

        <ul>
          <li><a href="#">See all cities</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div class="footer__download">
        <a href="#" class="footer__download-app-store"></a>
        <a href="#" class="footer__download-google-play"></a>
      </div>

      <div class="footer__bottom">
        <span>© 2017 Uber Technologies Inc.</span>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>


    </div>

    <a href="#to-top" class="button-to-up" />
  </footer>
)

export default Footer;
