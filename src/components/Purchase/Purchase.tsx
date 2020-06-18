import React from "react";
import "./Purchase.scss";
import { Link } from "react-router-dom";

export const Purchase = () => {
  return (
    <div className="Purchase Home">
      <p className="Purchase__Thanks">Thank you for purchase.</p>
      <Link to="/" className="Purchase__Link">
        Back to restaurants list {'->'}
      </Link>
    </div>
  );
};
