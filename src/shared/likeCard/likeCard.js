import { useLike } from "../../context/likeContext";
import { useVideo } from "../../context/videosContext";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import "./likeCard.css";
const LikeCard = () => {
  const { likeDispatch, likeState } = useLike();
  const { loader } = useVideo();
  return (
    <div className="like-container bg-theme-changer">
      {loader && <div className="flex-center"> Loading the videos </div>}
      {likeState.liked.length !== 0 ? (
        likeState.liked.map((video) => {
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
            <Link to={`/player/${_id}`} className="like-sub-container pt-1"  key = {_id}>
              <div className="img-context-box">
                <div  className="ml-1 mr-1">
                  <img src={img} className="like-video-images" alt={title} />
                </div>
                <div className="content-box ml-1 flex-col">
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
              </div>
              <AiFillHeart
                className="icons heart-icon"
                color="red"
                onClick={() => {
                  likeDispatch({ type: "REMOVE_FROM_LIKE", payload: video });
                }}
              ></AiFillHeart>
            </Link>
          );
        })
      ) : (
        <div className="flex-center pt-2 fw-800">Like some videos</div>
      )}
    </div>
  );
};
export { LikeCard };
