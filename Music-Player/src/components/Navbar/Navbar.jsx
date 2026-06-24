 


 import { FaHome } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

 import "./Navbar.css";


 function Navbar(){
      return(
          <nav className="navbar"> 

          <div className="nav-left">
          <button><FaHome /> Home</button>   
           
        <input
          type="text"
          placeholder="⌕ Search playlist, album..."
        />     
               </div> 
        
            
      <div className="nav-right">

        <button><FiUpload /> Upload</button>

        <button><MdDarkMode /></button>

        <button><FaUserCircle /></button>

      </div>
    </nav>
      );
 }
 export default Navbar;


