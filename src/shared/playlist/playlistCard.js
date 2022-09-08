import { usePlaylist } from "../../context/playlistContext";
import { useVideo } from "../../context/videosContext";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import "./playlistCard.css";
const PlaylistCard = () => {
  const { loader } = useVideo();
  const { playlistState, playlistDispatch } = usePlaylist();

  return (
    <div className="bg-theme-changer playlist-container">
      {loader && <div>Loading the Videos</div>}
      {playlistState.length !== 0 ? (
        playlistState.map((playlist) => {
          const { id, name, videos } = playlist;
          return (
            <div key={id}>
              <div className="flex-row">
                <h2 className="margin-1">{name} </h2>
                <ImBin
                  size={23}
                  className="ml-auto margin-1"
                  onClick={() => {
                    playlistDispatch({
                      type: "DELETE_PLAYLIST",
                      payload: { playlistId: id },
                    });
                  }}
                ></ImBin>
              </div>
              <div>
                {videos.length !== 0 ? (
                  videos.map((video) => {
                    const {
                      _id,
                      caption,
                      img,

                      views,
                      date,
                      description,
                      title,
                      creator,
                    } = video;
                    return (
                      <div className="like-sub-container pt-1" key={_id}>
                        <Link to={`/player/${_id}`} className="img-context-box">
                          <div className="ml-1 mr-1">
                            <img
                              src={img}
                              className="like-video-images"
                              alt={title}
                            />
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
                            <span className="video-creator fw-600 mt-1">
                              {creator}
                            </span>
                          </div>
                        </Link>
                        <ImBin
                          className="icons heart-icon"
                          color="red"
                          size={25}
                          onClick={() => {
                            playlistDispatch({
                              type: "REMOVE_FROM_PLAYLIST",
                              payload: { playlistId: id, videoId: _id },
                            });
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <small className="ml-1 mb-1 fw-600">
                    Add some videos to Playlist
                  </small>
                )}
              </div>
            </div>
          );
        })
      ) : (<div className="flex-center pt-2">
        <h2><span className="pl-1">Create a Playlist, go to &nbsp;</span>
        <Link to ="/video-listing-page" className="playlist-link bg-theme-changer">videos DB</Link></h2>
        </div>
      )}
    </div>
  );
};
export { PlaylistCard };
