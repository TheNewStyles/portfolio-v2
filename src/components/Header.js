import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
        <header>
            <nav id="nav">
                {/* should always be on top of viewport */}
                <ul>
                    <li>NAV</li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
