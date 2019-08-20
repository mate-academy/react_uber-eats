import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
      <header class="header">
    <div class="header-content">
      <a class="logo" href="#"><img src="images/icons/logo.svg" alt="logo"/></a>
      <div class="header__adress">
        <div class="delivery-time">
          <select name="time" class="time">
            <option value="0">ASAP</option>
            <option value="30">30 min</option>
            <option value="60">1 hour</option>
            <option value="120">2 hour</option>
          </select>
        </div>
        <span class="text">to</span>
        <div class="delivery-adress">
          <input class="adress-box" type="text" size="20" value="ul. Tarasivska St, 16" placeholder="Enter your address"
            autocomplete="off"/>
        </div>
      </div>
      <div class="header__authorization">
        <div class="header__authorization-sign"><a href="#">Sign In</a></div>
        <div class="header__authorization-register"><a href="#">Register</a></div>
        <a class="header__authorization-basket" href="#"><img src="images/icons/basket.svg" alt="logo"/></a>
      </div>
    </div>

  </header>
  <main class="content">
    <div class="search-bar">
      <input class="search-box" type="text" size="110" placeholder="Search for restaurants or cuisine"
        autocomplete="off"/>
    </div>

    <div class="header__adress-hidden">
      <div class="delivery-time">
        <select name="time" class="time">
          <option value="0">ASAP</option>
          <option value="30">30 min</option>
          <option value="60">1 hour</option>
          <option value="120">2 hour</option>
        </select>
      </div>
      <span class="text">to</span>
      <div class="delivery-adress">
        <input class="adress-box" type="text" size="20" value="ul. Tarasivska St, 16" placeholder="Enter your address"
          autocomplete="off"/>
      </div>
    </div>

    <h2 class="city-name">Kyiv Restaurants</h2>
    <div class="card-list">
      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/first.png" alt="food"/>
          <div class="product-card__caption">Макдоналдс</div>
          <div class="product-card__type">₴₴ • Бургеры</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/second.png" alt="food"/>
          <div class="product-card__caption">WOKWEI</div>
          <div class="product-card__type">₴ • Китайська • Азіатська</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/third.png" alt="food"/>
          <div class="product-card__caption">YIZHA</div>
          <div class="product-card__type">₴₴ • Американська • Бургери • Вулична їжа</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/fourth.png" alt="food"/>
          <div class="product-card__caption">Musafir (вул. Саксаганського)</div>
          <div class="product-card__type">₴₴ • Близькосхідна</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/fifth.png" alt="food"/>
          <div class="product-card__caption">WOKWEI</div>
          <div class="product-card__type">₴ • Китайська • Азіатська</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/sixth.png" alt="food"/>
          <div class="product-card__caption">Milk Bar</div>
          <div class="product-card__type">₴₴ • Десерти • Європейська</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/seventh.png" alt="food"/>
          <div class="product-card__caption">Mimosa Brooklyn Pizza</div>
          <div class="product-card__type">₴₴ • Італійська • Піца • Американська</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/eigthth.png" alt="food"/>
          <div class="product-card__caption">To Be</div>
          <div class="product-card__type">₴₴ • Японська • Азіатська • Суші</div>
          <div class="product-card__time">25-35 Min</div>
        </a>
      </div>

      <div class="product-card">
        <a class="card-link" href="#">
          <img class="product-card__img" src="images/food/nineth.png" alt="food"/>
          <div class="product-card__caption">Druzi Cafe (вул. Прорізна)</div>
          <div class="product-card__type">₴₴ • Американська • Сучасна європейська • У...</div>
          <div class="product-card__time">25-35 Min</div>
        </a>

      </div>

    </div>
  </main>
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
        <a class="logo-link1" href="#"><img src="images/icons/Appstore.svg" alt="Appstore"/></a>
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
  </div>
);

export default App;
