import { createContext, useLayoutEffect, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const toggleTheme = () =>
    setTheme((theme) => (theme === "sun-icon" ? "moon-icon" : "sun-icon"));
  useLayoutEffect(() => {
    if (theme === "sun-icon") {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add("dark-theme");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {" "}
      {children}{" "}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);
export { useThemeContext, ThemeProvider };
