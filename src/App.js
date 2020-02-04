import React from 'react';
import './App.scss';
import FixedNavbar from './components/FixedNavbar';
import Intro from './components/Intro';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="content-wrap">
      <FixedNavbar />
      <Intro />
      <ProjectsSection />
      <Contact />
      {/* <div id="about"></div> */}
    </div>
  );
}

export default App;
