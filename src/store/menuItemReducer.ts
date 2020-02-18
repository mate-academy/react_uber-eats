import { SET_MENU_ITEM, Actions } from '../types';

const menuItemReducer = ( state = null, action: Actions) => {
  switch (action.type) {
    case SET_MENU_ITEM:
      return action.menuItem;
    default: return state;
  }
};

export default menuItemReducer;
