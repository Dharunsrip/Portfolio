import React from 'react'
import './Skillcard.css'
 function Skillcard({title, iconUrl, isActive, onClick}) {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}  onClick={()=>onClick()}> 
     
     <div className='Skill-icon'>
        <img src={iconUrl} alt={title} className='img'></img>
     </div>
     <span>{title}</span>
    </div>
  )
}
export default Skillcard;