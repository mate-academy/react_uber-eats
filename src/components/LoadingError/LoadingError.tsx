import React from "react";
import "./LoadingError.scss";

interface Props {
  errorMessage: string;
  loadRestaurantsData: () => void;
}

export const LoadingError: React.FC<Props> = ({
  errorMessage,
  loadRestaurantsData,
}) => {
  return (
    <div className="HomePage__Catch">
      <p className="HomePage__ErrorMessage">{errorMessage}</p>
      <button
        onClick={loadRestaurantsData}
        className="HomePage__ButtonDownloadAgain"
      >
        Try again
      </button>
    </div>
  );
};
