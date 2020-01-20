import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantList = createSelector(
  rootSelector,
  ({ RestaurantListData }) => {
    if (!RestaurantListData) {
      return [];
    }

    const { feedItems, storesMap } = RestaurantListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  }
);

export const selectRestaurantListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectRestaurantListIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const selectQueryRestaurantList = createSelector(
  rootSelector,
  ({ searchQuery }) => searchQuery
);
