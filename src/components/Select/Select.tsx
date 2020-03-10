import React from "react";
import "./Select.scss";
import { ISelect } from "../../types";
const Select = ({ name }: ISelect) => (
  <div role="presentation" className="select">
    <select name={name} className="select__input">
      <option>English</option>
      <option>Ukrainian</option>
    </select>

    <img className="select__icon" src="./images/world.svg" alt="world" />
    <img
      className="select__arrow"
      src="./images/arrow-back.svg"
      alt="arrow back"
    />
  </div>
);

export default Select;
