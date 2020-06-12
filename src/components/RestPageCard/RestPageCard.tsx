import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./RestPageCard.scss";
import { getMenuItems } from "../../helper/api";
import { useDispatch } from "react-redux";
import { setPopupId, openPopup } from "../../store/actionCreators";

interface Props {
  uuid: string;
  currency: string;
}

export const RestPageCard: React.FC<Props> = ({ uuid, currency }) => {
  const [item, setItem] = useState<MenuItem>();
  const dispatch = useDispatch();
  const getItems = useCallback(async () => {
    const getItem = await getMenuItems(uuid);
    setItem(getItem);
  }, [uuid]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const title = useMemo(() => item?.title, [item]);

  const openPopupByClick = (id: string) => {
    dispatch(openPopup());
    dispatch(setPopupId(id))
  };

  return (
    <>
      {title && (
        <div className="RestPageCard" onClick={() => openPopupByClick(item?.uuid as string)}>
          <div className="RestPageCard__Info">
            <p className="RestPageCard__Title">{title}</p>
            <p className="RestPageCard__Price">{`${currency}${item?.price}`}</p>
          </div>
          <img
            src={item?.imageUrl || "images/food.svg"}
            alt="not found"
            className="RestPageCard__Image"
          />
        </div>
      )}
    </>
  );
};
