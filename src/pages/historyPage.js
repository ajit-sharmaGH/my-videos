import { Navbar } from "../Navbar/home/navbar";
import { HistoryCard } from "../shared/history/historyCard";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";
import "./likePage.css";

const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex video-like-container">
        <div className="video-like-sidebar">
          <VideoListingSidebar />
        </div>{" "}
        <div className="video-like-component">
          <HistoryCard />
        </div>{" "}
      </div>{" "}
      <BottomLink />
    </>
  );
};
export { HistoryPage };
