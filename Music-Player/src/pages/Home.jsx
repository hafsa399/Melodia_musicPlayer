
import { useState  } from "react";
import localSongs from "../data/songs";

import Navbar from "../components/Navbar/Navbar";
import HeroPlayer from "../components/HeroPlayer/HeroPlayer";
import TopSongs from "../components/TopSongs/TopSongs";
import SkeletonCard from "../components/SkeletonCard";
import TrendingPlaylist from "../components/TrendingPlaylist/TrendingPlaylist";
import ArtistSection from "../components/ArtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import FeaturedCharts from "../components/FeaturedCharts/FeaturedCharts";
import Footer from "../components/Footer/Footer";
import AuthModal from "../components/AuthModal/AuthModal";
function Home({songs,currentSong,setCurrentSong,isSongsLoading}) {
     const [isAuthOpen, setIsAuthOpen] = useState(false);
const [authMode, setAuthMode] = useState("login");
const [isPlaying, setIsPlaying] = useState(false);
  


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

     console.log(setIsPlaying);
     return(
          <div>
               <Navbar openLogin={openLogin}  
                  openSignup={openSignup}/>
               {isSongsLoading ? (
                    <section className="top-songs" aria-label="Loading songs">
                         <h2>Loading Songs</h2>
                         <div className="topSongsContainer">
                              {Array.from({ length: 6 }, (_, index) => (
                                   <SkeletonCard key={index} />
                              ))}
                         </div>
                    </section>
               ) : (
                    <HeroPlayer 
                    songs={songs} 
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                     />
               )}
                <TopSongs
        songs={localSongs}
  setCurrentSong={setCurrentSong}
  setIsPlaying={setIsPlaying}
    isPlaying={isPlaying}
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
