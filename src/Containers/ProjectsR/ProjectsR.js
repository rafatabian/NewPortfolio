import "./ProjectsR.css"
import { useContext, useEffect, useRef} from "react"
import { generalContext } from "../../Contexts/GeneralC"
import ProjChild from "../../Components/ProjChild/ProjChild"
import { Link } from "react-router-dom"
//icons
import { SiApplemusic } from "react-icons/si"
import { BsPuzzleFill, BsFillChatSquareTextFill, BsLightningChargeFill, BsFillTabletLandscapeFill } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"
import { IoMdSettings } from "react-icons/io"
import { FaBrain, FaHistory } from "react-icons/fa"
import { MdLocalGroceryStore } from "react-icons/md"
import { FaFlask } from "react-icons/fa6" //ev change elaborate icon and make it smaller
import { IoFlask } from "react-icons/io5" // put FaFlask insted of this

//images
import music_app from "../../assets/music_app.png"
import store from "../../assets/store_app.png"
import ai_app from "../../assets/ai_updated.png"
import stars from "../../assets/stars.jpg"


const ProjectsR = () => {
  const { handleButtonClick, projNr } = useContext(generalContext)
 


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
  zoomIcon: <MdLocalGroceryStore className='music_icon' />,
  name: "Online Marketplace",
  bannerImg: { image: stars, speed: -30 },
  image: <img src={store} alt="music_app" />,
  firstIcon: <IoMdSettings className="last_world_icon"/>,
  firstBold: "Seamless Experience:",
  firstText: " This cherished project stands as one of my favorites, offering seamless user exploration, interaction, and management capabilities.",
  secondIcon: <BiSolidUser className="last_image_icon"/>,
  secondBold: "User-Centric Design:",
  secondText: " With a keen emphasis on user needs, my platform ensures a seamless experience from start to finish, prioritizing UI and UX.",
  thirdIcon: <BsLightningChargeFill className="last_tablet_icon"/>,
  thirdBold: "High-Speed Functionality:",
  thirdText: " Enjoy lightning-fast interactions and smooth transitions throughout your browsing and purchasing experience.",
  forthIcon: <IoFlask  className="last_lightning_icon"/>,
  forthBold: "Personalized Discovery:",
  forthText: "  Explore curated listings and tailored recommendations for a customized shopping journey.",
  firstLink: "https://rafatabian.github.io/store"
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
  firstLink: "https://rafatabian.github.io/AI-assistant"
}]

//logic for optimisation
useEffect(() => {
  const slideInCont = document.querySelector(".projects_slide_in")
  if(slideInCont){
    setTimeout(() => {
     slideInCont.style.display = "block"
    }, 1000)
  }
}, [])


  return (
    <>
      <div className="projects_slide_in">

          <div className= "rotated_title_container"> 
            <p className="rotated_first_word rotated_moving_words"><span>U</span>nveiling Creativity</p>   
            <p className="rotated_second_word rotated_moving_words">Unveiling <span>C</span>reativity</p>    
            <p className="rotated_third_word rotated_moving_words">Unveiling Creativit<span>y</span></p>     
          </div>


            <ProjChild data={data[1]}/>
          

         <div className= "second_rotated_title_container"> 
            <p className="rotated_first_word second_rotated_moving_words">Up<span>coming</span> Updates</p>   
            <p className="rotated_second_word second_rotated_moving_words">Upcoming Up<span>date</span>s</p>    
            <p className="rotated_third_word second_rotated_moving_words">Upcoming Upd<span>a</span>tes</p>     
          </div>

            <ProjChild data={data[2]} />
          

          <div className= "third_rotated_title_container"> 
            <p className="rotated_first_word third_rotated_moving_words"><span>Path</span>way Opens</p>  
            <p className="rotated_second_word third_rotated_moving_words">Pathway <span>Open</span>s</p>    
            <p className="rotated_third_word third_rotated_moving_words">Path<span>way</span> Opens</p>
          </div>

            <ProjChild data={data[0]} />
          

          <div className="contact_buttons_container">
            <Link to="/contact" onClick={()=> handleButtonClick("contact")}>contact</Link>
          </div>
          
      </div> 
    </>
  )
}

export default ProjectsR