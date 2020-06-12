const BASE_API_URL = `https://mate-uber-eats-api.herokuapp.com/api/v1/`;

export const getRestaurantsData = async (): Promise<RestaurantCard[]> => {
  const result = await fetch(`${BASE_API_URL}restaurants`);
  const json = await result.json();

  const { feedItems, storesMap } = json.data;

  interface Item {
    type: string;
    uuid: string;
  }

  return feedItems.map((item: Item) => storesMap[item.uuid]);
};

export const getRestaurantInfo = async (
  id: string
): Promise<RestaurantInfo> => {
  const result = await fetch(`${BASE_API_URL}restaurants/${id}`);
  const json = await result.json();

  return json.data;
};

export const getMenuItems = async (id: string): Promise<MenuItem> => {
  const result = await fetch(`${BASE_API_URL}menu-items/${id}`);
  const json = await result.json();

  return json.data;
};
