import React, { Component } from 'react';

import '../styles/ProjectsSection.css';

import ProjectsTile from './ProjectTile';

class ProjectsSection extends Component {
  render() {
    return (
        <section id="projects">
            {/* <h2>PROJECTS</h2> */}
            <div id="project-tile-section">
                <ProjectsTile title="PROJECT 1" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
                <ProjectsTile title="PROJECT 2" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "/>
                <ProjectsTile title="PROJECT 3" />
                <ProjectsTile title="PROJECT 4" />
                <ProjectsTile title="PROJECT 5" />
                <ProjectsTile title="PROJECT 6" />
                <ProjectsTile title="PROJECT 7" />
                <ProjectsTile title="PROJECT 8" />
            </div>
        </section>
    );
  }
}

export default ProjectsSection;
