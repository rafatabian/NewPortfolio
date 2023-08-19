import "./Folder.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const Folder = (props) => {
  return (
    <>
    <div className="first_folder">
        <div className="folder_frame">
            <h1 className="folder_title">{props.title}</h1>
            <LazyLoadImage
            src={props.img}
            placeholderSrc={props.tiny}
            effect="blur"
            alt="projects"
            />
            <span className="folder_transparent"></span>
            <div className="folder_cover"></div>
        </div>
    </div>
      </>      
  )
}

export default Folder