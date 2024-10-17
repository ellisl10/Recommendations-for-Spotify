import "../App.css";
// import searchTrackName from "../components/searchTrack";
import { useState } from "react";
import SearchButton from "../components/SearchButton";

const Home = () => {
  const [trackName, setTrackName] = useState("");
  return (
    <div>
      <h1 id="title">
        Spotify Recs
        <img src="src\assets\Spotify_Logo.png" id="logo"></img>
      </h1>

      <form>
        <input
          type="text"
          id="trackNameInput"
          placeholder="Enter a track"
          onChange={(e) => setTrackName(e.target.value)}
        ></input>
      </form>

      <SearchButton trackName={trackName}></SearchButton>
    </div>
  );
};

export default Home;
