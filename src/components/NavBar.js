import React, { Component } from 'react';

import '../styles/NavBar.css';

import NavLink from './NavLink';
import NavBarButton from './NavBarButton';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.openCloseNavButton.bind(this);
        this.state = {
           buttonColor: true,
           open: false
        }
    }

    openCloseNavButton(e) {
        if (this.open) {
            document.getElementById("nav").style.width = "0";
            document.getElementById("root").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        } else {
            document.getElementById("nav").style.width = "250px";
            document.getElementById("root").style.marginRight = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
    }

    render() {
        let btnColor = this.state.buttonColor ? "red-button" : "white-button";

        return (
            <header>
                <NavBarButton handleButtonClick={this.openCloseNavButton} backgroundColor={btnColor}  />
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
