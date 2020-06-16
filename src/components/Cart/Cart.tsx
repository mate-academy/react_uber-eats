import React, { useEffect, useState, useMemo } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCartData } from "../../store/actionTypes";
import { getCartItems } from "../../helper/api";
import { CartItem } from "../CartItem";
import { Link } from "react-router-dom";
import { clearAllCart } from "../../store/actionCreators";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCartData);
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    getCartItems(cart).then((data) => setCartItems(data));
  }, [cart]);

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((accum, currentValue) => accum + currentValue.price, 0),
    [cartItems]
  );

  const clearCart = () => {
    dispatch(clearAllCart());
  }

  return (
    <div className="Home container">
      {cart.length === 0 && (
        <div className="Cart__EmptyContainer">
          <p className="Cart__Empty">Cart is empty :(</p>
          <Link to="/" className="Cart__EmptyLink">
            Go shop now!
          </Link>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="Cart">
          <div className="Cart__Container">
            {cartItems.length > 0 &&
              cartItems.map((item) => <CartItem item={item} />)}
          </div>
          <div className="Cart__Total">
            <p className="Cart__TotalPrice">Total price: {totalPrice}₴</p>
            <Link to="/purchase" className="Cart__PurchaseLink">
              <button
                type="button"
                className="Cart__TotalBuy"
                onClick={clearCart}
              >
                Buy now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
