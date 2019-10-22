import { createSelector } from 'reselect';

export const rootSelector = state => state;

export const selectRestaurantList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  }
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ hasError }) => hasError
);

export const selectRestaurantsListLoading = createSelector(
  rootSelector,
  ({ loadingRestaurants }) => loadingRestaurants
);
