import React, { Component } from 'react';
import './OurService.css'

export default class OurService extends Component {
  render() {
    return (
      <div class="services" id="services">
        <h1>Our Services</h1><br />
        <hr /><br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi deleniti iure <br />commodi harum voluptatibus
          id.
        </p><br /><br />
        <div class="Kontainer d-flex flex-wrap gap-3 justify-content-center">

          <div class="content">
            <div class="icons"><i class="fa fa-desktop fa-2x ic" aria-hidden="true"></i></div>
            <p>&nbsp;&nbsp;WEB DESIGN</p>
          </div>
          <div class="content">
            <div class="icons"><i class="fa fa-gears fa-2x ic" aria-hidden="true"></i></div>
            <p>&nbsp;&nbsp;GAME DEVELOPMENT</p>
          </div>
          <div class="content">
            <div class="icons"><i class="fab fa-wordpress fa-2x fa-fw ic"></i></div>
            <p>&nbsp;&nbsp;WORDPRESS THEMES</p>
          </div>

          <div class="content">
            <div class="icons"><i class="fa fa-laptop fa-2x ic" aria-hidden="true"></i></div>
            <p>&nbsp;&nbsp;WEB DEVELOPMENT</p>
          </div>
          <div class="content">
            <div class="icons"><i class="fab fa-android  ic "></i></div>
            <p>&nbsp;&nbsp;APPS DEVELOPMENT</p>
          </div>
          <div class="content">
            <div class="icons"><i class="fa fa-gear fa-2x ic" aria-hidden="true"></i></div>
            <p>&nbsp;&nbsp;WORDPRESS PLUGINS</p>
          </div>

          <div class="content">
            <div class="icons"><i class="fa fa-gear fa-2x ic" aria-hidden="true"></i></div>
            <p>&nbsp;&nbsp;THEME DEVELOPMENT</p>
          </div>
          <div class="content">
            <div class="icons"><i class="fa fa-desktop fa-2x ic" aria-hidden="true"></i></div>
            <p>&nbsp;&nbsp;DESKTOP APPLICATION</p>
          </div>
          <div class="content">
            <div class="icons"><i class="fa fa-phone fa-2x  ic"></i></div>
            <p>&nbsp;&nbsp;SUPPORT & IT</p>

          </div>
        </div>
      </div>
    );
  }
}
