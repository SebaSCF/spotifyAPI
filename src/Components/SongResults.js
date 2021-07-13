import React from "react";

const SongResults = ({ track, chooseTrack }) => {
  const playHandler = () => {
    chooseTrack(track);
  };
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={playHandler}
    >
      <div style={{ height: "300px", width: "280px" }} className="ml-3">
        <img src={track.albumUrl} style={{ height: "200px", width: "200px" }} />
        <div className="font-weight-bold">{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
};

export default SongResults;
