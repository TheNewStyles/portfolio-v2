import React, { Component } from 'react';

import '../styles/App.css';

import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
            <NavBar />
            <main>
                <WelcomeSection />
                <ProjectsSection />
            </main>
            <Footer />
        </div>
    );
  }
}

export default App;
