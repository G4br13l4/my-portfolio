import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id="contact" className="contact">
                <div className="contact__wrap-title">
                    <div className="contact__title">Contáctame ...</div>
                </div>
                <section className="contact__content">
                <div className="contact__wrap-icons">
                    <div className="wrap-icon">
                    <a className="wrap-icon__link" href="https://api.whatsapp.com/send?phone=5215531130239" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    </div>
                    <div className="wrap-icon">
                    <a className="wrap-icon__link" href="https://www.linkedin.com/in/gabriela-lf/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    </div>
                    <div className="wrap-icon">
                    <a className="wrap-icon__link" href="https://github.com/G4br13l4" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    </div>
                    <div className="wrap-icon">
                    <a className="wrap-icon__link" href="mailto:gab_lop@live.com.mx" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    </div>
                </div>
                </section>
                <div className="footer">
                <span>Copyights © 2020 by GabLoF</span>
                </div>
            </div> 
        );
    }
}

export default Contact;