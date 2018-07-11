import React, { Component } from 'react';

import '../styles/NavBarButton.css';

class NavBarButton extends Component {
    handleClick(e) {
        this.props.handleButtonClick(e);
    }

    render() {
        return (
            <button id="navbar-open-close" onClick={this.handleClick.bind(this)}>
                <div className={"filter-icon " + this.props.backgroundColor}>
                    <div className="filter-line line-1 "></div>
                    <div className="filter-line line-2"></div>
                    <div className="filter-line line-3"></div>
                </div>
            </button>
        );
    }
}

export default NavBarButton;
