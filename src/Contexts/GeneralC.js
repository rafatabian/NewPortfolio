import { createContext, useEffect, useState } from "react";
export const generalContext = createContext(null)

export const ManageGeneral = ({ children }) => {
    const [visible, setVisible] = useState(null)
    const [light, setLight] = useState(false)
    const [pages, setPages] = useState("home")
   //  const [buttons, setButtons] = useState("home")
    const [projRotation, setProjRotation] = useState(false) 
    const [slideIn, setSlideIn] = useState(false)   
    //special state for navbar behavior
    const [special, setSpecial] = useState(false)
    //special state for navbar shrink/normal
    const [navShrink, setNavShrink] = useState(null) 
   //when scrolling down logic in projects
   const [allowScroll, setAllowScroll] = useState(null)



    const handleButtonClick = (value) => {
        setPages(value)
        setVisible(false)
        setNavShrink(null)

         if(value === "home"){
           setSpecial(false)
           setProjRotation(false)
         }else if(value === "about"){
           setProjRotation(false)
        }else if(value === "projects"){
           setSpecial(true)
        }else{
           setProjRotation(false)
        } 
        if(value === "aboutButton"){
         
         const navbar = document.querySelector(".navbar_container")
         if( navbar && navbar.className == "navbar_container navShrink"){
            navbar.classList.remove("navShrink")
         }
        }
   } 


   //scroll up when reaching projects to not rotate
      useEffect(() => {
         if(pages === "projects"){
   const container = document.querySelector(".projects_container")
   if(container){
      container.scrollIntoView({behavior: "auto", block: "start"})
          }
         }
   }, [pages])
 

    return(
        <generalContext.Provider 
         value={{
            allowScroll, 
            setAllowScroll,
            special, 
            setSpecial,
            setVisible, 
            visible, 
            setLight,
            light,
            pages,
            setPages, 
            projRotation,
            setProjRotation,
            slideIn, 
            setSlideIn, 
            handleButtonClick,
            navShrink,
            setNavShrink
            }}>
           {children}
        </generalContext.Provider>
    )
}