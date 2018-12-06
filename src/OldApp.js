import React, { Component } from 'react';
import CustomButton from './CustomButton';
import Result from './Result'; 

const e = React.createElement;

class OldApp extends Component {
  state = {
    counter: 0,
  }

  handleClick = (increment) => {
    this.setState((prevState) => ({
      counter: prevState.counter + increment
    })
    )
  }

  render() {
    const button1 = e(CustomButton, {onClickFunction: this.handleClick, incrementValue: 1}, null);
    const button2 = e(CustomButton, {onClickFunction: this.handleClick, incrementValue: 5}, null);
    const button3 = e(CustomButton, {onClickFunction: this.handleClick, incrementValue: 20}, null);
    const button4 = e(CustomButton, {onClickFunction: this.handleClick, incrementValue: 100}, null);
    const buttons = e('div', {key: 'collection'}, [button1, button2, button3, button4])

    const result = e(Result, {value: this.state.counter, key: 'second'}, null);
    return e('div', null, [buttons, result]);
  }
}

export default OldApp;
