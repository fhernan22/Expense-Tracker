import React, { createContext, useReducer } from "react";

import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  const deleteTransaction = (id) =>
    dispatch({ type: "Delete_Transaction", payload: id });

  return (
    <ExpenseTrackerContext.Provider
      value={{ addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
