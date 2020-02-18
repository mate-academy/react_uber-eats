
const restaurantsURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/restaurants';

 const restaurantPageURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/restaurants/';

const menuItemURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/menu-items/'

const locationURL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/locations';
export const getLocationData = async()  => {
  const locationData = await fetch(locationURL);

  return locationData.json();
}
export const getRestaurantsData = async(locationId: string) => {
  if(locationId) {
    const restaurantsData = await fetch(restaurantsURL + '?location=' + locationId);
    return restaurantsData.json();
  }
  const restaurantsData = await fetch(restaurantsURL);

  return restaurantsData.json();
};

export const getRestaurantData = async(uuid: string) => {
  const restaurantData = await
  fetch(`${restaurantPageURL}${uuid}`);

  return restaurantData.json();
};

export const getMenuItemData = async(itemUuid: string) => {
  try {
    const menuItemData = await
    fetch(`${menuItemURL}${itemUuid}`);
    if(menuItemData.ok) return menuItemData.json();
    throw new Error(menuItemData.statusText)
  }
  catch(err) {
    return 'error'
  }
};
