import { useEffect } from "react"
import "./Folder.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"


const Folder = (props) => {

  // make default project stand out
  useEffect(() => {
    const storeProj = document.querySelector(".firstF")
    if(storeProj){
      storeProj.classList.add("folderAddedStyles")
    }
  }, [])


const handleHover = (name) => {
  const projects = document.querySelectorAll(".folder_container");
  projects.forEach(project => {
    if (project.classList.contains(name)) {
      project.classList.add("folderAddedStyles");
    } else {
      project.classList.remove("folderAddedStyles");
    }
  });
};


  return (
    <div className={`folder_container ${props.name}`} onMouseEnter={() => handleHover(props.name)}>
        <div className="folder_title">
            <h1>{props.title}</h1>
        </div>
        <div className="folder_image_container">
          <LazyLoadImage
            src={props.img}
            placeholderSrc={props.tiny}
            effect="blur"
            alt="projects"
          />
        </div>
    </div>     
  )
}

export default Folder