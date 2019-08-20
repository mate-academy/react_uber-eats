import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer">
      <div>
        <div className="footer__logo">
          <a href="#"><img src="img\footer-logo.svg" alt="UberEats" /></a>

          <ul className="footer__apps">
            <li>
              <a
              href="https://itunes.apple.com/us/app/uber/id1058959277?mt=8&referrer=mat_click_id%3D51289086a30345d6a1f7fd3508ef19c0-20190604-7336%26link_click_id%3D664529885145978035&mat_click_id=51289086a30345d6a1f7fd3508ef19c0-20190604-7336">
              <img src="img/AppStore.png" alt="appstore logo" className="footer__app-logo footer__appstore-logo" />
              </a>

            </li>
            <li>
              <a
              href="https://play.google.com/store/apps/details?id=com.ubercab.eats&my_keyword=ubereatscom_iOScta_footer&ref_id=581961446.1559660932&sub1=623411bd-9b76-46f5-a989-810eed46c136">
              <img src="img/google-play.png" alt="google-play logo" className="footer__app-logo" />
              </a>
            </li>
          </ul>
        </div>

        <nav>
          <ul className="footer__additional-info footer__lists">
            <li>
              <a href="https://help.uber.com/ubereats" className="footer__lists-link">Get Help</a>
            </li>
            <li>
              <a href="https://about.ubereats.com/faq/" className="footer__lists-link">Read FAQs</a>
            </li>
            <li>
              <a href="https://about.ubereats.com/cities/" className="footer__lists-link">View all cities</a>
            </li>
            <li>
              <a href="#" className="footer__lists-link">English</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="footer__additional-info footer__lists">
            <li>
              <a href="https://about.ubereats.com/" className="footer__lists-link">About Uber Eats</a>
            </li>
            <li>
              <a href="https://www.ubereats.com/blog/" className="footer__lists-link">Read our blog</a>
            </li>
            <li>
              <a href="https://www.ubereats.com/gift-cards/" className="footer__lists-link">Buy gift cards</a>
            </li>
            <li>
              <a href="https://www.uber.com/ru-UA/drive/delivery/" className="footer__lists-link">Sign up to deliver</a>
            </li>
            <li>
              <a href="https://about.ubereats.com/restaurants/" className="footer__lists-link">Add your restaurant</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div>
          <p>© 2019 Uber Technologies Inc.</p>
        </div>
        <div>
          <ul className="footer__policy footer__lists">
            <li className="footer__policy-paragraph">
              <a href="https://privacy.uber.com/policy/" className="footer__lists-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.uber.com/legal/terms" className="footer__lists-link">
                Terms of Use
              </a>
            </li>
            <li>
              <a
              href="https://help.uber.com/riders/article/%D1%86%D0%B5%D0%BD%D1%8B-%D0%B2-ubereats-?nodeId=a3e4363b-761f-4acd-a555-1eff290f5ee6"
              className="footer__lists-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#up" className="up-button">
                <img src="img/arrow.svg" alt="up" className="up-button__arrow" />
              </a>
            </li>
          </ul>

          <ul className="footer__social-networks footer__lists">
            <li>
              <a href="https://www.facebook.com/UberEatsUA/?brand_redir=696009167187917">
                <img src="img/facebook.svg" alt="link to UberEats' facebook page" className="footer__social-networks-logo" />
              </a>
            </li>
            <li>
              <a href="https://mobile.twitter.com/ubereats">
                <img src="img/twitter.svg" alt="link to UberEats' twitter page" className="footer__social-networks-logo" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ubereats/">
                <img src="img/instagram.svg" alt="link to UberEats' instagram page" className="footer__social-networks-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
