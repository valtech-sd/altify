import React, { createContext, useReducer } from 'react';

export const StateContext = createContext();

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increaseCounter':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decreaseCounter':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'resetCounter':
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
