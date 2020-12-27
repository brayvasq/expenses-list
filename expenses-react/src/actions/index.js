// src/js/actions/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from "../constants/action-types";

export const addExpense = payload => {
  return {
    type: ADD_EXPENSE,
    payload
  };
};

export const editExpense = payload => {
  return {
    type: EDIT_EXPENSE,
    payload
  };
};

export const removeExpense = payload => {
  return {
    type: REMOVE_EXPENSE,
    payload
  };
};
