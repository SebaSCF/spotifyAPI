import "../Style/SongInfo.css";

export default function SongInfo({ setSearch, search, playingTrack }) {
  return (
    <div>
      <h1>
        Searching now for... <i className="font-weight-lighter">{search}</i>
      </h1>
      <div className="container pt-3 form-group">
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a track, artist, etc."
        />
      </div>
      <div className="songContainer d-flex flex-column justify-content-center align-items-center">
        <img
          src={playingTrack.albumUrl}
          style={{ height: "300px", width: "300px" }}
        />
        <h3 className="pt-3">{playingTrack.title}</h3>
        <h4>{playingTrack.albumName}</h4>
        <h6 style={{ color: "gray" }} className="font-weight-100 ">
          {playingTrack.artist}
        </h6>
      </div>
    </div>
  );
}
