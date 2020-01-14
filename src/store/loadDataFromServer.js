const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const loadDataFromServer = async() => {
  const response = await fetch(URL);

  return response.json();
};
