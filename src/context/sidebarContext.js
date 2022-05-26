import { createContext, useContext, useState } from "react";
const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState("block");

  const sidebarToggle = () => {
    setSidebar((sidebar) => (sidebar === "block" ? "none" : "block"));
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
