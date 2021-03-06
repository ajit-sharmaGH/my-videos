import { HomePage } from "./pages/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {VideoListingPage} from "./pages/videoListingPage";
import { VideoPlayerPage } from "./pages/videoPlayerPage";
import { LikePage } from "./pages/likePage";
import { HistoryPage } from "./pages/historyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/video-listing-page" element={<VideoListingPage />} />{" "}
        <Route path="/player/:videoId" element = {<VideoPlayerPage />} />
        <Route path="/liked-videos" element = {<LikePage />} />
        <Route path="/history-videos" element = {<HistoryPage />} />
      </Routes>{" "}
    </Router>
  );
}

export default App;
