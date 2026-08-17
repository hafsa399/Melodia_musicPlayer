import { Routes, Route } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import { getPopularSongs } from "./api/jamendo";

const Home = lazy(() => import("./pages/Home"));
const Playlist = lazy(() => import("./pages/Playlist"));

function App(){    // show home page on screen
const[songs,setSongs]=useState([]);
const[currentSong,setCurrentSong]=useState(null);


 useEffect(() => {
  async function loadSongs() {
    const data = await getPopularSongs();

    setSongs(data);

    if (data.length > 0) {
      setCurrentSong(data[0]);
    }
  }

  loadSongs();
}, []); 

  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              songs={songs}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
          }
        />
        <Route
          path="/playlist/:tag"
          element={
            <Playlist
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
          }
        />
      </Routes>
    </Suspense>
  ); 
 
}
export default App; 
