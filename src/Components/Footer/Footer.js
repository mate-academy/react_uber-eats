import React from 'react';
import './Footer.scss';
import Select from '../Select/Select';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top-part">
        <div className="footer__left-part">
          <div className="footer__main main">
            <a
              href="#"
              className="main__link"
            >
              <img
                src="./img/footer-logo.svg"
                alt="Uber Eats"
                className="main__logo"
              />
            </a>
            <Select
              name="langueges"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ua', label: 'Ukrainian' },
                { value: 'ru', label: 'Russian' },
              ]}
              value="en"
              iconUrl="./img/world.svg"
            />
          </div>
          <div className="footer__mobile-apps mobile-apps">
            <img
              src="./img/app-store.png"
              alt="App Store"
              className="mobile-apps__img"
            />
            <img
              src="./img/google-play.png"
              alt="Google Play"
              className="mobile-apps__img"
            />
          </div>
        </div>
        <div className="footer__right-part">
          <ul className="footer__links links">
            <li className="links__list">
              <a href="#" className="links__link medium">
                About UberEats
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Read our blog
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Sign up to deliver
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Add your restaurant
              </a>
            </li>
          </ul>
          <ul className="footer__top-links links">
            <li className="links__list">
              <a href="#" className="links__link medium">
                Get help
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                Read FAQs
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link">
                View all cities
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom-part">
        <div className="footer__left-part">
          <p className="footer__copy">
            © 2019 Uber Technologies Inc.
          </p>
          <div className="footer__social-icons-mobile">
            <ul className="footer__bottom-links-mobile links-social">
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1164 0H0.883093C0.395706 0 0 0.394915 0 0.883093V15.1164C0 15.6046 0.395706 16 0.883093 16H8.54587V9.80386H6.46091V7.38879H8.54587V5.60785C8.54587 3.54159 9.80755 2.41586 11.6512 2.41586C12.5351 2.41586 13.293 2.48199 13.5141 2.5107V4.67049L12.2353 4.67101C11.2328 4.67101 11.0395 5.1476 11.0395 5.84654V7.388H13.4311L13.1184 9.80281H11.0392V15.9992H15.1161C15.604 15.9992 16 15.6032 16 15.1164V0.882566C15.9997 0.394915 15.6043 0 15.1164 0Z" fill="white"/>
                  </svg>
                </a>
              </li>
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3333 1.89305C18.6218 2.21429 17.8582 2.43216 17.056 2.52942C17.8751 2.02968 18.5022 1.23702 18.7993 0.295398C18.031 0.758193 17.1829 1.09424 16.2792 1.27641C15.5556 0.489895 14.5262 0 13.3846 0C11.1943 0 9.41835 1.80937 9.41835 4.03969C9.41835 4.35601 9.45338 4.66496 9.52105 4.96039C6.22534 4.79174 3.30294 3.18301 1.34702 0.738495C1.00511 1.33425 0.810611 2.02842 0.810611 2.76943C0.810611 4.1714 1.51132 5.40841 2.57446 6.13213C1.92449 6.10999 1.31318 5.92782 0.77801 5.62502V5.67549C0.77801 7.63256 2.14559 9.2659 3.95895 9.63764C3.62671 9.72873 3.27637 9.7792 2.91394 9.7792C2.65783 9.7792 2.41016 9.75335 2.16733 9.70411C2.6723 11.3104 4.13655 12.4785 5.8714 12.5105C4.51469 13.5937 2.804 14.2374 0.945945 14.2374C0.625807 14.2374 0.310471 14.2177 0 14.182C1.75539 15.3304 3.83938 16 6.07921 16C13.375 16 17.3629 9.84321 17.3629 4.50374L17.3496 3.98063C18.1289 3.41439 18.803 2.70297 19.3333 1.89305Z" fill="white"/>
                  </svg>
                </a>
              </li>
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9175 0H4.74833C2.31372 0 0.333008 1.98081 0.333008 4.41542V11.5846C0.333008 14.0193 2.31372 16 4.74833 16H11.9175C14.3523 16 16.333 14.0192 16.333 11.5846V4.41542C16.3331 1.98081 14.3523 0 11.9175 0ZM14.9135 11.5846C14.9135 13.2365 13.5695 14.5804 11.9176 14.5804H4.74833C3.09649 14.5805 1.75261 13.2365 1.75261 11.5846V4.41542C1.75261 2.76358 3.09649 1.4196 4.74833 1.4196H11.9175C13.5694 1.4196 14.9134 2.76358 14.9134 4.41542V11.5846H14.9135Z" fill="white"/>
                    <path d="M8.33276 3.87734C6.05941 3.87734 4.20996 5.72679 4.20996 8.00014C4.20996 10.2734 6.05941 12.1227 8.33276 12.1227C10.6061 12.1227 12.4556 10.2734 12.4556 8.00014C12.4556 5.72679 10.6061 3.87734 8.33276 3.87734ZM8.33276 10.7031C6.84227 10.7031 5.62956 9.49053 5.62956 8.00004C5.62956 6.50947 6.84218 5.29685 8.33276 5.29685C9.82333 5.29685 11.036 6.50947 11.036 8.00004C11.036 9.49053 9.82324 10.7031 8.33276 10.7031Z" fill="white"/>
                    <path d="M12.6289 2.67383C12.3554 2.67383 12.0867 2.78456 11.8936 2.97857C11.6995 3.17163 11.5879 3.44041 11.5879 3.71487C11.5879 3.98847 11.6996 4.25715 11.8936 4.45116C12.0866 4.64423 12.3554 4.7559 12.6289 4.7559C12.9034 4.7559 13.1712 4.64423 13.3652 4.45116C13.5592 4.25715 13.67 3.98838 13.67 3.71487C13.67 3.44041 13.5592 3.17163 13.3652 2.97857C13.1722 2.78456 12.9034 2.67383 12.6289 2.67383Z" fill="white"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__last-part">
          <ul className="footer__bottom-links links">
            <li className="links__list">
              <a href="#" className="links__link links__link--padright">
                Privacy policy
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link links__link--padright">
                Terms of  use
              </a>
            </li>
            <li className="links__list">
              <a href="#" className="links__link links__link--padright">
                Pricing
              </a>
            </li>
          </ul>
          <div className="footer__social-icons">
            <ul className="footer__bottom-links links-social">
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1164 0H0.883093C0.395706 0 0 0.394915 0 0.883093V15.1164C0 15.6046 0.395706 16 0.883093 16H8.54587V9.80386H6.46091V7.38879H8.54587V5.60785C8.54587 3.54159 9.80755 2.41586 11.6512 2.41586C12.5351 2.41586 13.293 2.48199 13.5141 2.5107V4.67049L12.2353 4.67101C11.2328 4.67101 11.0395 5.1476 11.0395 5.84654V7.388H13.4311L13.1184 9.80281H11.0392V15.9992H15.1161C15.604 15.9992 16 15.6032 16 15.1164V0.882566C15.9997 0.394915 15.6043 0 15.1164 0Z" fill="white"/>
                  </svg>
                </a>
              </li>
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3333 1.89305C18.6218 2.21429 17.8582 2.43216 17.056 2.52942C17.8751 2.02968 18.5022 1.23702 18.7993 0.295398C18.031 0.758193 17.1829 1.09424 16.2792 1.27641C15.5556 0.489895 14.5262 0 13.3846 0C11.1943 0 9.41835 1.80937 9.41835 4.03969C9.41835 4.35601 9.45338 4.66496 9.52105 4.96039C6.22534 4.79174 3.30294 3.18301 1.34702 0.738495C1.00511 1.33425 0.810611 2.02842 0.810611 2.76943C0.810611 4.1714 1.51132 5.40841 2.57446 6.13213C1.92449 6.10999 1.31318 5.92782 0.77801 5.62502V5.67549C0.77801 7.63256 2.14559 9.2659 3.95895 9.63764C3.62671 9.72873 3.27637 9.7792 2.91394 9.7792C2.65783 9.7792 2.41016 9.75335 2.16733 9.70411C2.6723 11.3104 4.13655 12.4785 5.8714 12.5105C4.51469 13.5937 2.804 14.2374 0.945945 14.2374C0.625807 14.2374 0.310471 14.2177 0 14.182C1.75539 15.3304 3.83938 16 6.07921 16C13.375 16 17.3629 9.84321 17.3629 4.50374L17.3496 3.98063C18.1289 3.41439 18.803 2.70297 19.3333 1.89305Z" fill="white"/>
                  </svg>
                </a>
              </li>
              <li className="links-social__list">
                <a href="#" className="links-social__link">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9175 0H4.74833C2.31372 0 0.333008 1.98081 0.333008 4.41542V11.5846C0.333008 14.0193 2.31372 16 4.74833 16H11.9175C14.3523 16 16.333 14.0192 16.333 11.5846V4.41542C16.3331 1.98081 14.3523 0 11.9175 0ZM14.9135 11.5846C14.9135 13.2365 13.5695 14.5804 11.9176 14.5804H4.74833C3.09649 14.5805 1.75261 13.2365 1.75261 11.5846V4.41542C1.75261 2.76358 3.09649 1.4196 4.74833 1.4196H11.9175C13.5694 1.4196 14.9134 2.76358 14.9134 4.41542V11.5846H14.9135Z" fill="white"/>
                    <path d="M8.33276 3.87734C6.05941 3.87734 4.20996 5.72679 4.20996 8.00014C4.20996 10.2734 6.05941 12.1227 8.33276 12.1227C10.6061 12.1227 12.4556 10.2734 12.4556 8.00014C12.4556 5.72679 10.6061 3.87734 8.33276 3.87734ZM8.33276 10.7031C6.84227 10.7031 5.62956 9.49053 5.62956 8.00004C5.62956 6.50947 6.84218 5.29685 8.33276 5.29685C9.82333 5.29685 11.036 6.50947 11.036 8.00004C11.036 9.49053 9.82324 10.7031 8.33276 10.7031Z" fill="white"/>
                    <path d="M12.6289 2.67383C12.3554 2.67383 12.0867 2.78456 11.8936 2.97857C11.6995 3.17163 11.5879 3.44041 11.5879 3.71487C11.5879 3.98847 11.6996 4.25715 11.8936 4.45116C12.0866 4.64423 12.3554 4.7559 12.6289 4.7559C12.9034 4.7559 13.1712 4.64423 13.3652 4.45116C13.5592 4.25715 13.67 3.98838 13.67 3.71487C13.67 3.44041 13.5592 3.17163 13.3652 2.97857C13.1722 2.78456 12.9034 2.67383 12.6289 2.67383Z" fill="white"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      type="button"
      className="footer__button-up"
    >
      <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Shape" d="M8.01841 0.0428432L8.05278 0.0102539L15.6742 7.25758L14.0756 8.70713L8.92868 3.88391V25H7.14296V3.85222L1.96216 8.70713L0.399658 7.25758L8.00323 0.0102539L8.01885 0.0428432H8.01841Z" fill="white"/>
      </svg>
    </a>
  </footer>
);

export default Footer;
