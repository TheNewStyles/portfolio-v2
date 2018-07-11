import React, { Component } from 'react';

import '../styles/NavLink.css';

class NavLink extends Component {
  render() {
    return (
        <li href={this.props.href} >{this.props.linkText}</li>
    );
  }
}

export default NavLink;