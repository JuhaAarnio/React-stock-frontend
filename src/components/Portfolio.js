import React from 'react';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.stocks = props.stockList;
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
    return (
        <div style={backgroundStyle}>
          <h1>{this.props.name}</h1>
          {this.state.stockList}
          <SharesForm/>
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

class SharesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      amount: '',
      date: ''
    };
  }
  submitRequest = (symbol, amount, date) => {
    let url = 'https://cloud.iexapis.com/stable/' + symbol + '/' + 'token=pk_c0b9268c90df41fb8a6a629f87e42a5c';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = generateStocks;
    request.send();
    function generateStocks() {
      if(this.status === 200){
        let data = JSON.parse(this);
        let stockData = [];
      }
    }
  };
  updateFieldSymbol = (evt) => {
    this.setState({
      symbol: evt.target.value
    })
  };
  updateFieldAmount = (evt) => {
    this.setState({
      amount: evt.target.value
    })
  };
  updateFieldDate = (evt) => {
    this.setState({
      date: evt.target.value
    })
  };
  render() {
    let buttonStyle = {
      width: '75px',
      height: '35px',
      color: 'light-blue'
    };
    return (
        <div>
          <h1>{this.props.name}</h1>
          {this.state.stockList}
          <button style={buttonStyle} onClick = {this.submitRequest(this.state.symbol, this.state.amount, this.state.date)}>Add Stock</button>
          <input type="text" value={this.state.symbol} onChange={evt => {this.updateFieldSymbol(evt)}}/>
          <input type="text" value={this.state.amount} onChange={evt => {this.updateFieldAmount(evt)}}/>
          <input type="text" value={this.state.date} onChange={evt => {this.updateFieldDate(evt)}}/>
        </div>
    )
  }
}

export default Portfolio;