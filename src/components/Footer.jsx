import React from 'react';

const Footer = () => {
  return (
    <footer>

      <div className="footer">

        <section className="footer-container">

          <div>
            <a href="#">
              <img src="./images/footer_logo.png" alt="logo"/>
            </a>

            <div className="footer-container__store-buttons">
              <button className="appstore"></button>
              <button className="playmarket"></button>
            </div>
          </div>


          <nav className="footer-container__nav">
            <div className="footer-container__nav-block1">
              <ul className="footer-container__nav-list">
                <li><a href="">About UberEats</a></li>
                <li><a href="">Read our blog</a></li>
                <li><a href="">Sign up to deliver</a></li>
                <li><a href="">Add your restaurant</a></li>
              </ul>
            </div>

            <div>
              <ul className="footer-container__nav-list">
                <li><a href="">Get help</a></li>
                <li><a href="">Read FAQs</a></li>
                <li><a href="">View all cities</a></li>
                <li><a href="">English</a></li>
              </ul>
            </div>

          </nav>

        </section>

        <section className="footer-container__bottom">

          <div>
            <p>© 2019 Uber Technologies Inc.</p>
          </div>

          <div className="social">
            <a href="">Privacy policy</a>
            <div className="social__buttons">
              <button className="facebook social__buttons-item"></button>
              <button className="twitter social__buttons-item"></button>
              <button className="instagram social__buttons-item"></button>
            </div>
          </div>

          <a href="" className="termsOfUse">Terms of  use</a>
          <a href="">Pricing</a>
        </section>

      </div>

	</footer>
  )
}

export default Footer;
