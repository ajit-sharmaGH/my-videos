import { createContext, useContext, useState, useEffect } from "react";
import  axios  from "axios";

const VideoContext = createContext({});

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get("/api/videos");
      setLoader(false);
      setVideos(data.videos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, loader }}>
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoContextProvider, useVideo };
