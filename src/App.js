import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {portfolioList:  []};
  }
  handleChange = (event) => this.setState({value: event.target.value});
  handleSubmit = () => {
    this.setState(state => {
      const portfolioList = state.portfolioList.concat(<Portfolio name = {"Test"}/>);
      console.log("Creating portfolio");
      console.log(this.state.portfolioList.length);
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
            <input type="text" value="portfolio name" onChange={this.handleChange}/>
          </label>
          <button onClick={this.handleSubmit}>Add portfolio</button>
          {this.state.portfolioList}
        </div>
    );
  }
}
export default App;
