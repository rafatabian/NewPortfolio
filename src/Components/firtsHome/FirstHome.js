import "./FirstHome.css";

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import tera from "../../assets/tera.jpg";
import moon from "../../assets/moon.png";

const FirstHome = () => {
  return (
    <ParallaxBanner
      className="paralaxBackground"
      layers={[
        { image: tera, speed: -25 },
        { image: moon, speed: -30, scale: [1, 1.2], translateX: [0, -10] },
      ]}
      speed={10}
    >
      <div className="Home_h1_container">
        <Parallax
          translateY={[-30, 30]}
          className="home_name_container"
        >
          <h1>I'm Fabian Rata</h1>
          <Parallax
            opacity={[0.1, 2]}
            translateX={[-300, 320]}
            className="name_white_bar"
          >
            <span></span>
          </Parallax>

          <h1>a junior Front-End Developer</h1>
        </Parallax>
      </div>
    </ParallaxBanner>
  );
};

export default FirstHome;
