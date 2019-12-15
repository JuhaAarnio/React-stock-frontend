import React from 'react';

class Portfolio extends React.Component{
  render(){
    let backgroundStyle = {
      color: 'blue',
      width: '500px',
      height: '250px',
      border: '2px solid green'
    };


    return(
        <div style={backgroundStyle} >
          <h>Portfolio</h>
        </div>
    )
  }
}

class Stocks extends React.Component{
  render(){
    let stockStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
    return(
          <div style={stockStyle}>
            <h>Stock:</h>
            <h>Amount:</h>
            <h>Price:</h>
          </div>
    )

  }
}

export default Portfolio;