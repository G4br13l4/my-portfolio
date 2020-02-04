import React from 'react';
import './App.scss';
import FixedNavbar from './components/FixedNavbar';
import Intro from './components/Intro';
function App() {
  return (
    <div className="content-wrap">
      
      <FixedNavbar />
      <Intro />
      <div id="projects" className="projects">
        <div className="projects__wrap-title">
          <div className="projects__title">Proyectos</div>
        </div>
        <section className="projects__wrapweb">
          <div className="projects__web">
            <div className="frame-project">
              <div className="project">
                <div className="project__title">
                  <span>Pokedex</span>
                </div>
                <div>CSS3, Bootstrap 3, Javascript, jQuery, PokeApi.</div>
                <div>
                  <button>Code</button>
                  <button>Demo</button>
                </div>
              </div>
            </div>
            <div className="frame-project">
              <div className="project">
                The Giphy Box
              </div>
            </div>
            <div className="frame-project">
              <div className="project">
                Puzzle Game
              </div>
            </div>
            <div className="frame-project">
              <div className="project">
                Star Wars Cheat-sheet
              </div>
            </div>
            <div className="frame-project">
              <div className="project">
                Silvia Peligro
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="about"></div>
      <div id="contact"></div>
    </div>
  );
}

export default App;
