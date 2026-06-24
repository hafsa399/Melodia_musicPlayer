 


 import { FaHome } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";


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

        <button ><FiUpload /> Upload</button>
         <button>Sign up</button>
         <button style={{background:"white"}}><FiLogIn/>Login</button>

      

      </div>
    </nav>
      );
 }
 export default Navbar;


