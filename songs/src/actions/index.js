// Action Creator

// Name export allows us to export many different function from a single file: put export infront of function
export const selectSong = song => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
