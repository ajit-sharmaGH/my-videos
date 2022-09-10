import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./context/themeContext";
import { SidebarProvider } from "./context/sidebarContext";
import { VideoContextProvider } from "./context/videosContext";
import { LikeContextProvider } from "./context/likeContext";
import {HistoryContextProvider} from "./context/historyContext";
import { AuthProvider } from "./context/authContext/authContext";
import { WatchProvider } from "./context/watchLaterContext";
import { PlaylistProvider } from "./context/playlistContext";

// // Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <SidebarProvider>
        <WatchProvider>
          <PlaylistProvider>
        <VideoContextProvider>
          <LikeContextProvider>
            <HistoryContextProvider>
            <App />
            </HistoryContextProvider>
          </LikeContextProvider>
        </VideoContextProvider>
        </PlaylistProvider>
        </WatchProvider>
      </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
