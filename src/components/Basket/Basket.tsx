import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { basket, addPrice } from "../../types";
import "./Basket.scss";
import { ConnectedProps } from "react-redux";
import { connector } from ".";
import { locationLondon } from "../../helpers";

const Basket = ({
  basket,
  fullPrice,
  increaseItem,
  decreaseItem,
  hideBasket,
  removeItem,
  setIsEditable,
  setBasketItemId,
  setRestaurantNotes,
  setUtensils,
  locationId,
}: ConnectedProps<typeof connector> & any) => {
  const modalRef = useRef<HTMLHeadingElement>(null);
  const editItem = (isEditable: boolean, basketItemId: number) => {
    setIsEditable!(isEditable);
    setBasketItemId!(basketItemId);
    hideBasket!();
  };
  const removeFromBasket = (basketItemId: number, basket: basket[]) => {
    removeItem!(basketItemId);
    if (basket.length === 1) hideBasket!();
  };
  return (
    <div
      className="basket-popup"
      onClick={(event: React.MouseEvent) =>
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        hideBasket!()
      }
    >
      <div className="basket-form" ref={modalRef}>
        <div className="uberEats__basket">
          <img
            src="./images/close.svg"
            alt="close button"
            className="basket__close"
            onClick={() => hideBasket!()}
          />
          <div className="basket__title">Your order</div>
          <div>
            <div className="basket__address">
              From
              <NavLink
                className="basket__address--address"
                to={`/restaurants/${basket![0].restaurantUuid}`}
              >
                {` ${basket![0].restaurantTitle}`}
              </NavLink>
            </div>
            <div className="basket__basket-items-list">
              {basket &&
                basket.map((item: basket) => (
                  <div key={item.id} className="basket-items-list__basket-item">
                    <div className="wrapper">
                      <div className="basket-item__counter">
                        <img
                          className="basket-item__counter--button"
                          src="./images/Group 18.svg"
                          alt="remove item button"
                          onClick={() => decreaseItem!(item.id, item.count)}
                        />
                        <span className="basket-item__counter--counter">
                          {item.count}
                        </span>
                        <img
                          className="basket-item__counter--button"
                          src="./images/Group 20.svg"
                          alt="add item button"
                          onClick={() => increaseItem!(item.id)}
                        />
                        <button
                          onClick={() => removeFromBasket!(item.id, basket)}
                          className="basket-item__remove-button"
                        >
                          remove item
                        </button>
                      </div>
                      <div className="basket-item__item">
                        <NavLink
                          to={`${item.restaurantUuid}/${item.itemUuid}`}
                          className="basket-item__item--name"
                          onClick={() => editItem!(true, item.id)}
                        >
                          {item.itemTitle}
                        </NavLink>
                        <div className="basket-item__item--additional-info">
                          {item.customInfo!.map((elem: addPrice) => (
                            <div key={elem.customItem}>
                              {elem.customItem.split("-")[0]}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="basket-item__item--price">
                        {basket.some(
                          (elem: basket) => elem.restaurantLocation === "GB",
                        )
                          ? `GBP `
                          : `UAH `}
                        {((item.price * item.count) / 100).toFixed(2)}
                      </div>
                    </div>
                    <div className="basket__items--item">
                      <label className="basket__items--lable">
                        <input
                          type="checkbox"
                          className="checkbox--default"
                          checked={
                            basket.find((elem: basket) => elem.id === item.id)
                              ?.utensils
                          }
                          onChange={() => setUtensils!(item.id)}
                        />
                        <div className="basket__items--name-price">
                          <span className="text-checkbox--basket"></span>
                          <span className="basket__items--price">
                            Add utensils, straws, etc.
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="basket__items--note">
                      <input
                        type="text"
                        defaultValue={item.restaurantNotes || ""}
                        onChange={event =>
                          setRestaurantNotes!(event.target.value, item.id)
                        }
                        onFocus={() => setBasketItemId!(item.id)}
                        placeholder="note for restaurant"
                      />
                    </div>
                    <hr className="basket__items--break" />
                  </div>
                ))}
            </div>
            <div
              className="submit-block__submit submit--basket"
              onClick={() => hideBasket!()}
            >
              <span className="submit-block__submit--count">
                {basket!.length === 1
                  ? basket![0].count
                  : basket!.reduce(
                      (totalCount: number, basketItem: basket) =>
                        totalCount + basketItem.count,
                      0,
                    )}
              </span>
              <span>Total Price</span>
              <span className="submit-block__submit--price">
                {fullPrice && fullPrice.toFixed(2)}
                {basket.some((elem: basket) => elem.restaurantLocation === "GB")
                  ? ` GBP`
                  : ` UAH`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
