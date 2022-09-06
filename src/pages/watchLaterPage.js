import { Navbar } from "../Navbar/home/navbar";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";
import { WatchLaterCard } from "../shared/watchLater/watchLater";
import "./likePage.css";

const WatchLaterPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex video-like-container">
        <div className="video-like-sidebar">
          <VideoListingSidebar />
        </div>
        <div className="video-like-component">
          <WatchLaterCard />
        </div>
      </div>
      <BottomLink />
    </>
  );
};
export { WatchLaterPage };
