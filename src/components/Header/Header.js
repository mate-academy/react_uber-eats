import React from 'react';
import './Header.scss';
import { Input } from '../Input/Input';

export const Header = () => (
  <header className="header">
    <div className="content">
      <img
        src="./images/logo.svg"
        alt="UBER Eats"
        className="restaurant-logo"
      />
      <div className="header__delivery-info">
        <Input
          name="address"
          value=""
          onChange={() => { }}
          placeholder="Address"
          iconUrl="./images/place.svg"
        />
        <Input
          name="time"
          value=""
          onChange={() => { }}
          placeholder="Time"
        />
      </div>
    </div>
  </header>
);
