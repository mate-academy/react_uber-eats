export const getRestaurantsFromServer = async() => {
  const RESTAURANTS_API
    = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

  const response = await fetch(RESTAURANTS_API);

  return response.json();
};
