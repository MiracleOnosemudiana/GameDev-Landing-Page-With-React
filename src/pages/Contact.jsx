import React, { Component } from 'react';
import './Contact.css'
import navImg from '../images/tarn-nguyen-XlEafYGDvV0-unsplash (1).jpg'

export default class Contact extends Component {
    render() {
        return (
            <div class="bottom-nav">
                <div className='d-flex flex-wrap align-items-center'>
                    {/* <img src={navImg} alt="" class="nav-pic me-4 mb-4" /> */}
                    <i class="fa fa-user fa-4x p-2 mt-3 nav-pic me-4 mb-4" aria-hidden="true"></i>
                    <p class="pdown"><span class="name">JOY CHRIS</span><br /><span>Web Developer</span><br /> Lorem, ipsum dolor
                        sit amet consectetur
                        adipisicing elit. Tempora, natus!</p>
                </div>
                <a href="#up" class="www"><i class="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i></a>

            </div>
        );
    }
}
