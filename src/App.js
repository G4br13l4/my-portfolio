import React from 'react';
import './App.scss';
import FixedNavbar from './components/FixedNavbar';

function App() {
  return (
    <div className="content-wrap">
      
      <FixedNavbar/>
      <header id="start"></header>
      <div id="projects"></div>
      <div id="about"></div>
      <div id="contact"></div>
    </div>
      // <div className="content-wrap">
      //   <div className="fade-in">
      //     <section className="page-section" id="about">
      //       <div className="page-number">
      //         <span>1</span>
      //       </div>
      //       <div>
      //         <h1><span>Acerca de</span></h1>
      //       </div>
      //       <div>
      //         <p>¡Hola! Soy Gabriela López, digital marketing analyst y front-end developer. 
      //           Me interesa <span>palabras dinámicas</span>
      //         </p>
      //       </div>
      //     </section>
      //   </div>
      // </div>
  );
}

export default App;
