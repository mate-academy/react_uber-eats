import React, { useEffect, useMemo, useState } from "react";
import "./RestPage.scss";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteRestaurantInfo, errorMessage } from "../../store/actionCreators";
import { fetchRestaurantInfo, fetchRestaurantData } from "../../store";
import {
  getLoading,
  getLoaded,
  getErrorMessage,
  getRestInfo,
  getRestaurants,
} from "../../store/actionTypes";
import { LoaderSpinner } from "../LoaderSpinner";
import { LoadingError } from "../LoadingError";
import { RestaurantCardInfo } from "../RestaurantCardInfo";
import { MenuSection } from "../MenuSection";

export const RestPage = () => {
  const match: Match = useRouteMatch();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isLoaded = useSelector(getLoaded);
  const errMessage = useSelector(getErrorMessage);
  const info = useSelector(getRestInfo);
  const rest = useSelector(getRestaurants);
  const [restCard, setRestCard] = useState<RestaurantCard>();

  const loadRestaurantInfo = () => {
    dispatch(fetchRestaurantInfo(match.params.id));
  };

  useEffect(() => {
    if (info) {
      setRestCard(rest.find((card) => card.uuid === info?.uuid));
    } else if (!rest.length) {
      dispatch(fetchRestaurantData());
    }
  }, [info]);

  useEffect(() => {
    loadRestaurantInfo();

    return () => {
      dispatch(deleteRestaurantInfo());
      dispatch(errorMessage(""));
    };
  }, []);

  const getBadge = useMemo(() => {
    if (info && info.ratingBadge && info.ratingBadge.text) {
      return {
        __html: info.ratingBadge.text,
      };
    } else {
      return {
        __html: "",
      };
    }
  }, [info]);

  const heroNumber = useMemo(() => {
    if (info && info.heroImageUrls) {
      return info.heroImageUrls.length - 1;
    } else {
      return 0;
    }
  }, [info]);

  const sections = useMemo(() => {
    if (info) {
      return info.sections.map((uuid) => info.sectionsMap[uuid]);
    } else {
      return [];
    }
  }, [info]);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      {isLoaded && !isLoading && info && restCard && (
        <>
          <img
            src={info ? info.heroImageUrls[heroNumber].url : ""}
            alt="Hero image"
            className="Page__HeroImageDown"
          />
          <div className="container Page__HeroContainer">
            <div className="Page__HeroInfo">
              <p className="Page__HeroTitle">{info.title}</p>
              <RestaurantCardInfo
                title=""
                etaRange={restCard.etaRange.text}
                categories={restCard.categories}
              />
              <div dangerouslySetInnerHTML={getBadge} className="Page__Badge" />
            </div>
          </div>

          <div className="Page container Home">
            {sections.length > 0 &&
              sections.map((section) => <MenuSection item={section} key={section.uuid} currency={info.categories[0]} />)}
          </div>
        </>
      )}
      {!isLoading && !isLoaded && errorMessage && (
        <LoadingError
          errorMessage={errMessage}
          loadRestaurantsData={loadRestaurantInfo}
        />
      )}
    </>
  );
};
