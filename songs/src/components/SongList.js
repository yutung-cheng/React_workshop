import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    // map function is to produce a new array of JSX element
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // this.props === {songs: state.songs}
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}

// The convention called mapStateToProps function
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
// connect() set returns a function, the second set invokes the function that got returned
// Example:
/*
    function connect() {
      return function() {
        return "Hi";
      };
    }

    connect()(); // Hi
*/
