import "./Footer.css"
import logo from "../../assets/images/primary logo.png";

function Footer(){

return(
<>
<hr style={{ height: "2px", backgroundColor: "#393636", border: "none" }} />

<footer className="footer">

<div className="footerLogo">
<img src={logo} alt="logo"/>

</div>



<div className="footerLinks">

<h3>

Explore

</h3>

<a href="#">

Home

</a>

<a href="#">

Artists

</a>

<a href="#">

Playlist

</a>

<a href="#">

Charts

</a>

</div>



<div className="footerLinks">

<h3>

Socials

</h3>

<a href="#">

Instagram

</a>

<a href="#">

Twitter

</a>

<a href="#">

YouTube

</a>

<a href="#">

GitHub

</a>

</div>

<div className="copyright">

© 2026 Music Player

</div>

</footer>

</>

);

}

export default Footer;
