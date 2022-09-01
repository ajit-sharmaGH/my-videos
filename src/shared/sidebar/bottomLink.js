import { HiHome } from "react-icons/hi";
import { BsFillBookmarkFill, BsCollectionPlayFill } from "react-icons/bs";
import { AiFillLike, AiOutlineHistory } from "react-icons/ai";
import { Link } from "react-router-dom";
const BottomLink = () => {
  return (
    <div className="video-listing_bottom-icons bg-theme-changer">
      <Link to="/" className="link-color">
        <HiHome className="sidebar-icon" size={25} />{" "}
      </Link>
      <Link to="/video-listing-page" className="link-color">
        <BsCollectionPlayFill className="sidebar-icon" />
      </Link>{" "}
      <Link to="/watch-later" className="link-color">
        <BsFillBookmarkFill className="sidebar-icon" />
      </Link>{" "}
      <Link to="/liked-videos" className="link-color">
        <AiFillLike className="sidebar-icon" size={25} />{" "}
      </Link>{" "}
      <Link to="/history-videos" className="link-color">
        <AiOutlineHistory className="sidebar-icon" size={25} />{" "}
      </Link>{" "}
    </div>
  );
};
export { BottomLink };
