import React from 'react';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openHamburger: false
        };
    }
  
    toggleHamburger = () => {
        let toggle = this.state.openHamburger;
        this.setState({openHamburger: !toggle});
    }

    render() {
        return (
            <header id="intro" class="intro">
                <div class="intro__boxtxt">
                    <h1 class="intro__text">
                        <span>Hola, mi nombre es </span>
                        <strong class="name">Gabriela López Fuentes</strong>
                        <span>Me dedico a</span>
                        <span class="anim-text"></span>
                    </h1>
                </div>
            </header>
        );
    }
}

export default Intro;