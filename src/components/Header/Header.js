import React from 'react';
import Input from '../Input/Input';

const Header = () => (
  <header className="header">
    <div className="content">
      <img src="./images/logo.svg" alt="Uber Eats" />

      <div className="header__delivery-info">
        <Input
          name="address"
          value=""
          onChange={() => {}}
          placeholder="Address"
          iconUrl="./images/place.svg"
        />
        <Input
          name="time"
          value=""
          onChange={() => {}}
          placeholder="time"
        />
      </div>
    </div>
  </header>
);

export default Header;
