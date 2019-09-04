import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="group-top-one">
            <a className="logo" href="#"><img src="images/icons/white-logo.svg" alt="logo" /></a>
            <div className="playmarkets-group">
              <a href="#"><img className="market-img" src="images/icons/appstore.svg" /></a>
              <a href="#"><img className="market-img" src="images/icons/playmarket.svg" /></a>

            </div>
          </div>
          <div className="group-top-two">
            <div className="item-header"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="group-top-three"></div>
        </div>
        <hr className="footer-line" />
        <div className="footer-bot">
          <div className="group-bot-one"></div>
          <div className="group-bot-two"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
