import React, { Component } from 'react';
const Child = props => {
  return <h1>{props.title}</h1>;
};
export default class Index extends Component {
  render() {
    return (
      <div>
        <Child title="我是child" />
      </div>
    );
  }
}
