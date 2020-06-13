import cn from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { PopupCard } from "./components/PopupCard";
import { RestPage } from "./components/RestPage";
import { getPopupStatus } from "./store/actionTypes";

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
