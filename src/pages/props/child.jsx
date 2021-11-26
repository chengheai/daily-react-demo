import React, { Component } from 'react';
export default class Child extends Component {
  state = {
    childText: '1212',
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    return null;
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2 onClick={this.props.myChange}>{this.state.childText}</h2>
      </>
    );
  }
}
