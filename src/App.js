import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import Home from './containers/home';
import Navbar from './components/navBar';
import About from './containers/about'; // Import About component
import Skills from './containers/skills'; // Import Skills component
import Resume from './containers/resume'; // Import Resume component
import Contact from './containers/contact'; // Import Contact component
import Portfolio from './containers/portfolio'; // Import Portfolio component
import particles from './Utils/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";
  const renderParticleJsInSkillsPage = location.pathname === "/skills";

  return (
    <div className="App">

      {/* particles js} */}
      {
        renderParticleJsInHomePage && <Particles id="particles" options={particles} init={handleInit} />

      }
        {
        renderParticleJsInSkillsPage && <Particles id="particles" options={particles} init={handleInit} />

      }
 
      {/* navBar */}
      <Navbar />

      {/* main page content */}
      {/* <div className='App_main-page-content'></div> */}


      <Routes>
        {/* since we have six pages then we create six routes */}
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>

    </div>
  );
}

export default App;
