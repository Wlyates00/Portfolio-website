import React from 'react'
import './Services.css'
import controller from '../controllerLogo.png'
import web from '../webIcon.png'

const Services = () => {
  return (
    <div id="services" className='services-banner' style={{ backgroundColor: '#684a75ff', backgroundSize: 'cover'}}>
      <div className='container h-50'>
        <h1 className='services-header'>MY SERVICES</h1>
        <div className='row h-50 d-flex justify-content-center align-items-center'>
          <div className='col-sm-6 services-text-col-game'>
            <div className='services-icon controller' style={{ backgroundImage: `url(${controller})`}}></div>
            <p className='game-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum viverra ex, sed pulvinar purus lobortis non. Ut commodo sem ac metus vehicula, sed cursus ante imperdiet. Nulla nec quam tempor,</p>
          </div>
          <div className='col-sm-6 services-text-col-web'>
            <div className='services-icon web' style={{ backgroundImage: `url(${web})`}}></div>
            <p className='web-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum viverra ex, sed pulvinar purus lobortis non. Ut commodo sem ac metus vehicula, sed cursus ante imperdiet. Nulla nec quam tempor,</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
