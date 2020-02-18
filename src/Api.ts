
const restaurantsURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/restaurants';

 const restaurantPageURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/restaurants/';

const menuItemURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/menu-items/'

export const getRestaurantsData = async() => {
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
