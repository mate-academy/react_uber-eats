import React from "react";
import "./LoaderSpinner.scss";

export const LoaderSpinner = () => {
  return (
    <div className="LoaderSpinner">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
