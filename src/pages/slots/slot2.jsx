import React, { Component } from 'react';

export default class slot2 extends Component {
  render() {
    const { left, mid, right } = this.props;
    return (
      <>
        <div className="slots-left">{left}</div>
        <div className="slots-mid">{mid}</div>
        <div className="slots-right">{right}</div>
      </>
    );
  }
}
