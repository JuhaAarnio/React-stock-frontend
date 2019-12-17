import React from 'react';


class Portfolio extends React.Component {
  render() {
    const stockList = [];
    let backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      color: 'blue',
      width: '100%',
      height: 'auto',
      border: '2px solid green'
    };
    return (
        <div style={backgroundStyle}>
          <h1>{this.props.name}</h1>
          {stockList}
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
          <h1>Stock:{this.props.stockname}</h1>
          <h1>Amount:{this.props.stockamount}</h1>
          <h1>Price:{this.props.price}</h1>
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