import React from 'react';
import './styles/footer.scss';

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer__row">
        <div className="footer__row-column">
          <a href="#!" className="footer__logo">
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg"
              alt="logo"
            />
          </a>
          <div className="footer__applications">
            <a
              href="https://apps.apple.com/app/id1058959277?my_keyword=ubereatscom_iOScta_footer&ref_id=1753866267.1566203921&sub1=01dc0a8d-63f7-4c76-a543-cca7242a9735"
            >
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"
                alt="appStore"
                className="footer__applications-link"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ubercab.eats&my_keyword=ubereatscom_androidcta_footer&ref_id=1753866267.1566203921&sub1=01dc0a8d-63f7-4c76-a543-cca7242a9735"
            >
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png"
                alt="googlePlay"
                className="footer__applications-link"
              />
            </a>
          </div>
        </div>
        <div className="footer__row-column footer__row-column--info">
          <div className="footer__nav-block">
            <a
              href="#"
              className="footer__nav-block-link footer__link footer__nav-block-link--title"
            >
              About UberEats
            </a>
            <a
              href="#"
              className="footer__nav-block-link footer__link"
            >
              Read our blog
            </a>
            <a
              href="#"
              className="footer__nav-block-link footer__link"
            >
              Sign up to deliver
            </a>
            <a
              href="#"
              className="footer__nav-block-link footer__link"
            >
              Add your restaurant
            </a>
          </div>

          <div className="footer__nav-block">
            <a
              href="#"
              className="footer__nav-block-link footer__link footer__nav-block-link--title"
            >
              Get help
            </a>
            <a
              href="#"
              className="footer__nav-block-link footer__link"
            >
              Read FAQs
            </a>
            <a
              href="#"
              className="footer__nav-block-link footer__link"
            >
              View all cities
            </a>
            <a
              href="#"
              className="footer__nav-block-link footer__link footer__nav-block-link--language"
            >
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/2601cb43facfcd27a8d88d727dce9bb5.svg"
                alt="language"
                className="footer__nav-block-link--language-img"
              />
              English
            </a>
          </div>
        </div>
      </div>

      <div className="footer__row footer__row--last">
        <div className="footer__row-column">
          <span className="footer__row-column-inc">
            © 2019 Uber Technologies Inc.
          </span>
        </div>
        <div className="footer__row-column footer__row-column--social-info">
          <div className="footer__rules">
            <a
              className="footer__link" href="#!"
            >
              Privacy Policy
            </a>
            <a
              className="footer__link" href="#!"
            >
              Terms of Use
            </a>
            <a
              className="footer__link" href="#!"
            >
              Pricing
            </a>
          </div>

          <div className="footer__social">
            <a href="#!" className="footer__social-link footer__link">
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ccfc8856107f17665b7c82df307d35ee.svg"
                alt="facebook"
              />
            </a>
            <a href="#!" className="footer__social-link footer__link">
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/db07894edae0a7dde4b9f7477489eb3f.svg"
                alt="twitter"
              />
            </a>
            <a href="#!" className="footer__social-link footer__link">
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8c75d9d92274d2f1df48a02f35a7b1f0.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
