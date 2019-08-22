/* eslint-disable max-len */
import React from 'react';

const Footer = () => {
  const about = [
    'About UberEats',
    'Read our blog',
    'Sign up to deliver',
    'Add your restaurant',
  ];

  const getHelp = ['Get help', 'Read FAQs', 'View all cities', 'English'];

  return (
    <div className="footer__container">
      <div className="footer__container-upper-part">
        <div className="footer__container-logo">
          <img
            className="footer__container-logo-photo"
            src="https://hlybchenko.github.io/react_uber-eats/images/logo-footer.svg"
            alt="footer-logo"
          />

          <hr className="footer__container-line-mobile" />
          <div className="footer__container-hash">
            <p>
              <span className="footer__container-hash-icon">#</span>
              <span className="footer__container-hash-text">UberEats</span>
            </p>
          </div>

          <div className="footer__container-rights-lower-mobile">
            <div className="footer__container-rights-social-links">
              <a href="/#">
                <img
                  className="footer__container-rights-social-links-f"
                  src="https://hlybchenko.github.io/react_uber-eats/images/f.svg"
                  alt="facebook-link"
                />
              </a>

              <a href="/#">
                <img
                  className="footer__container-rights-social-links-t"
                  src="https://hlybchenko.github.io/react_uber-eats/images/t.svg"
                  alt="twitter-link"
                />
              </a>

              <a href="/#">
                <img
                  className="footer__container-rights-social-links-i"
                  src="https://hlybchenko.github.io/react_uber-eats/images/i.svg"
                  alt="instagram-link"
                />
              </a>
            </div>
          </div>

          <div className="footer__container-stores">
            <a href="/#">
              <img
                className="footer__container-stores-apple"
                src="https://hlybchenko.github.io/react_uber-eats/images/apple.svg"
                alt="apple-store-link"
              />
            </a>

            <a href="/#">
              <img
                className="footer__container-stores-google"
                src="https://hlybchenko.github.io/react_uber-eats/images/google.png"
                alt="google-store-link"
              />
            </a>
          </div>
        </div>

        <div className="footer__container-about">
          <ul className="footer__container-about-list">
            {about.map(item => (
              <li className="footer__container-about-item" key={item}>
                <span className="footer__container-about-item-text">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__container-get-help">
          <ul className="footer__container-get-help-list">
            {getHelp.map(item => (
              <li className="footer__container-get-help-item" key={item}>
                <span className="footer__container-get-help-item-text">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="footer__container-line" />

      <div className="footer__container-stores-mobile">
        <a href="/#">
          <img
            className="footer__container-stores-apple"
            src="https://hlybchenko.github.io/react_uber-eats/images/apple.svg"
            alt="apple-store-link"
          />
        </a>

        <a href="/#">
          <img
            className="footer__container-stores-google"
            src="https://hlybchenko.github.io/react_uber-eats/images/google.png"
            alt="google-store-link"
          />
        </a>
      </div>

      <hr className="footer__container-line-mobile" />

      <div className="footer__container-lower-part">
        <div className="footer__container-lower-part-text">
          <div className="footer__container-inc">
            <p>© 2019 Uber Technologies Inc.</p>
            <div className="footer__container-lower-part-social">
              <div className="footer__container-rights-social-links">
                <a href="/#">
                  <img
                    className="footer__container-rights-social-links-f"
                    src="https://hlybchenko.github.io/react_uber-eats/images/f.svg"
                    alt="facebook-link"
                  />
                </a>

                <a href="/#">
                  <img
                    className="footer__container-rights-social-links-t"
                    src="https://hlybchenko.github.io/react_uber-eats/images/t.svg"
                    alt="twitter-link"
                  />
                </a>

                <a href="/#">
                  <img
                    className="footer__container-rights-social-links-i"
                    src="https://hlybchenko.github.io/react_uber-eats/images/i.svg"
                    alt="instagram-link"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__container-rights">
            <div className="footer__container-rights-upper">
              <span>Privacy policy</span>
              <span>Terms of use</span>
              <span>Pricing</span>
            </div>

            <div className="footer__container-rights-lower">
              <div className="footer__container-rights-social-links">
                <a href="/#">
                  <img
                    className="footer__container-rights-social-links-f"
                    src="https://hlybchenko.github.io/react_uber-eats/images/f.svg"
                    alt="facebook-link"
                  />
                </a>

                <a href="/#">
                  <img
                    className="footer__container-rights-social-links-t"
                    src="https://hlybchenko.github.io/react_uber-eats/images/t.svg"
                    alt="twitter-link"
                  />
                </a>

                <a href="/#">
                  <img
                    className="footer__container-rights-social-links-i"
                    src="https://hlybchenko.github.io/react_uber-eats/images/i.svg"
                    alt="instagram-link"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
