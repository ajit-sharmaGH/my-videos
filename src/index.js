import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./context/themeContext";
import { SidebarProvider } from "./context/sidebarContext";
import { VideoContextProvider } from "./context/videosContext";
// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <VideoContextProvider>
          <App />
        </VideoContextProvider>
      </SidebarProvider>
    </ThemeProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
