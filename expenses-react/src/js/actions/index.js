// src/js/actions/index.js
import { ADD_EXPENSE } from "../constants/action-types";

export const addExpense = (payload) => {
    return {
      type: ADD_EXPENSE,
      payload
    };
};
