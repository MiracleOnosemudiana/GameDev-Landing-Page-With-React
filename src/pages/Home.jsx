import React, { Component } from 'react';
import './Home.css'
import Navbar from '../components/Navbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="section1" id="up">
                    <Navbar />
                    <div className="head-section">
                        <h1 className="head-section-h1">Game Development</h1>
                        <p className="head-section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quia, veritatis
                            dolores.</p>
                            <br />
                        <a href="#about" className="get-started py-3 px-4">GET STARTED</a>
                    </div>
                </section>
            </div>
        );
    }
}
