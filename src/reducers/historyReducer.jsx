const initialHistory = {
  history: [],
};

const HistoryReducer = (state, action) => {
    const isInHistory = (state, video) => 
        state.history.find((item) => item.id === video.id);
    switch (action.type) {
        
      case "ADD_TO_HISTORY":
        return isInHistory(state, action.payload)
          ? state
          : { ...state, history: [...state.history, action.payload] };
      case "REMOVE_FROM_HISTORY":
        return {
          ...state,
          history: state.history.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      default:
        return state;
    }
  };


export { initialHistory, HistoryReducer};
