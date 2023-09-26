import "./Contact.css"
import { useState } from "react"

const Contact = () => {
const [toggleEmail, setToggleEmail] = useState(null)

const handleButton = () => {
    setToggleEmail(true)
    const before = document.querySelector(".contact_animation_line")
    before.classList.add("active")  
    //button 
    const button = document.querySelector('.button_for_email')
    button.classList.add("hyde_button")

}

  return (
    <div className="contact_background">
      <div className="contact_background_blur">
       <div className="contact_pannel">
       
           <p>Thanks for visiting my portfolio! I'm excited to share my projects and work with you. If you have any questions or collaboration ideas, just click the button below, and I'll be happy to connect with you. Looking  forward to hearing from you!</p>
      
       </div>
       <button onClick={() => handleButton()} className="button_for_email">Email</button>
       <p className="p_email" style={{animation: `${toggleEmail ? "email_animation 0.5s ease forwards" : ""}`}}>fabianrwork@gmail.com</p>
      
      <span className="contact_animation_line"></span>
      </div>
    </div>
  )
}

export default Contact