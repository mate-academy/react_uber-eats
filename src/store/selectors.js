import { createSelector } from 'reselect';

const rootSelector = state => state;

export const seleсtRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(item => storesMap[item.uuid]);
  }
);

export const seleсtRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const seleсtIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
