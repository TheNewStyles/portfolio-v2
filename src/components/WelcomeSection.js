import React, { Component } from 'react';
import '../styles/WelcomeSection.css';

class WelcomeSection extends Component {
  render() {
    return (
        <section id="welcome-section">
            <h1>TYLER PETERSON</h1>
            <h2>DEVELOPER - DESIGNER - TESTER</h2>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </section>
    );
  }
}

export default WelcomeSection;
