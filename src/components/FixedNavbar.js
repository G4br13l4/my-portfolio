import React from 'react';

class FixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openHamburger: false,
            isMobile: true,
        };
    }

    componentDidMount() {
        const deviceWidth = window.innerWidth;
        if(deviceWidth > 992) {
            this.setState({ isMobile: false});
        }
    }
  
    toggleHamburger = () => {
        let toggle = this.state.openHamburger;
        this.setState({openHamburger: !toggle});
    }

    render() {
        const { openHamburger, isMobile } = this.state;
        return (
            <nav className={`main-nav ${openHamburger ? 'showMenu' : 'hideMenu'}`}>
                <div className="main-nav__wrap-hamburger">
                    <span className="main-nav__hamburger" onClick={this.toggleHamburger}>
                        <i></i>
                        <i></i>
                    </span>   
                </div>
                
                <div className="nav-collapse">
                    <ul className="nav-collapse__list">
                        <li className="nav-collapse__item">
                            <a href="#intro" onClick={isMobile && this.toggleHamburger} className="nav-collapse__link">Inicio</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a href="#projects" onClick={isMobile && this.toggleHamburger} className="nav-collapse__link">Proyectos</a>
                        </li>
                        {/* <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Acerca de mí</a>
                        </li> */}
                        <li className="nav-collapse__item">
                            <a href="#contact" onClick={isMobile && this.toggleHamburger} className="nav-collapse__link">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default FixedNavbar;