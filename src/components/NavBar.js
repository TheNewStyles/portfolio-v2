import React, { Component } from 'react';

import '../styles/NavBar.css';

import NavLink from './NavLink';
import NavBarButton from './NavBarButton';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.openCloseNavButton = this.openCloseNavButton.bind(this);
        this.state = {
           buttonColor: "red-button",
           isOpen: false
        }
    }

    openCloseNavButton(isOpen) {
        if (isOpen) {
            document.getElementById("nav").style.width = "0";
            //document.getElementById("root").style.marginRight = "0";
            document.body.style.backgroundColor = "white";
        } else {
            document.getElementById("nav").style.width = "250px";
            //document.getElementById("root").style.marginRight = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }

        this.setState({
            isOpen: this.state.isOpen === false ? true : false,
            buttonColor: this.state.buttonColor === "red-button" ? "white-button" : "red-button"
        });
    }

    render() {
        return (
            <header>
                <NavBarButton handleButtonClick={this.openCloseNavButton} backgroundColor={this.state.buttonColor} isNavMenuOpen={this.state.isOpen}  />
                <nav id="nav" className="sidenav">
                    <ul>
                        <NavLink linkText="HOME" href="#welcome-section" />
                        <NavLink linkText="PROJECTS" href="#welcome-section" />
                        <NavLink linkText="CONTACT" href="#welcome-section" />
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;
