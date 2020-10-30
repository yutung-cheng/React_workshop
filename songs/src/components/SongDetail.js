import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ MySelectedSong }) => {
  if (!MySelectedSong) {
    return <div>Select A Song</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {MySelectedSong.title}
        <br />
        Duration: {MySelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { MySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
