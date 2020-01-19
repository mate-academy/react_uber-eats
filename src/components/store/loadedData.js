export const setLoadedData = loadedData => ({
  type: 'URL_IS_LOADED',
  loadedData,
});

const LoadedDataReducer = (loadedData = [], action) => {
  switch (action.type) {
    case 'URL_IS_LOADED':
      return action.loadedData;

    default:
      return loadedData;
  }
};

export default LoadedDataReducer;
