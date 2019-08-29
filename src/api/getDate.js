export const getRestaurants = async() => {
  const url = 'https://mate-academy.github.io/react_uber-eats/api/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json';

  const response = await fetch(url);
  const restaurant = await response.json();

  return restaurant;
};

export const getRestaurant = async(uuid) => {
  const url = `https://mate-academy.github.io/react_uber-eats/api/restaurants/${uuid}.json`;

  const response = await fetch(url);
  const restaurant = await response.json();

  return restaurant;
};
