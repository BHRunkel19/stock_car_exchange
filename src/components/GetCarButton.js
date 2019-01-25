import React from 'react';

let GetCarButton = (props) => {
  return (
    <div className="search_button">
      <button onClick={props.search} className="btn btn-primary">
      GET CRUISIN
      </button>
    </div>
  )
}

export default GetCarButton;
