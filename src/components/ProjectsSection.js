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
                        linkCode='https://open.spotify.com/collection/tracks'
                        linkDemo='https://open.spotify.com/collection/tracks'
                    />
                    <Project
                        name='The Giphy Box'
                        idCSS='giphybox'
                        tools='CSS3, Bootstrap 3, Javascript, React, Giphy API.'
                        linkCode='https://open.spotify.com/collection/tracks'
                        linkDemo='https://open.spotify.com/collection/tracks'
                    />
                    <Project
                        name='Puzzle Game'
                        idCSS='puzzlegame'
                        tools='CSS3, Javascript, React.'
                        linkCode='https://open.spotify.com/collection/tracks'
                        linkDemo='https://open.spotify.com/collection/tracks'
                    />
                    <Project
                        name='Star Wars Cheat-sheet'
                        idCSS='starwars'
                        tools='CSS3, Javascript, React, Swapi API.'
                        linkCode='https://open.spotify.com/collection/tracks'
                        linkDemo='https://open.spotify.com/collection/tracks'
                    />
                    <Project
                        name='Silvia Peligro'
                        idCSS='speligro'
                        tools='Prototipo hecho con Figma e InVision. Actualmente en etapa de desarrollo con React.'
                        linkCode='https://open.spotify.com/collection/tracks'
                        linkDemo='https://open.spotify.com/collection/tracks'
                    />
                </div>
                </section>
            </div>
        );
    }
}

export default ProjectsSection;