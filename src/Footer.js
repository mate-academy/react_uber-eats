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
            <div className="tag-ubereats">
                            <span>#</span>
UberEats
                                    </div>
            <a
              title="Facebook"
              target="_blank"
              href="https://www.facebook.com/UberEatsUA/?brand_redir=696009167187917"
              className="ico-facebk"
            />
            <a
              title="Twitter"
              target="_blank"
              href="https://twitter.com/ubereats"
              className="ico-twit"
            />

            <a
              title="Instagram"
              target="_blank"
              href="https://www.instagram.com/ubereats/"
              className="ico-inst"
            />
          </div>
        </div>
        <div className="footer-flex">
          <ul>
            <li><a target="_blank" href="https://about.ubereats.com/">About Uber Eats</a></li>
            <li><a target="_blank" href="https://www.ubereats.com/blog/uk-UA/">Read our blog</a></li>
            <li><a target="_blank" href="https://about.ubereats.com/gift-cards/">Buy gift cards</a></li>
          </ul>

          <ul>
            <li>
              <a
                target="_blank"
                href="https://help.uber.com/ubereats"
              >
              Get Help
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://about.ubereats.com/faq/">
                  Read FAQs</a></li>
            <li><a target="_blank" href="https://www.ubereats.com/en-UA/cities/">View all cities</a></li>
            <li><a target="_blank" href="#">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__download">
        <a href="#" className="footer__download-app-store" />
        <a href="#" className="footer__download-google-play" />
      </div>

      <div className="footer__bottom">
        <span>© 2017 Uber Technologies Inc.</span>
        <div className="footer__bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
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
