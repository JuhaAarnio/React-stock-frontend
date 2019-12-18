import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";

class App extends React.Component{
  render(){
    return (
        <div className="App">
          <PortfolioForm/>
          {portfolioList}
        </div>
    );
  }
}
const portfolioList = [<Portfolio name="PF 1"/>, <Portfolio name="PF 2"/>];
function createPortfolio(name) {
  console.log("Creating portfolio");
  portfolioList.push(<Portfolio name = {name} />);
}

export default App;

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'Portfolio name'}
  }
  handleChange = (event) => this.setState({value: event.target.value});
  handleSubmit = () => {createPortfolio(this.state.value)};
  componentDidMount() {
    document.addEventListener('onClick', this.handleSubmit)
  }
  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Create portfolio" onSubmit={this.handleSubmit}/>
        </form>
    );
  }
}