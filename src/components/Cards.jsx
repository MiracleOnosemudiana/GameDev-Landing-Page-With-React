import React, { Component } from 'react';
import './Cards.css'

export default class Cards extends Component {
    render() {
        const { title, content, Bgcolor, icon } = this.props
        // console.log(this.props)
        return (

            <div class="story-mission-vision-content cards-container col-12 col-md-4 container-sm m-0" style={{ backgroundColor: `${Bgcolor}` }} >
                <i class={`fa ${icon} fa-2x`} aria-hidden="true"></i>
                <br /><br />
                <h1>{title}</h1><br />
                <p> {content}</p>
            </div>

        );
    }
}

