import React from 'react'
import "./Project.css"
function Project() {
  return (
    <div>
       <h1 className='tittle'>Project</h1>
       <div className='project-container'>
        <p className='pro-name'>
            <span className='topic'>Project:</span><br></br> CRM(Customer Relationship Management) Webpage Development In Kyros Training Period.
        </p>
        <p>
        <span className='topics'>Explanation:</span><br></br>
        </p>
        <ul>
            <li className='pro'>
                Developing a resposible UI/UX CRM webpages with React.
            </li>
            <li  className='pro'>
            Working With Graph,Forms ,Mediaquery and Designs For Crm.
            </li>
            <li className='pro'>
             Connect API to fetch the datas to display it in Crm UI.
            </li>
           <li className='pro'>
             Developing a  Kyros Crm project in Reactjs.
           </li>
        </ul>
        <div>
        <p className='pro-name'>
            <span className='topic'> Mini-Project in Besant Technologies :</span><br></br>
           
        </p>
        <ul>
                <li className='pro'>Devloping a responsible webpages using a HTML,CSS,JAVASCRIPT.</li>
                <li className='pro'>Devloping a Login and Registerpage webpage With API integartionusing React.</li>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Project
