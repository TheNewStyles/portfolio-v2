import React, { Component } from 'react';

import '../styles/App.css';

import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import AboutMe from './AboutMe';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div id="home"></div>
            <NavBar />
            <main className="main">
                <WelcomeSection />
                <AboutMe />
                <ProjectsSection />
            </main>
            <Footer />
        </div>
    );
  }
}

export default App;
