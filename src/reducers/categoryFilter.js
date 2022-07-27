const CategoryReducer = (state, action) => {
  const FilterVideoCategory = (currentCategory, videoList) => {
    if (currentCategory === "All") return videoList;
    return videoList.filter((video) => video.categoryName === currentCategory);
  };
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videoList: action.payload,
        videoListByCategory: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        categoryList: action.payload,
      };
    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.payload,
        videoListByCategory: FilterVideoCategory(
          action.payload,
          state.videoList
        ),
      };
    default:
      return state;
  }
};

export { CategoryReducer };
