import React from "react";
import "./CartChangeCount.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCartData } from "../../store/actionTypes";
import { changeGoodCount } from "../../store/actionCreators";

interface Props {
  id: string;
}

export const CartChangeCount: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const currentDisp = useSelector(getCartData).find((item) => item.id === id)
    ?.count;
  const max = 10;
  const min = 1;
  return (
    <div className="CartChangeCount">
      <button
        disabled={currentDisp === min}
        className="CartChangeCount__Button"
        onClick={() => dispatch(changeGoodCount(id, -1))}
      >
        -
      </button>
      <p className="CartChangeCount__Disp">{currentDisp}</p>
      <button
        disabled={currentDisp === max}
        className="CartChangeCount__Button"
        onClick={() => dispatch(changeGoodCount(id, 1))}

      >
        +
      </button>
    </div>
  );
};
