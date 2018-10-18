import React, {Component} from 'react';

class Trending extends Component{
  render(){
    return(
      <div id="watching_container">

        <div className="large_container">
          <div className="small_watch_container" id="watching_window">
            <p>Form field for selecting auto types to monitor</p>
          </div>
          <div className="small_watch_container" id="scatter_graph_window">
            <p>Scatter plot showing valuations of selected autos</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Trending;
