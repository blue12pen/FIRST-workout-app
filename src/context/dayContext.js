import { createContext, useReducer } from 'react';
import dayReducer from './dayReducer';

const DayContext = createContext();

export const DayProvider = ({ children }) => {
  const initialState = {
    days: [],
    day: {},
    dayStarted: false,
  };

  const [state, dispatch] = useReducer(dayReducer, initialState);

  return (
    <DayContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DayContext.Provider>
  );
};

export default DayContext;
