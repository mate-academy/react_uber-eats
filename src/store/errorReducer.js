const LOAD_ERROR = 'LOAD_ERROR';

export const setLoadError = error => ({
  type: LOAD_ERROR,
  error,
});

const errorReducer = (error = null, action) => {
  switch (action.type) {
    case LOAD_ERROR:
      return action.error;
    default:
      return error;
  }
};

export default errorReducer;
