import React, { Component } from 'react';

import '../styles/NavLink.css';

class NavLink extends Component {
  render() {
    return (
        <li><a href={this.props.href}>{this.props.linkText}</a></li>
    );
  }
}

export default NavLink;