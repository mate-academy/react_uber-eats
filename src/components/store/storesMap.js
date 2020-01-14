export const setStoresMap = storesMap => ({
  type: 'GET_STORES_MAP',
  storesMap,
});

const StoresMapReducer = (storesMap = [], action) => {
  switch (action.type) {
    case 'GET_STORES_MAP':
      return action.storesMap;

    default:
      return storesMap;
  }
};

export default StoresMapReducer;
