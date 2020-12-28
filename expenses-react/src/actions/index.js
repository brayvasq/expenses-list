// src/actions/index.js
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, GET_EXPENSES } from "../constants/action-types";
import { apiGetExpenses, apiAddExpense, apiUpdateExpense, apiDeleteExpense } from '../lib/expenses';

const getExpenses = payload => ({ type: GET_EXPENSES, payload });

const addExpense = payload => {
  return {
    type: ADD_EXPENSE,
    payload
  };
};

const editExpense = payload => {
  return {
    type: EDIT_EXPENSE,
    payload
  };
};

const removeExpense = payload => {
  return {
    type: REMOVE_EXPENSE,
    payload
  };
};

// Async actions
export const fetchGetExpenses = () => {
  return dispatch => {
    return apiGetExpenses()
      .then(response => {
        dispatch(getExpenses(response));
      })
  }
}

export const fetchAddExpense = expense => {
  return dispatch => {
    apiAddExpense(expense)
      .then(response => dispatch(addExpense({ item: expense.item, price: expense.price })))
      .catch(response => console.log(response))
  }
}

export const fetchUpdateExpense = (id, expense) => {
  return dispatch => {
    apiUpdateExpense(id, expense)
      .then(response => dispatch(editExpense({ id: id, item: expense.item, price: expense.price })))
      .catch(response => console.log(response))
  }
}

export const fetchDeleteExpense = id => {
  return dispatch => {
    apiDeleteExpense(id)
      .then(response => dispatch(removeExpense({id: id})))
      .catch(response => console.log(response))
  }
}
