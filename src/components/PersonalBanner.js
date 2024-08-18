import React from 'react'
import './PersonalBanner.css'
import background from '../background.jpg'
import intro from '../introWithName.png'
import occupation from '../occupation.png'
import photo from '../personalphoto.png'

const PersonalBanner = () => {
  return (
    
    <div className='personal-banner' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', boxShadow: '0px 0px 7px black'}}>
      <div className='container-fluid h-100'>
        <div className='row banner align-items-center justify-content-center'>
          <div className='col-xl-7'>
            <div className='img intro' style={{ backgroundImage: `url(${intro})`,backgroundSize:'calc(14rem + 12.5vw)', height: 'calc(5.5rem + 5vw)', backgroundRepeat: 'no-repeat'}}></div>
            <div className='img occupation' style={{ backgroundImage: `url(${occupation})`,backgroundSize:'calc(5rem + 12.5vw)', height: 'calc(1rem + 5vw)', backgroundRepeat: 'no-repeat'}}></div>
          </div>
          <div className='col-xl-5 justify-content-center align-items-center'>
            <div className='photo' style={{ backgroundImage: `url(${photo})`,backgroundSize:'calc(15rem + 16vw)', height: 'calc(20.25rem + 12.5vw)', backgroundRepeat: 'no-repeat'}}></div>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default PersonalBanner
