import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Switch, Route } from "react-router";
import { HomePage } from "./components/HomePage";
import { RestPage } from "./components/RestPage";
import { PopupCard } from "./components/PopupCard";
import { useSelector } from "react-redux";
import { getPopupStatus } from "./store/actionTypes";
import cn from "classnames";
const App = () => {
  const popupStatus = useSelector(getPopupStatus);

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
        <Route path="/:id" exact component={RestPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
