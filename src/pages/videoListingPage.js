import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";
import { VideoListingNavbar } from "../Navbar/videoListingNavbar/Navbar.js";
import { VideoListingComponent } from "../components/videoListing/videoListing";
import { useSidebarContext } from "../context/sidebarContext";
import "./videoListingPage.css";
import {BottomLink} from "../shared/sidebar/bottomLink.js";

const VideoListingPage = () => {
  const { sidebar } = useSidebarContext();
  return (
    <>
      <div>
        <VideoListingNavbar />{" "}
      </div>
      <div className="flex video-listing-container">
        <div className="video-listing-sidebar" style={{ display: sidebar }}>
          {" "}
          <VideoListingSidebar />
        </div>
        <div className="video-listing-component">
          <VideoListingComponent />
        </div>
      </div>
      <BottomLink />
    </>
  );
};
export { VideoListingPage };
