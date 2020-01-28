import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      portfolioList:  [],
      name: '',
      totalValue: ''
    };
  }
  deletePortfolio = (key) => {
    console.log("Deleting portfolio {}", key);
    for(let i = 0; i < this.state.portfolioList.length; i++){
      if(this.state.portfolioList[i].props.idKey === key){
        this.setState(state => {
          const portfolioList = state.portfolioList.splice(i, 1);
          return{
            portfolioList
          }
        });
      }
    }
  };
  handleChange = (evt) => this.setState({name: evt.target.value});
  handleSubmit = () => {
    this.setState(state => {
      let key = this.state.portfolioList.length;
      const portfolioList = state.portfolioList.concat(<Portfolio name = {this.state.name} idKey = {key} deleteFunc = {this.deletePortfolio}/>);
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
          <h1>Total Value: {this.totalValue}</h1>
        </div>
    );
  }
}
export default App;
