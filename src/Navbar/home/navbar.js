import "./navbar.css";
import { useThemeContext } from "../../context/themeContext";
import { useSidebarContext } from "../../context/sidebarContext";
const Navbar = () => {
  const { sidebarToggle } = useSidebarContext();
  const { theme, toggleTheme } = useThemeContext();
  return (
    <header className="header-body flex-wrap">
      <div className="header_logo">
        <p> My - Videos </p>{" "}
      </div>{" "}
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
      <div className="ham-burger cursor" onClick={sidebarToggle}>
        <i className="fa-solid fa-bars"> </i>{" "}
      </div>{" "}
    </header>
  );
};
export { Navbar };
