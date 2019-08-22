const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

const getData = async() => {
  const response = await fetch(
    `${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`
  );
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};

export default getData;
