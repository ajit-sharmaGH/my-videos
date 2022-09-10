import { useContext, createContext, useReducer, useState } from "react";
import {
  initialPlaylistValue,
  PlaylistReducer,
} from "../reducers/playlistReducer";

const defaultPlaylistValue = {};
const PlaylistContext = createContext(defaultPlaylistValue);
const PlaylistProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openNewModal, setOpenNewModal] = useState(false);
  const [playlistState, playlistDispatch] = useReducer(
    PlaylistReducer,
    initialPlaylistValue
  );
  return (
    <PlaylistContext.Provider
      value={{
        openModal,
        setOpenModal,
        openNewModal,
        setOpenNewModal,
        playlistState,
        playlistDispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
