import React from 'react';


class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {stockList: []};
  }
  addStock = () => {
    this.setState(state => {
      console.log("Adding stocks");
      const stockList = state.stockList.concat(<Stocks />);
      return{
         stockList
      }
    });
  };
  render() {
    let backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      color: 'blue',
      width: '100%',
      height: 'auto',
      border: '2px solid green'
    };
    let buttonStyle = {
      width: '75px',
      height: '35px',
      color: 'light-blue'
    };
    return (
        <div style={backgroundStyle}>
          <h1>{this.props.name}</h1>
          {this.state.stockList}
          <button style={buttonStyle} onClick = {this.addStock}>Add Stock</button>
          <input type="text"/>
          <input type="text"/>
        </div>
    );

  }
}
class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.stockname = props.stockname;
    this.stockamount = props.stockamount;
    this.price = props.price;
  }
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
export default Portfolio;