import "./Navbar.css";
import { useSidebarContext } from "../../context/sidebarContext";
import { useThemeContext } from "../../context/themeContext";
const VideoListingNavbar = () => {
    const {sidebarToggle} = useSidebarContext();
    const {theme,toggleTheme} = useThemeContext();
  return (
    <header className="video-listing_header-body bg-theme-changer">
      <div className="flex-wrap-center burger-logo-bhai-bhai">
        <span onClick={sidebarToggle}><i className="fa-solid fa-bars icons"></i></span>
        <h2 className="ml-2 mr-1 header-logo">My Videos</h2>
      </div>
      <div className="video-listing_input-box">
     <span> <i class="fa-solid fa-magnifying-glass search-icon"></i></span>
              <input type="text" className="search-box" placeholder="search...." />{" "}
      </div>
      <div className="flex-wrap-center">
      <div>
        {theme === "moon-icon" ? (
          <span onClick={toggleTheme} className="dark_light-icon cursor">
            <i className="fa-solid fa-sun"> </i>{" "}
          </span>
        ) : (
          <span onClick={toggleTheme} className="dark_light-icon cursor">
            <i className="fa-solid fa-moon"> </i>{" "}
          </span>
        )}{" "}
      </div>{" "}
        <img
          src="https://i.ibb.co/9nWdYbV/Yash.jpg"
          alt="profile-img"
          className="video-listing_profile-img ml-1"
        />{" "}
      </div>
    </header>
  );
};
export { VideoListingNavbar };
