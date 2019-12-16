import React from 'react';

/*class PortfolioContainer extends React.Component {
  render() {
    let containerStyle = {

    };
    return(
        <div style={containerStyle}>
          <Portfolio/>
          <Portfolio/>
          <Portfolio/>
        </div>
    )
  }
}
 */

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:''}
  }
  render() {
    let backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      color: 'blue',
      width: '500px',
      height: 'auto',
      border: '2px solid green'
    };
    return (
        <div style={backgroundStyle}>
          <h>Portfolio</h>
          <Stocks/>
          <Button/>
        </div>

    )
  }
}

class Stocks extends React.Component {
  render() {
    let stockStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid blue',
      paddingTop: '5px'
    };
    return (
        <div style={stockStyle}>
          <h>Stock:{this.props.stockname}</h>
          <h>Amount:{this.props.stockamount}</h>
          <h>Price:{this.props.price}</h>
        </div>
    )

  }
}

class Button extends React.Component {
  render() {
    let buttonStyle = {
      width: '75px',
      height: '35px',
      color: 'light-blue'
    };
    return (
        <div>
          <button style={buttonStyle}>Add stock</button>
        </div>
    )
  }
}

export default Portfolio;