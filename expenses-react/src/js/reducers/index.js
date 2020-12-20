// src/js/reducers/index.js
import { ADD_EXPENSE } from "../constants/action-types";

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
  }
  return state;
}

export default rootReducer;
