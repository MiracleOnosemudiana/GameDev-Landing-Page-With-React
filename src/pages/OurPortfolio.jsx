import React, { Component } from 'react';
import './OurPortfolio.css'
import img1 from '../images/mohamed-m-6MXDP9u6fmU-unsplash.jpg'
import img2 from '../images/istockphoto-1294385362-170667a.jpg'
import img3 from '../images/istockphoto-1388134976-170667a.jpg'
import img4 from '../images/istockphoto-886322114-612x612.jpg'
import img5 from '../images/pexels-daria-shevtsova-1440727.jpg'
import img6 from '../images/pexels-serpstat-572056 (2).jpg'

export default class OurPortfolio extends Component {
  render() {
    return (
      <div class="portfolio1" id="portfolio">
        <h1>Our Portfolio</h1><br />
        <hr /><br />
        <p className='mx-1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi deleniti iure <br />commodi harum voluptatibus
          id.
        </p><br /><br />
        <div class="bottom">
          <ul>
            <li><a href="" class="all">ALL</a></li>
            <li><a href="">WEB DEVELOPMENT</a></li>
            <li><a href="">GAME DEVELOPMENT</a></li>
            <li><a href="">APP DEVELOPMENT</a></li>
          </ul>
        </div>
        <div class="bottom-images">
          <div class="img1 d-flex flex-wrap justify-content-center">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
      </div>



    );
  }
}
