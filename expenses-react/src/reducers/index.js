// src/js/reducers/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from "../constants/action-types";

const initialState = {
  expenses: [
    {
      id: 1,
      item: "coca-cola",
      price: 3000
    },
    {
      id: 2,
      item: "pizza",
      price: 4000
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_EXPENSE) {
    return Object.assign({}, state, {
      expenses: state.expenses.concat(action.payload)
    });
  } else if (action.type === REMOVE_EXPENSE) {
    let expenses = state.expenses
      .slice()
      .filter(el => el.id !== action.payload.id);

    return Object.assign({}, state, {
      expenses: expenses
    });
  } else if (action.type === EDIT_EXPENSE){
    let expenses = state.expenses
    .slice()
    .map(el => el.id === action.payload.id ? {...el, ...action.payload} : el);

    return Object.assign({}, state, {
      expenses: expenses
    });
  }

  return state;
}

export default rootReducer;
