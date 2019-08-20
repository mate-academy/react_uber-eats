import React from 'react';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-content">
      <a class="logo2" href="#"><img src="images/icons/white-logo.svg" alt="logo"/></a>
      <div class="line"></div>
      <div class="footer__links">
        <div class="group group-one">
          <select name="language" class="language">
            <option value="EN">ENGLISH</option>
            <option value="UA">UKRAINIAN</option>
            <option value="RU">RUSSIAN</option>
          </select>
          <span class="heshteg"><span class="green">#</span>UberEats</span>
          <div class="soc-networks">
            <a class="soc-icons facebook" href="#"></a>
            <a class="soc-icons twitter" href="#"></a>
            <a class="soc-icons instagram" href="#"></a>
          </div>
        </div>
        <div class="group group-two">
          <a href="#" class="simple-text">About UberEats</a>
          <a href="#" class="simple-text">Become a Delivery Partner</a>
          <a href="#" class="simple-text">Become a Restaurant Partner</a>
        </div>
        <div class="group group-three">
          <a href="#" class="simple-text">See all cities</a>
          <a href="#" class="simple-text">Pricing</a>
          <a href="#" class="simple-text">Help</a>
          <a href="#" class="simple-text">FAQs</a>
        </div>
      </div>
      <div class="line"></div>
      <div class="footer__app-logo">
        <a class="logo-link1" href="#"><img src="images/icons/appstore.svg" alt="Appstore"/></a>
        <a class="logo-link2" href="#"><img src="images/icons/playmarket.svg" alt="Playmarket"/></a>
      </div>
      <div class="line"></div>
      <div class="fotter__about">
        <div class="group group-one">
          <a class="simple-text" href="#">© 2019 Uber Technologies Inc.</a>
        </div>
        <div class="group group-two">
          <a class="simple-text" href="#">Privacy</a>
        </div>
        <div class="group group-three-">
          <a class="simple-text" href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
