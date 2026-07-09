
import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import HeroPlayer from "../components/HeroPlayer/HeroPlayer";
import TrendingPlaylist from "../components/TrendingPlaylist/TrendingPlaylist";
import ArtistSection from "../components/ArtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import FeaturedCharts from "../components/FeaturedCharts/FeaturedCharts";
import Footer from "../components/Footer/Footer";
import AuthModal from "../components/AuthModal/AuthModal";
function Home() {
     const[isAuthOpen,setIsAuthOpen]=useState(false);
     const[authMode,setAuthMode]=useState("login");
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
               <HeroPlayer/>
               <TrendingPlaylist/>
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