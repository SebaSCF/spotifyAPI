import React, { useState, useEffect } from "react";
import "../Style/Player.css";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false)

useEffect(() => {
  setPlay(true)
}, [trackUri])

  if (!accessToken) return null;
  return (
    <div className="p-4">
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={
          state => {
            if(!state.isPlaying) setPlay(false)
          }
        }
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
};

export default Player;
