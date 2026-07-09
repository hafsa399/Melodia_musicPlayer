import "./ArtistSection.css";
import artists from "../../data/artists";

function ArtistSection(){
     return(
          <section className="artistSection" id="ArtistSection">
               <h2>Popular Artists</h2>
               <div className="artistContainer">
                    {artists.map((artist)=>(
                         <div className="artistCard"
                         key={artist.id}>
                              <img src={artist.image}
                              alt={artist.name}/>
                              <h3>{artist.name}</h3>
                              <p>{artist.role}</p>
                         </div>
                    ))}
               </div>
          </section>
     );
}
export default ArtistSection;
