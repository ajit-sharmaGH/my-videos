import { createContext, useContext, useReducer } from "react";
import { initialLike, LikedReducer } from "../reducers/likeReducer";

const LikeContext = createContext();

const LikeContextProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(LikedReducer, initialLike);

  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};
const useLike = () => useContext(LikeContext);
export { LikeContext, LikeContextProvider, useLike };
