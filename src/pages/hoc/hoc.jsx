import React, { Component } from 'react';

export function Hoc(InputComponent) {
  return class Count extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    componentDidMount() {
      this.setState({
        count: Math.random(),
      });
    }
    render() {
      return <InputComponent count={this.state.count} />;
    }
  };
}
