import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/imageHover.css';
import './css/app.css';
import jsonData from './assets/staticData.json';
import moment from 'moment';
import SearchBar from './components/searchBar';
import CardsList from './components/cardsList';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (            
            <div >
                <header>
                    <SearchBar/>
                </header>                  
                <CardsList/>             
            </div>
        )
        
    }
}//end of App-className

ReactDOM.render(<App/>, document.getElementById('root'))