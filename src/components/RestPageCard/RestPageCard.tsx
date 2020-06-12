import React, { useEffect, useState, useMemo } from "react";
import "./RestPageCard.scss";
import { getMenuItems } from "../../helper/api";

interface Props {
  uuid: string;
  currency: string;
}

export const RestPageCard: React.FC<Props> = ({ uuid, currency }) => {
  const [item, setItem] = useState<MenuItem>();

  const getItems = async () => {
    const getItem = await getMenuItems(uuid);
    setItem(getItem);
  };

  useEffect(() => {
    getItems();
  }, []);

  const title = useMemo(() => item?.title, [item]);

  return (
    <>
      {title && (
        <div className="RestPageCard">
          <div className="RestPageCard__Info">
            <p className="RestPageCard__Title">{title}</p>
            <p className="RestPageCard__Price">{`${currency}${item?.price}`}</p>
          </div>
          <img
            src={item?.imageUrl || "images/food.svg"}
            alt="image not found"
            className="RestPageCard__Image"
          />
        </div>
      )}
    </>
  );
};
