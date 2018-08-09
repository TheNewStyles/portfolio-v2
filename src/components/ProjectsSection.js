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
                <ProjectsTile title="JavaScript Calculator" image={image} info="A Calculator I built in React. It uses the shunting yard algorithm and reverse polish notation"/>
                <ProjectsTile title="Drum Machine" image={image} info="A Drum Machine I built in React as part of the FreeCodeCamp certification - Front End Libraries "/>
                <ProjectsTile title="Simon Game" image={image} info="A Simon Game I built with plain JavaScript." />
                <ProjectsTile title="Markdown Previewer" image={image} info="A Markdown previewer I created in React. Preview your markdown as you type."/>
                <ProjectsTile title="React Tech Docs Clone" image={image} info="While I was learning React I recreated the React documenation with React as a web design project." />
                <ProjectsTile title="Random Quote Machine" image={image} info="A simple quote machine built in React for one of my favorite movies Pulp Fiction"/>
                <ProjectsTile title="Product Landing Page Design" image={image} info="A non functional landing page to practice web design using flexbox" />
                <ProjectsTile title="Survey Form Design" image={image} info="A non-functional survey form to practice web design using flex box" />
            </div>
        </section>
    );
  }
}

export default ProjectsSection;
