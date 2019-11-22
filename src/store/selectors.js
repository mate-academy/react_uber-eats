import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const selectRestautantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
