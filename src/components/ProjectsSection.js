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
                        tools='CSS3, Bootstrap 3, Javascript, jQuery, PokeApi.'
                        linkCode='https://open.spotify.com/collection/tracks'
                        linkDemo='https://open.spotify.com/collection/tracks'
                    />
                    {/* <div className="frame-project">
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
                    </div> */}
                </div>
                </section>
            </div>
        );
    }
}

export default ProjectsSection;