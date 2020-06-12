import React, { useEffect } from "react";
import "./HomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantData } from "../../store";
import { LoaderSpinner } from "../LoaderSpinner";
import {
  getLoading,
  getLoaded,
  getErrorMessage,
} from "../../store/actionTypes";
import { RestaurantsList } from "../RestaurantsList";
import { LoadingError } from "../LoadingError";

export const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isLoaded = useSelector(getLoaded);
  const errorMessage = useSelector(getErrorMessage);

  const loadRestaurantsData = () => {
    dispatch(fetchRestaurantData());
  };

  useEffect(() => {
    loadRestaurantsData();
  }, []);

  return (
    <>
      <div className="Home">
        {isLoading && <LoaderSpinner />}
        {isLoaded && !isLoading && <RestaurantsList />}
        {!isLoading && !isLoaded && errorMessage && (
          <LoadingError
            errorMessage={errorMessage}
            loadRestaurantsData={loadRestaurantsData}
          />
        )}
      </div>
    </>
  );
};
