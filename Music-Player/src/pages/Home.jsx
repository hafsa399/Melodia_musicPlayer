
import { useState  } from "react";
import localSongs from "../data/songs";

import Navbar from "../components/Navbar/Navbar";
import HeroPlayer from "../components/HeroPlayer/HeroPlayer";
import TopSongs from "../components/TopSongs/TopSongs";
import TrendingPlaylist from "../components/TrendingPlaylist/TrendingPlaylist";
import ArtistSection from "../components/ArtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import FeaturedCharts from "../components/FeaturedCharts/FeaturedCharts";
import Footer from "../components/Footer/Footer";
import AuthModal from "../components/AuthModal/AuthModal";
function Home({songs,currentSong,setCurrentSong}) {
     const [isAuthOpen, setIsAuthOpen] = useState(false);
const [authMode, setAuthMode] = useState("login");

  


     const openLogin=()=>{
          setAuthMode("login");
          setIsAuthOpen(true);
     };
     const openSignup=()=>
     {
          setAuthMode("signup");
          setIsAuthOpen(true);
     };
     const closeModal=()=>
     {
          setIsAuthOpen(false);
     };
     return(
          <div>
               <Navbar openLogin={openLogin}  
                  openSignup={openSignup}/>
               <HeroPlayer 
               songs={songs} 
               currentSong={currentSong}
               setCurrentSong={setCurrentSong}
                />
                <TopSongs
        songs={localSongs}
  setCurrentSong={setCurrentSong}
/>
               <TrendingPlaylist />
               <ArtistSection/>
               <Banner/>
               <FeaturedCharts/>
               <Footer/>
               <AuthModal  
                isOpen={isAuthOpen}
                mode={authMode}
                closeModal={closeModal}/>
          </div>
     );
     
     
}
export default Home;