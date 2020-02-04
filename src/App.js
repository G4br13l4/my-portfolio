import React from 'react';
import './App.scss';
import FixedNavbar from './components/FixedNavbar';
import Intro from './components/Intro';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="content-wrap">
      <FixedNavbar />
      <Intro />
      <ProjectsSection />
      <div id="about"></div>
      <div id="contact"></div>
    </div>
  );
}

export default App;
