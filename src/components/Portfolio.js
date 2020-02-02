import React from 'react';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.idKey = props.idKey;
    this.deleteFunc = props.deleteFunc;
    this.calc = props.calc;
    this.state = {
      stockList: [],
      symbol: 'Stock symbol',
      amount: 'Number of stocks',
      date: 'DD-MM-YYYY',
      totalValue: 0
    };
  }
  componentDidMount() {
    this.calc(this.state.totalValue);
  }
  componentWillUnmount() {
    this.calc(-this.state.totalValue);
  }

  // This function is passed down to Stocks-object. Calculates total value of a portfolio.
  calculateTotalValue = (price) => {
    let sum = price;
    console.log(sum);
    this.setState(state => {
      state.totalValue += sum;
    })
  };
  addStock = (key, symbol, amount, price, date, calc, deleteFunc) => {
    this.setState(state => {
      console.log("Adding stocks");
      let stock = <Stocks idKey={key} stockName = {symbol} stockAmount = {amount} price = {price}
                           date = {date} calc = {calc} deleteFunc = {deleteFunc}/>;
      const stockList = state.stockList.concat(stock);
      return{
         stockList
      }
    });
  };
  deleteStock = (key) => {
    this.setState(state=> {
      const stockList = state.stockList.filter(parseKeys);
      return{
        stockList
      }
    });
    function parseKeys(item) {
      return  item.props.idKey !== key;
    }
  };
  submitRequest = (symbol, amount, date) => {
    date = date.replace(/\D/g,'');
    let year = date.substring(4,8);
    let month = date.substring(2,4);
    let day = date.substring(0,2);
    let iexDate = year + month + day;
    let url = 'https://cloud.iexapis.com/stable/stock/' + symbol + '/chart/date/' + iexDate + '?token=pk_c0b9268c90df41fb8a6a629f87e42a5c';
    console.log(url);
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200){
        let data = JSON.parse(request.response);
        if(data.length === 0){
          console.log("No stock data found");
          alert("No stock data found for given date, try another date!")
        }
        else {
          let closeValue = data[0]['close'];
          let key = this.state.stockList.length;
          this.addStock(key, symbol, amount, closeValue, date, this.calculateTotalValue, this.deleteStock);
        }
      }
      else{
        console.log("Failed request");
      }
    };
    request.send();
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
// Stocks-component
class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.idKey = props.idKey;
    this.stockName = props.stockName;
    this.stockAmount = props.stockAmount;
    this.price = props.price;
    this.date = props.date;
    this.calc = props.calc;
    this.deleteFunc = props.deleteFunc;
    this.state = {
      stockName: '',
      stockAmount:'',
      price: '',
      currentPrice: '999',
      date: ''
    }
  }
  componentDidMount() {
    this.calc(this.price * this.stockAmount);
    this.updateCurrentPrice(this.stockName);
  }
  componentWillUnmount() {
    this.calc(-this.price * this.stockAmount);
  }

  updateCurrentPrice = (symbol) => {
    let url = 'https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_c0b9268c90df41fb8a6a629f87e42a5c';
    console.log(url);
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200){
        let data = JSON.parse(request.response);
        let currentPrice = data['close'];
        console.log(currentPrice);
        this.setState(state => {
          state.currentPrice = currentPrice;
        });
      }
      else{
        console.log('Request for current price failed');
        alert("Request for current price failed!")
      }
    };
    request.send()
  };
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
          <button onClick={() => this.deleteFunc(this.props.idKey)}>Delete Stock</button>
        </div>
    )
  }
}

export default Portfolio;
