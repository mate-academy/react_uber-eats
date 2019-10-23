import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import "./App.scss";

export default class ScrollUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName="scrollUp__Container"
          TransitionClassName="scrollUp__Transition"
        >
        </ScrollUpButton>
      </div>
    );
  }
}
