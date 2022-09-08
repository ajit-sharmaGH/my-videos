import React from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/playlistContext";
import "./modal.css";
import { NewPlaylistModal } from "./playlistNewModal";

import { isVideoInPlaylist } from "../../reducers/playlistReducer";

const PlaylistModal = ({ video }) => {
  const { openModal, setOpenModal, playlistState, playlistDispatch } =
    usePlaylist();

  const playlistHandler = (e, playlistId) => {
    if (e.target.checked) {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { playlistId, video },
      });
    } else {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { playlistId, videoId: video._id },
      });
    }
  };

  return (
    <>
      {openModal && (
        <div className="modal-wrapper" onClick={() => setOpenModal(false)}>
          <div
            className="modal-alert padding-1 margin-1"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="modal-title border-bottom padding-1 margin-1">
              Add to Playlist
            </h3>
            <aside>
              <div className="modal-action-items stacked ">
                <NewPlaylistModal video={video} />
                {playlistState.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="modal-items">
                        <label>
                          <input
                            type="checkbox"
                        
                            onChange={(e) => playlistHandler(e, item.id)}
                            checked={isVideoInPlaylist (
                              playlistState,
                              video._id,
                              item.id
                            )}
                          />
                         {item.name}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>
            <div className="modal-actions border-top">
              <button
                className="modal-action cursor"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
              <Link
                to="/playlists"
                className="modal-action"
                onClick={() => setOpenModal(false)}
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export {PlaylistModal}