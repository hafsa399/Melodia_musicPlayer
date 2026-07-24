import "./TopSongs.css"


function TopSongs({ songs, setCurrentSong, setIsPlaying }) {
  return (
    <section className="top-songs">
      <h2>Top Songs</h2>

      <div className="topSongsContainer">
        {songs.map((song) => (
          <div
            className="songCard"
            key={song.id}
            onClick={() => {setCurrentSong(song);
               setIsPlaying(true);
            }}
          >
            <img
              src={song.albumCover}
              alt={song.title}
              className="songImage"
            />

            <div className="songInfo">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopSongs;