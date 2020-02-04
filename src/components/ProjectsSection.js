import React from 'react';
import Project from './Project';

class ProjectsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id="projects" className="projects">
                <div className="projects__wrap-title">
                <div className="projects__title">Proyectos</div>
                </div>
                <section className="projects__wrapweb">
                <div className="projects__web">
                    <Project
                        name='Pokedex'
                        idCSS='pokedex'
                        tools='CSS3, Bootstrap 3, Javascript, jQuery, PokeApi API.'
                        linkCode='https://github.com/G4br13l4/pokedex'
                        linkDemo='https://g4br13l4.github.io/pokedex/'
                    />
                    <Project
                        name='The Giphy Box'
                        idCSS='giphybox'
                        tools='CSS3, Bootstrap 3, Javascript, React, Giphy API.'
                        linkCode='https://github.com/G4br13l4/giphbox'
                        linkDemo='https://g4br13l4.github.io/giphbox/'
                    />
                    <Project
                        name='Puzzle Game'
                        idCSS='puzzlegame'
                        tools='CSS3, Javascript, React.'
                        linkCode='https://github.com/G4br13l4/15puzzlegame'
                        linkDemo='https://g4br13l4.github.io/15puzzlegame/'
                    />
                    <Project
                        name='Star Wars Cheat-sheet'
                        idCSS='starwars'
                        tools='CSS3, Javascript, React, Swapi API.'
                        linkCode='https://github.com/G4br13l4/star-wars-cheat-sheet'
                        linkDemo='https://g4br13l4.github.io/star-wars-cheat-sheet/'
                    />
                    <Project
                        name='Silvia Peligro'
                        idCSS='speligro'
                        tools='Prototipo hecho con Figma e InVision. Actualmente en etapa de desarrollo con React.'
                        linkCode='#'
                        linkDemo='#'
                    />
                </div>
                </section>
            </div>
        );
    }
}

export default ProjectsSection;