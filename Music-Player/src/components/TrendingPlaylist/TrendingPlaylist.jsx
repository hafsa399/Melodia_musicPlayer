import lataMangeshkar from "../../assets/images/lata mengash.jpg";
import kaliKali from "../../assets/images/kali kali zulfo ky pandy.jpg";
import anuvJain from "../../assets/images/anuv jaein.jpg";
import billieEilish from "../../assets/images/bad guy.jpg";
import "./TrendingPlaylist.css";

const playlists = [
  {
    title: "Old playlist",
    artist: "Lata Mangeshkar",
    image: lataMangeshkar,
  },
  {
    title: "Kawali",
    artist: "Nusrat Fateh Ali Khan",
    image: kaliKali,
  },
  {
    title: "Anuv Jain Mix",
    artist: "Anuv Jain",
    image: anuvJain,
  },
  {
    title: "soft playlist",
    artist: "Billie Eilish",
    image: billieEilish,
  },
];

function TrendingPlaylist() {

  return (
 

    <section className="trending-playlist" id="TrendingPlaylist">
      <h2>Trending Playlist</h2>

      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <article className="playlist-card" key={playlist.title}>
            <img src={playlist.image} alt={playlist.title} />
            <div className="playlist-info">
              <h3>{playlist.title}</h3>
              <p>{playlist.artist}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  
  );
}

export default TrendingPlaylist;
