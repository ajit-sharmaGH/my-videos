import "./navbar.css";
import { useThemeContext } from "../../context/themeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <header className="header-body flex-wrap">
      <div className="header_logo">
        <p> My - Videos </p>{" "}
      </div>{" "}
      <div>
        {theme === "sun-icon" ? (
          <span onClick={toggleTheme} className="dark_light-icon cursor">
            <i className="fa-solid fa-moon"> </i>{" "}
          </span>
        ) : (
          <span onClick={toggleTheme} className="dark_light-icon cursor">
            <i className="fa-solid fa-sun"> </i>{" "}
          </span>
        )}{" "}
      </div>{" "}
      <img
          src="https://i.ibb.co/9nWdYbV/Yash.jpg"
          alt="profile-img"
          className="video-listing_profile-img ml-1"
        />{" "}
    </header>
  );
};
export { Navbar };
