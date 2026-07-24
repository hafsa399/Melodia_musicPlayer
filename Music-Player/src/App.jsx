import { Routes,Route} from "react-router-dom";
import { useEffect,useState } from "react";

import Home from "./pages/Home"; // bring home page
import Playlist from "./pages/Playlist"; 
import { getPopularSongs } from "./api/jamendo";

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
    <Routes>
    <Route path="/" element={<Home songs={songs} currentSong={currentSong}
    setCurrentSong={setCurrentSong}/>}/>
    <Route path="/playlist/:tag" element={<Playlist currentSong={currentSong}
    setCurrentSong={setCurrentSong}/>}/>
    </Routes>
  ); 
 
}
export default App; 