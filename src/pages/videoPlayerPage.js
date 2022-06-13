import { VideoPlayer } from "../components/player/player";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingNavbar } from "../Navbar/videoListingNavbar/Navbar";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar.js";
import { useSidebarContext } from "../context/sidebarContext.js";
import "./videoPlayerPage.css"
const VideoPlayerPage = () => {
  const { sidebar } = useSidebarContext();
  return (
    <>
     <div> <VideoListingNavbar /></div>
      <div className="video-player-container flex">
        <div className="video-player-sidebar" style={{ display: sidebar }}>
          <VideoListingSidebar />
        </div>
        <div  className="components_video-player">
          <VideoPlayer />
        </div>
      </div>
    <BottomLink />
    </>
  );
};
export { VideoPlayerPage };
