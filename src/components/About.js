import React from 'react'
import './About.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div id="about" className="container-fluid about">
      <div className="container">
        <h1 className="heading">ABOUT ME</h1>
        <p className="desc">Hello, I am Layton, a CS major who enjoys developing games and software in my free time. I’m also a very proficient Web Developer. Some of the technologies I use when developing responsive websites include ReactJS, NodeJS, and Bootstrap. Im also well versed in many other software developing technologies such as Java, Rust, and SQL. When I look into the mountainous technological field all I can see is opportunity! I love the idea of learning new tools and languages to have under my belt. Ultimately, I’m looking for a role where I can grow, learn, and experience new things with great people. </p>
        <div className='row row-about align-items-center justify-content-center'>
            <div className='col-xl-4 icon-grad d-flex justify-content-end align-items-center'><FontAwesomeIcon icon="fa-solid fa-user-graduate" transform="grow-60 up-8" style={{color: 'white'}}/></div>
            <div className='col-xl-8 text-grad'>
                <p className='text-text'><i>●	Bachelor of Science & Technology – BS, Computer Science, Radford University, Radford, Virginia (Expected. 2025.)</i></p>
                <p className='text-text'><i>●	Outstanding Student of the Year – AAS, Computer Science, New River-Community College, Dublin, Virginia 2023</i></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
