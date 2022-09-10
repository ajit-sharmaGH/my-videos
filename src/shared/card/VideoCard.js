import "./VideoCard.css";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/videosContext";
const VideoCard = () => {
  const { loader, state, searchInput } = useVideo();
  return (
    <div className="video-listing-card bg-theme-changer">
      {loader && <h2 className="pl-2 pt-1"> Loading the Videos </h2>}

      {searchInput === "&nbsp; " ? (
        <b className="flex-center">
          Please type a valid name, Ekdm topibaaz ho kaa !
        </b>
      ) : (
        state.videoListByCategory
          .filter((item) =>
            item.caption.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((item) => {
            return (
              <div key={item._id}>
                <Link to={`/player/${item._id}`}>
                  <img
                    src={item.img}
                    className="video-images"
                    alt={item.title}
                  />
                </Link>
                <div className="flex mt-1">
                  <section>
                    <img
                      src={item.img}
                      className="video-avatar-img"
                      alt="badge"
                    />
                  </section>
                  <section>
                    <h4 className="video-caption">{item.caption} </h4>
                    <div className="fw-500 content-box">
                      <span className="video-creator fw-600">
                        {item.creator}&nbsp;.&nbsp;{" "}
                      </span>
                      <span className="video-views">
                        {" "}
                        {item.views}
                        {" views "} &nbsp;.&nbsp;{" "}
                      </span>
                      <span className="video-date">{item.date} </span>
                    </div>
                  </section>
                  <section className="ml-auto">
    
                  </section>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
};
export { VideoCard };
