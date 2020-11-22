import React, { useContext, useReducer, createContext } from "react";

//Prepares the dataLayer

export const StateContext = createContext();

//Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
