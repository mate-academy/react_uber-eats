const ACTION_TYPES = {
  SET_DATA_FROM_SERVER: 'SET_DATA_FROM_SERVER',
};

export const createActionSetDataFromServer = payload => ({
  type: ACTION_TYPES.SET_DATA_FROM_SERVER,
  payload,
});

const dataFromServerReducer = (dataFromServer = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DATA_FROM_SERVER:
      return action.payload;

    default:
      return dataFromServer;
  }
};

export default dataFromServerReducer;
