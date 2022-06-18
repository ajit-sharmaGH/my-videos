import { Navbar } from "../Navbar/home/navbar";
import { LikeCard } from "../shared/likeCard/likeCard";
import { BottomLink } from "../shared/sidebar/bottomLink";
import { VideoListingSidebar } from "../shared/sidebar/videoListingSidebar";
import "./likePage.css";

const LikePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex video-like-container">
        <div className="video-like-sidebar">
          <VideoListingSidebar />
        </div>
        <div className="video-like-component">
          <LikeCard />
        </div>
      </div>
      <BottomLink />
    </>
  );
};
export { LikePage };
