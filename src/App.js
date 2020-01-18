import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      portfolioList:  [],
      name: ''
    };
  }
  handleChange = (evt) => this.setState({name: evt.target.value});
  handleSubmit = () => {
    this.setState(state => {
      const portfolioList = state.portfolioList.concat(<Portfolio name = {this.state.name}/>);
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
        </div>
    );
  }
}
export default App;
