import React from 'react';
import Counter from './Counter';

class CounterParent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0
    };
    /*'this' has different scopes in here and
    in the functions below. we need binding*/
    this.increase=this.increase.bind(this);
  }

  increase(e) {
    let currentCount = this.state.count;

    if (e.shiftKey){
      currentCount +=10;
    }
    else{
      currentCount+=1;
    }
    this.setState({
      count: currentCount
    });
  }

  render() {
    let backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center",
      margin:10,
      display: 'inline-block'
    };
    const buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };
    return (
        <div style={backgroundStyle}>
          <Counter display={this.state.count}/>
          <button onClick={this.increase} style={buttonStyle}>+</button>
        </div>
    );
  }
}

export default CounterParent;
