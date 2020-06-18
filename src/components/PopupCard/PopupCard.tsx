import cn from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../../helper/api";
import {
  closePopup,
  deletePopupId,
  addToCart,
  delFromCart,
} from "../../store/actionCreators";
import {
  getPopupId,
  getPopupStatus,
  getCartData,
} from "../../store/actionTypes";
import "./PopupCard.scss";
import { CartChangeCount } from "../CartChangeCount";

export const PopupCard = () => {
  const dispatch = useDispatch();

  const popupStatus = useSelector(getPopupStatus);
  const popupId = useSelector(getPopupId);
  const cart = useSelector(getCartData);

  const [currentPopupInfo, setCurrentPopupInfo] = useState<MenuItem>();
  const [imgLoad, setImgLoad] = useState(false);
  const [reserveUrl, setReserveUrl] = useState("");

  const maxLengthOfDescription = 140;
  const isAlreadyInCart = cart.some(
    (good) => currentPopupInfo?.uuid === good.id
  );
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

  const addGoodToCart = () => {
    dispatch(addToCart(currentPopupInfo?.uuid as string));
  };

  const removeGoodFromCart = () => {
    dispatch(delFromCart(currentPopupInfo?.uuid as string));
    handleClosePopupWindow();
  };

  const checkError = () => {
    if (currentPopupInfo && !currentPopupInfo?.imageUrl) {
      setImgLoad(true);
      setReserveUrl("images/food.svg");
    }
  };

  return (
    <>
      {currentPopupInfo && (
        <>
          <div
            className={cn({ PopupCard: true, "PopupCard--open": popupStatus })}
          >
            <label className="PopupCard__Close">
              <button
                type="button"
                className="PopupCard__CloseButton"
                onClick={handleClosePopupWindow}
              />
            </label>
            {!imgLoad && (
              <div className="PopupCard__Spinner">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <img
              src={currentPopupInfo?.imageUrl || reserveUrl}
              alt="Food"
              className={cn({
                PopupCard__Img: true,
                "PopupCard__Img--visible": imgLoad,
              })}
              onLoad={() => setImgLoad(true)}
              onError={checkError}
            />
            <p className="PopupCard__Title">
              {currentPopupInfo?.title || "Title was wrong"}
            </p>
            <p className="PopupCard__Descr">{description}</p>
            {isAlreadyInCart && (
              <>
                <div className="PopupCard__ChangeCountContainer">
                  <CartChangeCount id={currentPopupInfo?.uuid as string} />
                </div>
                <button
                  type="button"
                  className="PopupCard__RemoveFromCart"
                  onClick={removeGoodFromCart}
                  disabled={!isAlreadyInCart}
                >
                  Remove from cart
                </button>
              </>
            )}
            {!isAlreadyInCart && (
              <button
                type="button"
                className="PopupCard__AddToCart"
                onClick={addGoodToCart}
                disabled={isAlreadyInCart}
              >
                Add to cart
              </button>
            )}
          </div>
        </>
      )}
      <div />
    </>
  );
};
