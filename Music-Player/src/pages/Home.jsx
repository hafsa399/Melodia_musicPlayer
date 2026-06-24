import Navbar from "../components/Navbar/Navbar";
import HeroPlayer from "../components/HeroPlayer/HeroPlayer";
import TrendingPlaylist from "../components/TrendingPlaylist/TrendingPlaylist";
import ArtistSection from "../components/ArtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import FeaturedCharts from "../components/FeaturedCharts/FeaturedCharts";
import Footer from "../components/Footer/Footer";

function Home() {
     return(
          <div>
               <Navbar/>
               <HeroPlayer/>
               <TrendingPlaylist/>
               <ArtistSection/>
               <Banner/>
               <FeaturedCharts/>
               <Footer/>
          </div>
     );
     
     
}
export default Home;