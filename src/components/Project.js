import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            name,
            tools,
            linkCode,
            linkDemo,
            idCSS
        } = this.props;
        return (
            <div id={idCSS} className="frame-project">
                <div className="project">
                    <div className="project__title">
                        <span>{name}</span>
                    </div>
                    <div>{tools}</div>
                    <div className="project__wrap-btns">
                        <button>
                            <a target="_blank" href={linkCode}>Code</a>
                        </button>
                        <button>
                            <a target="_blank" href={linkDemo}>Demo</a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;