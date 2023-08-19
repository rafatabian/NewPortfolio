import { useState } from "react"
import "./SkillsHome.css"
import { Parallax } from "react-scroll-parallax"
//icons
import { AiFillHtml5, AiOutlineTeam } from "react-icons/ai"
import { FaCss3Alt, FaReact, FaBootstrap} from "react-icons/fa"
import { SiJavascript, SiVite } from "react-icons/si"
import { BsFillTabletLandscapeFill, BsFillPuzzleFill } from "react-icons/bs"
import { GrHeroku } from "react-icons/gr"

const SkillsHome = () => {
    const [visibility, setVisibility] = useState(false)

    const handleVisibility = () => {
      setVisibility(!visibility)
    }

  return (
    <section className="skills_container">
          <h1>Skills</h1>
          <div className="first_set_of_skills_and_icons">
            <Parallax 
            className="first_set_icons"
            opacity={[0, 2]}
            >
              <AiFillHtml5 className="html_icon"/>
              <FaCss3Alt className="css_icon"/>
              <SiJavascript className="javascript_icon"/>
              <FaReact className="react_icon"/>
            </Parallax>
              <Parallax
                className="first_set_skills"
                opacity={[0, 3]}
                >
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT</p>
              </Parallax>
          </div>

           {visibility && <span className="skills_separator"></span>}

          <div className="second_set_of_skills_and_icons">
            
            <div className="toggled_container">
              <div className="second_set_icons">
                {visibility && (
                <>
                <div>
                  <BsFillTabletLandscapeFill className="responsive_icon"/>
                  <p className="responsive_text">RESPONSIVE DESIGN</p>
                </div>
                <div>
                  <BsFillPuzzleFill className="puzzle_icon"/>
                  <p className="puzzle_text">API HANDLING</p>
                </div>
                <div>
                  <FaBootstrap className="bootstrap_icon"/>
                  <p className="bootstrap_text">BOOTSTRAP</p>
                </div>
                <div>
                  <SiVite className="vite_icon"/> 
                  <p className="vite_text">VITE</p>
                </div>
                <div>
                  <GrHeroku className="heroku_icon"/>
                  <p className="heroku_text">HEROKU</p>
                </div>
                <div>
                  <AiOutlineTeam className="team_icon"/>
                  <p className="team_text">TEAM WORKING</p>
                </div>
{/* delete second_set_skills in css*/}
                </>
                )}
              </div>
             </div>
          </div>
              
               {!visibility
               ? <button 
               className="button_show_more" 
               onClick={(() => handleVisibility())}>Show More
               </button>
               : <button 
               className="button_show_less" 
               onClick={(() => handleVisibility())}>Show Less
               </button>
               }
    
          </section>
  )
}

export default SkillsHome