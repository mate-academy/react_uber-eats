import React from "react";
import "./NavLinks.scss";

interface Props {
  info: [string, string[]];
}

export const NavLinks: React.FC<Props> = ({ info }) => {
  return (
    <div className="NavLinks">
      <p className="NavLinks__Main">{info[0]}</p>
      <ul className="NavLinks__List">
        {info[1].map((link) => (
          <li className="NavLinks__Item" key={link}>
            <a href="./#" className="NavLinks__Link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
