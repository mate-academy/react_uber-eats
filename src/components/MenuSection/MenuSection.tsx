import React from "react";
import "./MenuSection.scss";
import { RestPageCard } from "../RestPageCard";

interface Props {
  item: Section;
  currency: string;
}

export const MenuSection: React.FC<Props> = ({ item, currency }) => {
  return (
    <div className="MenuSection">
      <p className="MenuSection__Title">{item.title}</p>
      <div className="MenuSection__Container">
        {item.itemUuids.map(uuid => (
          <RestPageCard uuid={uuid} key={uuid} currency={currency} />
        ))}
      </div>
    </div>
  );
};
