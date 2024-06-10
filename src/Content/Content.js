import React from 'react'
import "./content.css"
 function Content() {
  return (
   <section className='content-container'>
     <div className='content'>
       <p></p>
      <h1> <span className='hello'>Hello,</span><br></br> <span className='color'>I'm Dharun Srinivas</span></h1>
      <span className='Role'>Front End Developer</span>
      <p>I can Develop User Interface(UI) and user Experiance(UX) Websites.</p>
      <button class="btns" onClick={()=>{}}>Hire Me!</button>
    </div>
    <div className='content-img'>
        <div>
            
            <div class="container">
           <img src="./assets/img04.jpg" class="image" alt="Description of the image"/>
       </div>
        </div>
        <div>
        <div className='tech-icon'>
                <img src='./assets/img01.png' className='imagewidth'></img>
            </div>
        <div className='tech-icon'>
                <img src='./assets/img05.png' className='imagewidth'></img>
            </div>
            <div className='tech-icon'>
                <img src='./assets/img02.png' className='imagewidth'></img>
            </div>
            <div className='tech-icon'>
                <img src='./assets/img03.png'  className='imagewidth'></img>
            </div>
        </div>
    </div>
   </section>
  )
}
export default Content;