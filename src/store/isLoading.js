const ACTION_TYPES = {
  SET_IS_LOADING: 'SET_IS_LOADING',
};

export const setIsLoading = payload => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload,
});

const isLoadingReducer = (isLoading = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_LOADING:
      return action.payload;

    default:
      return isLoading;
  }
};

export default isLoadingReducer;
