import React, { useState, useEffect, useCallback } from "react";
import "./PopupCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { getPopupStatus, getPopupId } from "../../store/actionTypes";
import { getMenuItems } from "../../helper/api";
import cn from "classnames";
import { closePopup, deletePopupId } from "../../store/actionCreators";

export const PopupCard = () => {
  const dispatch = useDispatch();

  const popupStatus = useSelector(getPopupStatus);
  const popupId = useSelector(getPopupId);

  const [currentPopupInfo, setCurrentPopupInfo] = useState<MenuItem>();

  const maxLengthOfDescription = 140;

  const getItemFromServer = useCallback(async () => {
    const getItem = await getMenuItems(popupId as string);
    setCurrentPopupInfo(getItem);
  }, [popupId]);

  useEffect(() => {
    getItemFromServer();
  }, [popupId, getItemFromServer]);

  const description =
    currentPopupInfo?.itemDescription &&
    currentPopupInfo?.itemDescription.length > maxLengthOfDescription
      ? currentPopupInfo?.itemDescription.slice(0, maxLengthOfDescription) +
        "..."
      : currentPopupInfo?.itemDescription;

  const handleClosePopupWindow = () => {
    dispatch(closePopup());
    dispatch(deletePopupId());
  };

  return (
    <div className={cn({ PopupCard: true, "PopupCard--open": popupStatus })}>
      <label className="PopupCard__Close">
        <button
          type="button"
          className="PopupCard__CloseButton"
          onClick={handleClosePopupWindow}
        />
      </label>
      <img
        src={currentPopupInfo?.imageUrl || "images/food.svg"}
        alt="Food"
        className="PopupCard__Img"
      />
      <p className="PopupCard__Title">
        {currentPopupInfo?.title || "Title was wrong"}
      </p>
      <p className="PopupCard__Descr">{description}</p>
      <button
        type="button"
        className="PopupCard__AddToCart"
        onClick={handleClosePopupWindow}
      >
        Add to cart
      </button>
    </div>
  );
};
