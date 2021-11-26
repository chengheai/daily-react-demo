import React, { Component } from 'react';

export default class slot1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slots-left">{this.props.children[0]}</div>
        <div className="slots-mid">{this.props.children[1]}</div>
        <div className="slots-right">{this.props.children[2]}</div>
      </React.Fragment>
    );
  }
}
