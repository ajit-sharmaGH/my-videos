const initialLike = {
  liked: [],
};

const LikedReducer = (state, action) => {
  const isLiked = (state, video) =>
    state.liked.find((item) => item.id === video.id);

  switch (action.type) {
    case "ADD_TO_LIKE":
      return isLiked(state, action.payload)
        ? state
        : { ...state, liked: [...state.liked, action.payload] };
    case "REMOVE_FROM_LIKE":
      return {
        ...state,
        liked: state.liked.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { initialLike, LikedReducer };
