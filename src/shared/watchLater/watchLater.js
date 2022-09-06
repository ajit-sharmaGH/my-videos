import { MdWatchLater } from "react-icons/md";
import { useVideo } from "../../context/videosContext";
import { useWatchLater } from "../../context/watchLaterContext";

import { Link } from "react-router-dom";
const WatchLaterCard = () => {
  const { watchState, watchDispatch } = useWatchLater();
  const { loader } = useVideo();
  return (
    <div className="like-container bg-theme-changer">
      {loader && <div className="flex-center"> Loading the videos </div>}
      {watchState.watchLater.length !== 0 ? (
        
        watchState.watchLater.map((video) => {
          const {
            _id, 
            title,
            img,
            creator,
            views,
            date,
            caption,
            description,
          } = video;
          return (
            <div className="like-sub-container pt-1"  key = {_id}>
                <b className="margin-1">Watch List Video</b>
              <Link  to ={`/player/${_id}`}  className="img-context-box">
                <div className="ml-1 mr-1">
                  <img src={img} className="like-video-images" alt={title} />
                </div>
                <div className="content-box pl-1 pr-1 flex-col bg-theme-changer">
                  <h4 className="video-caption">{caption} </h4>
                  <span className="video-views">
                    {" "}
                    {views}
                    {" views "}
                  </span>
                  <span className="video-date mb-1">{date} </span>
                  <p>{description} </p>
                  <span className="video-creator fw-600 mt-1">{creator}</span>
                </div>
              </Link>
              <MdWatchLater
                className="icons heart-icon"
                color="red"
                onClick={() => {
                  watchDispatch({ type: "REMOVE_FROM_WATCHLIST", payload: video });
                }}
              ></MdWatchLater>
            </div>
          );
        })
      ) : (
        <div className="flex-center pt-2 fw-800">Empty Watch-list</div>
      )}
    </div>
  );
};
export { WatchLaterCard };
