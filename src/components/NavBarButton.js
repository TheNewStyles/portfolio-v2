import React, { Component } from 'react';

import '../styles/NavBarButton.css';

class NavBarButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleButtonClick(this.props.isNavMenuOpen);
    }

    render() {
        return (
            <button id="navbar-open-close" onClick={this.handleClick}>
                <span className={"close-icon " + this.props.closeIcon} >X</span>
                <div className={"filter-icon " + this.props.backgroundColor}>
                    <div className="filter-line line-1">-</div>
                    <div className="filter-line line-2">-</div>
                    <div className="filter-line line-3">-</div>
                </div>
            </button>
        );
    }
}

export default NavBarButton;
