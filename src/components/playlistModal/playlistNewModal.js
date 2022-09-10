import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { usePlaylist } from "../../context/playlistContext";
 const NewPlaylistModal = ({ video }) => {
  const {
    openNewModal,
    setOpenNewModal,
    openModal,
    setOpenModal,
    playlistDispatch,
  } = usePlaylist();
  const [input, setInput] = useState("Naam to Likho");
  return (
    <>
      {!openNewModal && (
        <div
          className="flex flex-row flex-gap"
          onClick={() => setOpenNewModal(() => !openNewModal)}
        >
          <FaPlus />
          <p className="ml-1">Create New Playlist</p>
        </div>
      )}
      {openNewModal && (
        <>
          <div className="flex flex-column">
            <label htmlFor="title">
              <div className="modal-items">Title</div>
              <input
                type="text"
                placeholder="Playlist title"
                className="input-text-field fw-600"
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </div>
    
          <button
            onClick={() => {
              setOpenNewModal(() => !openNewModal);
              setOpenModal(() => !openModal);
              playlistDispatch({
                type: "CREATE_PLAYLIST",
                payload: { title: input, video: video },
              });
            }}
     
          >
             Create
          </button>
        </>
      )}
    </>
  );
};
export {NewPlaylistModal};