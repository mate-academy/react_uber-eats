import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="logo-white">
            <a href="index.html"></a>
          </div>
          <div className="site-map">
            <div className="site-map__cell">
              <div className="site-map__cell--language">
                <select
                  className="site-map__language--select"
                  name="lang"
                  id="lang"
                  aria-label="site-map__language--select"
                >
                  <option
                    className="site-map__language--select--option"
                    value="eng"
                  >
                    english
                  </option>
                  <option
                    className="site-map__language--select--option"
                    value="eng"
                  >
                    russian
                  </option>
                  <option
                    className="site-map__language--select--option"
                    value="eng"
                  >
                    ukraine
                  </option>
                </select>
              </div>
              <div className="site-map__cell--social">
                <a className="site-map__cell--social--link" href="index.html"><span className="hashtag">#</span>UberEats</a>
                <div className="site-map__cell--social--links">
                  <a
                    href="https://www.facebook.com/UberEats/"
                    className="social--links--facebook"
                    aria-hidden="true"
                  >
                  </a>
                  <a
                    href="https://www.twitter.com/ubereats"
                    className="social--links--twitter"
                    aria-hidden="true">
                  </a>
                  <a
                    href="https://www.instagram.com/ubereats/"
                    className="social--links--instagram"
                    aria-hidden="true">
                  </a>
                </div>
              </div>
            </div>
            <div className="site-map__cell">
              <ul className="site-map__cell--wrap">
                <li><a className="site-map__cell-link" href="https://about.ubereats.com">About UberEats</a></li>
                <li><a className="site-map__cell-link" href="https://uber.com/drive/delivery/">Become a Delivery
                  Partner</a></li>
                <li><a className="site-map__cell-link" href="https://about.ubereats.com/restaurants">Become a Restaurant
                  Partner</a></li>
              </ul>
            </div>

            <div className="site-map__cell">
              <ul className="site-map__cell--wrap">
                <li><a className="site-map__cell-link" href="https://about.ubereats.com/cities/">See all cities</a></li>
                <li><a className="site-map__cell-link"
                       href="https://help.uber.com/h/a3e4363b-761f-4acd-a555-1eff290f5ee6">Pricing</a></li>
                <li><a className="site-map__cell-link" href="https://help.uber.com/eaters">Help</a></li>
                <li><a className="site-map__cell-link" href="https://about.ubereats.com/faq">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="store">
            <div className="store__appStore">
              <a className="store__appStore--link" href="https://www.apple.com/ios/app-store/" aria-hidden="true"></a>
            </div>
            <div className="store__googlePlay">
              <a className="store__googlePlay--link" href="https://store.google.com/countrypicker"
                 aria-hidden="true"></a>
            </div>
          </div>
          <div className="privacy">
            <a className="privacy__rights">
              © 2019 Uber Technologies Inc
            </a>
            <a href="https://privacy.uber.com/policy/" className="privacy__link">
              Privacy
            </a>
            <a href="https://www.uber.com/legal/terms" className="privacy__terms">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
