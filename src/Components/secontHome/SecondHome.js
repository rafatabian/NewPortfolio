import "./SecondHome.css";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import astronaut from "../../assets/astronaut.png";
import space from "../../assets/space.jpg";

const SecondHome = () => {
  return (
    <ParallaxBanner
      className="second_paralaxBackground"
      layers={[
        { image: space, speed: -25 },
        {
          image: astronaut,
          speed: -30,
          scale: [1, 0.8],
          translateX: [-20, 10],
          rotate: [0, 90],
        },
      ]}
      speed={10}
    >
      <div className="numbers_container">
        <Parallax opacity={[0.1, 2]} translateY={[0, 300]}>
          <p>Now Let's Discover More!</p>
        </Parallax>
      </div>
    </ParallaxBanner>
  );
};

export default SecondHome;
