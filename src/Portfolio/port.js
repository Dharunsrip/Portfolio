import React from 'react'
import  "./port.css";
import { useRef } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
const PDF_FILE_URL="http://localhost:3000/assets/file_pdf.pdf"
 function port() {
  const DownloadPdfUrl=(url) =>{
    const filename= url.split('/').pop();
    const aTag=document.createElement("a")
    aTag.href = url;
    aTag.setAttribute('download',filename)
    document.body.appendChild(aTag);
    aTag.click()
    aTag.remove()
  }
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
        <p className='name'>Dharun Portfolio</p>
          <ul>
            <li>
            <a className='menu-item' onClick={scrollToAbout}>About</a>
            
            </li>
            <li>
              <a className='menu-item'>Skills</a>
            </li>
            <li>
              <a className='menu-item'>Work Experiance</a>
            </li>
            <li>
              <a className='menu-item'>Contact</a>
            </li>
            <li>
              <a className='menu-item'>Education</a>
            </li>
            <li>
              <a className='menu-item'>Project</a>
            </li>
            <button class="btn" onClick={()=>{DownloadPdfUrl(PDF_FILE_URL)}}>Download Cv</button>
          </ul>
          {/* <button class="btns" onClick={()=>{}}>Download Cv</button> */}
        </div>
      </nav>
    </>
  )
}
export default port;
