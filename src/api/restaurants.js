const URL_API = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const getRestaurantsFromServer = () => (
  fetch(URL_API).then(response => response.json())
);
