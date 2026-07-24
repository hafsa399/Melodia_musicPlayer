import "./TrendingPlaylist.css";
import playlists from "../../data/playlist";
import { useNavigate } from "react-router-dom";

function TrendingPlaylist() {
  const navigate = useNavigate();

  return (
    <section className="trending-playlist" id="TrendingPlaylist">
      <h2>Trending Playlists</h2>

      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <article
            key={playlist.id}
            className="playlist-card"
            onClick={() => navigate(`/playlist/${playlist.tag}`)}
          >
            <img src={playlist.image} alt={playlist.name} />

            <div className="playlist-info">
              <h3>{playlist.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrendingPlaylist;