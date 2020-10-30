import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Maarena",
      duration: "3:45"
    },
    {
      title: "All star",
      duration: "4:21"
    },
    {
      title: "I Want it That Way",
      duration: "3:51"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
