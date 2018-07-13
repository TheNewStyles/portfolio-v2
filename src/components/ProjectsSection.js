import React, { Component } from 'react';

import '../styles/ProjectsSection.css';

import ProjectsTile from './ProjectTile';

class ProjectsSection extends Component {
  render() {
    return (
        <section id="projects">
            <h2>PROJECTS</h2>
            <ProjectsTile />
            <ProjectsTile />
        </section>
    );
  }
}

export default ProjectsSection;
