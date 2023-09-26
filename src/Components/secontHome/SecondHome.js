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
        <Parallax translateY={[-100, 100]}>
          <p>My mission is to create exceptional websites and apps.</p>
          <p>Let's discover more!</p>
        </Parallax>
      </div>
    </ParallaxBanner>
  );
};

export default SecondHome;
