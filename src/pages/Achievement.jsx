import React, { Component } from 'react';
import './Achievement.css'
export default class Achievement extends Component {
  render() {
    return (
      <div>
        <section class="section2" id="">
          <div class="contener row gy-4 text-light">
            <div class="cont col-md-3 col-sm-6 col-12 bor">
              <div class="icport"><i class="fas fa-calendar-alt fa-2x fa-fw icp"></i></div>
              <h1>12+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div class="cont col-md-3 col-sm-6 col-12 ">
              <div class="icport"><i class="fa fa-check fa-2x icp" aria-hidden="true"></i></div>
              <h1>999+</h1>
              <p>COMPUTED PRODUCTS</p>
            </div>
            <div class="cont col-md-3 col-sm-6 col-12 ">
              <div class="icport">
                <i class="fas fa-bell fa-2x fa-fw icp"></i>
              </div>
              <h1>480+</h1>
              <p>TOTAL CLIENTS</p>
            </div>
            <div class="cont col-md-3 col-sm-6 col-12 ">
              <div class="icport"><i class="fa fa-heart fa-2x icp" aria-hidden="true"></i></div>
              <h1>15+</h1>
              <p>AWARD WON</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
