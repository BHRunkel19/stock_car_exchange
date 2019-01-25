import React, {Component} from 'react';
import GetCarButton from './GetCarButton.js';

class Search extends Component{
  constructor(props){
    super(props);

    this.handleCars = this.handleCars.bind(this);
    this.fetchCars = this.fetchCars.bind(this);

    this.state = {
      make: "Subaru",
    }
  }

  handleCars(event){
    console.log(event.target.value);
    this.setState({make: event.target.value})
  }

  fetchCars = () => {
    this.setState({make: this.state.make})
    console.log(this.state);

    let man = this.state.make;
    let carURL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${man}?format=json`;

    fetch(carURL).then(res => res.json()).then(data => {
      console.log(data);
      this.setState({make: this.state.make, cars: data});
    }).catch((error) => {
      console.log("Error with Fetching: ", error);
    });
  }

  render(){
    return(
      <div className="form_container">
        <div className="form-group">
          <div className="form_wrapper">

            <label htmlFor="rover">Select Make:</label>

            <select onChange={this.handleCars} id="makes" value={this.state.value}>
              <option value="Subaru">Subaru</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Ford">Ford</option>
            </select>

            <GetCarButton search={this.fetchCars}/>

            <div className="car_grid">
              {this.state.cars}
            </div>
          </div>
        </div>
      </div>
      // <div id="search_container">
      //
      //   <div className="large_container">
      //     <div className="search_display" id="search_window">
      //       <p>Search engine with parameter filtering</p>
      //     </div>
      //     <div className="search_display" id="results_window">
      //       <p>Return window for query results</p>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Search;
