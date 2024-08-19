import React from 'react'
import './Projects.css'
import FacesScreenShot from '../FaceScrn.png'
import StarshipScreenShot from '../starshipVersus.png'

const Projects = () => {
  return (
    <div id='projects' className='project-container container-fluid'>
        <div className='container'>
            <h1 className="project-heading">PROJECTS</h1>
            <div className='row proj-row d-flex'>
                <a href='https://apps.apple.com/us/app/faces/id6476069171' className='col-lg-6 proj-img' style={{backgroundImage: `url(${FacesScreenShot})`, cursor: 'pointer'}}></a>
                <div className='col-lg-6'>
                    <a href='https://apps.apple.com/us/app/faces/id6476069171' className='proj-title'>Faces+ (Mobile Game)</a>
                    <p className='proj-desc'>Faces+ was an arcade style platformer that gained popularity and gain over 20,000+ players. It was and incredible simple and beautiful game. This project was great for the public audience as it was easy to produce content for the popular demands</p>
                    <div className='proj-tools'>
                        <div className='tools'>
                            <i class="devicon-unity-plain tool-icons"></i>
                            <i class="devicon-csharp-plain tool-icons"></i>
                            <i class="devicon-xcode-plain tool-icons"></i>
                        </div>
                    </div>
                </div>
                <hr className='hr line-break'></hr>
            </div>
            <div className='row proj-row d-flex'>
                <a href='https://apps.apple.com/us/app/starship-versus/id6467820162' className='col-lg-6 proj-img' style={{backgroundImage: `url(${StarshipScreenShot})`}}></a>
                <div className='col-lg-6'>
                    <a href='https://apps.apple.com/us/app/starship-versus/id6467820162' className='proj-title'>Starship Versus (Mobile Game)</a>
                    <p className='proj-desc'>Starship Versus being the first game I developed for a client, took a few months to produce, but a well polished one screened co-op game was delivered. This project required me to create two sets of player controls while keeping a large clear screen available for visibility.</p>
                    <div className='proj-tools'>
                        <div className='tools'>
                            <i class="devicon-unity-plain tool-icons"></i>
                            <i class="devicon-csharp-plain tool-icons"></i>
                            <i class="devicon-xcode-plain tool-icons"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
