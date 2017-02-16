import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {

  constructor(propos) {
    super(propos)
    this.state = {
      textValue: '',
      value: '',
    };
  }

  textEntered = (event) => {    
    this.setState({ value: event.target.value});
  }

changeText = () => {
  this.setState({ textValue: this.state.value });
}

  render() {
    return (
      <div>
        {this.state.textValue}
        <input type="text" value={this.state.value} onChange={this.textEntered} />
        <Button name={'Add 1'} clicked={this.changeText} />        
      </div>
    );
  }
}
