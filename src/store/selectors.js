import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRastaurantsList = createSelector(
  rootSelector,
  ({ restaurants }) => {
    if (!restaurants) {
      return [];
    }

    const { feedItems, storesMap } = restaurants;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);
