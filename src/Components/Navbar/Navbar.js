import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { generalContext } from "../../Contexts/GeneralC";

const Navbar = () => {
  const { navShrink, handleButtonClick, pages, setPages, buttons, setButtons } =
    useContext(generalContext);

  useEffect(() => {
    const navbar = document.querySelector(".navbar_container");
    if (pages !== "projects") {
      if (navbar) {
        navbar.style.animation = "";
        navbar.classList.remove("navbar_container_on_left");
      }
    }
  }, [pages]);

  //go to external projects and come back navbar on left
  useEffect(() => {
    const pageWas = localStorage.getItem("buttonBorder");
    const navbar = document.querySelector(".navbar_container");
    if (pageWas === "externalClicked" && navbar) {
      setButtons("projects");
      navbar.classList.add("navbar_container_on_left");
      setPages("projects");
    }
  }, []);

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
   if(navbar && buttons !== "home" && navbar.className === "navbar_container navShrink"){
    navbar.classList.remove("navShrink")
   }
  }, [buttons])

  // add animation if pages === projects
  useEffect(() => {
    const navbar = document.querySelector(".navbar_container");
    if (buttons === "projects" && navbar) {
      navbar.style.animation = "navInProjPopIn 1s ease forwards";
    }
  }, [buttons]);


  return (
    <div //navbar to the left
      className={`navbar_container ${
        pages === "projects" ? "navbar_container_on_left" : ""
      }`}
    >
      <Link
        to="/"
        className={`${buttons === "home" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("home")}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${buttons === "about" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("about")}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`${buttons === "projects" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("projects")}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={`${buttons === "contact" ? "buttonSectionSelected" : ""}`}
        onClick={() => handleButtonClick("contact")}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
