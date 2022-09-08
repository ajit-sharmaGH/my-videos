import { v4 } from "uuid";

 const initialPlaylistValue = [
    { id: v4(), name: "Playlist 1", videos: [] },
    { id: v4(), name: "Playlist 2", videos: [] },
    { id: v4(), name: "Playlist 3", videos: [] },
   

];

const isVideoInPlaylist = (state, videoId, playlistId) =>
    state.some((playlist) =>
        playlist.id === playlistId ? playlist.videos.some((video) => video._id === videoId) :
        false);

const PlaylistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_PLAYLIST":
            return state.map((playlist) => payload.playlistId === playlist.id ? {
                ...playlist,
                videos: [...playlist.videos, payload.video]
            } : playlist);

        case "REMOVE_FROM_PLAYLIST":
            return state.map((playlist) =>
                payload.playlistId === playlist.id ? {
                    ...playlist,
                    videos: playlist.videos.filter(
                        (item) => item._id !== payload.videoId
                    ),
                } : playlist);

        case "CREATE_PLAYLIST":
            return [
                ...state, {
                    id: v4(),
                    name: payload.title,
                    videos: [payload.video]
                }
            ];

        case "DELETE_PLAYLIST":
            return state.filter((item) => item.id !== payload.playlistId)
        default:
    }
}
export {isVideoInPlaylist,PlaylistReducer, initialPlaylistValue};