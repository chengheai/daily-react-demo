import React, { Component } from 'react';

export default class parent extends Component {
  componentDidMount() {
    console.log('parent');
  }
  render() {
    return <div>parent</div>;
  }
}
