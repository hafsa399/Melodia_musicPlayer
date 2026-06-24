import {
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedoAlt,
  FaVolumeUp,
  FaPlay,
  FaPause,
} from "react-icons/fa";

import album from "../../assets/images/pal pal.jpg";
import song from "../../assets/songs/Pal Pal Jeena Muhal Ringtone Download Pagalworld.mp3";
import "./HeroPlayer.css";

import { useRef, useState } from "react";

function HeroPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="hero-wrapper">
      <section className="hero">

        <div className="album">

          <div className="record">

            <img src={album} alt="album" />

          </div>

        </div>


        <div className="details">

          <h1>Pal Pal</h1>
          <p>
            Album by afusic Ali Sumroo and Talwiinder
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

            <span>2:15</span>

            <div className="line"></div>

            <span>4:20</span>

          </div>


          <div className="controls">

            <button>
              <FaRandom />
            </button>

            <button>
              <FaStepBackward />
            </button>
            <button onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button>
              <FaStepForward />
            </button>

            <button>
              <FaRedoAlt />
            </button>
          </div>

        </div>
        <audio ref={audioRef} src={song} />
      </section>
    </div>
  );
}

export default HeroPlayer;
