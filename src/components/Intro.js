import React from 'react';

let counter = 0;
const skills = [
    'Front-End Development', 
    'Web Analytics',
    'Digital Marketing',
    'Prototypes'
];

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: skills[0],
            showText: true
        };
    }

    componentDidMount() {
        setInterval(this.change, 2500);
    }
  
    change = () => {
        this.setState({showText: false});

        setTimeout(() => {
            this.setState({skill: skills[counter]});
            this.setState({showText: true});
            counter++;
            if (counter >= skills.length) {
                counter = 0;
            }
        }, 500);   
    }

    render() {
        const { showText, skill } = this.state;
        return (
            <header id="intro" className="intro">
                <div className="intro__boxtxt">
                    <h1 className="intro__text">
                        <span>Hola, mi nombre es </span>
                        <strong className="name">Gabriela López Fuentes</strong>
                        <span>Me dedico a</span>
                        <span className={`anim-text ${showText ? 'show' : 'hide'}`}>
                            {skill}
                        </span>
                    </h1>
                </div>
            </header>
        );
    }
}

export default Intro;