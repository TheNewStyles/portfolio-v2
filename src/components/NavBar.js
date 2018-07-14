import React, { Component } from 'react';

import '../styles/NavBar.css';

import NavLink from './NavLink';
import NavBarButton from './NavBarButton';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.openCloseNavButton = this.openCloseNavButton.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.state = {
           buttonColor: "main-color-button",
           closeIcon: "",
           isOpen: false
        }
    }

    openCloseNavButton(isOpen) {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth;
        if (isOpen) {
            document.getElementById("nav").style.width = "0";
        } else {
            if (x > 450) {
                document.getElementById("nav").style.width = "50%";
            } else {
                document.getElementById("nav").style.width = "100%";
            }
        }

        this.setState({
            isOpen: this.state.isOpen === false ? true : false,
            buttonColor: this.state.buttonColor === "main-color-button" ? "white-button" : "main-color-button",
            closeIcon: this.state.closeIcon === "" ? "close-icon-enabled" : ""
        });
    }

    handleLinkClick() {
        console.log('clicked');
    }

    render() {
        return (
            <header>
                <NavBarButton handleButtonClick={this.openCloseNavButton} backgroundColor={this.state.buttonColor} isNavMenuOpen={this.state.isOpen} closeIcon={this.state.closeIcon} />
                <nav id="nav" className="sidenav">
                    <ul>
                        <NavLink linkText="HOME" href="#home" handleLinkClick={this.handleLinkClick}/>
                        <NavLink linkText="PROJECTS" href="#projects" />
                        <NavLink linkText="CONTACT" href="#contact" />
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;
