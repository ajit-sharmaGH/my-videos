import { createContext, useContext, useState } from "react";
const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState("none");

  const sidebarToggle = () => {
    setSidebar((sidebar) => (sidebar === "none" ? "block" : "none"));
  };

  return (
    <SidebarContext.Provider value={{ sidebar, sidebarToggle }}>
      {" "}
      {children}{" "}
    </SidebarContext.Provider>
  );
};
const useSidebarContext = () => useContext(SidebarContext);
export { SidebarProvider, useSidebarContext };
