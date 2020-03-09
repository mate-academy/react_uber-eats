import { SET_MENU_ITEM, Actions, IMenuItemState } from '../types';

const menuItemReducer = ( state = <IMenuItemState>{}, action: Actions) => {
  switch (action.type) {
    case SET_MENU_ITEM:
      return action.menuItem;
    default: return state;
  }
};

export default menuItemReducer;
