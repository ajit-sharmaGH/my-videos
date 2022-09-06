 const initialWatchList = {
    watchLater: [],
};

 const watchReducer = (state, action) => {
    const { type, payload } = action;
    const isVideoInWatchList = (state, video) =>
        state.watchLater.find((item) => item.id === video.id);

    switch (type) {
        case "ADD_TO_WATCHLIST":
            return isVideoInWatchList(state, payload) ? state : {...state, watchLater: [...state.watchLater, payload] };
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchLater: state.watchLater.filter((item) => item.id !== payload.id),

            };
        default:
            return state;
    }
}
export {watchReducer, initialWatchList};