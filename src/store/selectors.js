import { createSelector } from 'reselect';

const rootSelector = state => state;
export const selectRestourantsList = createSelector(rootSelector,({restourantsListData}) => {
  if (!restourantsListData) return [];
  const { feedItems, storesMap } = restourantsListData;

  return feedItems.map(item => storesMap[item.uuid])
})

export const selectRestourantsListError = createSelector(
  rootSelector,
  ({error}) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({isLoading}) => isLoading
);
