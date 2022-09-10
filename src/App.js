import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VideoListingPage } from "./pages/videoListingPage";
import { VideoPlayerPage } from "./pages/videoPlayerPage";
import { LikePage } from "./pages/likePage";
import { HistoryPage } from "./pages/historyPage";
import { LoginPage } from "./pages/loginPage";
import { SignupPage } from "./pages/signupPage";
import { RequireAuth } from "./apiCalls/authRequire/requiresAuth";
import { WatchLaterPage } from "./pages/watchLaterPage";
import { PlaylistPage } from "./pages/playlistPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/video-listing-page" element={<VideoListingPage />} />{" "}
        <Route path="/player/:videoId" element={<VideoPlayerPage />} />
        <Route
          path="/liked-videos"
          element={
            <RequireAuth >
              <LikePage />
            </RequireAuth>
          }
        />
        <Route
          path="/history-videos"
          element={
            <RequireAuth>
              <HistoryPage /> 
            </RequireAuth>
          }
        />
        <Route
          path="/watch-later"
          element={
            <RequireAuth>
              <WatchLaterPage /> 
            </RequireAuth>
          }
        />
        <Route
          path="/playlists"
          element={
            <RequireAuth>
              <PlaylistPage /> 
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>{" "}
    </Router>
  );
}

export default App;
