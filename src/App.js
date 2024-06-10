import React from 'react';
import './App.css';
import Demo from "./Portfolio/port"
import Demo2 from "./Content/Content"
import Demo3 from "./About me/About"
import Demo4 from "./Skills/Skill"
import Demo5 from "./Experiance/Experiance"
import Demo6 from "./Education/Education"
import Demo7 from "./Fedk/Fedk"
import Demo8 from "./Certification/certificate"
import Demo9 from './Project/Project'
import Demo10 from './Contact/Contact'
function App() {
  return (
    <div>
      <Demo/>
      <div className='Container'>
      <Demo2/>
      </div>
       <Demo3/>
       <Demo4/>
       <Demo5/>
       <Demo6/>
       <Demo7/>
       <Demo8/>
       <Demo9/>
       <Demo10/>
    </div>
  );
}

export default App;
