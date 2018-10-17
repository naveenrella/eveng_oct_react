import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render(){
      return (
        <div>             
          <nav id="navbar" class="">
            <div class="nav-wrapper">
              <ul id="menu">
                <li><Link to="/home">Home</Link></li>                
                <li><Link to="/cardsList">cardsList</Link></li>
              </ul>
            </div>
          </nav>
          
          <div class="arrow bounce">
            <a id="scrollDown" href="#">
              <ion-icon name="arrow-round-down" size="large"></ion-icon>
            </a>
          </div>
        <div class="menuIcon">
          <span class="icon icon-bars"></span>
          <span class="icon icon-bars overlay"></span>
        </div>

          {/* <div class="overlay-menu">
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
          </div> */}
        </div>  
      )
        
    }
}//end of CardsList

export default Header;