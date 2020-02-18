import {
   ADD_PRICE_TOGGLE,
   ADD_PRICE_CHECKBOX,
   Actions,
   INCREASE_COUNTER,
   DECREASE_COUNTER,
   SET_CURRENT_PRICE,
} from '../types';


const initialState: any = {
  counter: 1,
  currentPrice: 0,
  addPrice: [],
  isChecked: false,
  subtitle: '',
  customItem: '',
}

const customizationReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_PRICE_TOGGLE:
      if(state.addPrice
        .find((elem: any) => elem[1].includes(action.addPrice[1]))
       )
      return {
        ...state,
        addPrice:
        [
          ...state.addPrice
            .filter((elem: any) => elem[1] !== action.addPrice[1]),
           action.addPrice,
        ].filter(elem => elem.length)
      }
      return {
        ...state,
        addPrice: [...state.addPrice, action.addPrice],
      }

      case ADD_PRICE_CHECKBOX:
        if(state.addPrice
          .find((elem: any) => elem[2].includes(action.addPrice[2]))
          )
        return {
          ...state,
          addPrice:
          [
            ...state.addPrice
              .filter((elem: any) => elem[2] !== action.addPrice[2])
          ].filter((elem: any) => elem.length)
        }
        return {
          ...state,
          addPrice: [...state.addPrice, action.addPrice],
        }
      case DECREASE_COUNTER:
        if(state.counter > 1)
          return {
            ...state,
            counter: --state.counter,
          }
        return state;
      case INCREASE_COUNTER:
        return {
          ...state,
          counter: ++state.counter,
        }
      case SET_CURRENT_PRICE:
        return {
          ...state,
          currentPrice: action.currentPrice,
        }
    default:
      return state;
  }
}

export default customizationReducer;
