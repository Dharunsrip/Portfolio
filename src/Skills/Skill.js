import React, { useState } from 'react'
import "./Skill.css"
import { SKILLS } from '../Data';
import Skillcard from '../SkillCard/Skillcard';
import SkillsInfoCard from '../Skillsinfocard/Skillsinfocard';
 function Skill() {
  const [selectedSkill,setselectedSkill]=useState(SKILLS[0])
  const handleSelectSkill=(data)=>{
    setselectedSkill(data)
  };
  return (
    <section className='Section-container'>
      <h1 className='tittles'>Technicall Skills</h1>
      <div className='Skill-content'>
        <div className='skill'>
            {SKILLS.map((item)=>(<Skillcard 
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
              isActive={selectedSkill.title===item.title}
              onClick={()=>{
                handleSelectSkill(item);
              }}
            />))}
        </div>
        <div className='skill-info'>
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
        </div>
      </div>
    </section>
  )
}
export default Skill;