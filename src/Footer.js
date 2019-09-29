import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import './footer.scss';

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__container">
        <a href="#!" className="footer__logo">
          <img
            src="img/Uber.svg"
            alt="Uber eats"
            className="footer__logo__img_logo"
          />
          <img src="img/eats.png" alt="Uber eats" />
        </a>
        <hr className="hr" />

        <section className="footer__nav">
          <div className="column-1">
            <form className="footer__nav-lang">
              <div className="footer__dropdown footer__lang_drop">
                <span className="footer__lang_drop-title">
                  <img src="" alt="" />
  ENGLISH
                  {' '}
                  <img src="src/images/drop.png" alt="" />
                </span>
                <div className="footer__dropdown-content">
                  <ul className="footer__dropdown-content_list">
                    <li className="footer__dropdown-content_list-item">
                      <a className="dropdown_link" href="/#">РУССКИЙ</a>
                    </li>
                    <li className="dropdown-content_list-item">
                      <a className="dropdown_link" href="/#">УКРАЇНСЬКА</a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>

            <p className="footer__nav-name">
              <span className="footer__nav-name-hash">#</span>
              <span className="footer__nav-name-name">UberEats</span>
            </p>
          </div>

          <div className="column-2">
            <a className="link" href="#!">About UberEats</a>
            <a className="link" href="#!">Become a Delivery Partner</a>
            <a className="link" href="#!">Become a Restaurant Partner</a>
          </div>

          <div className="column-3">
            <a className="link" href="#!">See all cities</a>
            <a className="link" href="#!">Pricing</a>
            <a className="link" href="#!">Help</a>
            <a className="link" href="#!">FAQs</a>
          </div>
        </section>
        <hr className="hr" />

        <section className="footer__app">
          <a
            className="appstore"
            href="https://www.apple.com/downloads/index.html"
            target="blank"
          >
            <img
              src="img/google.play.svg"
              alt="appstore-icon"
            />
          </a>

          <a
            className="gplay"
            href="img/google.play.svg"
            target="blank"
          >
            <img
              className="gplay"
              src="img/google.app.png"
              alt="googleplay-icon"
            />
          </a>
        </section>
        <hr className="hr" />

        <section className="footer__rights">
          <p>© 2019 Uber Technologies Inc.</p>
          <a className="link" href="#!">Privacy</a>
          <a className="link" href="#!">Terms</a>
        </section>
      </div>
    </footer>
    <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={150}
      EasingType="easeOutCubic"
      AnimationDuration={500}
      style={{ backgroundColor: '#59bd5a', outline: 'none' }}
      ToggledStyle={{}}
    />
  </>
);

export default Footer;
