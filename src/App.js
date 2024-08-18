
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalBanner from './components/PersonalBanner';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <PersonalBanner />
      <About/>
      <Services/>
    </>
  );
}

export default App;
