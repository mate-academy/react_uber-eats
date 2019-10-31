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
  }
);

export const selectResorauntSections = createSelector(
  rootSelector,
  ({ restaurantPageData }) => {
    if (!restaurantPageData) {
      return [];
    }

    const { sectionsMap, sections } = restaurantPageData;

    return sections.map(id => sectionsMap[id]);
  }
);

export const selectRestorauntItems = createSelector(
  rootSelector,
  selectResorauntSections,
  ({ restaurantPageData }, restorauntSections) => {
    if (!restaurantPageData) {
      return [];
    }

    const { entitiesMap } = restaurantPageData;

    return restorauntSections
      .map(item => ({
        ...item,
        itemUuids: item.itemUuids.map(uid => entitiesMap[uid]),
      }));
  }
);

export const selectEtaRange = (
  state,
  props
) => state.storesMap[props.uuid].etaRange.text;

export const selectRestaurantPageData = createSelector(
  rootSelector,
  ({ restaurantPageData }) => restaurantPageData
);

export const selectRestaurantCurency = createSelector(
  rootSelector,
  ({ restaurantPageData }) => {
    if (!restaurantPageData) {
      return [];
    }

    return restaurantPageData.priceBucket;
  }
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const selectOrder = createSelector(
  rootSelector,
  ({ order }) => {
    if (!order) {
      return [];
    }

    return order;
  }
);

export const selectStateModalWindow = createSelector(
  rootSelector,
  ({ showModalWindow }) => showModalWindow
);

export const selectOrderAmount = createSelector(
  rootSelector,
  ({ orderAmount }) => orderAmount
);

export const selectCurencyCode = createSelector(
  rootSelector,
  ({ restaurantPageData }) => {
    if (!restaurantPageData) {
      return [];
    }

    return restaurantPageData.currencyCode;
  }
);

export const selectAltDataModal = createSelector(
  rootSelector,
  ({ altDataModalWindow }) => altDataModalWindow
);
