import React, { Component } from 'react';

import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer id="contact">
            <ul>
                <li>
                    <a href="">Github</a>
                </li>
                <li>
                    <a href="">LinkedIn</a>
                </li>
                <li>
                    <a href="">Email</a>
                </li>
            </ul>
        </footer>
    );
  }
}

export default Footer;
