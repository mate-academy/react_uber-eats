// eslint-disable-next-line max-len
export const getRestaurants = () => fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
  .then(response => response.json())
  .catch(() => 'Something wrong');

// eslint-disable-next-line max-len
export const getSingleRestaurant = uuid => fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${uuid}`)
  .then(response => response.json())
  .catch(() => 'Something wrong');

// eslint-disable-next-line max-len
export const getMenu = uuid => fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/${uuid}`)
  .then(response => response.json())
  .catch(() => 'Something wrong');
