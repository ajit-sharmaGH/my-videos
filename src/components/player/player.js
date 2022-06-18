import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import "./player.css";
import { useVideo } from "../../context/videosContext";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../shared/card/VideoCard.js";
import { useLike } from "../../context/likeContext";
import { useHistory } from "../../context/historyContext";
const VideoPlayer = () => {
  const {historyDispatch} = useHistory();
  const { videoId } = useParams();
  const { videos } = useVideo();
  const { likeDispatch, likeState } = useLike();
  const getVideoInfo = (id, videos) => {
    const videoDetails = videos.find((video) => id === video._id);
    return videoDetails;
  };
  const videoDisplaying = getVideoInfo(videoId, videos);
  const { videoUrl, img, creator, description, views } = videoDisplaying;

  return (
    <>
      <div className="video-player-box bg-theme-changer">
        <div className="react-player-frame">
          <div className="flex">
            {" "}
            <ReactPlayer
              url={videoUrl} 
              className="react-player-frame"
              onStart = {()=>{
                historyDispatch({
                  type: "ADD_TO_HISTORY",
                  payload: videoDisplaying
                })
              }}
              controls
              
            />
          </div>
          <p className="about-videos">{description} </p>
          <div className="flex-wrap-center pl-1 mr-1">
            {" "}
            <div className="mr-auto">{views}&nbsp;views</div>
            <div className="flex-wrap">
              <AiFillLike
                className="like-icon"
               
                size={25}
                color={
                  likeState.liked.includes(videoDisplaying) ? "green" : "black"
                }
                onClick={() => {
                  if (likeState.liked.includes(videoDisplaying)) {
                    likeDispatch({
                      type: "REMOVE_FROM_LIKE",
                      payload: videoDisplaying,
                    });
                  } else {
                    likeDispatch({
                      type: "ADD_TO_LIKE",
                      payload: videoDisplaying,
                    });
                  }
                }}
              ></AiFillLike>
              <MdWatchLater className="watchLater-icon" size={25} />
              <MdPlaylistAdd className="playlist-icon" size={30} />
            </div>
          </div>
          <div className="flex-wrap-center mt-1 creator-subscriber">
            <img src={img} className="video-avatar-img" alt="badge" />
            <span className="video-creator fw-600 mr-auto">{creator}</span>
            <div className="fw-500 content-box">
              <h3 className="fw-600 mr-1 subscribe-btn">Subscribe</h3>
            </div>
          </div>
        </div>
        <div className="player-video-card-first">
          <VideoCard />
        </div>
      </div>
      <div className="player-video-card-second">
        <VideoCard />
      </div>
    </>
  );
};
export { VideoPlayer };
