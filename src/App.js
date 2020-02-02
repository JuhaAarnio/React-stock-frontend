import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      portfolioList:  [],
      name: '',
      totalValue: 0
    };
  }
  // Passed down to portfolio-object. Calculates total value of all portfolios combined.
  calculateTotalValue = (price) => {
    let sum = price;
    console.log(sum);
    this.setState(state => {
      state.totalValue += sum;
    })
  };
  deletePortfolio = (key) => {
    console.log("Deleting portfolio {}", key);
    this.setState(state =>{
      const portfolioList = state.portfolioList.filter(parseKeys);
      return{
        portfolioList
      }
    });
    function parseKeys(item) {
      return item.props.idKey !== key;
    }

  };
  componentWillUnmount() {
    this.saveState();
  }
  componentDidMount() {
    this.loadState();
  }
  loadState = () => {
    JSON.parse(localStorage.getItem('Portfolios'));
  };
  saveState = () => {
    localStorage.setItem('Portfolios', JSON.stringify(this.state.portfolioList));
  };
  handleChange = (evt) => this.setState({name: evt.target.value});
  handleSubmit = () => {
    this.setState(state => {
      let key = this.state.portfolioList.length;
      const portfolioList = state.portfolioList.concat(<Portfolio name = {this.state.name} idKey = {key} deleteFunc = {this.deletePortfolio} calc = {this.calculateTotalValue}/>);
      return {
        portfolioList
      };
    });
  };
  render(){
    return (
        <div className="App">
          <label>
            Create portfolio:
            <input type="text" value={this.state.name} onChange={evt => this.handleChange(evt)}/>
          </label>
          <button onClick={this.handleSubmit}>Add portfolio</button>
          {this.state.portfolioList}
          <h1>Total Value: {this.state.totalValue}</h1>
        </div>
    );
  }
}
export default App;
