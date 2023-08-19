import "./ProjectsR.css"
import { useContext} from "react"
import { generalContext } from "../../Contexts/GeneralC"
import ProjChild from "../../Components/ProjChild/ProjChild"
import { Link } from "react-router-dom"
//icons
import { SiApplemusic } from "react-icons/si"
import { BsPuzzleFill,BsCarFrontFill, BsFillChatSquareTextFill, BsLightningChargeFill, BsFillTabletLandscapeFill } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"
import { TbWorldCheck } from "react-icons/tb"
import { IoMdImage } from "react-icons/io"
import { FaBrain, FaHistory } from "react-icons/fa"
//images
import music_app from "../../assets/music_app.png"
import cars_app from "../../assets/cars_app.png"
import ai_app from "../../assets/ai_app.png"
import stars from "../../assets/stars.jpg"


const ProjectsR = () => {
  const { handleButtonClick } = useContext(generalContext)
 
//projects info
  const data = [{
    zoomIcon: <SiApplemusic className='music_icon' />,
    name: "Music App",
    bannerImg: { image: stars, speed: -30 },
    image: <img src={music_app} alt="music_app" />,
    firstIcon: <BsPuzzleFill/>,
    firstBold: "Spotify Integration:",
    firstText: " Seamlessly integrated Spotify API enables users to effortlessly search and play millions of songs.",
    secondIcon: <BiSolidUser/>,
    secondBold: "Intuitive Interface:",
    secondText: " Crafted with user experience in mind, the app boasts an intuitive interface guiding users through their musical journey.",
    thirdIcon: <BsFillTabletLandscapeFill/>,
    thirdBold: "Seamless Responsiveness:",
    thirdText: " Enjoy your favorite tunes on any device with responsive design.",
    forthIcon: <BsLightningChargeFill/>,
    forthBold: "Superior Performance:",
    forthText: " I optimized loading times by using lazy loading components and images, providing a smooth browsing experience.",
    firstLink: "https://rafatabian.github.io/music/"
},
{
  zoomIcon: <BsCarFrontFill className='music_icon' />,
  name: "Online Cars Marketplace",
  bannerImg: { image: stars, speed: -30 },
  image: <img src={cars_app} alt="music_app" />,
  firstIcon: <TbWorldCheck className="last_world_icon"/>,
  firstBold: "Innovating Conventions",
  firstText: " This is a live showcase of what's achievable in the world of online car buying and selling.",
  secondIcon: <IoMdImage className="last_image_icon"/>,
  secondBold: "Efficient Image Loading:",
  secondText: "  I improved loading times using lazy loading techniques for images.",
  thirdIcon: <BsFillTabletLandscapeFill className="last_tablet_icon"/>,
  thirdBold: "Responsive Design:",
  thirdText: " Browse cars seamlessly on any screen size with CarsUK responsive design.",
  forthIcon: <BsLightningChargeFill className="last_lightning_icon"/>,
  forthBold: "Streamlined Navigation:",
  forthText: " Find your dream car with easy-to-use page transitions.",
  firstLink: "https://rafatabian.github.io/shop/"
},
{
  zoomIcon: <BsFillChatSquareTextFill className='music_icon' />,
  name: "AI Personal Assistant",
  bannerImg: { image: stars, speed: -30 },
  image: <img src={ai_app} alt="music_app" />,
  firstIcon: <FaBrain className="middle_brain_icon"/>,
  firstBold: "AI-Powered Conversations:",
  firstText: " Engage in intelligent conversations with the help of cutting-edge AI technology.",
  secondIcon: <BsFillTabletLandscapeFill className="middle_tablet_icon"/>,
  secondBold: "Device Compatibility:",
  secondText: " Access MindBuddy from mobile to desktop - it fits everywhere.",
  thirdIcon: <BsLightningChargeFill className="middle_lightning_icon"/>,
  thirdBold: "Effortless Performance:",
  thirdText: " I ensured a smooth user experience by using lazy loading components.",
  forthIcon: <FaHistory className="middle_history_icon"/>,
  forthBold: "Conversation History Tracking:",
  forthText: " Easily refer back to past conversations for continuous assistance.",
  firstLink: "https://asistent-45fb86b712b9.herokuapp.com/"
}]

  return (
    <>
      <div className="projects_slide_in">

          <div className= "rotated_title_container"> 
            <p className="rotated_first_word rotated_moving_words"><span>U</span>nveiling Creativity</p>   
            <p className="rotated_second_word rotated_moving_words">Unveiling <span>C</span>reativity</p>    
            <p className="rotated_third_word rotated_moving_words">Unveiling Creativit<span>y</span></p>     
          </div>


          <ProjChild data={data[0]}/>

         <div className= "second_rotated_title_container"> 
            <p className="rotated_first_word second_rotated_moving_words">Up<span>coming</span> Updates</p>   
            <p className="rotated_second_word second_rotated_moving_words">Upcoming Up<span>date</span>s</p>    
            <p className="rotated_third_word second_rotated_moving_words">Upcoming Upd<span>a</span>tes</p>     
          </div>

          <ProjChild data={data[2]}/>

          <div className= "third_rotated_title_container"> 
            <p className="rotated_first_word third_rotated_moving_words"><span>Path</span>way Opens</p>  
            <p className="rotated_second_word third_rotated_moving_words">Pathway O<span>pen</span>s</p>    
            <p className="rotated_third_word third_rotated_moving_words">Path<span>way</span> Opens</p>
          </div>

          <ProjChild data={data[1]}/>

          <div className="contact_buttons_container">
            <Link to="/contact" onClick={()=> handleButtonClick("contact")}>contact</Link>
          </div>
          
      </div> 
    </>
  )
}

export default ProjectsR