const dayReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DAYS':
      return {
        ...state,
        days: action.payload,
      };
    case 'GET_DAY_STARTED':
      return {
        ...state,
        dayStarted: action.payload,
      };
    case 'START_NEW_DAY':
      return {
        ...state,
        dayStarted: true,
      };
    case 'GET_TODAY':
      return {
        ...state,
        day: action.payload,
      };

    default:
      return state;
  }
};

export default dayReducer;
