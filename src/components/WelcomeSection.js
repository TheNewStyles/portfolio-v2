import React, { Component } from 'react';
import '../styles/WelcomeSection.css';

class WelcomeSection extends Component {
  render() {
    return (
        <section id="welcome-section">
            <div className="welcome-container">
                <h1>TYLER PETERSON</h1>
                <h3>DEVELOPER</h3>
                <h3>DESIGNER</h3>
                <h3>TESTER</h3>
            </div>
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
