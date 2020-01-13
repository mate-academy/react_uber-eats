import { createActionSetDataFromServer } from '../store/dataFromServer';

const URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants';

export const createActionLoadData = () => (dispatch) => {
  fetch(URL)
    .then(response => response.json())
    .then(data => dispatch(createActionSetDataFromServer(data.data)));
};
