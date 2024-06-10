import React from 'react'
import "./Contact.css"
import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'
import Contactform from '../Contactform/Contactform'
function Contact() {
  return (
    <div>
     <h1 className='tittle'>Contact Me</h1>
        <section className='Contact-Container'>
      
      <div className='Contact-content'>
     
     <div>
        <ContactInfoCard
              iconUrl="assets/gmail.png"
              text=<a href="mailto:dharunsrinivas750@gmail.com" target="_blank" className='link'>Send Email</a>
        />
          <ContactInfoCard
              iconUrl="assets/github.png"
              text=<a href="https://github.com/dharunsrin" target="_blank" className='link'>Github Account</a>
        />
        <ContactInfoCard
              iconUrl="assets/linkedin.png"
              text=<a href="https://www.linkedin.com/in/dharun-srinivas-p-3619651b4/" target="_blank" className='link'>LinkedIn Account</a>
        /><ContactInfoCard
              iconUrl="assets/telephone-call.png"
              text=<a href="tel:+91 8838353345" target="_blank" className='link'>Phone Number</a>
        />
       
     </div>
     <div style={{flex:1,}}>
      <Contactform/>
     </div>
  </div>
  </section>
    </div>
  )
}

export default Contact
