import "./Home.css";
import { Parallax } from "react-scroll-parallax";
import FirstHome from "../../Components/firtsHome/FirstHome";
import SecondHome from "../../Components/secontHome/SecondHome";
import SkillsHome from "../../Components/skillsHome/SkillsHome";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { generalContext } from "../../Contexts/GeneralC";
import explosion from "../../assets/explosion.png";
import { HiOutlineCursorClick } from "react-icons/hi";

const Home = () => {
  //state to toggle letter moving for mobile devices
  const [mobile, setMobile] = useState(null)
  //state to toggle letter moving for bigger screens
  const [desktop, setDesktop] = useState(null)

//remove buttons eventually
  const {
    pages,
    setVisible,
    setNavShrink,
    visible,
    navbarToggle,
    light,
    setLight,
    handleButtonClick,
  } = useContext(generalContext);

  const [aposition, setaPosition] = useState({ x: 0, y: 0, s: 40, r: 0 });
  const [bposition, setbPosition] = useState({ x: 0, y: 0, s: 40, r: 0 });
  const [cposition, setcPosition] = useState({ x: 0, y: 0, s: 40, r: 0 });
  const [dposition, setdPosition] = useState({ x: 0, y: 0, s: 40, r: 0 });
  const [eposition, setePosition] = useState({ x: 0, y: 0, s: 40, r: 0 });
  //
  const [timeoutId, setTimeoutId] = useState(null);
  const [afterExplosion, setAfterExplosion] = useState(null);

//random moving letters logic
  const getRandomPosition = () => {
    const posa = Math.floor(Math.random() * `${desktop ? 400 : 200}`);
    const posA = Math.floor(Math.random() * `${mobile ? 500 : desktop ? 1400 : 1100}`);
    const sizeA = Math.floor(Math.random() * `${desktop ? 150 : 100}`);

    const posb = Math.floor(Math.random() * `${desktop ? 500 : 300}`);
    const posB = Math.floor(Math.random() * `${mobile ? 500 : desktop ? 1600 :1000}`);
    const sizeB = Math.floor(Math.random() * `${desktop ? 600 : 410}`);

    const posc = Math.floor(Math.random() * `${desktop ? 500 : 300}`);
    const posC = Math.floor(Math.random() * `${mobile ? 500 : desktop ? 1600 : 1000}`);
    const sizeC = Math.floor(Math.random() * `${desktop ? 420 : 280}`);

    const posd = Math.floor(Math.random() * `${desktop ? 500 : 300}`);
    const posD = Math.floor(Math.random() * `${mobile ? 500 : desktop ? 1600 : 1000}`);
    const sizeD = Math.floor(Math.random() * `${desktop ? 550 : 300}`);

    const pose = Math.floor(Math.random() * `${desktop ? 500 : 300}`);
    const posE = Math.floor(Math.random() * `${mobile ? 500 : desktop ? 1600 : 1100}`);
    const sizeE = Math.floor(Math.random() * `${desktop ? 1100 : 700}`);

    return [
      { a: posa, A: -posA, s: sizeA, r: sizeA },
      { b: posb, B: -posB, s: sizeB, r: sizeB },
      { c: posc, C: -posC, s: sizeC, r: sizeC },
      { d: posd, D: -posD, s: sizeD, r: sizeD },
      { e: pose, E: -posE, s: sizeE, r: sizeE },
    ];
  };

  const moveRandomly = () => {
    const randomPosition = getRandomPosition();
    setaPosition(randomPosition[0]);
    setbPosition(randomPosition[1]);
    setcPosition(randomPosition[2]);
    setdPosition(randomPosition[3]);
    setePosition(randomPosition[4]);
  };

  useEffect(() => {
    let LightTimeout;
    if (visible) {
//when reaches bottom home page
      const interval = setInterval(moveRandomly, 1600);
      //manage light
      LightTimeout = setTimeout(() => setLight(true), 1600);
      setTimeoutId(LightTimeout);
      setTimeout(() => setAfterExplosion(true), 3000);
      return () => {
        clearInterval(interval);
      };
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setLight(false);
    setTimeout(() => setAfterExplosion(false), 6000);
  }, [visible, pages]);

// reaching bottom page
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const triggerPoint = documentHeight - (scrollY + windowHeight);

      if (triggerPoint <= 10 && pages === "home") {
//when reaches bottom home page
        setVisible(true);
        setNavShrink(true);
      } else {
        setVisible(false);
        setNavShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // check window width 
  useEffect(() => {
  const pageWidth = window.innerWidth || document.documentElement.clientWidth
  if(pageWidth < 750){
  setMobile(true)
  }else if(pageWidth >= 1600){
    setDesktop(true)
  }
}, [])

  return (
    <div className="home_container">
{/* welcome section */}
      <Parallax speed={-10} scale={[1.5, 1]} opacity={[3, 0]}>
        <div className="welcome_container">
          <h1 className="welcome w">W</h1>
          <h1 className="welcome e">e</h1>
          <h1 className="welcome l">l</h1>
          <h1 className="welcome c">c</h1>
          <h1 className="welcome o">o</h1>
          <h1 className="welcome m">m</h1>
          <h1 className="welcome e">e</h1>
        </div>

        <div className="home_arrow_down_container">
          <MdKeyboardArrowDown className="home_arrow_down" />
        </div>
      </Parallax>
{/* moon transition section */}
      <FirstHome />

{/* skills section */}
      <SkillsHome />

{/* astronaut transition section */}
      <SecondHome />

{/* arrows for navigation */}
      <div
        className="last_home_container"
        style={{ animation: `${light ? "home_last_container 0.5s" : ""}` }}
      >
        <div
          className={`home_hyde_window ${
            visible ? "AboutVisible" : "AboutInvisible"
          }`}
        >
          <span className="home_letters_container">
            <Link to="/about" onClick={() => handleButtonClick("aboutButton")}>
              {" "}
              <p
                className="home_a_letter"
                style={{
                  left: `${aposition.a}px`,
                  top: `${aposition.A}px`,
                  fontSize: `${aposition.s}px`,
                  transform: `rotate(${aposition.r * 10}deg)`,
                }}
              >
                A
              </p>
            </Link>
            <p
              className="home_b_letter"
              style={{
                left: `${bposition.b}px`,
                top: `${bposition.B}px`,
                fontSize: `${bposition.s}px`,
                transform: `rotate(${bposition.r * 7}deg)`,
              }}
            >
              B
            </p>
            <p
              className="home_c_letter"
              style={{
                left: `${cposition.c}px`,
                top: `${cposition.C}px`,
                fontSize: `${cposition.s}px`,
                transform: `rotate(${cposition.r * 10}deg)`,
              }}
            >
              O
            </p>
            <p
              className="home_d_letter"
              style={{
                left: `${dposition.d}px`,
                top: `${dposition.D}px`,
                fontSize: `${dposition.s}px`,
                transform: `rotate(${dposition.r * 10}deg)`,
              }}
            >
              U
            </p>
            <p
              className="home_e_letter"
              style={{
                left: `${eposition.e}px`,
                top: `${eposition.E}px`,
                fontSize: `${eposition.s}px`,
                transform: `rotate(${eposition.r * 5}deg)`,
              }}
            >
              T
            </p>
          </span>
        </div>
        <img
          className="explosion"
          src={explosion}
          style={{ animation: `${light ? "visibleExplosion 0.5s" : ""}` }}
        />
        <HiOutlineCursorClick
          className="click_first_icon"
          style={{
            animation: `${afterExplosion ? "click_icons_visible 3s" : ""}`,
          }}
        />
        <p className={`home_instructions_p ${light ? "showInstructions" : ""}`}>
          Click The 'A'
        </p>

        <Parallax
          className={`arrows_container ${
            visible
              ? "arrowContainerShirnk"
              : navbarToggle && "arrowContainerNormal"
          }`}
          opacity={[0, 1]}
        >
          <MdKeyboardArrowUp className="arrow_up" />
          <MdKeyboardArrowUp className="arrow_up" />
          <MdKeyboardArrowUp className="arrow_up" />
        </Parallax>

        <nav
          className={`home_footer ${
            visible ? "homeFooterShrink" : navbarToggle && "homeFooterNormal"
          }`}
        >
          <p>&#169; 2023 Rata Fabian All Rights Reserved.</p>
        </nav>
      </div>
    </div>
  );
};

export default Home;
