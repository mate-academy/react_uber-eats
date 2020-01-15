import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurants }) => {
    if (!restaurants) {
      return [];
    }

    const { feedItems, storesMap } = restaurants;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  }
);
