import React from 'react'
import "./Experiance.css"
function Experiance() {
    return (
        <div className='experiance-content'>
            <h1 className='tittle'>Professional Experiance</h1>
            <div className='Experiance-Container'>

                <p className='Company'>
                    Front End Developer, Kyros Technologies, Chennai.<br></br>
                    <span className='Year'>July 2022-Aug 2023</span> <br></br>
                    <span className='rol-re'>Roles and Responsibilities</span>
                </p>
                <ul >
                    <li>
                        Developed a responsive web Application that is optimized for both desktop and mobile devices, increasing user engagement.
                    </li>
                    <li>
                        Used React Js library  to create a dynamic, interactive user interface that improved user experience.
                    </li>
                    <li>
                        Integrated APIs to provide additional functionality and improve user experience.
                    </li>
                    <li>
                    	Utilized version control systems such as Git to manage code changes and collaborate with other developers.
                    </li>
                    <li>
                    	Developed a custom theme for a Customer Relationship management system (CRM) that improved the look and feel of the website.
                    </li>
                    <li>
                    	Used AXIOS to create a seamless data exchange between the front-end and back-end.
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Experiance;