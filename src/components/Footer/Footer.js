/*eslint-disable*/
import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="Footer Footer-desc">
          <div className="Footer__up">
            <div className="Footer__app">
              <a href=""><img src="./img/logofoot.svg" alt=""/></a>
              <div className="Footer__mobile-select">
                <select>
                  <option>English</option>
                </select>
              </div>
              <div className="Footer__apps-link">
                <a>
                  <img src="./img/appstore.svg"/>
                </a>
                <a>
                  <img src="./img/googleplay.svg"/>
                </a>
              </div>
            </div>
            <div className="Footer__about">
              <a>About UberEats</a>
              <a>Read our blog</a>
              <a>Sign up to deliver</a>
              <a>Add your restaurant</a>
            </div>
            <div className="Footer__faq">
              <a>Get help</a>
              <a>Read FAQs</a>
              <a>View all cities</a>
              <a>English</a>
            </div>
          </div>
          <div className="Footer__separator"> </div>
          <div className="Footer__down">
            <div className="Footer__copyright">
              <p>© 2019 Uber Technologies Inc.</p>
            </div>
            <div className="Footer__policy">
              <a>Privacy policy</a>
              <a>Terms of  use</a>
              <a>Pricing</a>
            </div>
          </div>
          <div className="Footer__social">
            <a href="##"><img src="./img/facebook.svg" alt=""/></a>
            <a href="##"><img src="./img/twitter.svg" alt=""/></a>
            <a href="##"><img src="./img/instagram.svg" alt=""/></a>
          </div>
          <a href="#head" className="Footer__anchor">
            <img src="./img/arrow.svg" alt=""/>
          </a>
        </footer>
        <footer className="Footer Footer-mob">
          <div className="Footer__up">
            <img src="./img/logofoot.svg" alt=""/>
            
            <div className="Footer__separator"> </div>
            
            <div className="Footer__mobile-select">
              <select>
                <option>English</option>
              </select>
            </div>
            
            <a className="Footer__hashtag"><span>#</span>UberEats</a>
            
            <div className="Footer__social">
              <img src="./img/facebook.svg" alt=""/>
              <img src="./img/twitter.svg" alt=""/>
              <img src="./img/instagram.svg" alt=""/>
            </div>
            
            <div className="Footer__about">
              <a>About UberEats</a>
              <a>Read our blog</a>
              <a>Sign up to deliver</a>
              <a>Add your restaurant</a>
            </div>
            
            <div className="Footer__faq">
              <a>Get help</a>
              <a>Read FAQs</a>
              <a>View all cities</a>
              <a>English</a>
            </div>
            
          </div>
          
          <div className="Footer__separator"> </div>
          
          <div className="Footer__apps-link">
            <a><img src="./img/appstore.svg"/></a>
            <a><img src="./img/googleplay.svg"/></a>
          </div>
          
          <div className="Footer__separator"> </div>
          
          <div className="Footer__down">
            <div className="Footer__copyright">
              <p>© 2019 Uber Technologies Inc.</p>
              <a>Privacy</a>
              <a>Terms</a>
            </div>
          </div>
          
          <a href="#head" className="Footer__anchor">
            <img src="./img/arrow.svg" alt=""/>
          </a>
        </footer>
      </>
    );
  }
}

export default Footer;
