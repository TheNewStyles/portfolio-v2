import React, { Component } from 'react';

import '../styles/App.css';

import Header from './Header';
import WelcomeSection from './WelcomeSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
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
