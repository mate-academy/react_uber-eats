export const ADDRESS = './api/location/Kiev.json';

export const getData = async (link) => {
  const restaurants = await fetch(link);
  const result = await restaurants.json();
  return result.data.feedItems.map(item => {
    return result.data.storesMap[item.uuid];
  });

};
