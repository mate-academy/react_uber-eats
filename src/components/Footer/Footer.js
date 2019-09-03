/*eslint-disable*/
import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer__up">
          <div className="Footer__app">
            <img src="./img/logofoot.svg" alt=""/>
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
      </footer>
      
      
    );
  }
}

export default Footer;
