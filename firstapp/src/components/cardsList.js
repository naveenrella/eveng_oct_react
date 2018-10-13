import React, { Component } from 'react';
import '../css/imageHover.css';
import jsonData from '../assets/staticData.json';
import moment from 'moment';

class CardsList extends Component {
    constructor(props) {
        super(props);

        this.state ={
           list : jsonData
        };
    }

    formatDate = (date,type) => {
       let month   = moment(date).format('MMM');
       let day     = moment(date).format('DD');
        if(type == 'day'){
            return day;
        }else{
            return month;
        }
    }

    render(){
        const cardsList = this.state.list.cardsList;   
        
        const listItems = cardsList.map((card) =>        
        <div>                            
            <figure className="snip1529">
                <img key={card.id} src={`/images/${card.image.src}`}/>
                <div className="date">
                    <span className="day">{this.formatDate(card.date,"day")}</span>
                    <span className="month">{this.formatDate(card.date,"month")}</span>
                </div>
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
                {listItems}                
            </div>
        )
        
    }
}//end of CardsList

export default CardsList;