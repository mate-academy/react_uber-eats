import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurants = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ loadingError }) => loadingError
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
