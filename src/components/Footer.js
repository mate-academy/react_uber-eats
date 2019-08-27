import React from 'react';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__apps-and-links">
        <div className="footer__logo-and-apps">
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="footer__logo"
          >
            <img
              src={`${IMG_URL}/12c47a69e1022b581a7e823e9bd45466.svg`}
              alt="UberEats"
            />
          </a>

          <ul className="footer__apps">
            <li>
              <a
                href="https://apps.apple.com/app/id1058959277?my_keyword=ubereatscom_iOScta_footer&ref_id=777261344.1566217124&sub1=fa9a652e-6078-41e5-8dcb-cbef03ae9fb2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/AppStore.png"
                  alt="appstore logo"
                  className="footer__app-logo footer__appstore-logo"
                />
              </a>
            </li>

            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.ubercab.eats&my_keyword=ubereatscom_androidcta_footer&ref_id=777261344.1566217124&sub1=fa9a652e-6078-41e5-8dcb-cbef03ae9fb2"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://about.ubereats.com/?_ga=2.40393184.377662423.1566629948-777261344.1566217124"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                About Uber Eats
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/blog/uk-UA/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Read our blog
              </a>
            </li>
            <li>
              <a
                href="https://about.ubereats.com/gift-cards/?_ga=2.44592096.518078225.1566899714-777261344.1566217124"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Buy gift cards
              </a>
            </li>
            <li>
              <a
                href="https://www.uber.com/ua/ru/drive/delivery/?_ga=2.12955635.518078225.1566899714-777261344.1566217124"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Sign up to deliver
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/restaurant/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Add your restaurant
              </a>
            </li>
          </ul>

          <ul className="footer__additional-info footer__lists">
            <li>
              <a
                href="https://help.uber.com/ubereats"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Get Help
              </a>
            </li>
            <li>
              <a
                href="https://about.ubereats.com/faq/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Read FAQs
              </a>
            </li>
            <li>
              <a
                href="https://www.ubereats.com/en-UA/cities/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                View all cities
              </a>
            </li>
            <li className="footer__language">
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
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
              <a
                href="https://privacy.uber.com/policy/?_ga=2.15183858.518078225.1566899714-777261344.1566217124"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Privacy Policy
              </a>
            </li>
            <li className="footer__policy-paragraph">
              <a
                href="https://www.uber.com/legal/terms/gb/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Terms of Use
              </a>
            </li>
            <li className="footer__policy-paragraph">
              <a
                href="https://help.uber.com/riders/article/%D1%86%D0%B5%D0%BD%D1%8B-%D0%B2-ubereats-?nodeId=a3e4363b-761f-4acd-a555-1eff290f5ee6"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lists-link"
              >
                Pricing
              </a>
            </li>
          </ul>

          <ul className="footer__social-networks footer__lists">
            <li>
              <a
                href="https://www.facebook.com/UberEatsUA/?brand_redir=696009167187917"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/facebook.svg"
                  alt="link to UberEats' facebook page"
                  className="footer__social-networks-logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ubereats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/twitter.svg"
                  alt="link to UberEats' twitter page"
                  className="footer__social-networks-logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ubereats/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
