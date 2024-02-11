import { useContext, useEffect, useState } from "react";
import "./About.css"
import { generalContext } from "../../Contexts/GeneralC"
import { Link } from "react-router-dom";
//icons
import { GiVineFlower, GiVanillaFlower, GiLotusFlower, GiFlowerTwirl, GiDandelionFlower } from "react-icons/gi"


const About = () => {
  const { setPages } = useContext(generalContext)
  
  const [firstSet, setFirstSet] = useState([])
  const [secondSet, setSecondSet] = useState([])
  const [thirdSet, setThirdSet] = useState([])
  const [forthSet, setForthSet] = useState([])
  const [fifthSet, setFifthSet] = useState([])

  const [next, setNext] = useState("first")


    let fistSetWords = ["My", "journey ", "in ", "the ", "world ", "of ", "technology ",
     "began ", "when ", "I ", "was ", "just ", "a ", "child.",
     "Fascinated ", "by ", "the ", "inner ", "workings ", "of ",
     "gadgets ", "and ", "machines,", "I ", "would ", "often ",
     "disassemble ",  "toys ", "to ", "create ", "circuits ", "using ", "electric ",
     "motors.", "This ", "early ", "curiosity ", "ignited ", "a ",
     "passion ", "that ", "would ", "shape ", "my ", "future."];

    const secondSetWords = ["In ", "high ", "school ", "in " ,"Romania,",
     "I ", "immersed ", "myself ", "in ", "intensive ", "computer ", "science ",
     "studies,", "dedicating ", "up ", "to ", "11-12", "hours ",
     "a ", "day ", "to ", "mastering ", "the ", "fundamentals.",
     "After ", "four ", "years ", "of ", "relentless ", "pursuit,",
     "I, ", "proudly ", "earned ", "a ", "certificate ", "of ",
     "professional ", "competence,", "a ", "testament ", "to ",
     "my ", "commitment ", "and ", "love ", "for ", "the ", "field."];

    const thirdSetWords = ["The ", "experience ", "in ", "high ", "school ",
     "only ", "fueled ", "my ", "ambition ", "further.", "I",
     "was ", "determined ", "to ", "turn ", "my ", "dream ", "of ",
     "becoming ", "a ", "developer ", "into ", "a ", "reality. ",
     "After ", "a ", "brief ", "detour ", "working ", "in ", "another ",
     "field, ", "I ", "wisely ", "invested ", "my ", "earnings ",
     "into ", "learning ", "the ", "rest ", "of ", "the ", "technologies ",
     "required ", "to ", "create ", "captivating ", "websites."];

     const forthSetWords = ["Today,", "I ", "stand ", "as ", "a ",
     "well-rounded ", "web ", "developer ", "with ", "a ", "passion ",
     "for ", "crafting ", "exceptional ", "digital ", "experiences.",
     "The ", "journey ", "from ", "curious ", "child ", "to ", "skilled ",
     "professional ", "has ", "been ", "both ", "challenging ", "and ",
     "rewarding, ", "and ", "now,", "I ", "am ", "eagerly ", "seeking ",
     "new ", "opportunities ", "to ", "contribute ", "my", "skills",
     "and ", "creativity ", "to ", "innovative ", "projects."];

     const fifthSetWords = ["I ", "believe ", "that ", "technology ", "has ",
     "the ", "power ", "to ", "transform ", "lives, ", "and ", "I ", "am", "excited ",
      "to ", "be ", "a ", "part ", "of ", "this ", "ever-evolving ",
      "world. ", "Let's ", "bring ", "our ", "ideas ", "to ","life."]


      useEffect(() => {
        if(next === "first"){
        handleFirstSet()  
        }                        
      }, [next])

          const handleClick = (value) => {
           if(value === "second"){
            setNext("second")

            handleSecondSet()
          }else if(value === "third"){
            handleThirdSet()
            setNext("third")
          }else if(value === "forth"){
            handleForthSet()
            setNext("forth")
          }else{
            setNext("fifth")
            handleFifthSet()
          }
        }
       
      

//handle first set of words
      const handleFirstSet = () => {
        fistSetWords.map((word, index) => {
          setTimeout(() => {setFirstState(word, index)}, index * 100) 
        })
      }

      const setFirstState = (value) => {
        return setFirstSet((prevWord) => [...prevWord, {value}])
        }

 //handle second set of words
      const handleSecondSet = () => {
         secondSetWords.map((word, index) => {
          setTimeout(() => setSecondState(word, index), index * 100)
         })
      }

      const setSecondState = (value) => {
        return setSecondSet((prevWord) => [...prevWord, {value}])
        }

//handle third set of words
      const handleThirdSet = () => {
        thirdSetWords.map((word, index) => {
         setTimeout(() => setThirdState(word, index), index * 100)
        })
     }

     const setThirdState = (value) => {
       return setThirdSet((prevWord) => [...prevWord, {value}])
       }

//handle forth set of words
      const handleForthSet = () => {
        forthSetWords.map((word, index) => {
         setTimeout(() => setForthState(word, index), index * 100)
        })
     }

     const setForthState = (value) => {
       return setForthSet((prevWord) => [...prevWord, {value}])
       }

//handle fifth set of words
      const handleFifthSet = () => {
        fifthSetWords.map((word, index) => {
         setTimeout(() => setFifthState(word, index), index * 100)
        })
     }

     const setFifthState = (value) => {
       return setFifthSet((prevWord) => [...prevWord, {value}])
       }

      //handle "Projects" button
      const handleProjectsClick = () => {
       setPages("projects")
      //  setButtons("projects")
      }
     
  return (
    <div className="about_container">
      {next === "first" ?
        <div className="words_first_container firstCont">
          <GiVineFlower className=" flower"/> 
            {firstSet.map((obj, index) => <p className="words_first_set" key={obj.value + index}>{obj.value}&nbsp;</p>)}
            <button onClick={() => handleClick("second")} className="next_button next_first_btn">Next</button>
            <span className="span_info firstSpanInfo">1/5</span>
        </div> 

      : next === "second" ?

          <div className="words_first_container secondCont">
            <GiVanillaFlower className=" flower"/> 
        {secondSet.map((obj, index) => <p className="words_first_set" key={obj.value + index}>{obj.value}&nbsp;</p>)}
        <button onClick={() => handleClick("third")} className="next_button next_second_btn">Next</button>
         <span className="span_info secondSpanInfo">2/5</span>
        </div>

        : next === "third" ? 

        <div className="words_first_container thirdCont">
        <GiLotusFlower className=" flower"/> 
        {thirdSet.map((obj, index) => <p className="words_first_set" key={obj.value + index}>{obj.value}&nbsp;</p>)}
        <button onClick={() => handleClick("forth")} className="next_button next_third_btn">Next</button>
        <span className="span_info thirdSpanInfo">3/5</span>
        </div>

        : next === "forth" ? 

        <div className="words_first_container forthCont">
        <GiFlowerTwirl className=" flower"/> 
        {forthSet.map((obj, index) => <p className="words_first_set" key={obj.value + index}>{obj.value}&nbsp;</p>)}
        <button onClick={() => handleClick("fifth")} className="next_button next_forth_btn">Next</button>
        <span className="span_info forthSpanInfo">4/5</span>
        </div>

        :

        <div className="words_first_container fifthCont">
        <GiDandelionFlower className=" flower"/> 
        {fifthSet.map((obj, index) => <p className="words_first_set" key={obj.value + index}>{obj.value}&nbsp;</p>)}
        <Link to="/projects" className="next_button next_forth_btn projects_button" onClick={()=> handleProjectsClick()}>Projects</Link>
       <span className="span_info fifthSpanInfo">5/5</span>
        </div> 
      }
    </div>
  )
}

export default About