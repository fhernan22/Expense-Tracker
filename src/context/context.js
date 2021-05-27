import React, { createContext, useReducer } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, balance, addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
