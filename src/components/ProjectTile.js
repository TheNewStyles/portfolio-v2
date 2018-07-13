import React, { Component } from 'react';
import '../styles/ProjectTile.css';

class ProjectsTile extends Component {
  render() {
    return (
        <article className="project-tile">
            <h4>{this.props.title}</h4>
            <p>{this.props.info}</p>
        </article>
    );
  }
}

export default ProjectsTile;
