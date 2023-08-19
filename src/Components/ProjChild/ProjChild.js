import "./ProjChild.css";

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";


const ProjChild = (props) => {
  return (
    <section className="first_section">
      <Parallax className="first_section_paralax" opacity={[1, 0]} scale={[1, 5]}>
        {props.data.zoomIcon}
      </Parallax>

      <Parallax className="second_section_paralax" speed={-10} opacity={[0, 3]}>
        <h1>{props.data.name}</h1>
      </Parallax>

      <ParallaxBanner className="music_banner" layers={[props.data.bannerImg]}>
        <Parallax className="music_app_parallax">
        {props.data.image}
        </Parallax>
      </ParallaxBanner>

      <div className="music_app_info">
        <h1 className="aristocrate_h1">Highlights</h1>

        <Parallax className="music_first_info_p" translateX={[-10, 10]} opacity={[0, 2]}>
          {props.data.firstIcon}
          <p><b>{props.data.firstBold}</b>{props.data.firstText}</p>
        </Parallax>

        <Parallax className="music_second_info_p" translateX={[10, -10]} opacity={[0, 2]}>
        {props.data.secondIcon}
          <p><b>{props.data.secondBold}</b>{props.data.secondText}</p>
        </Parallax>

        <Parallax className="music_third_info_p" translateX={[0, 10]} opacity={[0, 2]}>
        {props.data.thirdIcon}
          <p><b>{props.data.thirdBold}</b>{props.data.thirdText}</p>
        </Parallax>

        <Parallax className="music_forth_info_p" translateX={[0, -10]} opacity={[0, 2]}>
        {props.data.forthIcon}
          <p><b>{props.data.forthBold}</b>{props.data.forthText}</p>
        </Parallax>
      </div>
      <div className="button_space">
        <Link className="music_app_button" to={props.data.firstLink} onClick={() => localStorage.setItem("buttonBorder", "externalClicked")}>
          Discover Project
        </Link>
      </div>

    </section>
  );
};

export default ProjChild;
