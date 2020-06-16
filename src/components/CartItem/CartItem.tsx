import React from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { delFromCart } from "../../store/actionCreators";

interface Props {
  item: MenuItem;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(delFromCart(item.uuid));
  };
  return (
    <div className="CartItem">
      <img
        src="images/trash.svg"
        alt="trash"
        className="CartItem__Trash"
        onClick={removeFromCart}
      />
      <div className="CartItem__Info">
        <p>{item.title}</p>
        <p className="CartItem__Price">price: {item.price}₴</p>
      </div>
      <img
        src={item.imageUrl || "images/food.svg"}
        alt="food"
        className="CartItem__Image"
      />
    </div>
  );
};
