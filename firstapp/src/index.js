import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/imageHover.css';
import jsonData from './assets/staticData.json'


class App extends Component {
    constructor(props) {
        super(props);

        this.state ={
           list : jsonData
        };
    }

    render(){
        const cardsList = this.state.list.cardsList;
        // const listItems = cardsList.map((card,index) => 
        //     console.log("index "+ index +"--> "+JSON.stringify(card.image))
        //     // <li>{listItems.image.src}</li>
        // );

        const listItems = cardsList.map((card) =>
            // <li>{card.image.src}</li> 
            <div>
                <figure className="snip1529">
                <img src={card.image.src} alt= {card.image.alt} />
                <div className="date"><span className="day">28</span><span className="month">Apr</span></div>
                <figcaption>
                    <h3>{card.text.heading}</h3>
                    <p>{card.text.description}</p>
                </figcaption>
                <div className="hover"><i className="ion-android-open"></i></div>
                <a href="#"></a>
            </figure> 
            </div>
            
            
        );
                 
        return (            
            <div >
                {/* <figure className="snip1529">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13" />
                    <div className="date"><span className="day">28</span><span className="month">Apr</span></div>
                    <figcaption>
                        <h3>An Abstract Post Heading</h3>
                        <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                    </figcaption>
                    <div className="hover"><i className="ion-android-open"></i></div>
                    <a href="#"></a>
                </figure> */}
                {listItems}
                {/* <figure className="snip1529"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample21.jpg" alt="pr-sample21" />
                    <div className="date"><span className="day">17</span><span className="month">May</span></div>
                    <figcaption>
                        <h3>Down with this sort of thing</h3>
                        <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                    </figcaption>
                    <div className="hover"><i className="ion-android-open"></i></div>
                    <a href="#"></a>
                </figure>
                <figure className="snip1529"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg" alt="pr-sample23" />
                    <div className="date"><span className="day">08</span><span className="month">June</span></div>
                    <figcaption>
                        <h3>The World Ended Yesterday</h3>
                        <p>The only skills I have the patience to learn are those that have no real application in life. </p>
                    </figcaption>
                    <div className="hover"><i className="ion-android-open"></i></div>
                    <a href="#"></a>
                </figure> */}
            </div>
        )
        
    }
}//end of App-className

ReactDOM.render(<App/>, document.getElementById('root'))