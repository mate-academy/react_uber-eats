// eslint-disable-next-line max-len
export const getRestaurants = () => fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
  .then(response => response.json())
  .catch(() => 'Something wrong');
