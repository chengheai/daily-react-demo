import React, { Component } from 'react';
export default class Child extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    childText: '1212',
  };
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2 onClick={this.props.myChange}>{this.state.childText}</h2>
      </div>
    );
  }
}
