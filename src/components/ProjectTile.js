import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/ProjectTile.css';

class ProjectsTile extends Component {
    render() {
        return (
            <article className="project-tile">
                <Fade left>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.info}</p>
                </Fade>
            </article>
        );
    }
}

export default ProjectsTile;
