import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/ProjectTile.css';

class ProjectsTile extends Component {
    constructor(props){
        super(props);
        this.screenSize = window.screen.width > 450;
    }

    render() {
        return (
            <article className="project-tile">
                {this.screenSize ? (
                    <Fade>
                        <h2>{this.props.title}</h2>
                            <img src={this.props.image} className="project-image" alt=""/>
                        <p>{this.props.info}</p>
                    </Fade>
                ) : (
                    <Fade left>
                        <h2>{this.props.title}</h2>
                            <img src={this.props.image} className="project-image" alt=""/>
                        <p>{this.props.info}</p>
                    </Fade>
                )}
            </article>
        );
    }
}

export default ProjectsTile;
