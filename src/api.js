const URL_POSTS = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const getRestaurantsFromServer = async() => {
  const restaurants = await fetch(URL_POSTS);

  return restaurants.json();
};
