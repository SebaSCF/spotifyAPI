import { useState, useEffect } from "react";
import React from "react";
import "../Style/Dashboard.css";
import PlayerMenu from "./PlayerMenu";
import SongInfo from "./SongInfo";
import Player from "./Player";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "38eab37d03d041079fc41c4e4111588d",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setplayingTrack] = useState([]);

  const chooseTrack = (track) => {
    setplayingTrack(track);
    setSearch("");
  };

  console.log(searchResults);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let checker = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (checker) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            albumName: track.album.name,
          };
        })
      );
    });

    return () => (checker = true);
  }, [search, accessToken]);

  return (
    <div className="App container">

      <div  className="background text-center ">
        <SongInfo 
          code={code}
          search={search}
          setSearch={setSearch}
          playingTrack={playingTrack}
          accessToken={accessToken}
        />
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
      <div style={{ backgroundColor: "#F9F9F9"}} className="menuPlayer ">
        <PlayerMenu chooseTrack={chooseTrack} searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Dashboard;
