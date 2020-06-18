import cn from "classnames";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { PopupCard } from "./components/PopupCard";
import { RestPage } from "./components/RestPage";
import { getPopupStatus, getCartData } from "./store/actionTypes";
import { Cart } from "./components/Cart";
import { Purchase } from "./components/Purchase";

const App = () => {
  const popupStatus = useSelector(getPopupStatus);
  const cart = useSelector(getCartData);
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify([...cart]));
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      {popupStatus && <PopupCard />}
      <div
        className={cn({
          Layout: true,
          "Layout--shadow": popupStatus,
        })}
      />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/purchase" exact component={Purchase} />
        <Route path="/:id" exact component={RestPage} />
        <Route path="/" component={() => <h1>123123</h1>} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
