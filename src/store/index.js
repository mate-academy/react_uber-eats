import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import restaurantsReducer from './restaurants';
import currentNameReducer from './currentName';
import restaurantPageReducer from './restaurantPage';

export const getRestaurants = ({ restaurants }) => {
  if (!restaurants) {
    return [];
  }

  const { feedItems, storesMap } = restaurants;

  return feedItems.map(({ uuid }) => storesMap[uuid]);
};

export const getCurrentUuid = (state) => {
  const restaurants = getRestaurants(state);

  return restaurants.length === 0
    ? null
    : restaurants.find(restaurant => restaurant.title
      .replace(/ /g, '-') === state.currentName).uuid;
};

export const getRestaurantInfo = ({ restaurantPage }) => {
  if (!restaurantPage) {
    return {};
  }

  const { title, categories, location, heroImageUrls } = restaurantPage;

  return {
    title,
    categories,
    address: location.address,
    image: heroImageUrls[3].url,
  };
};

export const getRestaurantSections = ({ restaurantPage }) => {
  if (!restaurantPage) {
    return [];
  }

  const { sections, sectionsMap } = restaurantPage;

  return sections.map(uuid => ({
    uuid,
    title: sectionsMap[uuid].title,
  }));
};

export const getRestaurantItems = ({ restaurantPage }) => {
  if (!restaurantPage) {
    return [];
  }

  const { sections, sectionsMap, entitiesMap } = restaurantPage;

  return sections.map(uuid => ({
    uuid,
    title: sectionsMap[uuid].title,
    items: sectionsMap[uuid].itemUuids.map(itemUuid => ({
      uuid: itemUuid,
      title: entitiesMap[itemUuid].title,
      image: entitiesMap[itemUuid].imageUrl,
      price: entitiesMap[itemUuid].price,
      description: entitiesMap[itemUuid].description
          && (entitiesMap[itemUuid].description.length > 80
            ? entitiesMap[itemUuid].description.slice(0, 60)
            : entitiesMap[itemUuid].description),
    })),
  }));
};

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  currentName: currentNameReducer,
  restaurantPage: restaurantPageReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
