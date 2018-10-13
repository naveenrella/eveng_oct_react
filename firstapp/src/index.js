import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import './css/app.css';
import moment from 'moment';
import Header from  './components/header';
import Hompage from './components/homePage';
import SearchBar from './components/searchBar';
import CardsList from './components/cardsList';


ReactDOM.render( 
    <BrowserRouter>           
        <div >
            <Header/>
            <SearchBar/>
            <Route exact path="/" component={Hompage}></Route>        
            <Route path="/home" component={Hompage}></Route>
            <Route path="/cardsList" component={CardsList}></Route>
        </div>
    </BrowserRouter>, document.getElementById('root'));