import React from "react";
import SongResults from "./SongResults";
import "../Style/SongResults.css";

const PlayerMenu = ({ searchResults, chooseTrack }) => {
  return (
    <div className="songResults container">
      <label className="h3 text-left">Songs</label>
      <hr />

      <div className="d-flex flex-column my-2 ">
        <div className="songList">
          <div className="songItems">
            <div className="item"></div>
            {searchResults.map((track) => (
              <SongResults
                chooseTrack={chooseTrack}
                track={track}
                key={track.uri}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMenu;
