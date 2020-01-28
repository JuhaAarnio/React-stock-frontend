import React from 'react';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.idKey = props.idKey;
    this.deleteFunc = props.deleteFunc;
    this.state = {
      stockList: [],
      symbol: '',
      amount: '',
      date: '',
      totalValue: 0
    };
  }
  calculateTotalValue = (price) => {
    let sum = price;
    console.log(sum);
    this.setState(state => {
      state.totalValue += sum;
    })
  };
  addStock = (symbol, amount, price, currPrice, date, calc) => {
    this.setState(state => {
      console.log("Adding stocks");
      let stock = <Stocks stockName = {symbol} stockAmount = {amount} price = {price}
                          currentPrice = {currPrice} date = {date} calc = {calc}/>;
      const stockList = state.stockList.concat(stock);
      return{
         stockList
      }
    });
  };
  submitRequest = (symbol, amount, date) => {
    let url = 'https://cloud.iexapis.com/stable/stock/' + symbol + '/chart/date/' + date + '?token=pk_c0b9268c90df41fb8a6a629f87e42a5c';
    console.log(url);
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = generateStocks;
    request.send();
    let currPrice = 0;
    let closeValue = 2;
    function generateStocks () {
      if(this.status === 200){
        let data = JSON.parse(request.response);
        closeValue = data[0]['close'];
        console.log(closeValue);
      }
      else{
        console.log("Failed request");
      }
    }
    this.addStock(symbol, amount, closeValue, currPrice, date, this.calculateTotalValue);
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
          <h1>Total Value: {this.state.totalValue}</h1>
          <div>
            <input type="text" value={this.state.symbol} onChange={evt => {this.updateFieldSymbol(evt)}}/>
            <input type="text" value={this.state.amount} onChange={evt => {this.updateFieldAmount(evt)}}/>
            <input type="text" value={this.state.date} onChange={evt => {this.updateFieldDate(evt)}}/>
            <button style={buttonStyle} onClick = {() => this.submitRequest(this.state.symbol, this.state.amount, this.state.date)}>Add Stock</button>
            <button onClick={() => this.deleteFunc(this.props.idKey)}>Delete portfolio</button>
          </div>
        </div>
    );
  }
}
class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.stockName = props.stockName;
    this.stockAmount = props.stockAmount;
    this.price = props.price;
    this.currentPrice = props.currentPrice;
    this.date = props.date;
    this.calc = props.calc;
    this.state = {
      stockName: '',
      stockAmount:'',
      price: '',
      currentPrice: '',
      date: ''
    }
  }
  componentDidMount() {
    this.calc(this.price * this.stockAmount);
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
          <h1>Stock:{this.stockName}</h1>
          <h1>Amount:{this.stockAmount}</h1>
          <h1>Price at the time of sale:{this.price * this.stockAmount}</h1>
          <h1>Current price:{this.currentPrice * this.stockAmount}</h1>
        </div>
    )
  }
}

export default Portfolio;
