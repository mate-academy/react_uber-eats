
const API_DATA = async() => {
  const urlGoods = 'https://mate-academy.github.io/react_uber-eats/api/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json';
  const responseGoods = await fetch(urlGoods);
  const goods = await responseGoods.json();

  return goods.data.feedItems.map(item => {
    return goods.data.storesMap[item.uuid]
  });
};

export default API_DATA;
