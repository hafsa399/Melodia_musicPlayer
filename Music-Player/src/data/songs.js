import palpal  from "../assets/songs/Pal Pal Jeena Muhal Ringtone Download Pagalworld.mp3";
import banjara from "../assets/songs/Banjaara Ek Villain 128 Kbps.mp3";
import byzantium from "../assets/songs/Vladan Kuzmanović - Byzantium.mp3";
import  Achachak   from "../assets/songs/Achachak - Fourth Movement.mp3"
import palpalcover from "../assets/images/pal pal.jpg";
import banjaracover from "../assets/images/banjara.jpg";
import defaultcover from "../assets/images/primary logo.png";

const songs=[
     {
          id:1,
       title:  "Pal Pal"  ,
       artist: "Talwinder"   ,
       album:"afusic Ali",
       albumCover:palpalcover    ,
       audio: palpal         ,
       genre: "Romantic"       ,
       duration: "03:41"       
     },
     {
          id:2,
         title: "banjara"   ,
       artist: "Mohammed Irfan"    ,
       album: "romantic"  ,
       albumCover: banjaracover    ,
       audio:  banjara   ,
       genre:   "Breakup"      ,
       duration:  "03:40"     
     },
     {
          id:3,
           title: "ByZantium"   ,
       artist: "Vladan Kuzmanović"    ,
       album:     "classical "      ,
       albumCover: defaultcover    ,
       audio:   byzantium       ,
       genre:   "classical"      ,
       duration:   "03:48"    
     }
     ,
     {
          id:4,
       title:  "FourthMovement"  ,
       artist: "Achachak"     ,
       album:  " classical" ,
       albumCover: defaultcover    ,
       udio:   Achachak       ,
       genre:    "classical"     ,
       duration:  "03:16"     
     }

]

export default songs;