import React from "react";

import { createContext, useContext, useReducer} from "react";
import { initialHistory, HistoryReducer } from "../reducers/historyReducer";

const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(HistoryReducer,
    initialHistory
  );
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);
export { useHistory, HistoryContextProvider };
