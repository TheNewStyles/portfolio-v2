import React, { Component } from 'react';

import '../styles/ProjectsSection.css';

import ProjectsTile from './ProjectTile';
import image from '../images/main-background.jpg';

class ProjectsSection extends Component {
  render() {
    return (
        <section id="projects">
            {/* <h2>PROJECTS</h2> */}
            <div id="project-tile-section">
                <ProjectsTile title="PROJECT 1" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
                <ProjectsTile title="PROJECT 2" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "/>
                <ProjectsTile title="PROJECT 3" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " />
                <ProjectsTile title="PROJECT 4" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " />
                <ProjectsTile title="PROJECT 5" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " />
                <ProjectsTile title="PROJECT 6" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " />
                <ProjectsTile title="PROJECT 7" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "/>
                <ProjectsTile title="PROJECT 8" image={image} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "/>
            </div>
        </section>
    );
  }
}

export default ProjectsSection;
