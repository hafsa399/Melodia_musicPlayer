import "./Banner.css";
import record from "../../assets/images/recordplayer.jpg";
import {
FaGlobe,
FaApple,
FaAndroid,
FaXbox,
} from "react-icons/fa";

import { MdCast } from "react-icons/md";

function Banner() {
  return (
    <section className="banner">
      <div className="bannerText">

      <h1>
        Never Stop Listening
      </h1>
      <p>
        Melodia is available on Web , ios , Andriod<br></br>Sonos , Chromecast and Xbox One.
      </p>

      <div className="platforms">

<a href="#">
<FaGlobe/>
<span>Web</span>
</a>


<a href="#">
<FaApple/>
<span>iOS</span>
</a>


<a href="#">
<FaAndroid/>
<span>Android</span>
</a>


<a href="#">
<MdCast/>
<span>Chromecast</span>
</a>


<a href="#">
<FaXbox/>
<span>Xbox One</span>
</a>

</div>

</div>
      <div className="bannerRecord">

<img
src={record}
alt="record"
/>

</div>
    </section>
  );
}

export default Banner;