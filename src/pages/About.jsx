import React, { Component } from 'react';
import './About.css'
import Welcome from '../components/Welcome';
import Cards from '../components/Cards';
import { CardData } from '../assets/data'

export default class About extends Component {
    render() {
        return (
            <>
                <Welcome />
                <div className="story-mission-vision row m-0">
                    {CardData && CardData.map((data) => {
                        const { title, content, Bgcolor, icon, id } = data;
                        return (

                            <Cards
                                key={id}
                                title={title}
                                content={content}
                                Bgcolor={Bgcolor}
                                icon={icon}
                            />


                        );
                    })}
                </div>
            </>
        );
    }
}
