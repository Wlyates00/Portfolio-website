import React from 'react'
import './Services.css'
import controller from '../controllerLogo.png'
import web from '../webIcon.png'

const Services = () => {
  return (
    <div id="services" className='services-banner' style={{ backgroundColor: '#684a75ff', backgroundSize: 'cover'}}>
      <div className='container h-50'>
        <h1 className='services-header'>MY SERVICES</h1>
        <div className='row h-50 d-flex justify-content-center align-items-start'>
          <div className='col-sm-6 services-text-col-game'>
            <div className='services-icon controller' style={{ backgroundImage: `url(${controller})`}}></div>
            <p className='game-text'>Taking on game development has been one of my most fulfilling achievements. The journey of my own ideas into incredible experiences that bring joy and entertainment to people all over the world. In this area I am driven by my own passion to create fun and immersive games connects with the player. I jump at the opportunity to innovate, always delivering content that resonates with and excites players.</p>
          </div>
          <div className='col-sm-6 services-text-col-web'>
            <div className='services-icon web' style={{ backgroundImage: `url(${web})`}}></div>
            <p className='web-text'>As a passionate Web Developer who loves the challenge of perfecting all details, my dedication goes beyond just getting the job done. I try to make sure that every project I work on is fully functional, aesthetically pleasing and user-friendly. My commitment drives me to go the extra mile, whether that be through meticulous coding or collaborative teamwork. I believe in creating responsive web experiences that are effective and engaging.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
