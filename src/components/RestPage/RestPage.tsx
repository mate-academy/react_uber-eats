import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { fetchRestaurantData, fetchRestaurantInfo } from "../../store";
import { deleteRestaurantInfo, errorMessage } from "../../store/actionCreators";
import {
  getErrorMessage,
  getLoaded,
  getLoading,
  getRestaurants,
  getRestInfo,
} from "../../store/actionTypes";
import { LoaderSpinner } from "../LoaderSpinner";
import { LoadingError } from "../LoadingError";
import { MenuSection } from "../MenuSection";
import { RestaurantCardInfo } from "../RestaurantCardInfo";
import "./RestPage.scss";

export const RestPage = () => {
  const match: Match = useRouteMatch();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isLoaded = useSelector(getLoaded);
  const errMessage = useSelector(getErrorMessage);
  const info = useSelector(getRestInfo);
  const rest = useSelector(getRestaurants);
  const [restCard, setRestCard] = useState<RestaurantCard>();
  const loadRestaurantInfo = useCallback(() => {
    dispatch(fetchRestaurantInfo(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (info) {
      setRestCard(rest.find((card) => card.uuid === info?.uuid));
    } else if (!rest.length) {
      dispatch(fetchRestaurantData());
    }
  }, [info, dispatch, rest]);

  useEffect(() => {
    loadRestaurantInfo();

    return () => {
      dispatch(deleteRestaurantInfo());
      dispatch(errorMessage(""));
    };
  }, [dispatch, loadRestaurantInfo]);

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
      {isLoading && (
        <div className="Home">
          <LoaderSpinner />
        </div>
      )}
      {isLoaded && !isLoading && info && restCard && (
        <>
          <img
            src={info ? info.heroImageUrls[heroNumber].url : ""}
            alt="Hero background"
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

          <div className="Page container">
            {sections.length > 0 &&
              sections.map((section) => (
                <MenuSection
                  item={section}
                  key={section.uuid}
                  currency={info.categories[0]}
                />
              ))}
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
