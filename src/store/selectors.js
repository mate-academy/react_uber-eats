import { createSelector } from 'reselect';

const rootSelector = state => state;

const baseMenuItemSelector = ({ menuItemInfo }) => {
  if (!menuItemInfo) {
    return [];
  }

  return menuItemInfo;
};

const baseRestaurantInfoSelector = ({ restaurantInfo }) => {
  if (!restaurantInfo) {
    return [];
  }

  return restaurantInfo;
};

export const selectRestaurantList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const isDataLoadingSelector = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
//
// export const isModalWindowOpenedSelector = createSelector(
//   rootSelector,
//   ({ modalWindowInfo }) => modalWindowInfo.isOpened
// );

export const modalWindowOpenedIDSelector = createSelector(
  rootSelector,
  ({ modalWindowInfo }) => modalWindowInfo
);

export const selectRestaurantListError = createSelector(
  rootSelector,
  ({ error }) => error,
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading,
);

export const selectPageMainImgUrl = createSelector(
  baseRestaurantInfoSelector,
  (restaurantInfo) => {
    const { heroImageUrls } = restaurantInfo;

    return heroImageUrls
      ? heroImageUrls[heroImageUrls.length - 1].url
      : '';
  },
);

export const selectRestaurantSections = createSelector(
  baseRestaurantInfoSelector,
  (restaurantInfo) => {
    const { sections, sectionsMap } = restaurantInfo;

    return sections
      ? sections.map(section => sectionsMap[section])
      : [];
  },
);

export const selectRestaurantSectionsEntities = createSelector(
  baseRestaurantInfoSelector,
  restaurantInfo => restaurantInfo.entitiesMap || {},
);

export const selectRestaurantTitle = createSelector(
  baseRestaurantInfoSelector,
  restaurantInfo => restaurantInfo.title || '',
);

export const selectRestaurantAddress = createSelector(
  baseRestaurantInfoSelector,
  restaurantInfo => (restaurantInfo.location
    ? restaurantInfo.location.address
    : ''),
);

export const selectRestaurantEtaRange = createSelector(
  baseRestaurantInfoSelector,
  restaurantInfo => (restaurantInfo.etaRange
    ? restaurantInfo.etaRange.text
    : '35 - 45 min'
  ),
);

export const selectRestaurantCuisineList = createSelector(
  baseRestaurantInfoSelector,
  restaurantInfo => restaurantInfo.cuisineList || [],
);

export const selectMenuItemMainImgUrl = createSelector(
  baseMenuItemSelector,
  menuItemInfo => menuItemInfo.imageUrl || ''
);

export const selectMenuItemTitle = createSelector(
  baseMenuItemSelector,
  menuItemInfo => menuItemInfo.title
);

export const selectMenuItemDescription = createSelector(
  baseMenuItemSelector,
  menuItemInfo => menuItemInfo.itemDescription || ''
);

export const selectMenuItemPrice = createSelector(
  baseMenuItemSelector,
  menuItemInfo => menuItemInfo.price
);

export const selectCustomizationsList = createSelector(
  baseMenuItemSelector,
  menuItemInfo => menuItemInfo.customizationsList
);

export const selectMenuItemError = createSelector(
  rootSelector,
  ({ menuItemError }) => {
    if (menuItemError === '{}') {
      return 'Sorry, something went wrong(';
    }

    return menuItemError;
  }
);
