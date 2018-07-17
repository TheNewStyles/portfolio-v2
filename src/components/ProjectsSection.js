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
                <ProjectsTile title="Markdown Previewer" image={image} info="A Markdown previewer I created in React. Markdown is a lightweight markup language to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)"/>
                <ProjectsTile title="React Docs Clone" image={image} info="While I was learning React I recreated the React documenation with React as a web design project."/>
            </div>
        </section>
    );
  }
}

export default ProjectsSection;
