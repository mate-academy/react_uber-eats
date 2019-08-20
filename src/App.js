import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <header className="header">
      <div className="header__wrapp">
        <div className="header__logo">
          <div className="header__logo__uber" />
          <div className="header__logo__eats" />
        </div>
        <form className="header__wrapp__form">
          <div className="header__wrapper__location">
            <div className="header__location" />
            <input
              type="text"
              placeholder="Kyiv"
            />
          </div>
          <div className="header__delivery">
            <div className="header__delivery-img" />
            <select>
              <option>Deliver now</option>
              <option>Schedule for later</option>
            </select>
          </div>
          <div>
            <div className="header__search" />
            <input
              type="text"
              placeholder="Search"
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </header>
  </div>
);

export default App;
