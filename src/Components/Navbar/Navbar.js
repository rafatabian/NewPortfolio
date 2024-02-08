import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { generalContext } from "../../Contexts/GeneralC";

const Navbar = () => {
  const { allowScroll, navShrink, handleButtonClick, pages } = useContext(generalContext);

  const location = useLocation()
  

  useEffect(() => {
    const navbar = document.querySelector(".navbar_container");
    if (location.pathname !== "/projects") {
      if (navbar) {
        navbar.style.animation = "";
        navbar.classList.remove("navbar_container_on_left");
      }
    }
  }, [pages]);

//navbar transitions
useEffect(() => {
    if(allowScroll){
      const navbar = document.querySelector(".navbar_container");
      if(navbar){
        navbar.style.animation = "navGoLeft 0.3s forwards"
        setTimeout(() => {
         navbar.classList.remove("navbar_container_on_left")
         navbar.style.animation = "navSlideFromTop 0.3s forwards"

        }, 1800)
      }
    }
}, [allowScroll])


  //logic for 'shrink/normal' navbar
  useEffect(() => {
    const navbar = document.querySelector(".navbar_container");
    if (!navShrink && navbar.className == "navbar_container navShrink") {
      navbar.classList.remove("navShrink");
      navbar.classList.add("navNormal");
    }
    if (navShrink && pages === "home") {
      navbar.classList.remove("navNormal");
      navbar.classList.add("navShrink");
    }
  }, [navShrink]);

//remove shrink when changing pages
  useEffect(() => {
    const navbar = document.querySelector(".navbar_container");
   if(navbar && location.pathname !== "/home" && navbar.className === "navbar_container navShrink"){
    navbar.classList.remove("navShrink")
   }
  }, [location])


  return (
    <div //navbar to the left
      className={`navbar_container ${location.pathname === "/projects" ? "navbar_container_on_left" : ""}`}>
      <Link
        to="/"
        className={`${location.pathname === "/" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("home")}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${location.pathname === "/about" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("about")}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`${location.pathname === "/projects" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("projects")}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={`${location.pathname === "/contact" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("contact")}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
