import React, { Component } from 'react';
import '../styles/WelcomeSection.css';

class WelcomeSection extends Component {
  render() {
    return (
        <section id="welcome-section">
            <h1>Tyler Peterson</h1>
            {/* Should be height of viewport */}
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
