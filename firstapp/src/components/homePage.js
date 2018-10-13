import React, { Component } from 'react';
import '../css/homePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){     
      return (
        <div>
          <div className="bgimg-1">
            <div className="caption">
              <span className="border">SCROLL DOWN</span>
            </div>
          </div>

          <div id="divStyle1">
            <h3 id="parallaxDemoWord" >Parallax Demo</h3>
            <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
          </div>

          <div className="bgimg-2">
            <div className="caption">
              <span className="border" id="lessHeight">LESS HEIGHT</span>
            </div>
          </div>

          <div className="moveUpPosition">
            <div id="moveUp">
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </div>

          <div className="bgimg-3">
            <div className="caption">
              <span className="border" id="scrollUp">SCROLL UP</span>
            </div>
          </div>

          <div className="moveUpPosition">
            <div id="moveDown">
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </div>

          <div className="bgimg-1">
            <div className="caption">
              <span className="border">COOL!</span>
            </div>
          </div>
        </div>  
      )
        
    }
}//end of CardsList

export default HomePage;