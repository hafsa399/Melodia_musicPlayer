import {
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedoAlt,
  FaVolumeUp,
  FaPlay,
  FaPause,
} from "react-icons/fa";


import defaultCover  from "../../assets/images/primary logo.png";
import "./HeroPlayer.css";

import { useEffect, useRef, useState } from "react";

function HeroPlayer({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) {
 

  const audioRef = useRef(null);
// for repeat
  const [repeat, setRepeat] = useState(false);

 
  const [volume, setVolume] = useState(1);

  const [currentTime, setCurrentTime] = useState(0); //state declaration
const [duration, setDuration] = useState(0);


// play/pause button
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  // next song button
 const nextSong = () => {
  const currentIndex = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  const nextIndex =
    currentIndex === songs.length - 1 ? 0 : currentIndex + 1;

  setCurrentSong(songs[nextIndex]);
};
//  previous button
const previousSong = () => {
  const currentIndex = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  const previousIndex =
    currentIndex === 0
      ? songs.length - 1
      : currentIndex - 1;

  setCurrentSong(songs[previousIndex]);
};

// volume button fn
  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // shuffle button fn
const shuffleSong = () => {
  if (songs.length <= 1) return;

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (songs[randomIndex].id === currentSong.id);

  setCurrentSong(songs[randomIndex]);
};

// time format
const formatTime = (time) => {
  if (isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

  // notice change and and run them
 useEffect(() => {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [currentSong, isPlaying]);

// listen audio
useEffect(() => {

  const audio = audioRef.current;

  if (!audio) return;

  const updateTime = () => {
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  audio.addEventListener("timeupdate", updateTime);

  audio.addEventListener("loadedmetadata", updateTime);

  return () => {
    audio.removeEventListener("timeupdate", updateTime);
    audio.removeEventListener("loadedmetadata", updateTime);
  };

}, [currentSong]);

if (!currentSong) {
  return <h2>Loading...</h2>;
}

  return (
    <div className="hero-wrapper">
      <section className="hero" id="home">

        <div className="album">
          
          <div className="record">

         <img
  src={currentSong.image ||currentSong.albumCover ||defaultCover}
  alt={currentSong.name || currentSong.title}  loading="lazy"
/>

          </div>

        </div>
        <div className="details">

        <h1>{currentSong.name || currentSong.title}</h1>
          <p>
        
  {currentSong.artist_name || currentSong.title} • {currentSong.album_name ||currentSong.artist}

            <span className="volume-control">
              <button className="volume-button" type="button">
                <FaVolumeUp />
              </button>
              <input
                className="volume-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </span>
          </p>
        

        <div className="progress">

  <span>{formatTime(currentTime)}</span>

  <input
    type="range"
    min="0"
    max={duration || 0}
    value={currentTime}
    className="progress-slider"
    onChange={(e) => {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(Number(e.target.value));
    }}
  />

  <span>{formatTime(duration)}</span>

</div>


          <div className="controls">

            <button onClick={shuffleSong}>
              <FaRandom />
            </button>

            <button  onClick={previousSong}>
              <FaStepBackward />
            </button>
            <button onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={nextSong}>
              <FaStepForward  />
            </button>

             <button
  onClick={() => setRepeat((prev) => !prev)}
  style={{
    color: repeat ? "#75369a" : "#000000",
  }}
>
  <FaRedoAlt />
</button>
          </div>

        </div>
     <audio
      
  key={currentSong.id}
  ref={audioRef}
  src={currentSong.audio}
  loop={repeat}
  onEnded={!repeat ? nextSong : undefined}
/>
      </section>
    </div>
  );
}

export default HeroPlayer;
