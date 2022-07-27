import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { CategoryReducer } from "../reducers/categoryFilter";
const VideoContext = createContext([]);

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loader, setLoader] = useState(true);
  const initialValue = {
    videoList: [],
    categoryList: [],
    currentCategory: "All",
    videoListByCategory: [],
  };

  const [state, dispatch] = useReducer(CategoryReducer, initialValue);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategory(categories);

        dispatch({ type: "GET_CATEGORY", payload: categories });
      } catch {
        console.log("Error while fetching categories");
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        setVideos(videos);
        setLoader(false);
        dispatch({ type: "GET_VIDEOS", payload: videos });
      } catch {
        console.log("error while fetching data");
      }
    })();
  }, []);
  return (
    <VideoContext.Provider
      value={{
        videos,
        loader,
        category,
        searchInput,
        setSearchInput,
        state,
        dispatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoContextProvider, useVideo };
