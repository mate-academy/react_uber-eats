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
              <img src="./img/logofoot.svg" alt=""/>
              <div className="Footer__mobile-select">
                <select>
                  <option>English</option>
                </select>
              </div>
              <div className="Footer__apps-link">
                <img src="./img/appstore.svg"/>
                <img src="./img/googleplay.svg"/>
              </div>
            </div>
            <div className="Footer__about">
              <p>About UberEats</p>
              <p>Read our blog</p>
              <p>Sign up to deliver</p>
              <p>Add your restaurant</p>
            </div>
            <div className="Footer__faq">
              <p>Get help</p>
              <p>Read FAQs</p>
              <p>View all cities</p>
              <p>English</p>
            </div>
          </div>
          <div className="Footer__separator"> </div>
          <div className="Footer__down">
            <div className="Footer__copyright">
              <p>© 2019 Uber Technologies Inc.</p>
            </div>
            <div className="Footer__policy">
              <p>Privacy policy</p>
              <p>Terms of  use</p>
              <p>Pricing</p>
            </div>
          </div>
          <div className="Footer__social">
            <img src="./img/facebook.svg" alt=""/>
            <img src="./img/twitter.svg" alt=""/>
            <img src="./img/instagram.svg" alt=""/>
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
              <p>About UberEats</p>
              <p>Read our blog</p>
              <p>Sign up to deliver</p>
              <p>Add your restaurant</p>
            </div>
            
            <div className="Footer__faq">
              <p>Get help</p>
              <p>Read FAQs</p>
              <p>View all cities</p>
              <p>English</p>
            </div>
            
          </div>
          
          <div className="Footer__separator"> </div>
          
          <div className="Footer__apps-link">
            <img src="./img/appstore.svg"/>
            <img src="./img/googleplay.svg"/>
          </div>
          
          <div className="Footer__separator"> </div>
          
          <div className="Footer__down">
            <div className="Footer__copyright">
              <p>© 2019 Uber Technologies Inc.</p>
              <p>Privacy</p>
              <p>Terms</p>
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
