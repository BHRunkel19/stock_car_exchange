import React, {Component} from 'react';

class Trending extends Component{
  render(){
    return(
      <div id="trending_container">

        <h1>Your journey starts here</h1>

        <div className="large_container">
          <div className="trends_container" id="trends_container_1">
            <p>Analytics Overview</p>
          </div>
          <div className="trends_container" id="trends_container_2">
            <p>Incremental Trend Analysis</p>
          </div>
          <div className="trends_container" id="trends_container_3">
            <p>Customizeable Dashboard Window</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Trending;
