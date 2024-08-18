import React from 'react'
import './PersonalBanner.css'
import background from '../background.jpg'
import intro from '../introWithName.png'
import occupation from '../occupation.png'
import photo from '../personalphoto.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const PersonalBanner = () => {
  return (
    
    <div className='personal-banner' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', boxShadow: '0px 0px 7px black'}}>
      <div className='container-fluid h-100'>
        <div className='row banner align-items-center justify-content-center'>
          <div className='col-xl-7'>
            <div className='img intro' style={{ backgroundImage: `url(${intro})`,backgroundSize:'calc(14rem + 12.5vw)', height: 'calc(5.5rem + 5vw)', backgroundRepeat: 'no-repeat'}}></div>
            <div className='img occupation d-flex' style={{ backgroundImage: `url(${occupation})`,backgroundSize:'calc(5rem + 12.5vw)', height: 'calc(1rem + 5vw)', backgroundRepeat: 'no-repeat'}}>
              <a href="https://github.com/Wlyates00" className="socials git"><FontAwesomeIcon className="social-icon" icon={faGithub} style={{color: 'white', textDecoration: 'none'}}/></a>
              <a href="https://www.linkedin.com/in/layton-yates-5b35a9272/" className="socials linked"><FontAwesomeIcon className="social-icon" icon={faLinkedin} style={{color: 'white', textDecoration: 'none'}}/></a>
            </div>
          </div>
          <div className='col-xl-5 justify-content-center align-items-center'>
            <div className='photo' style={{ backgroundImage: `url(${photo})`,backgroundSize:'calc(15rem + 15vw)', height: 'calc(20.25rem + 12.5vw)', backgroundRepeat: 'no-repeat'}}></div>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default PersonalBanner
