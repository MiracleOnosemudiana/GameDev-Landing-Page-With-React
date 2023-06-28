import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNavbar: false
        }
    }


    handleShowNavbar = () => {
        this.setState(prevState => ({
            showNavbar: !prevState.showNavbar
        }));
    }



    render() {
        return (
            <>
                <nav className="navbar container-lg">
                    <div className="kwontainer">
                        <div className="logo">
                            <span style={{ fontWeight: '1000', fontSize: '2.4rem' }}>1</span>PAGE
                        </div>
                        <div className="menu-icon" onClick={this.handleShowNavbar}>
                            <i className="fa fa-bars fa-2x text-light" aria-hidden="true"></i>
                        </div>
                        <div className={`nav-elements ${this.state.showNavbar && "active"}`}>
                            <ul>
                                <l1><a href="" className="" style={{ color: 'black', textDecorationLine: 'underline' }} >HOME</a></l1>
                                <l1><a href="#about">ABOUT</a></l1>
                                <l1><a href="#services">OUR SERVICES</a></l1>
                                <l1><a href="#portfolio">OUR PORTFOLIO</a></l1>
                                <l1><a href="">CONTACT US</a></l1>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
