import React from 'react';
import './Navbar.css';
import logo from '../nameLogo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

const Navbar = () => {
  return (
    <nav id="home" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="logo" src={logo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""><FontAwesomeIcon className="bars" icon={faBars} style={{color: 'white', textDecoration: 'none'}}/></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home"><h1>Home</h1></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about"><h1>About</h1></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services"><h1>Services</h1></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects"><h1>Projects</h1></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"><h1>Contact Me</h1></a>
            </li>
          </ul>
        </div>
  </div>
</nav>
  )
}

export default Navbar
