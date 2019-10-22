import { createSelector } from 'reselect';

const rootSelector = state => state;

// eslint-disable-next-line import/prefer-default-export
export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restarauntsListData }) => {
    if (!restarauntsListData) {
      return [];
    }

    const { feedItems, storesMap } = restarauntsListData;

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
