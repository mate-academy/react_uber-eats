/*eslint-disable*/
import React from 'react';
import './Header.scss';
import { Store, filterStores } from "../Store";

class Header extends React.Component {
  state = {
    inputField: "",
  };
  
  inputFieldChange = (event) => {
    
    console.log(event.nativeEvent);
    this.setState({
      inputField: event.target.value
    });
    Store.dispatch(filterStores(event.target.value))
  };

  render() {
    const { inputField } = this.state;
    return (
      <header id="head" className="Header">
        <a href="" className="Header__logo">
          <img src="./img/logo.svg" alt="logo" />
        </a>
        <div className="Header__nav-time">
          <div className="Header__nav">
            <input className="Header__nav-input" type="text" placeholder="Kiev"/>
          </div>
          <div className="Header__time">
            <select className="Header__time-select">
              <option value="" disabled selected>Deliver Time</option>
              <option value="ASAP">ASAP</option>
            </select>
          </div>
        </div>
        <div className="Header__mobile-search">
          <input type="text"
                 placeholder="Search restaurant"
                 value={inputField}
                 onChange={this.inputFieldChange}
          />
        </div>
        <div className="Header__search-acc">
          <div className="Header__search">
            <input className="Header__search-input"
                   type="text"
                   placeholder="Search"
                   // value={inputField}
                   onChange={this.inputFieldChange}
            />
          </div>
          <button className="Header__acc">Sign in</button>
        </div>
      </header>
    )}
}

export default Header;
