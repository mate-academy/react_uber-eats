import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="group-top-one">
            <a className="logo" href="#">
              <img src="images/icons/white-logo.svg" alt="logo" />
            </a>
            <div className="playmarkets-group">
              <a href="#">
                <img className="market-img" src="images/icons/appstore.svg" />
              </a>
              <a href="#">
                <img className="market-img" src="images/icons/playmarket.svg" />
              </a>
            </div>
          </div>
          <div className="group-top-two">
            <div className="item-header"><a href="#" >Про Uber Eats</a></div>
            <div className="item"><a href="#" >Читати наш блог</a></div>
            <div className="item"><a href="#">Зареєструватися як кур’єр</a></div>
            <div className="item"><a href="#">Додати ваш ресторан</a></div>
          </div>
          <div className="group-top-three">
            <div className="item-header"><a href="#" >Допомога</a></div>
            <div className="item"><a href="#" >Читати поширені запитання</a></div>
            <div className="item"><a href="#" >переглянути всі міста</a></div>
            <div className="item"><a href="#" >Українська мова</a></div>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-bot">
          <div className="group-bot-one">© 2019 Uber Technologies Inc.</div>
          <div className="group-bot-two">
            <div className="group-bot-two--head">
              <div className="group-bot-two--items">Політика конфіденційності</div>
              <div className="group-bot-two--items">Умови використання</div>
              <div className="group-bot-two--items">Ціни</div>
            </div>
            <div className="group-bot-two--icons">
              <div className="group-bot-two--icons-items"><a href="#"><img src="images/icons/facebook.svg"/></a></div>
              <div className="group-bot-two--icons-items"><a href="#"><img src="images/icons/twitter.svg"/></a></div>
              <div className="group-bot-two--icons-items"><a href="#"><img src="images/icons/instagram.svg"/></a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
