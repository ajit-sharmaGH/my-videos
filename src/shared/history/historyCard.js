import { useVideo } from "../../context/videosContext";
import { Link } from "react-router-dom";
import "../likeCard/likeCard.css";
import { useHistory } from "../../context/historyContext";
const HistoryCard = () => {
  const { historyDispatch, historyState } = useHistory();
  const { loader } = useVideo();
  return (
    <div className="like-container bg-theme-changer">
      {loader && <div className="flex-center"> Loading the videos </div>}
      {historyState.history.length !== 0 ? (
        historyState.history.map((video) => {
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
            <div className="like-sub-container pt-1" key={_id}>
              <Link to={`/player/${_id}`} className="img-context-box">
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

              <i
                className="icons heart-icon fa-solid fa-xmark"
                onClick={() => {
                  historyDispatch({
                    type: "REMOVE_FROM_HISTORY",
                    payload: video,
                  });
                }}
              ></i>
            </div>
          );
        })
      ) : (
        <div className="flex-center pt-2 fw-800">History Empty</div>
      )}
    </div>
  );
};
export { HistoryCard };
