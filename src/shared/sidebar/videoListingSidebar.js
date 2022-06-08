import "./sidebar.css";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  BsFillBookmarkFill,
  BsPlayBtnFill,
  BsCollectionPlayFill,
} from "react-icons/bs";
import { AiFillLike, AiOutlineHistory } from "react-icons/ai";
const VideoListingSidebar = () => {
  return (
    <div className="video-listing-sidebar bg-theme-changer pl-1">
      <Link to="/" className="link-color flex bg-theme-changer">
        <HiHome className="sidebar-icon" />
        <span className="sidebar-text"> Home</span>
      </Link>
      <Link
        to="/video-listing-page"
        className="bg-theme-changer link-color flex"
      >
        <BsPlayBtnFill className="sidebar-icon" />
        <span className="sidebar-text">Explore</span>
      </Link>
      <Link to="/playlists" className="bg-theme-changer link-color flex">
        <BsCollectionPlayFill className="sidebar-icon" />
        <span className="sidebar-text">PlayList</span>
      </Link>
      <Link to="/watch-later" className="bg-theme-changer link-color flex">
        <BsFillBookmarkFill className="sidebar-icon" />
        <span className="sidebar-text">Watch Later</span>
      </Link>
      <Link to="/liked-videos" className="bg-theme-changer link-color flex">
        <AiFillLike className="sidebar-icon" />
        <span className="sidebar-text">Liked videos</span>
      </Link>
      <Link to="/history-videos" className="bg-theme-changer link-color flex">
        <AiOutlineHistory className="sidebar-icon" />
        <span className="sidebar-text">History</span>
      </Link>
    </div>
  );
};
export { VideoListingSidebar };
