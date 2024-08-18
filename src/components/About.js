import React from 'react'
import './About.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className="container-fluid about">
      <div className="container">
        <h1 className="heading">About Me</h1>
        <p className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <div className='row row-about align-items-center justify-content-center'>
            <div className='col-xl-4 icon-grad d-flex justify-content-end align-items-center'><FontAwesomeIcon icon="fa-solid fa-user-graduate" transform="grow-60 up-8" style={{color: 'white'}}/></div>
            <div className='col-xl-8 text-grad'>
                <p className='text-text'><i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin</i></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
