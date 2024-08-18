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
                <div className='col-lg-6 proj-img' style={{backgroundImage: `url(${FacesScreenShot})`}}></div>
                <div className='col-lg-6'>
                    <h1 className='proj-title'>Faces+ (Mobile Game)</h1>
                    <p className='proj-desc'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
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
                <div className='col-lg-6 proj-img' style={{backgroundImage: `url(${StarshipScreenShot})`}}></div>
                <div className='col-lg-6'>
                    <h1 className='proj-title'>Starship Versus (Mobile Game)</h1>
                    <p className='proj-desc'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
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
