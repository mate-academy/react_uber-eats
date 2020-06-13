import cn from "classnames";
import React, { useState } from "react";
import "./Select.scss";

interface Props {
  items: string[];
}

export const Select: React.FC<Props> = ({ items }) => {
  const [current, setCurrent] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeItems = (current: string) => {
    setCurrent(current);
    setIsOpen(false);
  };

  return (
    <div className="Select">
      <div className="Select__Container" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="images/footer/world.svg"
          alt="world"
          className="Select__World"
        />
        <div className="Select__Prev">{current}</div>
        <img
          src="images/footer/arrow.svg"
          alt="arrow"
          className={cn({
            Select__Arrow: true,
            "Select__Arrow--up": isOpen,
          })}
        />
      </div>
      <ul
        className={cn({
          Select__List: true,
          Select__Open: isOpen,
        })}
      >
        {items
          .filter((item) => item !== current)
          .map((item) => (
            <li
              className="Select__Item"
              onClick={() => handleChangeItems(item)}
              key={item}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};
