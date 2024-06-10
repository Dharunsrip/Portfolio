import React from 'react'
import "./ContactInfoCard.css"
function ContactInfoCard({iconUrl,text}) {
  return (
    <div className='containers'>
  <div className='con-de-card'>
    <div className='icon'>
      <img src={iconUrl} alt={text} className='images'></img>
    </div>
    <p>{text}</p>
  </div>
  {/* Repeat similar divs for other cards */}
</div>
  )
}

export default ContactInfoCard
