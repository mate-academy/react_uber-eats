import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const selectRestaurantListError = createSelector(
  rootSelector,
  ({ error }) => error,
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading,
);

export const selectPageMainImgUrl = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    const { heroImageUrls } = restaurantInfo;

    return heroImageUrls[heroImageUrls.length - 1].url;
  },
);

export const selectRestPageSectionsAsObj = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    const { sections, sectionsMap } = restaurantInfo;

    return sections.map(section => sectionsMap[section]);
  },
);

export const selectObjOfSectionItems = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    return restaurantInfo.entitiesMap;
  },
);

export const selectRestaurantTitle = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    return restaurantInfo.title;
  },
);

export const selectRestaurantAddress = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    return restaurantInfo.location.address;
  },
);

export const selectRestaurantEtaRange = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    return restaurantInfo.etaRange
      ? restaurantInfo.etaRange.text
      : '35 - 45 min';
  },
);

export const selectRestaurantCuisineList = createSelector(
  rootSelector,
  ({ restaurantInfo }) => {
    if (!restaurantInfo) {
      return [];
    }

    return restaurantInfo.cuisineList;
  },
);
