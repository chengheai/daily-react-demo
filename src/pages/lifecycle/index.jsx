import React, { Component } from 'react';

export default class Index extends Component {
  constructor(props) {
    super(props);
    // getDefaultProps：接收初始props
    // getInitialState：初始化state
  }
  state = {};
  componentWillMount() {
    console.log('componentWillMount...');
    // 组件挂载前触发
  }
  render() {
    console.log('render...');
    return <h2>Old React.Component</h2>;
  }
  componentDidMount() {
    // 组件挂载后触发
    console.log('componentDidMount...');
  }
  componentWillReceiveProps(nextProps) {
    // 接收到新的props时触发
    console.log('componentWillReceiveProps...');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 组件Props或者state改变时触发，true：更新，false：不更新
    console.log('shouldComponentUpdate...');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // 组件更新前触发
    console.log('componentWillUpdate...');
  }
  componentDidUpdate() {
    // 组件更新后触发
    console.log('componentDidUpdate...');
  }
  componentWillUnmount() {
    // 组件卸载时触发
    console.log('componentWillUnmount...');
  }
}
