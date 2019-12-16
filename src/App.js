import React from 'react';
import Portfolio from "./components/Portfolio";
import PortfolioForm from "./components/PortfolioForms"
import './App.css';

class App extends React.Component{
  render(){
    return (
        <div className="App">
          <PortfolioForm/>
        </div>
    );
  }
}

export default App;
