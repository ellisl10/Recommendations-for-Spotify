import "../App.css";
import { useState } from "react";
import SearchButton from "../components/SearchButton";

const Home = () => {
  const [trackName, setTrackName] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("submit")?.click();
    }
  };

  return (
    <div>
      <br />
      <h1 id="title">
        Recommendations for Spotify
        <img src="src\assets\Spotify_Logo.png" id="logo"></img>
      </h1>

      <div className="col-md-2" id="trackNameInput">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a track"
          onChange={(e) => setTrackName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />
      </div>

      <div id="submit-div">
        <SearchButton trackName={trackName} />
      </div>
    </div>
  );
};

export default Home;
