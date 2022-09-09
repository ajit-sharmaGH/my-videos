import "./home.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/videosContext";
const HomeComponent = () => {
  const { videos } = useVideo();

  return (
    <div className="padding-1 bg-theme-changer home_container">
      <div className="front_page">
        <h3 className="home_description">
          <h2 className="fw-600">WelCome to My Videos</h2>
         This is a free videos sharing website (hosted on netlify)
          that makes it easy to watch online videos available in backend database. It includes different
           features similar to youtube like video-listing, like videos, watch video in history, create playlist, watch-later videos
            etc.
        
        </h3>
        <Link to="/video-listing-page" className="img_container">
          <img
            className="home_img"
            src="https://i.ibb.co/QNHQH4y/istockphoto-612645332-612x612.jpg"
            alt="
            "
          />
          <button className="img_btn">Explore More</button>
        </Link>
      </div>

      <h2 className="mt-3 fw-800">Must Watch</h2>
      <div className="must_watch-container">
        {videos.slice(0,4).map(({ img, title, _id, date, caption }) => {
          return (
            <div key={_id}>
              <Link to={`/player/${_id}`}>
              <img src={img} alt="images" className="must_watch-img" />
              </Link>
              <h3 className="fw-600">{title}</h3>
              <p>{date} </p>
              <p>{caption} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { HomeComponent };
