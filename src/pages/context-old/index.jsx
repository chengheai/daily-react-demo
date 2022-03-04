import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child from './child';
import SeChild from './seChild';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      msg: 'unchanged',
      toggle: this.toggle,
    };
  }
  toggle = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  };
  static childContextTypes = {
    theme: PropTypes.string,
    toggle: PropTypes.func,
  };
  getChildContext() {
    return {
      theme: this.state.theme,
      toggle: this.toggle,
    };
  }
  componentDidUpdate(prevProps, preState) {
    if (preState.theme !== this.state.theme) {
      this.setState({
        msg: `changed !  preState:${preState.theme}`,
      });
    }
    console.log('preState: ', preState);
    console.log('prevProps: ', prevProps);
  }
  render() {
    return (
      <div className="common-wrap">
        <h1>{this.state.msg}</h1>
        <Child />
        <SeChild />
      </div>
    );
  }
}
