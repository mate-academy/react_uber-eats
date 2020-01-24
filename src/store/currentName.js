const ACTION_TYPES = {
  SET_CURRENT_NAME: 'SET_CURRENT_NAME',
};

export const setCurrentName = payload => ({
  type: ACTION_TYPES.SET_CURRENT_NAME,
  payload,
});

const currentNameReducer = (currentName = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_NAME:
      return action.payload;

    default:
      return currentName;
  }
};

export default currentNameReducer;
