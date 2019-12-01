import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectorRestaurants = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  }
);

export const selectorRestaurant = createSelector(
  rootSelector,
  ({ restaurantData }) => {
    if (!restaurantData) {
      return [];
    }

    return restaurantData;
  }
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error,
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading,
);
