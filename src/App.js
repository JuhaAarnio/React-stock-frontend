import React from 'react';
import PortfolioForm from "./components/PortfolioForms"
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
function createPortfolio() {
  portfolioList.push(<Portfolio name = "test" />)
}
export default App;
