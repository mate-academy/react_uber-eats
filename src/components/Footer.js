import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
   return (
<footer class="footer">
    <section class="footer__section">

      <div className="footer__logo-section">
        <div class="footer__logo">
          <a href="#">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg" alt="logo" />
          </a>
        </div>

        <div class="footer__app">
          <a class="appstore" href="#/" target="_blank">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg" alt="appstore-icon" />
          </a>

          <a class="gplay" href="#/" target="_blank">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png" alt="googleplay-icon" />
          </a>
        </div>
      </div>

      <div class="footer__column">
        <a href="#/">About Uber Eats</a>
        <a href="#/">Read our blog</a>
        <a href="#/">Buy gift cards</a>
        <a href="#/">Sign up to deliver</a>
        <a href="#/">Add your restaurant</a>
      </div>

      <div class="footer__column">
        <a href="#/">Get Help</a>
        <a href="#/">Read FAQs</a>
        <a href="#/">View all cities</a>
        <a href="#/">
          <img src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/2601cb43facfcd27a8d88d727dce9bb5.svg' />
          English
        </a>
      </div>
    </section>
    <hr class="hr" />

    <div className="footer__logo-section-mobile">
          <a class="appstore" href="#/" target="_blank">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg" alt="appstore-icon" />
          </a>

          <a class="gplay" href="#/" target="_blank">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png" alt="googleplay-icon" />
          </a>
      </div>

      <hr class="hr-mobile" />

    <div class="footer__rights">
      <p>© 2019 Uber Technologies Inc.</p>
      <section className="footer__rights-info">
        <a class="link" href="#/">Privacy Policy</a>
        <a class="link" href="#/">Terms of Use</a>
        <a class="link" href="#/">Pricing</a>
      </section>
    </div>

    <div class="social__buttons">
      <div></div>
      <div>
      <button class="facebook social__buttons-item"></button>
      <button class="twitter social__buttons-item"></button>
      <button class="instagram social__buttons-item"></button>
      </div>
    </div>

    <Link
      className="arrow-to-top"
      to="header"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
    />

  </footer>
   )
}

export default Footer;
