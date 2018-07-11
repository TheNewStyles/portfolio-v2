import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header>
                <nav id="nav">
                    {/* should always be on top of viewport */}
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </header>
          <main>
            <section id="welcome-section">
                <h1></h1>
                {/* Should be height of viewport */}
            </section>
            <section id="projects">
                <article className="project-tile" ></article>
                <article className="project-tile" ></article>
                <article className="project-tile" ></article>
            </section>
            <section>

            </section>
          </main>
          <footer>
              <ul>
                  <li id="profile-link"></li>
              </ul>
          </footer>
      </div>
    );
  }
}

export default App;
