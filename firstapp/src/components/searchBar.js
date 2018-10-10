import React, { Component } from 'react';
import '../css/searchBar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render(){

    let searchClass = ["search"];
    let inputClass  = ["input"];
    if(this.state.addClass) {
      searchClass.push('close');
      inputClass.push('square');
      console.log(searchClass);
    }
    return(
      <div>
        <form id="content">
          <input type="text" name="input" className={inputClass.join(' ')} />
          <button type="reset" className={searchClass.join(' ')} onClick={this.toggle.bind(this)} ></button>
        </form>
        <br/><br/>
      </div>      
    )
  }


}//end of class searchBar

export default SearchBar;