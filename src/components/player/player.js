import ReactPlayer from "react-player";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import {
  MdWatchLater,
  MdPlaylistAdd,
  MdOutlineWatchLater,
} from "react-icons/md";
import { ChipComponent } from "../../shared/chips/chips";
import "./player.css";
import { useVideo } from "../../context/videosContext";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../shared/card/VideoCard.js";
import { useLike } from "../../context/likeContext";
import { useHistory } from "../../context/historyContext";
import { useWatchLater } from "../../context/watchLaterContext";
const VideoPlayer = () => {
  const { historyDispatch } = useHistory();
  const { videoId } = useParams();
  const { videos } = useVideo();
  const { likeDispatch, likeState } = useLike();
  const { watchDispatch, watchState } = useWatchLater();
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
              onStart={() => {
                historyDispatch({
                  type: "ADD_TO_HISTORY",
                  payload: videoDisplaying,
                });
              }}
              controls
            />
          </div>
          <p className="about-videos">{description} </p>
          <section className="flex-wrap-center pl-1 mr-1">
            {" "}
            <div className="mr-auto">{views}&nbsp;views</div>
            <div className="flex-wrap">
            
              {likeState.liked.includes(videoDisplaying) ? (
            
               <AiFillLike
                  size={25}
                  onClick={() => {
                    likeDispatch({
                      type: "REMOVE_FROM_LIKE",
                      payload: videoDisplaying,
                    });
                  }}
                />
                
              ) : (
                <AiOutlineLike
                  onClick={() => {
                    likeDispatch({
                      type: "ADD_TO_LIKE",
                      payload: videoDisplaying,
                    });
                  }}
                  size={25}
                />
              )}
            
            
              {watchState.watchLater.includes(videoDisplaying) ? (
                <MdWatchLater
                  className="watchLater-icon"
                  size={25}
                  onClick={() => {
                    watchDispatch({
                      type: "REMOVE_FROM_WATCHLIST",
                      payload: videoDisplaying,
                    });
                  }}
                />
              ) : (
                <MdOutlineWatchLater
                  className="watchLater-icon"
                  size={25}
                  onClick={() => {
                    watchDispatch({
                      type: "ADD_TO_WATCHLIST",
                      payload: videoDisplaying,
                    });
                  }}
                />
              )}

              <MdPlaylistAdd className="playlist-icon" size={30} />
            </div>
          </section>
          <aside className="flex-wrap-center mt-1 creator-subscriber">
            <img src={img} className="video-avatar-img" alt="badge" />
            <span className="video-creator fw-600 mr-auto">{creator}</span>
            <div className="fw-500 content-box">
              <h3 className="fw-600 mr-1 subscribe-btn">Subscribe</h3>
            </div>
          </aside>
        </div>
        <div className="player-video-card-first">
          <div className="chip-position">
            {" "}
            <ChipComponent />
          </div>
          <VideoCard />
        </div>
      </div>
      <div className="player-video-card-second">
        <div className="chip-position">
          {" "}
          <ChipComponent />
        </div>
        <VideoCard />
      </div>
    </>
  );
};
export { VideoPlayer };
