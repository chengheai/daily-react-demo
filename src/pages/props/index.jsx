import React, { Component } from 'react';
import { Button, Row } from 'antd';
import Child from './child';
export default class Index extends Component {
  state = {
    title: 'child component',
  };
  componentDidMount() {}
  handleClick = () => {
    if (this.state.title === 'child component') {
      this.setState(
        {
          title: 'change component',
        },
        () => {
          // console.log('async:', this.state.title);
        },
      );
    } else {
      this.setState(
        {
          title: 'child component',
        },
        () => {
          // console.log('async:', this.state.title);
        },
      );
    }
    // console.log('then:', this.state.title);
  };
  handleBindClick() {
    if (this.state.title === 'child component') {
      this.setState(
        {
          title: 'change component',
        },
        () => {
          // console.log('async:', this.state.title);
        },
      );
    } else {
      this.setState(
        {
          title: 'child component',
        },
        () => {
          // console.log('async:', this.state.title);
        },
      );
    }
    // console.log('then:', this.state.title);
  }
  handleChange = () => {
    this.setState({
      title: 'child component',
    });
  };
  render() {
    const { title } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <Row>
          <Button type="primary" onClick={this.handleBindClick.bind(this)}>
            bind this改变title
          </Button>
          <Button onClick={this.handleClick}>改变title</Button>
          <Child myChange={this.handleChange} title={title} />
        </Row>
      </div>
    );
  }
}
