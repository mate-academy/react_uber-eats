const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

export const getReastaurant = async(PATH) => {
  const response = await fetch(`${BASE_URL}${PATH}`);
  const result = await response.json();

  return result.data;
};

export const getData = async(PATH) => {
  const response = await fetch(`${BASE_URL}${PATH}`);
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};
