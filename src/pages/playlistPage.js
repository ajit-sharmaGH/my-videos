import { Navbar } from "../Navbar/home/navbar";
import { PlaylistCard } from "../shared/playlist/playlistCard";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";

const PlaylistPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex video-like-container">
        <div className="video-like-sidebar">
          <VideoListingSidebar />
        </div>
        <div className="video-like-component">
          <PlaylistCard />
        </div>
      </div>
      <BottomLink />
    </>
  );
};
export { PlaylistPage };
