import React, {Component} from 'react';

class Search extends Component{
  render(){
    return(
      <div id="search_container">

        <div className="large_container">
          <div className="search_display" id="search_window">
            <p>Search engine with parameter filtering</p>
          </div>
          <div className="search_display" id="results_window">
            <p>Return window for query results</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
