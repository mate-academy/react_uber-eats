const restaurantsURL = 'https://mate-uber-eats-api.'
+ 'herokuapp.com/api/v1/restaurants';

export const getRestaurantsData = async() => {
  const restaurantsData = await fetch(restaurantsURL);

  return restaurantsData.json();
};
