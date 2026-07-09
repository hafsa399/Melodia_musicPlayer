 

import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FiUpload, FiLogIn } from "react-icons/fi";
import logo from "../../assets/images/primary logo-nav.png";
import "./Navbar.css";

function Navbar({openLogin,openSignup}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="nav-left">
       <img src={logo} alt="Melodia logo"
       className="logo"></img>
       
        <button>
          <FaHome />
        </button>

        <input id="input"
          type="text"
          placeholder="⌕ Search playlist, album..."
        />

      </div>

      {/* Right Side */}
      <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>

        <button>
          <FiUpload />
          Upload
        </button>

        <button onClick={openSignup}>
          Sign Up
        </button>

        <button className="login-btn" onClick={openLogin}>
          <FiLogIn />
          Login
        </button>

      </div>

 {/* Hamburger Button */}
      <button className="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>


    </nav>
  );
}

export default Navbar;