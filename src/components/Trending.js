import React, {Component} from 'react';

class Trending extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div id="trending_container">
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Trending;
