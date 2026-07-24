import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSongsByTag } from "../api/jamendo";
import "../styles/Playlist.css";
function Playlist() {
  const { tag } = useParams(); // use params automatically change genre without writing seperate pages

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  useEffect(() => {
    async function loadSongs() {
      const data = await getSongsByTag(tag);
      setSongs(data);
    }
    loadSongs();
  }, [tag]);

 return (
  <div className="body">
    <h1>{tag} Playlist</h1>

    <div className="cardContainer">
      {songs.map((song) => (
        <div
          className="card"
          key={song.id}
          onClick={() => setCurrentSong(song)}
        >
          <img src={song.image} alt={song.name} />

          <div className="card-detail">
            <h3>{song.name}</h3>
            <p>{song.artist_name}</p>
          </div>
        </div>
      ))}
    </div>

    {currentSong && (
      <div className="player">
        <h2>Now Playing</h2>

        <img
          src={currentSong.image}
          alt={currentSong.name}
          className="player-image"
        />

        <h3>{currentSong.name}</h3>
        <p>{currentSong.artist_name}</p>

        <audio
          controls
          autoPlay
          src={currentSong.audio}
        />
      </div>
    )}
  </div>
);
}
export default Playlist;
