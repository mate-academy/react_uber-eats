import React from 'react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content" data-aos="fade-down">
      <div className="footer__logo">
        <a href="#" className="logo-uber" aria-hidden="true">
          <img src="image/white-logo.svg" alt="Logo uber eats in footer" />
        </a>
      </div>

      <div className="footer__info">
        <div>
          <select className="footer__info-languages">
            <option value="en">English</option>
            <option value="ua">Українська</option>
            <option value="ru">Русский</option>
          </select>

          <div className="footer__info-socials">
            <div className="tag-ubereats"><span>#</span>UberEats</div>
            <a href="#" className="ico-facebk"></a>
            <a href="#" className="ico-twit"></a>
            <a href="#" className="ico-inst"></a>
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

      <div className="footer__download">
        <a href="#" className="footer__download-app-store"></a>
        <a href="#" className="footer__download-google-play"></a>
      </div>

      <div className="footer__bottom">
        <span>© 2017 Uber Technologies Inc.</span>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
    <ScrollUpButton
      ContainerClassName="up-to-top"
      StopPosition={null}
      ShowAtPosition={700}
      AnimationDuration={800}
    />

  </footer>
);

export default Footer;
