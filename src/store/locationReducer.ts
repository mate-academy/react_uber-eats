import {
  Actions,
  SET_LOCATION_LIST,
  ILocationState,
  SET_LOCATION
} from "../types";

const initialState: ILocationState = {
  locationList: null,
  location: null,
}
const locationReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_LOCATION_LIST: return {
      ...state,
      locationList: action.locationList
    }
    case SET_LOCATION: return {
      ...state,
      location: action.location
    }

    default: return state;
  }
}

export default locationReducer;
