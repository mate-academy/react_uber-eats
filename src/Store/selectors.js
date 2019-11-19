import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantListData }) => {
    if (!restaurantListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
