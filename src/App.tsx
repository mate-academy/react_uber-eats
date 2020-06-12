import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Switch, Route } from "react-router";
import { HomePage } from "./components/HomePage";
import { RestPage } from "./components/RestPage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/:id' exact component={RestPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
