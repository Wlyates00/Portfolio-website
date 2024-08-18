import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalBanner from './components/PersonalBanner';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <PersonalBanner />
      <About/>
      <Services/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
