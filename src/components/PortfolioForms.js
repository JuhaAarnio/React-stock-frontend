import React from 'react';
import Portfolio from "./Portfolio";

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'Portfolio name'}

  }
  handleChange = (event) => this.setState({value: event.target.value});
  handleSubmit = () => this.state.value;
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

export default PortfolioForm;