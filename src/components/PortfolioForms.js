import React from 'react';
import Portfolio from "./Portfolio";

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state.name = {value:''}
  }
  handleSubmit(event) {
    let name = this.state.value;
  }
  render() {
    let portfolioVariables = {
      title: this.props.name
    };
    return(
        <Portfolio
          title = {portfolioVariables}
        />
    )
  }
}