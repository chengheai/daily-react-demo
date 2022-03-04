import React, { Component } from 'react';
import { Hoc } from './hoc';
@Hoc
class index extends Component {
  render() {
    return (
      <div className="common-wrap">
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}
export default index;
